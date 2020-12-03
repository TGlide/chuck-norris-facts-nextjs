import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, IconButton, useColorMode } from "@chakra-ui/react";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  return (
    <Flex position="fixed" top="1rem" right="1rem" alignItems="center">
      <IconButton
        aria-label="Toggle dark mode"
        onClick={toggleColorMode}
        icon={
          isDark ? (
            <SunIcon w={5} h={5} data-testid="sun" />
          ) : (
            <MoonIcon data-testid="moon" />
          )
        }
        colorScheme="orange"
      />
    </Flex>
  );
};

export default DarkModeSwitch;
