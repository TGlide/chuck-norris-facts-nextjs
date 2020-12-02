import { MoonIcon } from "@chakra-ui/icons";
import { Flex, IconButton, useColorMode } from "@chakra-ui/react";

const DarkModeSwitch = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex position="fixed" top="1rem" right="1rem" alignItems="center">
      <IconButton
        aria-label="Toggle dark mode"
        onClick={toggleColorMode}
        icon={<MoonIcon />}
        colorScheme="orange"
      />
    </Flex>
  );
};

export default DarkModeSwitch;
