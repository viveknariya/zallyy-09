import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PolarAuthModal } from "@/components/systems/polar/PolarAuthModal";

export const metadata: Metadata = {
  title: "Polar Sign Up Pattern",
  description: "Obsidian dark registration modal modeled after polar.sh.",
  alternates: { canonical: "/design-systems/polar/signup" },
};

export default function PolarSignUpPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Polar", href: "/design-systems/polar" },
          { label: "Sign Up", href: "/design-systems/polar/signup" },
        ]}
      />
      <PolarAuthModal mode="signup" />
    </>
  );
}
