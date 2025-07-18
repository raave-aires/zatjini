import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { ArrowRight, CircleCheckIcon } from "lucide-react";

export default function(){
  return(
    <CardContent>
      <div className="flex items-center gap-2 ">
        <CircleCheckIcon size={20}/> Enviamos um e-mail para você.
      </div>
      <div className="text-xs">Para começar a usar sua conta, é necessário confirmar seu endereço de e-mail.</div>
      <Button className="mt-4">
        Entrar <ArrowRight />
      </Button>
    </CardContent>
  );
};