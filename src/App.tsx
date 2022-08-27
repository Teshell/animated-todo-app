import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import TaskItem from "./components/task-item";

import ToggleTheme from "./components/toggle-theme";

function App() {
  return (
    <Flex
      align={"center"}
      justify="center"
      direction={"column"}
      bg={useColorModeValue("whiteAlpha.200", "dark.primary")}
      height={"100vh"}
    >
      <ToggleTheme />
      <Container maxW="600" p={2}>
        <TaskItem />
      </Container>
    </Flex>
  );
}

export default App;
