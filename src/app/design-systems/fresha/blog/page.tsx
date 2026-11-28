import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaBlogGrid } from "@/components/systems/fresha/FreshaEditorial";

export const metadata: Metadata = {
  title: "Fresha Blog — Partner Stories & Industry News",
  description:
    "Latest editorial stories, partner spotlights, product releases, and salon management tips with topic filter pills.",
  alternates: { canonical: "/design-systems/fresha/blog" },
};

export default function FreshaBlogPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Blog", href: "/design-systems/fresha/blog" },
        ]}
      />
      <FreshaBlogGrid />
    </>
  );
}
