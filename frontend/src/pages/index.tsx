import Head from "next/head";
import { Center, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title> BarberPRO - Seu Sistema completo</title>
      </Head>
      <Flex
        background="barber.900"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="text.whiteDefault" fontSize={30} marginTop={10}>
          Página inicial
        </Text>
      </Flex>
    </>
  );
}
