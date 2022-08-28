import { Stack, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedTaskLabel from "./animated-task-label";

const TaskItem = () => {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Stack
          spacing={2}
          direction="row"
          px={4}
          py={3}
          w="full"
          align={"center"}
          bg={useColorModeValue("#F1F1F1", "dark.secondary")}
          borderRadius={"3xl"}
        >
          <AnimatedTaskLabel />
        </Stack>
      </motion.div>
    </AnimatePresence>
  );
};

export default TaskItem;
