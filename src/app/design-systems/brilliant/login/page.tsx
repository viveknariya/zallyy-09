import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantAuthCard } from "@/components/systems/brilliant/BrilliantAuthCard";

export const metadata: Metadata = {
  title: "Log In — Brilliant Design System",
  description:
    "Centered authentication card with OAuth providers, email/password inputs, and dark pill submit button.",
  alternates: { canonical: "/design-systems/brilliant/login" },
};

export default function BrilliantLoginPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Log In", href: "/design-systems/brilliant/login" },
        ]}
      />
      <BrilliantAuthCard mode="login" />
    </>
  );
}
