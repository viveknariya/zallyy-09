import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaBlog } from "@/components/systems/tilda/TildaBlog";

export const metadata: Metadata = {
  title: "Tilda Editorial Blog",
  description:
    "Editorial blog layout with monthly newsletter subscribe banner, category filter tabs, and article feed cards.",
  alternates: { canonical: "/design-systems/tilda/blog" },
};

export default function TildaBlogPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Blog", href: "/design-systems/tilda/blog" },
        ]}
      />
      <TildaBlog />
    </>
  );
}
