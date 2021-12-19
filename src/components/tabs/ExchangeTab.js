import { Flex, Button, VStack, useToast, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useForm } from 'react-hook-form';
import { Input } from '../form/Input';
import { formatToHaveCurrency } from '../../utils';

export function ExchangeTab() {
  const [exchange, setExchange] = useState({});
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    const { price, payment } = data;

    const response = await api.get('/api/exchange', {
      params: { price, payment },
    });

    const exchangeResponse = response.data;

    const formmatedResponse = {
      ...exchangeResponse,
      price: formatToHaveCurrency(exchangeResponse.price),
      payment: formatToHaveCurrency(exchangeResponse.payment),
      change: formatToHaveCurrency(exchangeResponse.change),
    };

    setExchange(formmatedResponse);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      toast({
        title: 'Chamada bem sucedida',
        status: 'success',
        isClosable: true,
        position: 'top-right',
      });

      reset();
    }
  }, [isSubmitSuccessful, reset, toast]);

  return (
    <Flex direction="column">
      <Flex
        as="form"
        bg="gray.800"
        p="8"
        direction="column"
        borderRadius={8}
        onSubmit={handleSubmit(onSubmit)}
      >
        <VStack spacing="5">
          <Input
            id="price"
            type="number"
            placeholder="Preço do Produto"
            error={errors.price}
            {...register('price', {
              required: 'Precisa ser preenchido',
              min: { value: 0, message: 'O preço não pode ser negativo' },
              validate: {
                gratherThan: (value) =>
                  Number(value) < Number(getValues('payment')) ||
                  'O preço do produto não pode ser maior que o pagamento',
              },
            })}
          />

          <Input
            id="payment"
            type="number"
            placeholder="Valor do Pagemento"
            error={errors.payment}
            {...register('payment', {
              required: 'Precisa ser preenchido',
              min: { value: 0, message: 'O pagamento não pode ser negativo' },
            })}
          />
        </VStack>

        <Button
          mt={6}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </Flex>
      <Flex
        bg="gray.800"
        mt={8}
        p="8"
        borderRadius={8}
        justify="center"
        align="center"
      >
        {exchange.bills && (
          <Box>
            <p>Notas de cem: {exchange?.bills?.hundred}</p>
            <p>Notas de dez: {exchange?.bills?.ten}</p>
            <p>Notas de um: {exchange?.bills?.one}</p>
            <p>Preço: {exchange?.price}</p>
            <p>Pagamento: {exchange?.payment}</p>
            <p>Troco: {exchange?.change}</p>
          </Box>
        )}
      </Flex>
    </Flex>
  );
}
