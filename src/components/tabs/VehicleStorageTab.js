import {
  Flex,
  Button,
  VStack,
  FormErrorMessage,
  FormLabel,
  FormControl,
  useToast,
} from '@chakra-ui/react';
import { api } from '../../services/api';
import { useForm } from 'react-hook-form';
import { Input } from '../form/Input';
import { Toggle } from '../form/Toggle';
import { useEffect, useState } from 'react';

export function VehicleStorageTab() {
  const toast = useToast();
  const [apiAnswer, setApiAnswer] = useState('');

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      toggle: '',
      doors: '0'
    },
  });

  const disabledDoorsWhenMotocycle = watch('toggle')

  const onSubmit = async (data) => {
    const { toggle, model, fabricationDate, doors, brand } = data;

    const response = await api.post('/api/storeVehicle', {
      vehicle: {
        type: toggle,
        model: model,
        fabricationDate: fabricationDate,
        doors: doors,
        brand: brand,
      },
    });

    setApiAnswer(response.data);
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

    if (apiAnswer === 'error') {
      toast({
        title: 'Houve um problema no seu cadastro',
        status: 'error',
        isClosable: true,
        position: 'top-right',
      });
    }
  }, [isSubmitSuccessful, reset, toast, apiAnswer]);

  return (
    <Flex
      as="form"
      bg="gray.800"
      p="8"
      direction="column"
      borderRadius={8}
      onSubmit={handleSubmit(onSubmit)}
    >
      <VStack spacing="5">
        <FormControl isInvalid={errors.toggle}>
          <FormLabel htmlFor="toggle">Veículo</FormLabel>
          <Toggle name="toggle" control={control} />
          <FormErrorMessage>
            {errors.toggle && errors.toggle.message}
          </FormErrorMessage>
        </FormControl>

        <Input
          id="model"
          type="text"
          placeholder="Modelo do veiculo"
          error={errors.model}
          {...register('model', {
            required: 'Precisa ser preenchido',
          })}
        />
        <Input
          id="fabricationDate"
          type="text"
          placeholder="Data de Fabricação"
          error={errors.fabricationDate}
          {...register('fabricationDate', {
            required: 'Precisa ser preenchido',
          })}
        />
        <Input
          id="doors"
          type="number"
          disabled={disabledDoorsWhenMotocycle === 'motocycle'}
          placeholder="Quantidade de Portas"
          error={errors.doors}
          {...register('doors', {
            required: 'Precisa ser preenchido',
          })}
        />
        <Input
          id="brand"
          type="text"
          placeholder="Marca do veículo"
          error={errors.brand}
          {...register('brand', {
            required: 'Precisa ser preenchido',
          })}
        />
      </VStack>

      <Button mt={6} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </Flex>
  );
}
