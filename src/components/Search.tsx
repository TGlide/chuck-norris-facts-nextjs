import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Search, SearchResult } from "../api/Search";

interface SearchBarProps {
  setResults: React.Dispatch<React.SetStateAction<SearchResult[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setResults }) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const resp = await Search(inputValue);

      setResults(resp.result);
    } catch (e) {
      console.error(e);
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
        colorScheme="green"
        mt={4}
        type="submit"
        isLoading={loading}
        disabled={!inputValue.length}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
