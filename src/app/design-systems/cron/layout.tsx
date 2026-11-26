import type { ReactNode } from "react";
import { CronFooter } from "@/components/systems/cron/CronFooter";
import { CronNavbar } from "@/components/systems/cron/CronNavbar";

export default function CronSystemLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      data-design-system="cron"
      className="min-h-full flex flex-col flex-1 bg-background text-foreground"
    >
      <CronNavbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <CronFooter />
    </div>
  );
}
