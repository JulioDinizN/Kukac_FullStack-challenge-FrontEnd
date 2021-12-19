import { forwardRef } from 'react';

import { FormControl, FormLabel, Input as ChakraInput, FormErrorMessage } from '@chakra-ui/react';


const InputBase= ({ name, type, label, error = null, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

        <ChakraInput
          name={name}
          id={name}
          type={type}
          _hover={{
            bgColor: 'gray.900',
          }}
          size="lg"
          ref={ref}
          {...rest}
        />
        {!!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}
      </FormControl>
    );
};

export const Input = forwardRef(InputBase);