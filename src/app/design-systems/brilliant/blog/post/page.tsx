import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantBlogArticle } from "@/components/systems/brilliant/BrilliantEditorial";

export const metadata: Metadata = {
  title: "Programming in 2025 — Brilliant Blog",
  description:
    "Long-form article specimen covering computational thinking, abstraction, and upcoming computer science courses.",
  alternates: { canonical: "/design-systems/brilliant/blog/post" },
};

export default function BrilliantBlogPostPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Blog", href: "/design-systems/brilliant/blog" },
          { label: "Programming in 2025", href: "/design-systems/brilliant/blog/post" },
        ]}
      />
      <BrilliantBlogArticle />
    </>
  );
}
