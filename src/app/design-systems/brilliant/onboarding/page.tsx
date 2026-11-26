import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantOnboarding } from "@/components/systems/brilliant/BrilliantOnboarding";

export const metadata: Metadata = {
  title: "Account Setup & Recommendations — Brilliant Design System",
  description:
    "Guided onboarding path recommendation cards, daily study goal selector, and mascot speech prompt.",
  alternates: { canonical: "/design-systems/brilliant/onboarding" },
};

export default function BrilliantOnboardingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Onboarding", href: "/design-systems/brilliant/onboarding" },
        ]}
      />
      <BrilliantOnboarding />
    </>
  );
}
