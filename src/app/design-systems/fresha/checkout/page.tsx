import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaBookingCheckout } from "@/components/systems/fresha/FreshaBookingCheckout";

export const metadata: Metadata = {
  title: "Booking Checkout, Gift Cards & Memberships — Fresha Design System",
  description:
    "Multi-step appointment checkout, circular date picker, payment method confirmation, digital gift card selector, and membership plan flow.",
  alternates: { canonical: "/design-systems/fresha/checkout" },
};

export default function FreshaCheckoutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Checkout", href: "/design-systems/fresha/checkout" },
        ]}
      />
      <FreshaBookingCheckout />
    </>
  );
}
