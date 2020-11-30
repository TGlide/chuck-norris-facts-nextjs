import { useState } from "react";
import { SearchResult } from "../api/Search";
import Container from "../components/Container";
import DarkModeSwitch from "../components/DarkModeSwitch";
import Search from "../components/Search";

const Index = () => {
  const [results, setResults] = useState<SearchResult[]>([]);

  return (
    <Container height="100vh">
      <Search setResults={setResults} />
      <DarkModeSwitch />
    </Container>
  );
};

export default Index;
