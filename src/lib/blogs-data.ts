import type { BlogCardItem } from "@/components/blogs/BlogIndexFilter";
import type { TabItem } from "@/components/ui/Tabs";

export const BLOG_CATEGORIES: TabItem[] = [
  { id: "all", label: "All Articles" },
  { id: "workflow", label: "Workflow" },
  { id: "agency-model", label: "Engineering Model" },
  { id: "seo-auditing", label: "SEO & Auditing" },
];

export const BLOG_POSTS: BlogCardItem[] = [
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
