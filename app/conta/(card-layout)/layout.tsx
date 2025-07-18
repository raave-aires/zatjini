import { Card } from "@/components/ui/card";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-w-dvw min-h-dvh flex justify-center items-center">
      <Card className="min-w-[24rem] max-w-[27rem]">{children}</Card>
    </main>
  );
}
