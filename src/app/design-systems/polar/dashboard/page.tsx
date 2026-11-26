import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PolarDashboard } from "@/components/systems/polar/PolarDashboard";

export const metadata: Metadata = {
  title: "Polar Dashboard & Analytics Pattern",
  description:
    "Overview KPIs, time-range pill switcher, and Create Dashboard modal modeled after polar.sh/dashboard.",
  alternates: { canonical: "/design-systems/polar/dashboard" },
};

export default function PolarDashboardPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Polar", href: "/design-systems/polar" },
          { label: "Dashboard", href: "/design-systems/polar/dashboard" },
        ]}
      />
      <PolarDashboard />
    </>
  );
}
