// dependências:
import Link from "next/link";

// componentes:
import { Account } from "@/components/pieces/account";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Zatjini } from "@/components/pieces/logo";

// ícones:
import { EllipsisVertical } from "lucide-react";

export function Header() {
  return (
    <>
      <header className="sticky h-14 min-w-dvw max-w-dvw top-0 flex justify-center items-center bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 border-b border-border z-50">
        <nav className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline">
                  <EllipsisVertical />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Ver</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/contratos">
                  <DropdownMenuItem className="cursor-pointer">
                    Contrato existentes
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <Zatjini />
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Account />
          </div>
        </nav>
      </header>
    </>
  );
}
