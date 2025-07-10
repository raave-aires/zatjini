import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Tailwind,
} from "@react-email/components";
import { ArrowUpRight } from "lucide-react";

interface ChangeEmailVerificationProps {
  name: string;
  email: string;
  verifyUrl: string;
}

const year: string = new Date().getFullYear().toString();

export function ChangeEmailVerification({
  name,
  email,
  verifyUrl,
}: ChangeEmailVerificationProps) {
  return (
    <Html className="min-h-dvh flex justify-center items-center font-averia">
      <Head />
      <Preview>Confirme a alteração do seu e-mail no Zatjini</Preview>
      <Tailwind>
        <Body className="bg-background">
          <Container className="bg-card rounded-lg mx-auto max-w-md">
            <div className="px-8 py-6">
              <Heading className="text-2xl font-averia font-semibold">
                zatjini
              </Heading>
              <Text>
                Oi, {name}! Recebemos um pedido para mudar o e-mail da sua conta no Zatjini para <em>{email}</em>.
                Para garantir sua segurança, precisamos confirmar que foi você que solicitou essa alteração.
                Clique no botão abaixo para contiunar:
              </Text>
              <Button
                href={verifyUrl}
                className="border p-2 rounded-lg bg-primary text-primary-foreground text-sm"
              >
                <p className="flex gap-2 items-center px-2">
                  Confirmar novo e-mail <ArrowUpRight size={18} />
                </p>
              </Button>
              <Text>
                Se você não solicitou essa mudança, pode ignorar esta mensagem e nada vai acontecer.
              </Text>
              <Text>
                Qualquer dúvida, estamos por{" "}
                <a href="mailto:suporte@zatjini.org" className="underline">
                  aqui
                </a>
                .
                <br />
                Equipe Zatjini.
              </Text>
              <Text className="text-xs text-muted-foreground">
                &#169; {year} Zatjini.
              </Text>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}