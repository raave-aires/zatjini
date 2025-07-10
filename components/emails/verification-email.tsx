import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import { ArrowUpRight } from "lucide-react";

interface VerificationEmailProps {
  name: string;
  email: string;
  verifyUrl: string;
  year: string
}

const year: string = new Date().getFullYear().toString();

export function VerificationEmail({
  name,
  email,
  verifyUrl,
}: VerificationEmailProps) {
  return (
    <Html className="min-h-dvh flex justify-center items-center font-averia">
      <Head />
      <Preview>Verifique seu e-mail no Zatjini</Preview>

      <Tailwind>
        <Body className="bg-background">
          <Container className="bg-card rounded-lg mx-auto max-w-md">
            <div className="px-8 py-6">
              <Heading className="text-2xl font-averia font-semibold">
                zatjini
              </Heading>
              <Text>
                Oi, {name}, tudo certo? Antes de liberar seu acesso ao Zatjini,
                precisamos confirmar que o e-mail <em>{email}</em> é realmente
                seu. É rapidinho, só clicar aqui embaixo:
              </Text>

              <Button
                href={verifyUrl}
                className="border p-2 rounded-lg bg-primary text-primary-foreground text-sm"
              >
                <p className="flex gap-2 items-center px-2">
                  Confirmar e-mail <ArrowUpRight size={18} />
                </p>
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