import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Text,
  Tailwind,
} from "@react-email/components";

interface VerificationEmailProps {
  name: string;
  email: string;
  verifyUrl: string;
}

const year: string = new Date().getFullYear().toString();

export function VerificationEmail({
  name,
  email,
  verifyUrl,
}: VerificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Verifique seu e-mail no Zatjini</Preview>

      <Tailwind>
        <Body className="min-h-dvh min-w-dvw flex justify-center items-center">
          <Container className="bg-[#171717] text-white rounded-3xl mx-auto max-w-md max-h-[26.375rem]">
            <div className="px-8 py-6">
              <Heading className="text-2xl font-semibold">
                <Img
                  alt="Logo do Zatjini"
                  width={100}
                  src="https://raw.githubusercontent.com/raave-aires/zatjini/refs/heads/main/public/zatjini.png"
                />
              </Heading>
              <Text>
                Oi, {name}, tudo certo? Antes de liberar seu acesso ao Zatjini,
                precisamos confirmar que o e-mail <em>{email}</em> é realmente
                seu. É rapidinho, só clicar aqui embaixo:
              </Text>

              <Button
                href={verifyUrl}
                className="border py-2 px-4 rounded-2xl !bg-[#e5e5e5] !text-[#171717] text-sm"
              >
                <span className="flex gap-2 items-center">
                  Confirmar e-mail
                  <Img
                    alt="Ícone de flecha para cima e para esquerda"
                    width={18}
                    src="https://raw.githubusercontent.com/raave-aires/zatjini/refs/heads/main/public/icons/arrow-up-right.png"
                  />
                </span>
              </Button>

              <Text>
                Mas se você não pediu pra criar essa conta, pode ignorar esta
                mensagem tranquilo(a).
              </Text>

              <Text>
                Qualquer dúvida, estamos por{" "}
                <a href="mailto:suporte@zatjini.org" className="underline">
                  aqui
                </a>
                .
                <br />
                Atenciosamente, Zatjini.
              </Text>
              <Text className="text-xs text-[#a1a1a1]">
                &#169; {year} Zatjini.
              </Text>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
