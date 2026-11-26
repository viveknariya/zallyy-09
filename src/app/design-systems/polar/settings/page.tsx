import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PolarSettings } from "@/components/systems/polar/PolarSettings";

export const metadata: Metadata = {
  title: "Polar Organization Settings Pattern",
  description: "Billing and organization settings layout modeled after polar.sh.",
  alternates: { canonical: "/design-systems/polar/settings" },
};

export default function PolarSettingsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Polar", href: "/design-systems/polar" },
          { label: "Settings", href: "/design-systems/polar/settings" },
        ]}
      />
      <PolarSettings />
    </>
  );
}
