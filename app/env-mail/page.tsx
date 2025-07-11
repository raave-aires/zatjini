"use client";

import { VerificationEmail } from "@/components/emails/verification-email";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SendEmail } from "@/lib/actions/email";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const emailSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  verifyUrl: z.string(),
});

export default function Page() {
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      name: "",
      email: "",
      verifyUrl: "",
    },
  });

  async function onSubmit(values: z.infer<typeof emailSchema>) {
    await SendEmail(values);
  }

  return (
    <div className="min-h-dvh min-w-dvw flex justify-center items-center">
      <Card className="min-w-md max-w-md">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="verifyUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Url</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                variant="outline"
              >
                Enivar e-mail
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
