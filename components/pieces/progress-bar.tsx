"use client";

// dependências:
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

// componentes: 
import { ProgressProvider } from '@bprogress/next/app';

export function ProgressBar() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <ProgressProvider
      height={resolvedTheme === 'dark' ? '2px' : '3px'}
      color={resolvedTheme === 'dark' ? 'white' : 'cyan'}
      options={{ showSpinner: false }}
      shallowRouting
    >
    </ProgressProvider>
  );
};