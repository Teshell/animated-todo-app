import { motion, AnimatePresence } from "framer-motion";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

function ToggleTheme() {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          onClick={toggleColorMode}
          colorScheme={useColorModeValue("purple", "orange")}
          aria-label="Toggle Theme"
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default ToggleTheme;
