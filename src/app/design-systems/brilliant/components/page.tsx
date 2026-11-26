import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantComponentsShowcase } from "@/components/systems/brilliant/BrilliantComponentsShowcase";

export const metadata: Metadata = {
  title: "Brilliant Components — Tokens, Tactile Pills & Quiz Cards",
  description:
    "Interactive component showcase for the Brilliant design system including tokens, serif/sans specimens, green pill CTAs, and quiz answer cards.",
  alternates: { canonical: "/design-systems/brilliant/components" },
};

export default function BrilliantComponentsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Components", href: "/design-systems/brilliant/components" },
        ]}
      />
      <BrilliantComponentsShowcase />
    </>
  );
}
