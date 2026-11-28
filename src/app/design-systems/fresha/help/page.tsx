import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaHelpCenterView } from "@/components/systems/fresha/FreshaEditorial";

export const metadata: Metadata = {
  title: "Help Center & Support — Fresha Design System",
  description:
    "Searchable knowledge base hub featuring Explore. Learn. Grow. hero, popular guides, topic cards, and colorful support banner.",
  alternates: { canonical: "/design-systems/fresha/help" },
};

export default function FreshaHelpPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Support & Help", href: "/design-systems/fresha/help" },
        ]}
      />
      <FreshaHelpCenterView />
    </>
  );
}
