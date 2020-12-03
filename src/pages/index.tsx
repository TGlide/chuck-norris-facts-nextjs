import { useState } from "react";
import { SearchResult } from "../api/Search";
import Container from "../components/Container";
import DarkModeSwitch from "../components/DarkModeSwitch";
import RTLSwitch from "../components/RTLSwitch";
import Header from "../components/Header";
import Results from "../components/Results";
import Search from "../components/Search";
import { useStoreRehydrated } from "easy-peasy";

const Index = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const isRehydrated = useStoreRehydrated();

  return (
    <Container minH="100vh" pt={12} pb={8}>
      {isRehydrated && (
        <>
          <Header />
          <Search setResults={setResults} />
          <Results results={results} pageSize={3} />
          <RTLSwitch />
          <DarkModeSwitch />
        </>
      )}
    </Container>
  );
};

export default Index;
