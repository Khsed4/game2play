import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App.tsx";
import "./index.css";
import myTheme from "./theme.ts";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={myTheme}>
      <ColorModeScript initialColorMode={myTheme.config.initialColorMode} />
      <App />
    </ChakraProvider>
    <Analytics />
  </React.StrictMode>
);
