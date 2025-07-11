"use server";

import { VerificationEmail } from "@/components/emails/verification-email";
import { Resend } from "resend";

interface SendEmailProps {
  name: string;
  email: string;
  verifyCode?: string;
  verifyUrl?: string;
}

export async function SendEmail({
  name,
  email,
  verifyUrl,
}: SendEmailProps) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "Zatjini <verify@zatjini.org>",
    to: [email],
    subject: "Verificação do Zatjini",
    react: VerificationEmail({
      name: name,
      email: email,
      verifyUrl: verifyUrl as string,
    }),
    text: `Oi, ${name}! tudo certo? Antes de liberar seu acesso ao Zatjini, precisamos confirmar que o e-mail ${email} é realmente seu. É rapidinho, só clicar aqui no link: ${verifyUrl}`
  });

  console.log(data)
}
