import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaSettings } from "@/components/systems/tilda/TildaSettings";

export const metadata: Metadata = {
  title: "Tilda Site Settings Pattern",
  description:
    "Multi-tab site settings form (General, Fonts, Analytics, Payments, Privacy) modeled after tilda.cc/projects/settings.",
  alternates: { canonical: "/design-systems/tilda/settings" },
};

export default function TildaSettingsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Settings", href: "/design-systems/tilda/settings" },
        ]}
      />
      <TildaSettings />
    </>
  );
}
