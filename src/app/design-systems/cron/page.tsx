import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CronCalendarWorkspace } from "@/components/systems/cron/CronCalendarWorkspace";

export const metadata: Metadata = {
  title: "Cron Design System — Keyboard-First Calendar UI Kit",
  description:
    "Cron.com-inspired calendar workspace, vermilion #FF5416 accents, keyboard shortcuts, and Next.js components.",
  alternates: { canonical: "/design-systems/cron" },
};

export default function CronHubPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Cron", href: "/design-systems/cron" },
        ]}
      />
      <CronCalendarWorkspace />
    </>
  );
}
