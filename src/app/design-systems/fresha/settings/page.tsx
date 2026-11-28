import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaSettingsView } from "@/components/systems/fresha/FreshaAccountPortal";

export const metadata: Metadata = {
  title: "Account Settings — Fresha Design System",
  description:
    "Social login connectors, violet notification toggle switches, and account closure entrypoint.",
  alternates: { canonical: "/design-systems/fresha/settings" },
};

export default function FreshaSettingsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Settings", href: "/design-systems/fresha/settings" },
        ]}
      />
      <FreshaSettingsView />
    </>
  );
}
