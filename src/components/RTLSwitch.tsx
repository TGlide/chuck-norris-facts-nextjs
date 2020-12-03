import { Button, Flex, Text } from "@chakra-ui/react";
import { useStoreActions, useStoreState } from "../store";

const RTLSwitch = () => {
  const isRtl = useStoreState((state) => state.rtl.enabled);
  const toggleRtl = useStoreActions((actions) => actions.rtl.toggle);

  return (
    <Flex position="fixed" top="1rem" right="4rem" alignItems="center">
      <Button
        aria-label="Toggle right to left style"
        colorScheme="orange"
        px={3}
        onClick={() => toggleRtl()}
      >
        <Text fontWeight={400} textTransform="uppercase" data-testid="rtl-dir">
          {isRtl ? "ltr" : "rtl"}
        </Text>
      </Button>
    </Flex>
  );
};

export default RTLSwitch;
