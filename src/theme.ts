import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const colors = {
  dark: {
    primary: "#161b22",
    secondary: "#2c2c2c",
  },
};

const fonts = {
  body: `'M Plus Rounded 1c', sans-serif`,
};

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

// 3. extend the theme
const theme = extendTheme({ config, colors, fonts });

export default theme;
