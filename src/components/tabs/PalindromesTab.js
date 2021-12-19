import {
  Flex,
  Button,
  VStack,
  List as ChakraList,
  ListItem,
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { api } from '../../services/api';
import { useForm } from 'react-hook-form';
import { List } from 'react-virtualized';
import { Input } from '../form/Input';

export function PalindromesTab() {
  const [palindromes, setPalindromes] = useState([]);
  const toast = useToast()

  function callForToast() {
    toast({
        title: "Chamada bem sucedida",
        status: 'success',
        isClosable: true,
        position: 'top-right'
    })
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    const { lowEnd, highEnd } = data;

    const response = await api.get('/api/palindromo', {
      params: { number1: lowEnd, number2: highEnd },
    });

    const palindromesArray = response.data;

    setPalindromes(palindromesArray);

    if(isSubmitSuccessful) {
        callForToast()
        reset()
    }
  };

  const rowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ChakraList>
          <ListItem>{palindromes[index]}</ListItem>
        </ChakraList>
      </div>
    );
  };

  return (
    <Flex bg="gray.800" direction="column">
      <Flex
        as="form"
        p="8"
        direction="column"
        borderRadius={8}
        onSubmit={handleSubmit(onSubmit)}
      >
        <VStack spacing="5">
          <Input
            id="lowEnd"
            type="number"
            placeholder="Primeiro Número"
            error={errors.lowEnd}
            {...register('lowEnd', {
              required: 'Precisa ser preenchido',
            })}
          />

          <Input
            id="highEnd"
            type="number"
            placeholder="Segundo Número"
            error={errors.highEnd}
            {...register('highEnd', {
              required: 'Precisa ser preenchido',
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
        px={66}
        mb={33}
        height="100%"
        width="100%"
        justify="center"
        align="center"
      >
        <List
          rowHeight={23}
          height={300}
          width={800}
          rowCount={palindromes.length}
          rowRenderer={rowRenderer}
        />
      </Flex>
    </Flex>
  );
}
