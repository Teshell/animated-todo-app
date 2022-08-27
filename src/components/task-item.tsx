import { Stack, Checkbox, Text, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import styled from "@emotion/styled";

const variants = {
  open: { opacity: 0.3, x: 10 },
  closed: { opacity: 1, x: 0 },
};

const TaskItem = () => {
  const [checked, setChecked] = useState(false);

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
          bg={useColorModeValue("#F1F1F1", "dark.secondary")}
          borderRadius={"3xl"}
        >
          <Checkbox
            checked={checked}
            onChange={() => setChecked((checked) => !checked)}
            size="lg"
            colorScheme="orange"
          />

          <motion.div
            style={{ position: "relative" }}
            initial={{ x: 0 }}
            animate={checked ? "open" : "closed"}
            exit={"closed"}
            transition={{ type: "spring", stiffness: 100 }}
            variants={variants}
          >
            <Text
              color={useColorModeValue("gray.700", "whiteAlpha.800")}
              fontWeight={"bold"}
              letterSpacing={"widest"}
              fontSize={"xl"}
            >
              Go to a Cafe
            </Text>
            <motion.div
              style={{
                position: "absolute",
                top: 16,
              }}
              initial={{ width: 0, height: 2 }}
              animate={{ width: "100%", height: 2 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </motion.div>
        </Stack>
      </motion.div>
    </AnimatePresence>
  );
};

export default TaskItem;
