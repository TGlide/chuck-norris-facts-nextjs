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
  const [isLargerThan440px] = useMediaQuery("(min-width: 440px)");

  const isDark = colorMode === "dark";

  return (
    <Flex justifyContent="center" alignItems="center" {...props}>
      <Image src="chuck.png" boxSize={isLargerThan440px ? "5rem" : "4rem"} />
      <Text
        color={isDark ? theme.colors.white : theme.colors.gray[700]}
        fontFamily={theme.fonts.header}
        fontWeight={600}
        fontSize={isLargerThan440px ? "2rem" : "1.35rem"}
        ml={4}
      >
        Chuck Norris Facts
      </Text>
    </Flex>
  );
};

export default Header;
