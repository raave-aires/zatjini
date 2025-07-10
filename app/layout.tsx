// dependências:
import type { Metadata } from "next";

// estilo global:
import "@/app/globals.css";

// componentes:
import { ThemeProvider } from "@/components/ui/theme-provider";

// fontes:
import { Averia_Serif_Libre, Geist, Geist_Mono } from "next/font/google";

// instanciamento das fontes:
const averia = Averia_Serif_Libre({
  weight: "400",
  style: "normal",
  variable: "--font-averia",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// definição de metadados globais:
export const metadata: Metadata = {
  title: {
    template: "Zatjini: %s",
    default: "Zatjini",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon/black.svg",
        href: "/favicon/black.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon/white.svg",
        href: "/favicon/white.svg",
      },
    ],
  },
  generator: "Next.js",
  applicationName: "zatjini",
  authors: [{ name: "Raave Aires", url: "https://githb.com/raave-aires" }],
  creator: "Raave Aires",
  publisher: "Raave Aires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`
            ${averia.variable} ${geistSans.variable} ${geistMono.variable} 
            antialiased
          `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
