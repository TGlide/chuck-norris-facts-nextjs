import { Flex, FlexProps, Image, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useStoreState } from "../store";
import theme from "../theme";

const Header = (props: FlexProps) => {
  const isRtl = useStoreState((state) => state.rtl.enabled);
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";

  return (
    <Flex
      flexDirection={isRtl ? "row-reverse" : "row"}
      justifyContent="center"
      alignItems="center"
      {...props}
    >
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
        ml={isRtl ? 0 : 4}
        mr={isRtl ? 4 : 0}
      >
        Chuck Norris Facts
      </Text>
    </Flex>
  );
};

export default Header;
