import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaBlogArticle } from "@/components/systems/fresha/FreshaEditorial";

export const metadata: Metadata = {
  title: "7 Best Salon Scheduling Software Platforms — Fresha Blog",
  description:
    "Long-form editorial guide comparing calendar scheduling, POS terminals, and retention tools for salons and spas.",
  alternates: { canonical: "/design-systems/fresha/blog/post" },
};

export default function FreshaBlogPostPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Blog", href: "/design-systems/fresha/blog" },
          { label: "Scheduling Guide", href: "/design-systems/fresha/blog/post" },
        ]}
      />
      <FreshaBlogArticle />
    </>
  );
}
