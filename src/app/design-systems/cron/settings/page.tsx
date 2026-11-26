import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CronSettingsModal } from "@/components/systems/cron/CronSettingsModal";

export const metadata: Metadata = {
  title: "Cron Calendar Settings Pattern",
  description:
    "Two-column calendar and integration settings modal modeled after calendar.cron.com/settings.",
  alternates: { canonical: "/design-systems/cron/settings" },
};

export default function CronSettingsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Cron", href: "/design-systems/cron" },
          { label: "Settings", href: "/design-systems/cron/settings" },
        ]}
      />
      <CronSettingsModal />
    </>
  );
}
