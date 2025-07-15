"use server";

// dependências:
import { Resend } from "resend";

//componentes de e-mail:
import { VerificationEmail } from "@/components/emails/verification-email";

interface SendVerificationEmailProps {
  name: string;
  email: string;
  verifyUrl: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail({
  name,
  email,
  verifyUrl,
}: SendVerificationEmailProps ) {
  const { data, error } = await resend.emails.send({
    from: "Zatjini <confirm@zatjini.org>",
    to: [email],
    subject: "Confirme seu e-mail · Zatjini",
    react: VerificationEmail({
      name: name,
      email: email,
      verifyUrl: verifyUrl as string,
    }),
    text: `Oi, ${name}! Antes de liberar seu acesso ao Zatjini, precisamos confirmar que este e-mail (${email}) é realmente seu. É rapidinho, só clicar aqui no link: ${verifyUrl}`
  });

  if (error) {
    return {
      success: false,
      message: "Houve um erro na requisição do seu e-mail de confirmação. Por favor, tente novamente."
    }
  }

  return {
    success: true,
    message: "Enviamos um e-mail de confirmação para você.",
    data: data?.id
  }
}
