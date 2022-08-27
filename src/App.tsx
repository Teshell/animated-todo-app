import { Box, Flex } from "@chakra-ui/react";

import ToggleTheme from "./components/toggle-theme";

function App() {
  return (
    <Flex align={"center"} justify="center" height={"100vh"}>
      <Box p={4}>Hello world!</Box>

      <ToggleTheme />
    </Flex>
  );
}

export default App;
