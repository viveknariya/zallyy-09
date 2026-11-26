import type { Metadata } from "next";
import { PricingSection } from "@/components/sections/PricingSection";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tilda Pricing UI Pattern",
  description:
    "Three-tier pricing layout with annual/monthly underline tabs and bordered cards modeled after Tilda.cc.",
  alternates: { canonical: "/design-systems/tilda/pricing" },
};

export default function TildaPricingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Pricing", href: "/design-systems/tilda/pricing" },
        ]}
      />
      <PricingSection />
    </>
  );
}
