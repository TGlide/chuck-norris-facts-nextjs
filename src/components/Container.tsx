import {
  Box,
  Container as ChakraContainer,
  FlexProps,
  useColorMode,
} from "@chakra-ui/react";

const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  return (
    <Box bg={bgColor[colorMode]} color={color[colorMode]}>
      <ChakraContainer
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        {...props}
      />
    </Box>
  );
};
export default Container;
