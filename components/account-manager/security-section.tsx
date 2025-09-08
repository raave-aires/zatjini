// dependências:
import { authClient } from "@/lib/auth-client";

// componentes
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { TwoFactorActivation } from "@/components/account-manager/two-factor-activation";

// ícones:
import { Clock3, Key, Lock, Shield } from "lucide-react";

export function AccountSecuritySection() {
  const { data: session } = authClient.useSession();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Segurança
        </CardTitle>
        <CardDescription>
          Gerencie as configurações de segurança da sua conta.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label className="text-base">Autenticação em dois fatores</Label>
            <p className="text-sm text-gray-500">
              Adiciona uma camada extra de segurança à sua conta.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {session?.user.twoFactorEnabled ? (
              <Badge>Ativado</Badge>
            ) : ( 
              <>
                <TwoFactorActivation isActive={ session?.user.twoFactorEnabled! }/>
              </>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full justify-start"
            disabled={!session?.user.twoFactorEnabled}
          >
            <Clock3 /> Código temporário (TOTP)
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start"
            disabled={!session?.user.twoFactorEnabled}
          >
            <Key /> Chave de acesso
          </Button>
        </div>

        <Separator />

        <Button variant="outline" className="w-full justify-start">
          <Lock /> Alterar senha
        </Button>
      </CardContent>
    </Card>
  );
}
