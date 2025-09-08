// dependências:
import { useState } from "react";
import { type ControllerRenderProps } from "react-hook-form";

// componentes:
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { EyeClosedIcon, EyeIcon } from "lucide-react";

interface PasswordFieldProps {
  passWatcher: unknown;
  field: ControllerRenderProps;
}

export function PasswordField({ passWatcher, field }: PasswordFieldProps) {
  const pass = form.watch("password");
  const [showPass, setShowPass] = useState<boolean>(false);
  const disableShowPassButton = pass === "" || pass === undefined;

  return (
    <div className="flex">
      <Input
        type={showPass ? "text" : "password"}
        placeholder="**********"
        autoComplete="new-password"
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
  );
}
