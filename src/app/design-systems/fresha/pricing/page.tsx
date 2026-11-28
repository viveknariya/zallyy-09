import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaPricingView } from "@/components/systems/fresha/FreshaBusinessPricing";

export const metadata: Metadata = {
  title: "Pricing & Optional Paid Features — Fresha Design System",
  description:
    "Subscription-free core platform breakdown paired with transparent pay-as-you-go payment processing, messaging, and add-on pricing.",
  alternates: { canonical: "/design-systems/fresha/pricing" },
};

export default function FreshaPricingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Pricing", href: "/design-systems/fresha/pricing" },
        ]}
      />
      <FreshaPricingView />
    </>
  );
}
