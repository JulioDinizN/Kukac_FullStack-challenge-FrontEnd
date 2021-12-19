import { Tabs as ChakraTabs, TabList, TabPanels, Tab, TabPanel, Flex } from '@chakra-ui/react';

import { PalindromesTab } from './tabs/PalindromesTab';
import { ExchangeTab } from './tabs/ExchangeTab';
import { VehicleStorageTab } from './tabs/VehicleStorageTab';
import { CepVerificationTab } from './tabs/CepVerificationTab';

export function Tabs() {
  return (
    <Flex width="60%" height="60%" my={15}>
        <ChakraTabs width="100%" >
      <TabList>
        <Tab>Palíndromos</Tab>
        <Tab>Caixa: Troco</Tab>
        <Tab>Cadastro de veiculo</Tab>
        <Tab>Verificação de Cep</Tab>
      </TabList>

      <TabPanels>
          <TabPanel>
            <PalindromesTab />
          </TabPanel>

          <TabPanel>
            <ExchangeTab />
          </TabPanel>

          <TabPanel>
            <VehicleStorageTab />
          </TabPanel>

          <TabPanel>
            <CepVerificationTab />
          </TabPanel>
      </TabPanels>
    </ChakraTabs>
    </Flex>
  );
}
