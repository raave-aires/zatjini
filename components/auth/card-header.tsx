import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface AuthHeaderProps {
  auth_type: "login" | "register";
};

export function AuthHeader({ auth_type }: AuthHeaderProps) {
  return (
    <CardHeader>
      <CardTitle>
        <Link href="/" className="font-averia text-3xl">zatjini</Link>
      </CardTitle>
      <CardDescription>
        { auth_type === "login" ? "Bem-vindo(a) de volta. Entre para continuar." : "Para continuar, você precisa criar uma conta."}
      </CardDescription>
    </CardHeader>
  );
}