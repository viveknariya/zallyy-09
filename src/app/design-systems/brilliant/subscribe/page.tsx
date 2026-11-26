import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantPricing } from "@/components/systems/brilliant/BrilliantPricing";

export const metadata: Metadata = {
  title: "Premium Subscription & Pricing — Brilliant Design System",
  description:
    "Midnight blueprint navy subscription paywall, Annual vs Monthly plan selector, Free vs Premium comparison matrix, and Gift/Group plans.",
  alternates: { canonical: "/design-systems/brilliant/subscribe" },
};

export default function BrilliantSubscribePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Subscribe", href: "/design-systems/brilliant/subscribe" },
        ]}
      />
      <BrilliantPricing />
    </>
  );
}
