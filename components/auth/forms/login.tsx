"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// componentes:
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/pieces/loader";

// ícones:
import { Check, EyeIcon, EyeClosedIcon, X, Link } from "lucide-react";
import { authClient } from "@/lib/auth-client";

// esquema do zod:
const registerInfos = z.object({
  name: z.string().min(1, { message: "Como devemos te chamar?" }),
  lastname: z.string().min(1, { message: "Seu sobrenome é?" }),
  email: z
    .string()
    .min(5, { message: "Precisamos de um e-mail para entrar em contato" })
    .email({ message: "O e-mail digitado não é válido" }),
  password: z
    .string()
    .min(1, { message: "Sua senha precisa ter ao menos 10 caracteres" }),
});

export function RegisterForm() {
  const [isPending, setIsPending] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [showErrorFlash, setShowErrorFlash] = useState(false);

  // escolhe a classe de cor do botão
  const buttonColorClass = showCheck
    ? "bg-green-500"
    : showErrorFlash
    ? "bg-red-500 hover:bg-red-600"
    : null;

  const form = useForm<z.infer<typeof registerInfos>>({
    resolver: zodResolver(registerInfos),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  const pass = form.watch("password");
  const [showPass, setShowPass] = useState<boolean>(false);
  const disableShowPassButton = pass === "" || pass === undefined;

  async function onSubmit(values: z.infer<typeof registerInfos>) {
    setShowCheck(false);
    setShowErrorFlash(false);
    setIsPending(true);

    const { data, error } = await authClient.signUp.email(
      {
        email: values.email,
        password: values.password,
        name: values.name + " " + values.lastname,
        callbackURL: "",
      },
      {
        onRequest: () => {
          setIsPending(true);
        },
        onSuccess: () => {
          setIsPending(false);
          setShowCheck(true);
          setTimeout(() => setShowCheck(false), 2000);
          console.log(data);
        },
        onError: () => {
          setIsPending(false);
          setShowErrorFlash(true);
          setTimeout(() => setShowErrorFlash(false), 2000);
          console.log(error);
        },
      }
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail ou nome de usuário</FormLabel>
              <FormControl>
                <Input
                  placeholder="você@alguma-coisa.com"
                  autoComplete="email username"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-between">
                Senha
                <Button
                  variant="link"
                  className="cursor-pointer text-muted-foreground hover:text-black dark:hover:text-white p-0 h-3.5"
                  asChild
                >
                  <Link href="/conta/esqueci-a-senha">Esqueceu sua senha?</Link>
                </Button>
              </FormLabel>
              <FormControl>
                <div className="flex">
                  <Input
                    type={showPass ? "text" : "password"}
                    placeholder="**********"
                    autoComplete="password"
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
                      <EyeClosedIcon className="h-4 w-4" aria-hidden="true" />
                    )}
                    <span className="sr-only">
                      {showPass ? "Esconder senha" : "Mostrar senha"}
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className={`text-white ${buttonColorClass}`}
          disabled={isPending}
        >
          {isPending ? <Loader /> : showCheck ? <Check size={16} /> : "Entrar"}
        </Button>
      </form>
    </Form>
  );
}
