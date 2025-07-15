"use client";

// dependências
import React, { useState } from "react";

// componentes:
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/pieces/loader";

// ícones:
import { SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";

// funções:
import { authClient } from "@/lib/auth-client";

interface LoginButtonProps {
  provider: "github" | "google";
  className?: string;
};

export function OauthButton({ provider, className }: LoginButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const data = await authClient.signIn.social({
        provider: provider,
      })
      return data
    } catch (error) {
      setLoading(false);
    }
  };

  // define o nome do provider
  const providerName = provider === "github" ? "GitHub" : "Google";

  return (
    <Button
      variant="outline"
      className={className ? `hover:cursor-pointer ${className}` : "hover:cursor-pointer"}
      onClick={handleClick}
      disabled={loading}
    >
      { loading ? (
        <Loader />
      ) : provider === "github" ? (
        <SiGithub />
      ) : (
        <SiGoogle />
      )}
      {providerName}
    </Button>
  );
}