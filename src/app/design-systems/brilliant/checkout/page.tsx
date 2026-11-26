import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantCheckout } from "@/components/systems/brilliant/BrilliantCheckout";

export const metadata: Metadata = {
  title: "Premium Trial Checkout — Brilliant Design System",
  description:
    "7-day free trial timeline paired with payment checkout card and instant trial activation confirmation.",
  alternates: { canonical: "/design-systems/brilliant/checkout" },
};

export default function BrilliantCheckoutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Checkout", href: "/design-systems/brilliant/checkout" },
        ]}
      />
      <BrilliantCheckout />
    </>
  );
}
