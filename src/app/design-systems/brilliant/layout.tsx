import type { ReactNode } from "react";
import { BrilliantFooter } from "@/components/systems/brilliant/BrilliantFooter";
import { BrilliantNavbar } from "@/components/systems/brilliant/BrilliantNavbar";

export default function BrilliantSystemLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      data-design-system="brilliant"
      className="min-h-full flex flex-col flex-1 bg-background text-foreground"
    >
      <BrilliantNavbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <BrilliantFooter />
    </div>
  );
}
