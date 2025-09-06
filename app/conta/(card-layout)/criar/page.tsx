// componentes:
import { CardContent } from "@/components/ui/card";
import { AuthHeader } from "@/components/auth/card-header";

import { RegisterForm } from "@/components/auth/forms/register";
import { AuthFooter } from "@/components/auth/card-footer";
import { RenderOauthButtons } from "@/components/renderers/oath-buttons";
import { Or } from "@/components/pieces/or";

export default function Page() {
  return (
    <>
      <AuthHeader auth_type="register" />

      <CardContent className="flex flex-col gap-4">
        <RegisterForm />
        <Or texto="ou registre-se com"/>
        <RenderOauthButtons />
      </CardContent>

      <AuthFooter auth_type="register" />
    </>
  );
}
