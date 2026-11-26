import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JetBrainsFaq } from "@/components/systems/jetbrains/JetBrainsFaq";
import { JetBrainsPricing } from "@/components/systems/jetbrains/JetBrainsPricing";

export const metadata: Metadata = {
  title: "JetBrains Store & Pricing Pattern",
  description:
    "Subscription options, underline tabs, and pill billing toggle inspired by jetbrains.com/store/.",
  alternates: { canonical: "/design-systems/jetbrains/pricing" },
};

export default function JetBrainsPricingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "JetBrains", href: "/design-systems/jetbrains" },
          { label: "Pricing", href: "/design-systems/jetbrains/pricing" },
        ]}
      />
      <JetBrainsPricing />
      <JetBrainsFaq />
    </>
  );
}
