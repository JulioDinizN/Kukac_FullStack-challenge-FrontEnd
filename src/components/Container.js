import { Flex } from '@chakra-ui/react';
import { Tabs } from './Tabs';

export function Container() {
  return (
    <Flex height="100%" align="center" justify="center" w="100%">
      <Tabs />
    </Flex>
  );
}
