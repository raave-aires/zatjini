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
} from '@react-email/components';

interface VerificationEmailProps {
  name: string;
  email: string;
  verifyUrl: string;
}

export function VerificationEmail({ name, email, verifyUrl }: VerificationEmailProps) {
  return (
    <Html className="min-h-dvh flex justify-center items-center font-averia">
      <Head />
      <Preview>verifique seu e-mail no zatjini</Preview>

      <Tailwind>
        <Body className="bg-background">
          <Container className="bg-card rounded-lg mx-auto max-w-md">
            <Heading className="text-2xl font-averia font-semibold px-8 pt-6">zatjini</Heading>
            <Text className="text-base px-8 hyphens-auto">
              Oi, {name}! Valeu por criar sua conta no Zatjini. Para termos certeza de que o e-mail {email} é mesmo seu, verifique-o:
            </Text>
            <Section className="ml-8">
              <Button
                href={verifyUrl}
                className="border p-3 rounded-lg bg-primary text-primary-foreground"
              >
                Confirmar e-mail
              </Button>
            </Section>
            <Text className="px-8">
              Se você não solicitou esse e-mail, pode simplesmente ignorar esta mensagem. Abraço!
            </Text>
            <Text className="text-xs text-muted-foreground pl-8 pb-4">&#169; 2025 Zatjini.</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
