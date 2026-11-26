import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantHelpCenter } from "@/components/systems/brilliant/BrilliantEditorial";

export const metadata: Metadata = {
  title: "Support & Help Center — Brilliant Design System",
  description:
    "Searchable knowledge base with dark header bar and categorized help article collections.",
  alternates: { canonical: "/design-systems/brilliant/help" },
};

export default function BrilliantHelpPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Help", href: "/design-systems/brilliant/help" },
        ]}
      />
      <BrilliantHelpCenter />
    </>
  );
}
