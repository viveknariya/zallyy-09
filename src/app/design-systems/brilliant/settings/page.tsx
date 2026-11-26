import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantSettings } from "@/components/systems/brilliant/BrilliantSettings";

export const metadata: Metadata = {
  title: "Account Settings & Data Export — Brilliant Design System",
  description:
    "Manage Premium subscription status, notification toggles, personal data export, and account deletion.",
  alternates: { canonical: "/design-systems/brilliant/settings" },
};

export default function BrilliantSettingsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Settings", href: "/design-systems/brilliant/settings" },
        ]}
      />
      <BrilliantSettings />
    </>
  );
}
