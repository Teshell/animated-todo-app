import { Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  strikeThrough: boolean;
  children: string;
  onClick: () => void;
}

const textBounceAnimation = {
  open: { x: [0, 10, 0], opacity: 0.3 },
  close: { opacity: 1 },
};

const strikeThroughAnimation = {
  openStrikeThrough: { width: "100%", opacity: 0.6 },
  closeStrikeThrough: { width: 0 },
};

const AnimatedTaskLabel = ({ strikeThrough, children, onClick }: Props) => {
  return (
    <motion.div
      style={{ position: "relative" }}
      animate={strikeThrough ? "open" : "close"}
      transition={{ type: "spring", stiffness: 100, duration: 0.4 }}
      variants={textBounceAnimation}
      onClick={onClick}
    >
      <Text
        cursor={"pointer"}
        title={"Edit this task"}
        noOfLines={1}
        color={useColorModeValue("gray.700", "whiteAlpha.800")}
        fontWeight={"bold"}
        letterSpacing={"wide"}
        fontSize={"xl"}
      >
        {children}
      </Text>

      <motion.div
        style={{
          backgroundColor: "black",
          position: "absolute",
          top: 16,
          height: 2,
        }}
        initial={{ width: 0 }}
        animate={strikeThrough ? "openStrikeThrough" : "closeStrikeThrough"}
        variants={strikeThroughAnimation}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

export default AnimatedTaskLabel;
