import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Search, SearchResult } from "../api/Search";
import { useStoreState } from "../store";
import theme from "../theme";

interface SearchBarProps {
  setResults: React.Dispatch<React.SetStateAction<SearchResult[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setResults }) => {
  const isRtl = useStoreState((state) => state.rtl.enabled);
  const rtlDirection = useStoreState((state) => state.rtl.direction);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleReset = () => {
    setResults([]);
    setLoading(true);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevents window reloading
    handleReset();

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
        {!isRtl && (
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
        )}
        <Input
          dir={rtlDirection}
          placeholder="Search for Chuck Norris facts..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {isRtl && (
          <InputRightElement pointerEvents="none">
            <SearchIcon />
          </InputRightElement>
        )}
      </InputGroup>
      <Button
        colorScheme="orange"
        mt={4}
        type="submit"
        isLoading={loading}
        disabled={!inputValue.length}
        data-testid="search"
      >
        Search
      </Button>
      {!!error.length && (
        <Text
          dir={rtlDirection}
          mt={4}
          color={theme.colors.red[400]}
          data-testid="search-error"
        >
          {error}
        </Text>
      )}
    </Box>
  );
};

export default SearchBar;
