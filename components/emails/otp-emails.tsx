import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Tailwind,
} from "@react-email/components";

interface OtpEmailProps {
  name: string;
  code: string;
  year: string;
}

export function OtpEmail({
  name,
  code,
  year,
}: OtpEmailProps) {
  return (
    <Html className="min-h-dvh flex justify-center items-center font-averia">
      <Head />
      <Preview>Seu código de acesso do Zatjini</Preview>
      <Tailwind>
        <Body className="bg-background">
          <Container className="bg-card rounded-lg mx-auto max-w-md">
            <div className="px-8 py-6">
              <Heading className="text-2xl font-averia font-semibold">
                zatjini
              </Heading>
              <Text>
                Oi, {name}! Aqui está seu código de acesso temporário:
              </Text>
              <div className="my-6">
                <span className="text-2xl font-mono bg-muted rounded-lg px-6 py-2 tracking-widest border">
                  {code}
                </span>
              </div>
              <Text>
                Ele vale só por alguns minutos e é exclusivo para você.
              </Text>
              <Text>
                Se não foi você quem pediu esse código, recomendamos que você <a href="http://zatjini.org/alterar-senha" target="_blank" rel="noopener noreferrer" className="underline">mude a sua senha</a> imediatamente.
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