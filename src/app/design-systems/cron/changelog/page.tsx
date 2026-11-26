import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CronChangelog } from "@/components/systems/cron/CronChangelog";

export const metadata: Metadata = {
  title: "Cron Changelog Pattern",
  description: "Editorial product changelog feed modeled after cron.com/changelog.",
  alternates: { canonical: "/design-systems/cron/changelog" },
};

export default function CronChangelogPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Cron", href: "/design-systems/cron" },
          { label: "Changelog", href: "/design-systems/cron/changelog" },
        ]}
      />
      <CronChangelog />
    </>
  );
}
