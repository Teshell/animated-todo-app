import { Checkbox, Text, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const completedAnimation = {
  open: { x: [0, 10, 0], opacity: 0.3 },
  closed: { opacity: 1 },
};

const strikeThroughAnimation = {
  openStrikeThrough: { width: "100%" },
  closeStrikeThrough: { width: 0 },
};

const AnimatedTaskLabel = () => {
  const [checked, setChecked] = useState(false);

  return (
    <AnimatePresence mode="wait" initial={false}>
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
        transition={{ type: "spring", stiffness: 100, duration: 0.4 }}
        variants={completedAnimation}
      >
        <Text
          noOfLines={1}
          color={useColorModeValue("gray.700", "whiteAlpha.800")}
          fontWeight={"bold"}
          letterSpacing={"widest"}
          fontSize={"xl"}
        >
          Task Item
        </Text>

        <motion.div
          style={{
            backgroundColor: "black",
            position: "absolute",
            top: 16,
            height: 2,
          }}
          initial={{ width: 0 }}
          animate={checked ? "openStrikeThrough" : "closeStrikeThrough"}
          variants={strikeThroughAnimation}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedTaskLabel;
