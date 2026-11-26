import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantLanding } from "@/components/systems/brilliant/BrilliantLanding";

export const metadata: Metadata = {
  title: "Brilliant Design System — Interactive STEM Learning UI Kit",
  description:
    "Brilliant.org-inspired educational UI kit featuring Newsreader serif display type, #2AB54B tactile pills, midnight blueprint navy sections, and interactive puzzle cards.",
  alternates: { canonical: "/design-systems/brilliant" },
};

export default function BrilliantHubPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
        ]}
      />
      <BrilliantLanding />
    </>
  );
}
