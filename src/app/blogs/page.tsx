import type { Metadata } from "next";
import { BlogIndexFilter } from "@/components/blogs/BlogIndexFilter";
import {
  DirectoryFooter,
  DirectoryHeader,
} from "@/components/directory/DirectoryShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/blogs-data";

export const metadata: Metadata = {
  title: "Engineering Blogs — Architecture & Workflow Dispatches",
  description:
    "Concise technical breakdowns covering autonomous site cloning workflows, live staging engineering delivery, and deterministic SEO audits.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Engineering Blogs — Architecture & Workflow Dispatches",
    description:
      "Concise technical breakdowns covering autonomous site cloning workflows, live staging engineering delivery, and deterministic SEO audits.",
    url: "/blogs",
    type: "website",
  },
};

export default function BlogsIndexPage() {
  return (
    <div className="min-h-full flex flex-col bg-background">
      <DirectoryHeader />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blogs" },
        ]}
      />

      <main className="flex-1">
        <section className="border-b border-border bg-background py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <Badge tone="accent">Technical Dispatches</Badge>
              <h1 className="mt-5 font-display text-4xl font-light tracking-tight text-foreground sm:text-5xl">
                One-Minute Engineering Reads
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Crisp architecture blueprints, autonomous development workflows,
                and deterministic verification notes—digestible in 60 seconds.
              </p>
            </div>
          </div>
        </section>

        <BlogIndexFilter categories={BLOG_CATEGORIES} posts={BLOG_POSTS} />
      </main>

      <DirectoryFooter variant="background" />
    </div>
  );
}
