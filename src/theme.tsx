import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace`, header: "Poppins, sans-serif" };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const config = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
  config,
});

export default theme;
