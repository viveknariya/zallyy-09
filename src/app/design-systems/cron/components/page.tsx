import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CronComponentsShowcase } from "@/components/systems/cron/CronComponentsShowcase";

export const metadata: Metadata = {
  title: "Cron Components & Tokens",
  description:
    "Interactive showcase of Cron tokens, vermilion pill buttons, keyboard keycaps, and segmented controls.",
  alternates: { canonical: "/design-systems/cron/components" },
};

export default function CronComponentsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Cron", href: "/design-systems/cron" },
          { label: "Components", href: "/design-systems/cron/components" },
        ]}
      />
      <CronComponentsShowcase />
    </>
  );
}
