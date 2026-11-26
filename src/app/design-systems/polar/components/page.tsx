import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PolarComponentsShowcase } from "@/components/systems/polar/PolarComponentsShowcase";

export const metadata: Metadata = {
  title: "Polar Components & Tokens",
  description:
    "Interactive showcase of Polar tokens, pill buttons, rounded-2xl cards, and segmented controls.",
  alternates: { canonical: "/design-systems/polar/components" },
};

export default function PolarComponentsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Polar", href: "/design-systems/polar" },
          { label: "Components", href: "/design-systems/polar/components" },
        ]}
      />
      <PolarComponentsShowcase />
    </>
  );
}
