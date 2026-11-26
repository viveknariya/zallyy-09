import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantAboutView } from "@/components/systems/brilliant/BrilliantEditorial";

export const metadata: Metadata = {
  title: "About Us — Brilliant Design System",
  description:
    "Mission overview and interactive problem-solving philosophy illustrated with geometric STEM proofs.",
  alternates: { canonical: "/design-systems/brilliant/about" },
};

export default function BrilliantAboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "About", href: "/design-systems/brilliant/about" },
        ]}
      />
      <BrilliantAboutView />
    </>
  );
}
