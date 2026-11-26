import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JetBrainsNewsGrid } from "@/components/systems/jetbrains/JetBrainsNewsGrid";

export const metadata: Metadata = {
  title: "JetBrains Newsroom & Updates Pattern",
  description:
    "Product releases and developer announcements modeled after jetbrains.com/company/news/.",
  alternates: { canonical: "/design-systems/jetbrains/news" },
};

export default function JetBrainsNewsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "JetBrains", href: "/design-systems/jetbrains" },
          { label: "Newsroom", href: "/design-systems/jetbrains/news" },
        ]}
      />
      <JetBrainsNewsGrid />
    </>
  );
}
