import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PolarDashboard } from "@/components/systems/polar/PolarDashboard";
import { PolarHero } from "@/components/systems/polar/PolarHero";

export const metadata: Metadata = {
  title: "Polar Design System — SaaS Billing & Analytics UI Kit",
  description:
    "Polar.sh-inspired SaaS billing and developer monetization UI kit with obsidian & light surfaces, rounded-2xl cards, and pill controls.",
  alternates: { canonical: "/design-systems/polar" },
};

export default function PolarHubPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Polar", href: "/design-systems/polar" },
        ]}
      />
      <PolarHero />
      <PolarDashboard />
    </>
  );
}
