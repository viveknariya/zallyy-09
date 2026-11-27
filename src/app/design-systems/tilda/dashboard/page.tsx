import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaDashboard } from "@/components/systems/tilda/TildaDashboard";
import { buildTildaMetadata } from "../_metadata";

export const metadata = buildTildaMetadata({
  title: "Tilda Analytics Dashboard",
  description:
    "Website and CRM statistics dashboard with KPI metric cards, timeframe tabs, dual-month date range picker, and bar chart.",
  path: "/design-systems/tilda/dashboard",
});

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
