import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaDeleteAccountView } from "@/components/systems/fresha/FreshaAccountPortal";

export const metadata: Metadata = {
  title: "Delete Account — Fresha Design System",
  description:
    "Stepped account deletion confirmation flow with top violet progress bar, policy acknowledgements, and safe close action.",
  alternates: { canonical: "/design-systems/fresha/delete-account" },
};

export default function FreshaDeleteAccountPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Delete Account", href: "/design-systems/fresha/delete-account" },
        ]}
      />
      <FreshaDeleteAccountView />
    </>
  );
}
