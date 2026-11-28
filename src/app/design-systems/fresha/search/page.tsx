import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaSearchCatalog } from "@/components/systems/fresha/FreshaSearchCatalog";

export const metadata: Metadata = {
  title: "Discover Venues & Map Search — Fresha Design System",
  description:
    "Split-pane beauty and wellness venue discovery with category chips, bookable time slots, empty state specimen, and interactive map pins.",
  alternates: { canonical: "/design-systems/fresha/search" },
};

export default function FreshaSearchPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Discover Search", href: "/design-systems/fresha/search" },
        ]}
      />
      <FreshaSearchCatalog />
    </>
  );
}
