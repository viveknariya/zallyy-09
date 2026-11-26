import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JetBrainsHero } from "@/components/systems/jetbrains/JetBrainsHero";
import { JetBrainsPricing } from "@/components/systems/jetbrains/JetBrainsPricing";
import { JetBrainsProductGrid } from "@/components/systems/jetbrains/JetBrainsProductGrid";

export const metadata: Metadata = {
  title: "JetBrains Design System — Dark Developer UI Kit",
  description:
    "JetBrains.com-inspired dark-first developer design system with electric blue pill CTAs, IDE gradient badges, and JetBrains Mono.",
  alternates: { canonical: "/design-systems/jetbrains" },
};

export default function JetBrainsHubPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "JetBrains", href: "/design-systems/jetbrains" },
        ]}
      />
      <JetBrainsHero />
      <JetBrainsProductGrid />
      <JetBrainsPricing />
    </>
  );
}
