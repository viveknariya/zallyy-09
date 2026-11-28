import type { ReactNode } from "react";
import { FreshaFooter } from "@/components/systems/fresha/FreshaFooter";
import { FreshaNavbar } from "@/components/systems/fresha/FreshaNavbar";

export default function FreshaSystemLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      data-design-system="fresha"
      className="min-h-full flex flex-col flex-1 bg-background text-foreground"
    >
      <FreshaNavbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <FreshaFooter />
    </div>
  );
}
