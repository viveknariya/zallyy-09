import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantLegalDocument } from "@/components/systems/brilliant/BrilliantEditorial";

export const metadata: Metadata = {
  title: "Terms & Conditions — Brilliant Design System",
  description:
    "Editorial terms of service layout covering subscriptions, trials, and acceptable use.",
  alternates: { canonical: "/design-systems/brilliant/terms" },
};

const TERMS_SECTIONS = [
  {
    heading: "1. Interactive Learning License",
    body: "Brilliant grants learners a personal, non-transferable license to access interactive courses, puzzles, and practice modules.",
  },
  {
    heading: "2. Trials & Subscriptions",
    body: "Free trials convert to the selected annual or monthly billing cycle unless cancelled in Account Settings prior to renewal.",
  },
  {
    heading: "3. Acceptable Use",
    body: "Automated scraping or redistribution of proprietary course illustrations and interactive simulations is prohibited.",
  },
];

export default function BrilliantTermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Terms & Conditions", href: "/design-systems/brilliant/terms" },
        ]}
      />
      <BrilliantLegalDocument
        title="Terms & Conditions"
        updated="November 2026"
        sections={TERMS_SECTIONS}
      />
    </>
  );
}
