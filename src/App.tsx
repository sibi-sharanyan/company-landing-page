import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from "@chakra-ui/react";
import Header from "./components/Header";
import MidSection from "./components/MidSection";
import Wave from "./assets/design.png";

import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      backgroundSize={"cover"}
      backgroundImage={`url(${Wave})`}
      backgroundRepeat={"no-repeat"}
      zIndex={"base"}
    >
      <Box bgGradient="linear(to-r, #050711, #29042E)">
        <Header />
        <MidSection />
      </Box>
    </Box>
  </ChakraProvider>
);
