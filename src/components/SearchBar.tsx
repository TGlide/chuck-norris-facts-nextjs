import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = ({}) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input placeholder="Search for Chuck Norris facts..." />
    </InputGroup>
  );
};

export default SearchBar;
