import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PolarIntegration } from "@/components/systems/polar/PolarIntegration";

export const metadata: Metadata = {
  title: "Polar SDK Integration Pattern",
  description: "Developer SDK & checkout integration pattern modeled after polar.sh.",
  alternates: { canonical: "/design-systems/polar/integrate" },
};

export default function PolarIntegratePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Polar", href: "/design-systems/polar" },
          { label: "Integrate", href: "/design-systems/polar/integrate" },
        ]}
      />
      <PolarIntegration />
    </>
  );
}
