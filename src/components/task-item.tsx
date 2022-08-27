import { Stack, Checkbox, Text, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const TaskItem = () => {
  return (
    <AnimatePresence>
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
          bg={useColorModeValue("gray.100", "dark.secondary")}
          borderRadius={"3xl"}
        >
          <Checkbox size="lg" colorScheme={"purple"} />

          <Text
            color={useColorModeValue("gray.700", "whiteAlpha.800")}
            fontWeight={"bold"}
            letterSpacing={"widest"}
            fontSize={"xl"}
          >
            Go to a Cafe
          </Text>
        </Stack>
      </motion.div>
    </AnimatePresence>
  );
};

export default TaskItem;
