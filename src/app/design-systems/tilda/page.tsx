import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaFeatureGrid } from "@/components/systems/tilda/TildaFeatureGrid";
import { TildaHero } from "@/components/systems/tilda/TildaHero";
import { TildaPricing } from "@/components/systems/tilda/TildaPricing";
import { buildTildaMetadata } from "./_metadata";

export const metadata = buildTildaMetadata({
  title: "Tilda Design System — Editorial UI Kit & Next.js Starter",
  description:
    "Tilda.cc-inspired design system featuring warm coral accents, sharp 0px geometric cards, Jost display typography, and 18 Next.js App Router pages.",
  path: "/design-systems/tilda",
});

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
