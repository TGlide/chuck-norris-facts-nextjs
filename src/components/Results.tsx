import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { SearchResult } from "../api/Search";
import theme from "../theme";

type ResultsProps = {
  results: SearchResult[];
};

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <Box w="100%" mt={4}>
      <Text fontWeight={600} textAlign="left">
        {results.length} Results
      </Text>

      <VStack spacing={4} maxH="50vh" overflowY="scroll" mt={4}>
        {results.map((result) => {
          return (
            <Box
              boxShadow="2xl"
              bgColor={theme.colors.green[400]}
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
    </Box>
  );
};

export default Results;
