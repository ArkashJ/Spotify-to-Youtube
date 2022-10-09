import { MantineProvider, Text, Button, Stack,Paper } from "@mantine/core";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={{
      fontFamily: "Open Sans",
      colorScheme: "dark"
    }} 
      withGlobalStyles 
      withNormalizeCSS>
      <Paper>
        <Text>This is simple text</Text>
        <Text>This is a complex text tag</Text>
      </Paper>
    <Button>Spotify to Youtube Playlist transfer</Button>
    <Button>Login to your spotify account and get a youtube playlist</Button>
    </MantineProvider>
  );
}
