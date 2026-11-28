import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaAuthCard } from "@/components/systems/fresha/FreshaAuthCard";

export const metadata: Metadata = {
  title: "Reset Password — Fresha Design System",
  description:
    "Split-screen password update flow with visibility toggle and clean confirmation feedback.",
  alternates: { canonical: "/design-systems/fresha/reset-password" },
};

export default function FreshaResetPasswordPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Reset Password", href: "/design-systems/fresha/reset-password" },
        ]}
      />
      <FreshaAuthCard mode="reset" />
    </>
  );
}
