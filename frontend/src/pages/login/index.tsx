import Head from "next/head";
import {
  Center,
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  scaleFadeConfig,
} from "@chakra-ui/react";
import logobarber from "../../../public/logo_Barber.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Head>
        <title> BarberPRO - Login</title>
      </Head>
      <Flex
        background="barber.900"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          width={640}
          direction="column"
          p={14}
          rounded={8}
          justifyContent="center"
          flexDirection="column"
        >
          <Center mb={5} p={4}>
            <Image
              width={250}
              src={logobarber}
              quality={100}
              objectFit="fill"
              alt="Logotipo"
            />
          </Center>
          <Input
            // variant="filled"
            color="white "
            size="lg"
            placeholder="email@email.com"
            type="email"
            mb={3}
          />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              color="white"
              p={5}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            _hover={{ bg: "#fff" }}
            mt={3}
            mb={3}
            transition={"all 0.5s"}
            background="button.cta"
          >
            Acessar
          </Button>
          <Center mt={3}>
            <Link href="/Register">
              <Text cursor="pointer" color="white" textAlign="center">
                Quero cadastrar minha barbearia.
                <strong> Clique Aqui</strong>
              </Text>
            </Link>
          </Center>
        </Flex>
      </Flex>
    </>
  );
}
