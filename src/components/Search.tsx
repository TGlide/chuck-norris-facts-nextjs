import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = ({}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Box
      as="form"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      onSubmit={(e) => {
        e.preventDefault();
      }}
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
      <Button colorScheme="green" mt={4} type="submit">
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
