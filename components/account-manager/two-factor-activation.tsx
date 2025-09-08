// dependências:
import { useForm } from "react-hook-form";

// componentes:
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

import { authClient } from "@/lib/auth-client";
import z from "zod";

interface TwoFactorActivationProps {
  isActive: boolean
}

const passwordSchema = z.object({
  password: 
})

export function TwoFactorActivation({ isActive }: TwoFactorActivationProps) {
  const form = useForm({

  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <><Switch checked={isActive} /></>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ativar autenticação em dois fatores?</DialogTitle>
          <DialogDescription>
            Você está prestes a ativar a autenticação em dois fatores (2FA) para
            sua conta. Isso adicionará uma camada extra de segurança, exigindo
            um código adicional ao fazer login.
          </DialogDescription>
        </DialogHeader>

        <Form>

        </Form>

        <DialogFooter>
          <DialogClose>
            Cancelar
          </DialogClose>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
