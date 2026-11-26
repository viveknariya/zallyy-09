import type { Metadata } from "next";
import {
  BlogIndexFilter,
  type BlogCardItem,
} from "@/components/blogs/BlogIndexFilter";
import {
  DirectoryFooter,
  DirectoryHeader,
} from "@/components/directory/DirectoryShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import type { TabItem } from "@/components/ui/Tabs";

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

const categories: TabItem[] = [
  { id: "all", label: "All Articles" },
  { id: "workflow", label: "Workflow" },
  { id: "agency-model", label: "Engineering Model" },
  { id: "seo-auditing", label: "SEO & Auditing" },
];

const posts: BlogCardItem[] = [
  {
    slug: "how-to-clone-site-using-antigravity-and-uxpilot",
    href: "/blogs/how-to-clone-site-using-antigravity-and-uxpilot",
    categoryId: "workflow",
    categoryLabel: "Workflow",
    date: "NOV 9, 2026",
    readTime: "1 min read",
    title: "How to Clone Any Website Using Antigravity & UXpilot",
    excerpt:
      "The 3-step autonomous cloning workflow: turn client requirements into a visual PDF contract, then prompt Antigravity to build production code in minutes.",
    iconKey: "workflow",
  },
  {
    slug: "zero-upfront-software-development",
    href: "/blogs/zero-upfront-software-development",
    categoryId: "agency-model",
    categoryLabel: "Engineering Model",
    date: "NOV 9, 2026",
    readTime: "1 min read",
    title: "Why We Build Custom Software Before You Pay a Single Dollar",
    excerpt:
      "Traditional agency retainers are broken. How the zero-upfront, pay-when-live engineering model aligns incentives and ships products in weeks.",
    iconKey: "layers",
  },
  {
    slug: "how-to-do-seo-with-codex-and-agentic-seo-skill",
    href: "/blogs/how-to-do-seo-with-codex-and-agentic-seo-skill",
    categoryId: "seo-auditing",
    categoryLabel: "SEO & Auditing",
    date: "NOV 8, 2026",
    readTime: "1 min read",
    title: "Trustworthy SEO Audits with Codex & Agentic Skills",
    excerpt:
      "How to replace vague AI SEO advice with deterministic evidence checks: schema verification, canonical audits, and automated crawler reporting.",
    iconKey: "search",
  },
];

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

        <BlogIndexFilter categories={categories} posts={posts} />
      </main>

      <DirectoryFooter variant="background" />
    </div>
  );
}
