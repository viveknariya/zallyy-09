import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantAuthCard } from "@/components/systems/brilliant/BrilliantAuthCard";

export const metadata: Metadata = {
  title: "Sign Up — Brilliant Design System",
  description:
    "New learner account registration modal with OAuth shortcuts and vibrant green Sign up CTA.",
  alternates: { canonical: "/design-systems/brilliant/signup" },
};

export default function BrilliantSignupPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Sign Up", href: "/design-systems/brilliant/signup" },
        ]}
      />
      <BrilliantAuthCard mode="signup" />
    </>
  );
}
