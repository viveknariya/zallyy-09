import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PolarAuthModal } from "@/components/systems/polar/PolarAuthModal";

export const metadata: Metadata = {
  title: "Polar Sign In Pattern",
  description: "Obsidian dark OAuth & email sign-in modal modeled after polar.sh.",
  alternates: { canonical: "/design-systems/polar/login" },
};

export default function PolarLoginPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Polar", href: "/design-systems/polar" },
          { label: "Sign In", href: "/design-systems/polar/login" },
        ]}
      />
      <PolarAuthModal />
    </>
  );
}
