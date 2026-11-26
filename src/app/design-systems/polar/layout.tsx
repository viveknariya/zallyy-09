import type { ReactNode } from "react";
import { PolarFooter } from "@/components/systems/polar/PolarFooter";
import { PolarNavbar } from "@/components/systems/polar/PolarNavbar";

export default function PolarSystemLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      data-design-system="polar"
      className="min-h-full flex flex-col flex-1 bg-background text-foreground"
    >
      <PolarNavbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <PolarFooter />
    </div>
  );
}
