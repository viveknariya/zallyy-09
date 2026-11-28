import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaAuthCard } from "@/components/systems/fresha/FreshaAuthCard";

export const metadata: Metadata = {
  title: "Sign Up Role Chooser — Fresha Design System",
  description:
    "Split-screen onboarding chooser dividing Fresha for customers and Fresha for professionals.",
  alternates: { canonical: "/design-systems/fresha/signup" },
};

export default function FreshaSignUpPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Sign Up", href: "/design-systems/fresha/signup" },
        ]}
      />
      <FreshaAuthCard mode="signup" />
    </>
  );
}
