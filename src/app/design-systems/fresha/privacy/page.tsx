import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaLegalView } from "@/components/systems/fresha/FreshaEditorial";

export const metadata: Metadata = {
  title: "Privacy Notice — Fresha Design System",
  description:
    "Legal privacy notice with top document switcher, left section navigation, and highlighted partner notice callout.",
  alternates: { canonical: "/design-systems/fresha/privacy" },
};

export default function FreshaPrivacyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Privacy Policy", href: "/design-systems/fresha/privacy" },
        ]}
      />
      <FreshaLegalView initialSection="privacy" />
    </>
  );
}
