import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaSitemapView } from "@/components/systems/fresha/FreshaEditorial";

export const metadata: Metadata = {
  title: "Locations & Countries Sitemap — Fresha Design System",
  description:
    "Multi-column directory of top cities, treatment categories, and supported global countries.",
  alternates: { canonical: "/design-systems/fresha/sitemap" },
};

export default function FreshaSitemapPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Sitemap", href: "/design-systems/fresha/sitemap" },
        ]}
      />
      <FreshaSitemapView />
    </>
  );
}
