import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaOrdersView } from "@/components/systems/fresha/FreshaAccountPortal";

export const metadata: Metadata = {
  title: "Product Order History — Fresha Design System",
  description:
    "Order history ledger featuring centered pastel empty-state specimen and fulfilled studio product purchase toggle.",
  alternates: { canonical: "/design-systems/fresha/orders" },
};

export default function FreshaOrdersPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Order History", href: "/design-systems/fresha/orders" },
        ]}
      />
      <FreshaOrdersView />
    </>
  );
}
