import type { ReactNode } from "react";
import { JetBrainsFooter } from "@/components/systems/jetbrains/JetBrainsFooter";
import { JetBrainsNavbar } from "@/components/systems/jetbrains/JetBrainsNavbar";

export default function JetBrainsSystemLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      data-design-system="jetbrains"
      className="min-h-full flex flex-col flex-1 bg-background text-foreground"
    >
      <JetBrainsNavbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <JetBrainsFooter />
    </div>
  );
}
