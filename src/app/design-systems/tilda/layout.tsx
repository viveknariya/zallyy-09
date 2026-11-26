import type { ReactNode } from "react";
import { TildaFooter } from "@/components/systems/tilda/TildaFooter";
import { TildaNavbar } from "@/components/systems/tilda/TildaNavbar";

export default function TildaSystemLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      data-design-system="tilda"
      className="min-h-full flex flex-col flex-1 bg-background text-foreground"
    >
      <TildaNavbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <TildaFooter />
    </div>
  );
}
