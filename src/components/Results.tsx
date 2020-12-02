import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState, useMemo } from "react";
import { SearchResult } from "../api/Search";
import theme from "../theme";

type ResultsProps = {
  results: SearchResult[];
  pageSize?: number;
};

const Results: React.FC<ResultsProps> = ({ results, pageSize = 5 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const numberOfPages = useMemo(() => Math.ceil(results.length / pageSize), [
    results,
    pageSize,
  ]);
  const currentPage = useMemo(() => 1 + currentIndex / pageSize, [
    currentIndex,
    pageSize,
  ]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [results, pageSize]);

  return (
    <Box w="100%" pos="relative" mt={4}>
      <Text fontWeight={600} textAlign="left">
        {!!results.length && `${results.length} Results`}
      </Text>

      {!!results.length && (
        <Box>
          <VStack spacing={4} py={4} mt={4}>
            {results
              .slice(currentIndex, currentIndex + pageSize)
              .map((result) => {
                return (
                  <Box
                    boxShadow="base"
                    bgColor={theme.colors.blue[isDark ? 300 : 100]}
                    borderRadius={8}
                    w="100%"
                    p={6}
                    key={result.id}
                  >
                    {result.value}
                  </Box>
                );
              })}
          </VStack>
          <Flex justifyContent="flex-end">
            <HStack spacing={4}>
              <IconButton
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(currentIndex - pageSize)}
                aria-label="Previous Page"
                icon={<ArrowLeftIcon />}
              />
              <Text>
                {currentPage}/{numberOfPages}
              </Text>
              <IconButton
                disabled={currentIndex + pageSize >= results.length}
                onClick={() => setCurrentIndex(currentIndex + pageSize)}
                aria-label="Next Page"
                icon={<ArrowRightIcon />}
              />
            </HStack>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Results;
