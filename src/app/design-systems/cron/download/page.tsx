import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CronDownload } from "@/components/systems/cron/CronDownload";

export const metadata: Metadata = {
  title: "Cron Download Pattern",
  description: "Minimalist desktop & mobile download screen modeled after cron.com/download/macos.",
  alternates: { canonical: "/design-systems/cron/download" },
};

export default function CronDownloadPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Cron", href: "/design-systems/cron" },
          { label: "Download", href: "/design-systems/cron/download" },
        ]}
      />
      <CronDownload />
    </>
  );
}
