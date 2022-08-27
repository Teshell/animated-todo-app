import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import Fonts from "./components/Fonts";

import theme from "./theme";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />

    <ChakraProvider theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </>
);
