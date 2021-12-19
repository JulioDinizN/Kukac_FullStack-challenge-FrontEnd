import {
  Flex,
  Button,
  VStack,
  useToast,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Skeleton,
  Stack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useForm } from 'react-hook-form';
import { Input } from '../form/Input';

export function CepVerificationTab() {
  const [cepsValidation, setCepsValidation] = useState([]);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    setCepsValidation([]);

    let cepsToVerify = [];
    for (let item in data) {
      cepsToVerify.push(data[item]);
    }

    const response = await api.get('/api/checkCeps', {
      params: { ceps: cepsToVerify },
    });

    const cepsVerified = response.data;

    setCepsValidation(cepsVerified);

    console.log(cepsValidation);
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
    <Box>
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
            id="cepOne"
            type="number"
            placeholder="Cep 1"
            error={errors.cepOne}
            {...register('cepOne', {
              required: 'Precisa ser preenchido',
              minLength: { value: 8, message: 'Digite um Cep válido' },
              maxLength: { value: 8, message: 'Digite um Cep válido' },
            })}
          />
          <Input
            id="cepTwo"
            type="number"
            placeholder="Cep 2"
            error={errors.cepTwo}
            {...register('cepTwo', {
              required: 'Precisa ser preenchido',
              minLength: { value: 8, message: 'Digite um Cep válido' },
              maxLength: { value: 8, message: 'Digite um Cep válido' },
            })}
          />
          <Input
            id="cepThree"
            type="number"
            placeholder="Cep 3"
            error={errors.cepThree}
            {...register('cepThree', {
              required: 'Precisa ser preenchido',
              minLength: { value: 8, message: 'Digite um Cep válido' },
              maxLength: { value: 8, message: 'Digite um Cep válido' },
            })}
          />
          <Input
            id="cepFour"
            type="number"
            placeholder="Cep 4"
            error={errors.cepFour}
            {...register('cepFour', {
              required: 'Precisa ser preenchido',
              minLength: { value: 8, message: 'Digite um Cep válido' },
              maxLength: { value: 8, message: 'Digite um Cep válido' },
            })}
          />
          <Input
            id="cepFive"
            type="number"
            placeholder="Cep 5"
            error={errors.cepFive}
            {...register('cepFive', {
              required: 'Precisa ser preenchido',
              minLength: { value: 8, message: 'Digite um Cep válido' },
              maxLength: { value: 8, message: 'Digite um Cep válido' },
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
      <Box bg="gray.800" mt={8} p="8" borderRadius={8}>
        {isSubmitting && (
          <Stack>
            <Skeleton height="30px" bgColor="gray.500" />
            <Skeleton height="30px" />
            <Skeleton height="30px" />
            <Skeleton height="30px" />
            <Skeleton height="30px" />
          </Stack>
        )}
        <Accordion allowMultiple>
          {cepsValidation.length > 0 &&
            cepsValidation.map((cep, index) => {
              if (cep.erro) {
                return (
                  <AccordionItem key={index}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          {`Cep ${index + 1}`}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>Cep inválido</AccordionPanel>
                  </AccordionItem>
                );
              } else {
                return (
                  <AccordionItem key={index}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          {`Cep ${index + 1}`}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p>
                        <strong>Cep:</strong> {cep.cep}
                      </p>
                      <p>
                        <strong>Logradouro:</strong> {cep.logradouro}
                      </p>
                      <p>
                        <strong>Complemento:</strong>{' '}
                        {cep.complemento || 'Não há dados'}
                      </p>
                      <p>
                        <strong>Bairro:</strong> {cep.bairro}
                      </p>
                      <p>
                        <strong>Localidade:</strong> {cep.localidade}
                      </p>
                      <p>
                        <strong>Uf:</strong> {cep.uf}
                      </p>
                      <p>
                        <strong>Ibge:</strong> {cep.ibge}
                      </p>
                      <p>
                        <strong>Gia:</strong> {cep.gia || 'Não há dados'}
                      </p>
                      <p>
                        <strong>DDD:</strong> {cep.ddd}
                      </p>
                      <p>
                        <strong>Siafi:</strong> {cep.siafi}
                      </p>
                    </AccordionPanel>
                  </AccordionItem>
                );
              }
            })}
        </Accordion>
      </Box>
    </Box>
  );
}

// {
/* <AccordionItem>
<h2>
  <AccordionButton>
    <Box flex="1" textAlign="left">
      Section 2 title
    </Box>
    <AccordionIcon />
  </AccordionButton>
</h2>
<AccordionPanel pb={4}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</AccordionPanel>
</AccordionItem> */
// }

// {cepsValidation.length > 0 &&
//     cepsValidation.map((cep) => {
//       if (cep.erro) {
//         return <p>cep invalido</p>;
//       } else {
//         return (
//           <Box>
//             <p>{cep.cep}</p>
//             <p>{cep.logradouro}</p>
//             <p>{cep.complemento}</p>
//             <p>{cep.bairro}</p>
//             <p>{cep.localidade}</p>
//             <p>{cep.uf}</p>
//             <p>{cep.ibge}</p>
//             <p>{cep.gia}</p>
//             <p>{cep.ddd}</p>
//             <p>{cep.siafi}</p>
//           </Box>
//         );
//       }
//     })}
