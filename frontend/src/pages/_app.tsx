import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  baber: {
    900: "#12131b",
    400: "#b11b29",
    100: "#c6c6c6",
  },
  button: {
    cta: "#fba931",
    default: "#FFF",
    gray: "#dfdfdf",
    danger: "#ff4040",
  },
  orange: {
    900: "#fba931",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
