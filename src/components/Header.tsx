import { Flex, FlexProps, Image, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import theme from "../theme";

const Header = (props: FlexProps) => {
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";

  return (
    <Flex justifyContent="center" alignItems="center" {...props}>
      <Image
        src="chuck.png"
        boxSize={{ base: "4rem", sm: "5rem" }}
        alt="Too much to handle"
      />
      <Text
        color={isDark ? theme.colors.white : theme.colors.gray[700]}
        fontFamily={theme.fonts.header}
        fontWeight={600}
        fontSize={{ base: "1.35rem", sm: "2rem" }}
        ml={4}
      >
        Chuck Norris Facts
      </Text>
    </Flex>
  );
};

export default Header;
