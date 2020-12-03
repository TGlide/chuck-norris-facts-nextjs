import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Fade,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
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

      <Collapse in={!!results.length}>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flex-end"
          minH={"60vh"}
        >
          {!!results.length && (
            <>
              <Fade in={true} key={currentIndex}>
                <VStack
                  spacing={4}
                  w={"100%"}
                  py={4}
                  mt={4}
                  data-testid="results-stack"
                >
                  {results
                    .slice(currentIndex, currentIndex + pageSize)
                    .map((result) => {
                      return (
                        <Box
                          bgColor={theme.colors.orange[isDark ? 300 : 100]}
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
              </Fade>

              <HStack spacing={4} p={1}>
                <IconButton
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(0)}
                  aria-label="First Page"
                  icon={<ArrowLeftIcon />}
                  data-testid="first-btn"
                />
                <IconButton
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(currentIndex - pageSize)}
                  aria-label="Previous Page"
                  icon={<ChevronLeftIcon w={8} h={8} />}
                  data-testid="previous-btn"
                />
                <Text data-testid="page-indicator">
                  {currentPage}/{numberOfPages}
                </Text>
                <IconButton
                  disabled={currentIndex + pageSize >= results.length}
                  onClick={() => setCurrentIndex(currentIndex + pageSize)}
                  aria-label="Next Page"
                  icon={<ChevronRightIcon w={8} h={8} />}
                  data-testid="next-btn"
                />
                <IconButton
                  disabled={currentIndex + pageSize >= results.length}
                  onClick={() =>
                    setCurrentIndex((numberOfPages - 1) * pageSize)
                  }
                  aria-label="Last Page"
                  icon={<ArrowRightIcon />}
                  data-testid="last-btn"
                />
              </HStack>
            </>
          )}
        </Flex>
      </Collapse>
    </Box>
  );
};

export default Results;
