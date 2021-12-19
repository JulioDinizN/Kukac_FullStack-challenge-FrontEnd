import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme';
import { Container } from './components/Container'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container />
    </ChakraProvider>
  );
}

export default App;
