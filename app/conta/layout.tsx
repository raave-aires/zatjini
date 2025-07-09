import { Header } from "@/components/structure/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="w-dvw max-w-dvw flex justify-center">
        <main className="container container-h">{children}</main>
      </div>
    </>
  );
}
