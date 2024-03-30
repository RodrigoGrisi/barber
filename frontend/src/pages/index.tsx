import Image from "next/image";
import logo_Barber from "../../public/logo_Barber.svg";
import Head from "next/head";
import { Button, useToast } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title> BarberPRO - Seu Sistema completo</title>
      </Head>
      <div>
        <Image src={logo_Barber} alt="logotipo" />
        <ToastExample />
        <h1 className="m-25"> Teste Projeto</h1>
      </div>
    </>
  );
}

function ToastExample() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  );
}
