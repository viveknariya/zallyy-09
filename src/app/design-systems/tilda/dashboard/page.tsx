import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaDashboard } from "@/components/systems/tilda/TildaDashboard";

export const metadata: Metadata = {
  title: "Tilda Analytics Dashboard",
  description:
    "Website and CRM statistics dashboard with KPI metric cards, timeframe tabs, dual-month date range picker, and bar chart.",
  alternates: { canonical: "/design-systems/tilda/dashboard" },
};

export default function TildaDashboardPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Dashboard", href: "/design-systems/tilda/dashboard" },
        ]}
      />
      <TildaDashboard />
    </>
  );
}
