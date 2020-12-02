import { useState } from "react";
import { SearchResult } from "../api/Search";
import Container from "../components/Container";
import DarkModeSwitch from "../components/DarkModeSwitch";
import Header from "../components/Header";
import Results from "../components/Results";
import Search from "../components/Search";

const Index = () => {
  const [results, setResults] = useState<SearchResult[]>([]);

  return (
    <Container minH="100vh" pt={12} pb={8}>
      <Header />
      <Search setResults={setResults} />
      <Results results={results} pageSize={3} />
      <DarkModeSwitch />
    </Container>
  );
};

export default Index;
