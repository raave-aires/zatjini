// better-auth
import { betterAuth } from "better-auth";

// adaptadores do de conexão do banco de dados:
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "@/lib/db";

// plugins:
import { emailOTP } from "better-auth/plugins";
import { sendVerificationEmail } from "@/lib/actions/send-verification-email";

export const auth = betterAuth({
  // conexão do bando de dados:
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  // plugins:
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {},
    }),
  ],

  // tipos de autenticação possíveis:
  emailAndPassword: {
    // com credencias (e-mail e senha)
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await sendVerificationEmail({
        name: user.name,
        email: user.email,
        verifyUrl: url,
      });
    },
    sendOnSignUp: true,
  },
  socialProviders: {
    github: {
      // login com o github
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
