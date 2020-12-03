import { ChakraProvider } from "@chakra-ui/react";
import { StoreProvider } from "easy-peasy";
import { AppProps } from "next/app";
import { store } from "../store";
import "../styles/app.css";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </StoreProvider>
  );
}

export default MyApp;
