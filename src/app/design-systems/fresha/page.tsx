import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaLanding } from "@/components/systems/fresha/FreshaLanding";

export const metadata: Metadata = {
  title: "Fresha Design System — Beauty & Wellness Marketplace UI Kit",
  description:
    "Fresha.com-inspired booking & marketplace design system featuring luminous lavender/pink light fields, search capsules, 3:2 venue cards, gradient proof numerals, and B2B scheduling interfaces.",
  alternates: { canonical: "/design-systems/fresha" },
};

export default function FreshaHubPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
        ]}
      />
      <FreshaLanding />
    </>
  );
}
