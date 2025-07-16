// componentes:
import { CardContent } from "@/components/ui/card";
import { AuthHeader } from "@/components/auth/card-header";

import { LoginForm } from "@/components/auth/forms/login";
import { AuthFooter } from "@/components/auth/card-footer";
import { RenderOauthButtons } from "@/components/renderers/oath-buttons";
import { Or } from "@/components/pieces/or";

export default function Page() {
  return (
    <>
      <AuthHeader auth_type="login" />

      <CardContent className="flex flex-col gap-4">
        <RenderOauthButtons />
        <Or />
        <LoginForm />
      </CardContent>

      <AuthFooter auth_type="login" />
    </>
  );
}
