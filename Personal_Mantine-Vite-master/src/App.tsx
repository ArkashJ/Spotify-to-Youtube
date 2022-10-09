import { MantineProvider, Text, Button, Stack,Paper, Loader } from "@mantine/core";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import { theme } from "./theme";
import {useState} from "react"

export default function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    
    <MantineProvider theme={{
      fontFamily: "Open Sans",
      colorScheme: "light",
      primaryColor: "grape"
    }} 
      withGlobalStyles 
      withNormalizeCSS>
    
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Application navbar</Text>
        </Navbar>
      }

      // footer={
      //   <Footer height={60} p="md">
      //     Application footer
      //   </Footer>
      // }

      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
    </MantineProvider>
  );
  
}
