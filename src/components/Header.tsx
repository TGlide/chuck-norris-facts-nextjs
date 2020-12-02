import {
  Flex,
  FlexProps,
  Image,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import theme from "../theme";

const Header = (props: FlexProps) => {
  const { colorMode } = useColorMode();
  const [isSmallerThan440px] = useMediaQuery("(max-width: 440px)");

  const isDark = colorMode === "dark";

  return (
    <Flex justifyContent="center" alignItems="center" {...props}>
      <Image src="chuck.png" boxSize={isSmallerThan440px ? "4rem" : "5rem"} />
      <Text
        color={isDark ? theme.colors.white : theme.colors.gray[700]}
        fontFamily={theme.fonts.header}
        fontWeight={600}
        fontSize={isSmallerThan440px ? "1.35rem" : "2rem"}
        ml={4}
      >
        Chuck Norris Facts
      </Text>
    </Flex>
  );
};

export default Header;
