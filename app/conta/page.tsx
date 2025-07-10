import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LockKeyhole, MoveLeft, UserRound } from "lucide-react";

export default function Page(){
  return(
    <>
      <div className="w-full max-h-[5.55rem] h-full pb border-b">
        <Button variant="link" className="text-muted-foreground">
          <MoveLeft /> Voltar para o Início
        </Button>

        <h2 className="text-xl px-3 my-3">Configurações da conta</h2>
      </div>
      <section className="flex px-3">
        <div className="w-1/4 h-20 flex flex-col items-end p-4">
          <Button variant="link">
            <UserRound /> Perfil
          </Button>
          <Button variant="link">
            <LockKeyhole />Segurança e acesso à conta
          </Button>
        </div>
        <div className="w-3/4 p-5">
          <Card className="flex">
            
          </Card>
        </div>
      </section>
      
    </>
  );
};