import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantEducators } from "@/components/systems/brilliant/BrilliantEducators";

export const metadata: Metadata = {
  title: "Brilliant for Educators — Classroom STEM UI Kit",
  description:
    "Educator landing page featuring classroom progress tracking matrix, privacy compliance cards, and interactive FAQ accordion.",
  alternates: { canonical: "/design-systems/brilliant/educators" },
};

export default function BrilliantEducatorsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Educators", href: "/design-systems/brilliant/educators" },
        ]}
      />
      <BrilliantEducators />
    </>
  );
}
