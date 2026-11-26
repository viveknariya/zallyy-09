import type { Metadata } from "next";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { HeroSection } from "@/components/sections/HeroSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tilda Design System — Editorial UI Kit & Next.js Starter",
  description:
    "Tilda.cc-inspired design system featuring warm coral accents, sharp geometric cards, Jost display typography, and 10 ready-to-use Next.js pages.",
  alternates: { canonical: "/design-systems/tilda" },
  openGraph: {
    title: "Tilda Design System — Editorial UI Kit & Next.js Starter",
    description:
      "Tilda.cc-inspired design system with tokens, reusable components, and Next.js App Router pages.",
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
      <HeroSection />
      <FeatureGrid />
      <PricingSection />
    </>
  );
}
