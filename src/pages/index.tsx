import { useState } from "react";
import { SearchResult } from "../api/Search";
import Container from "../components/Container";
import DarkModeSwitch from "../components/DarkModeSwitch";
import Results from "../components/Results";
import Search from "../components/Search";

const Index = () => {
  const [results, setResults] = useState<SearchResult[]>([]);

  return (
    <Container minH="100vh" py={8}>
      <Search setResults={setResults} />
      <Results results={results} pageSize={4} />
      <DarkModeSwitch />
    </Container>
  );
};

export default Index;
