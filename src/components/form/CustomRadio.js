import { forwardRef } from "react";
import {
  Button,
  Box,
  useRadio,
} from "@chakra-ui/react";

export const CustomRadio = forwardRef(({ children, ...props }, ref) => {
  const { state, getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps({ ref });
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Button
        as="div"
        {...checkbox}
        cursor="pointer"
        colorScheme={state.isChecked ? "teal" : "gray"}
      >
        {children}
      </Button>
    </Box>
  );
});