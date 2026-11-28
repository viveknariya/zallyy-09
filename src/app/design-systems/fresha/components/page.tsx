import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaComponentsShowcase } from "@/components/systems/fresha/FreshaComponentsShowcase";

export const metadata: Metadata = {
  title: "Fresha Components — Design Tokens & UI Kit",
  description:
    "Explore Fresha design tokens, typography specimens, capsule buttons, 3:2 venue cards, gradient wallet cards, and booking slots.",
  alternates: { canonical: "/design-systems/fresha/components" },
};

export default function FreshaComponentsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Components", href: "/design-systems/fresha/components" },
        ]}
      />
      <FreshaComponentsShowcase />
    </>
  );
}
