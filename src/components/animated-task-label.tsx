import { Checkbox, Text, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const completedAnimation = {
  open: { x: [0, 10, 0], opacity: 0.3 },
  closed: { opacity: 1 },
};

const AnimatedTaskLabel = () => {
  const [checked, setChecked] = useState(false);

  return (
    <AnimatePresence>
      <Checkbox
        checked={checked}
        onChange={() => setChecked((checked) => !checked)}
        size="lg"
        colorScheme="orange"
      />
      <motion.div
        style={{ position: "relative" }}
        initial={{ opacity: 1 }}
        animate={checked ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
        variants={completedAnimation}
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
            backgroundColor: "gray.700",
            position: "absolute",
            top: 16,
          }}
          initial={{ width: 0, height: 2 }}
          animate={{ width: "100%", height: 2 }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedTaskLabel;
