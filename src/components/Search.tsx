import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Search, SearchResult } from "../api/Search";
import theme from "../theme";

interface SearchBarProps {
  setResults: React.Dispatch<React.SetStateAction<SearchResult[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setResults }) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    setResults([]);
    setLoading(true);
    setError("");

    try {
      const resp = await Search(inputValue);

      setResults(resp.result);
      if (resp.total === 0) setError("No results returned.");
    } catch (e) {
      setError("No results returned.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      as="form"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      mt={4}
      onSubmit={handleSubmit}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input
          placeholder="Search for Chuck Norris facts..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </InputGroup>
      <Button
        colorScheme="orange"
        mt={4}
        type="submit"
        isLoading={loading}
        disabled={!inputValue.length}
      >
        Search
      </Button>
      <Text mt={4} color={theme.colors.red[400]}>
        {error}
      </Text>
    </Box>
  );
};

export default SearchBar;
