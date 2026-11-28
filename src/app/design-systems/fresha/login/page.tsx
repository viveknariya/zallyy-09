import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaAuthCard } from "@/components/systems/fresha/FreshaAuthCard";

export const metadata: Metadata = {
  title: "Log In — Fresha Design System",
  description:
    "Split-screen customer authentication screen with social login pills, email input, and professional account switcher.",
  alternates: { canonical: "/design-systems/fresha/login" },
};

export default function FreshaLoginPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Log In", href: "/design-systems/fresha/login" },
        ]}
      />
      <FreshaAuthCard mode="login" />
    </>
  );
}
