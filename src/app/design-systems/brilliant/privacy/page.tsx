import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantLegalDocument } from "@/components/systems/brilliant/BrilliantEditorial";

export const metadata: Metadata = {
  title: "Privacy Policy — Brilliant Design System",
  description:
    "Clean editorial legal layout for privacy disclosures, data export rights, and student safety.",
  alternates: { canonical: "/design-systems/brilliant/privacy" },
};

const PRIVACY_SECTIONS = [
  {
    heading: "1. Information We Collect",
    body: "We collect account credentials, learning progress, and streak metadata solely to personalize your interactive problem-solving experience.",
  },
  {
    heading: "2. Student & Educator Privacy",
    body: "Classroom accounts do not display third-party advertising and adhere to strict educational privacy protections.",
  },
  {
    heading: "3. Data Export & Deletion",
    body: "You may export a copy of your learning archive or permanently delete your account anytime from Account Settings.",
  },
];

export default function BrilliantPrivacyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Privacy Policy", href: "/design-systems/brilliant/privacy" },
        ]}
      />
      <BrilliantLegalDocument
        title="Privacy Policy"
        updated="November 2026"
        sections={PRIVACY_SECTIONS}
      />
    </>
  );
}
