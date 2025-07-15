import { OauthButton } from "@/components/auth/oauth-buttons";

export function RenderOauthButtons() {
  return (
    <div className="grid grid-cols-2 gap-x-4">
      <OauthButton provider="github" />
      <OauthButton provider="google" />
    </div>
  );
}
