import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantBlogGrid } from "@/components/systems/brilliant/BrilliantEditorial";

export const metadata: Metadata = {
  title: "Brilliant Blog — Engineering, Pedagogy & Curriculum",
  description:
    "Editorial stories from the Brilliant team on interactive learning design, math, and computer science.",
  alternates: { canonical: "/design-systems/brilliant/blog" },
};

export default function BrilliantBlogPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Blog", href: "/design-systems/brilliant/blog" },
        ]}
      />
      <BrilliantBlogGrid />
    </>
  );
}
