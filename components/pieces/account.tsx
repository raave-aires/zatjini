// componentes:
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LifeBuoy, LogOut, MessageSquareText, Settings } from "lucide-react";

function LoggedIn() {
  return (
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>
        <p className="">Raave Aires</p>
        <p className="text-xs text-muted-foreground">dev@raave.me</p>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Settings /> Configurações
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy /> Ajuda e suporte
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MessageSquareText /> Feedback
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">
        <LogOut /> Sair
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};

function Unlogged(){
  return(
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Conta</DropdownMenuLabel>
      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Settings /> Entre
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy /> Cadastre-se
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  );
};

interface AccountProps {
  session?: boolean;
}

export function Account({ session= true }: AccountProps ) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="rounded-md">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>Z</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      { session ? <LoggedIn /> : <Unlogged /> }
    </DropdownMenu>
  );
}
