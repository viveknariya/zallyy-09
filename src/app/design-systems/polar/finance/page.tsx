import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PolarFinance } from "@/components/systems/polar/PolarFinance";

export const metadata: Metadata = {
  title: "Polar Finance & Payouts Pattern",
  description: "Wallet balance cards and payouts table modeled after polar.sh/dashboard/finance.",
  alternates: { canonical: "/design-systems/polar/finance" },
};

export default function PolarFinancePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Polar", href: "/design-systems/polar" },
          { label: "Finance", href: "/design-systems/polar/finance" },
        ]}
      />
      <PolarFinance />
    </>
  );
}
