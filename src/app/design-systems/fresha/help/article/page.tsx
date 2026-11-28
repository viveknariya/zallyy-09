import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaHelpArticleView } from "@/components/systems/fresha/FreshaEditorial";

export const metadata: Metadata = {
  title: "Add Team Members Knowledge Guide — Fresha Design System",
  description:
    "Detailed knowledge-base tutorial with Desktop/Mobile switcher, numbered violet step badges, tip callouts, and interactive FAQ accordion.",
  alternates: { canonical: "/design-systems/fresha/help/article" },
};

export default function FreshaHelpArticlePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Help", href: "/design-systems/fresha/help" },
          { label: "Add Team Members", href: "/design-systems/fresha/help/article" },
        ]}
      />
      <FreshaHelpArticleView />
    </>
  );
}
