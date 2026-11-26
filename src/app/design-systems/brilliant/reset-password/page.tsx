import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantAuthCard } from "@/components/systems/brilliant/BrilliantAuthCard";

export const metadata: Metadata = {
  title: "Reset Password — Brilliant Design System",
  description:
    "Password recovery flow for Brilliant accounts with instant confirmation feedback.",
  alternates: { canonical: "/design-systems/brilliant/reset-password" },
};

export default function BrilliantResetPasswordPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Reset Password", href: "/design-systems/brilliant/reset-password" },
        ]}
      />
      <BrilliantAuthCard mode="reset" />
    </>
  );
}
