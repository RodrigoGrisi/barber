import Head from "next/head";
import {
  Center,
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import logobarber from "../../../public/logo_Barber.svg";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  function handleRegister() {
    console.log(name, email, password);
  }

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
            value={name}
            onChange={(e) => setName(e.target.value)}
            color="white "
            size="lg"
            placeholder="Digite seu nome"
            type="text"
            mb={3}
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            color="white "
            size="lg"
            placeholder="email@email.com"
            type="email"
            mb={3}
          />
          <InputGroup size="md">
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            onClick={handleRegister}
          >
            Cadastrar
          </Button>
          <Center mt={3}>
            <Link href="/login">
              <Text cursor="pointer" color="white" textAlign="center">
                Já possui login?. <strong> Clique Aqui</strong>
              </Text>
            </Link>
          </Center>
        </Flex>
      </Flex>
    </>
  );
}
