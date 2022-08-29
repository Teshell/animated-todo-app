import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import TaskList from "./components/task-list";

import ToggleTheme from "./components/toggle-theme";

function App() {
  return (
    <Flex
      align={"center"}
      justify="center"
      direction={"column"}
      bg={useColorModeValue("whiteAlpha.200", "dark.primary")}
      height={"100%"}
      p={3}
    >
      <ToggleTheme />
      <Container maxW="600" p={2}>
        <TaskList />
      </Container>
    </Flex>
  );
}

export default App;
