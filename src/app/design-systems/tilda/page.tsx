import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaFeatureGrid } from "@/components/systems/tilda/TildaFeatureGrid";
import { TildaHero } from "@/components/systems/tilda/TildaHero";
import { TildaPricing } from "@/components/systems/tilda/TildaPricing";

export const metadata: Metadata = {
  title: "Tilda Design System — Editorial UI Kit & Next.js Starter",
  description:
    "Tilda.cc-inspired design system featuring warm coral accents, sharp 0px geometric cards, Jost display typography, and 17 Next.js App Router pages.",
  alternates: { canonical: "/design-systems/tilda" },
  openGraph: {
    title: "Tilda Design System — Editorial UI Kit & Next.js Starter",
    description:
      "Tilda.cc-inspired design system with scoped tokens, reusable components, and Next.js App Router pages.",
    url: "/design-systems/tilda",
  },
};

export default function TildaHubPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
        ]}
      />
      <TildaHero />
      <TildaFeatureGrid />
      <TildaPricing />
    </>
  );
}
