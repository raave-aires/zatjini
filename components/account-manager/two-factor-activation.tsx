"use client";

// dependências:
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@/lib/auth-client";

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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

// ícones:
import { EyeClosedIcon, EyeIcon } from "lucide-react";

interface TwoFactorActivationProps {
  isActive: boolean;
}

const passwordSchema = z.object({
  password: z.string(),
  username: z.string(),
});

export function TwoFactorActivation({ isActive }: TwoFactorActivationProps) {
  const form = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      username: "",
    },
  });

  const pass = form.watch("password");
  const [showPass, setShowPass] = useState<boolean>(false);
  const disableShowPassButton = pass === "" || pass === undefined;

  async function onSubmit(values: z.infer<typeof passwordSchema>) {
    console.log("Teste antes da implementação");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Switch checked={isActive} />
        </div>
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
          
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <div className="flex items-center">
                      <Input
                        type={showPass ? "text" : "password"}
                        placeholder="**********"
                        autoComplete="current-password"
                        className="rounded-r-none"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="rounded-l-none border-l-0"
                        onClick={() => setShowPass((prev) => !prev)}
                        disabled={disableShowPassButton}
                      >
                        {showPass && !disableShowPassButton ? (
                          <EyeIcon className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <EyeClosedIcon
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        )}
                        <span className="sr-only">
                          {showPass ? "Esconder senha" : "Mostrar senha"}
                        </span>
                      </Button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="destructive">Cancelar</Button>
          </DialogClose>

          <Button type="submit">Ativar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
