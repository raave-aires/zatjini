// componentes:
import { Button } from "@/components/ui/button";

// ícones:
import { Key } from "lucide-react";

// funções:
import { authClient } from "@/lib/auth-client";

export function PasskeyButton(){
  async function SignInWithPasskey(){
    await authClient.signIn.passkey({ autoFill: true })
  };

  return(
    <Button
      variant="secondary"
      type="button"
      onClick={SignInWithPasskey}
    >
      <Key /> Entrar com Passkey
    </Button>
  );
};