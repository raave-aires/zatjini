import { Button } from "@/components/ui/button";
import { Key } from "lucide-react";

export function PasskeyButton(){
  async function SignInWithPasskey(){
    await 
  }
  return(
    <Button
      variant="secondary"
      type="button"
      onClick={()=>alert("Isto")}
    >
      <Key /> Entrar com Passkey
    </Button>
  );
};