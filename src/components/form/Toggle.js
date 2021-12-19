import { forwardRef } from 'react';
import { Box, useRadioGroup, HStack } from '@chakra-ui/react';
import { useController } from 'react-hook-form';
import { CustomRadio } from './CustomRadio';

export const Toggle = forwardRef(
  ({ control, name, defaultValue, ...props }, ref) => {
    const { field } = useController({
      name,
      control,
      rules: { required: 'É preciso escolher um veículo' },
      defaultValue,
    });

    const { getRootProps, getRadioProps } = useRadioGroup({
      ...field,
    });

    return (
      <Box {...getRootProps()}>
        <HStack>
          <CustomRadio {...getRadioProps({ value: 'car' })}>Carro</CustomRadio>
          <CustomRadio {...getRadioProps({ value: 'motocycle' })}>
            Motocicleta
          </CustomRadio>
        </HStack>
      </Box>
    );
  }
);
