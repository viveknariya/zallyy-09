import { ArrowRight, Layers, Search, Workflow } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  DirectorySkillCard,
  DirectorySystemCard,
} from "@/components/directory/DirectoryCards";
import {
  DirectoryFooter,
  DirectoryHeader,
} from "@/components/directory/DirectoryShell";
import {
  DIRECTORY_SKILLS,
  DIRECTORY_SYSTEMS,
} from "@/components/directory/directory-data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SITE_DOMAIN, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description:
    "zallyy (zallyy.com) is a software development agency building production Next.js applications, curated design systems, and portable AI agent skills.",
  alternates: { canonical: "/" },
};

const FEATURED_BLOGS = [
  {
    href: "/blogs/how-to-clone-site-using-antigravity-and-uxpilot",
    category: "Workflow",
    title: "How to Clone Any Website Using Antigravity & UXpilot",
    excerpt:
      "Turn client requirements into a visual PDF contract, then prompt Antigravity to build production code in minutes.",
    icon: Workflow,
  },
  {
    href: "/blogs/zero-upfront-software-development",
    category: "Engineering Model",
    title: "Why We Build Custom Software Before You Pay a Single Dollar",
    excerpt:
      "How the zero-upfront, pay-when-live engineering model aligns incentives and ships products on live staging sandboxes.",
    icon: Layers,
  },
  {
    href: "/blogs/how-to-do-seo-with-codex-and-agentic-seo-skill",
    category: "SEO & Auditing",
    title: "Trustworthy SEO Audits with Codex & Agentic Skills",
    excerpt:
      "Replace vague AI SEO advice with deterministic evidence checks, schema verification, and automated crawler reporting.",
    icon: Search,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-full flex flex-col bg-background">
      <DirectoryHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge tone="accent">{SITE_TAGLINE}</Badge>
              <h1 className="mt-6 font-display text-4xl font-normal tracking-tight text-foreground sm:text-6xl leading-[1.1]">
                Software systems &amp; interfaces built for production.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                <span className="font-semibold text-foreground">{SITE_NAME}</span>{" "}
                (<span className="font-mono text-sm text-foreground">{SITE_DOMAIN}</span>)
                is a software development agency shipping production web platforms,
                curated UI systems under{" "}
                <span className="font-mono text-sm text-foreground">/design-systems</span>,
                and portable{" "}
                <span className="font-mono text-sm text-foreground">SKILL.md</span>{" "}
                agent specs.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Design Systems */}
        <section id="design-systems" className="border-b border-border bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                  Featured Design Systems
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  Open any system to inspect its scoped tokens, interactive components, and full route demos.
                </p>
              </div>
              <Link
                href="/design-systems"
                className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-foreground underline underline-offset-4 hover:text-accent-strong transition-colors"
              >
                View All
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {DIRECTORY_SYSTEMS.map((sys) => (
                <DirectorySystemCard key={sys.slug} system={sys} mode="landing" />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Design Skills */}
        <section id="design-skills" className="border-b border-border bg-background py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                  Featured Design Skills
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  Each design system pairs with a structured agent skill containing tokens, Do/Don&apos;t rules, and 23 component specs on GitHub.
                </p>
              </div>
              <Link
                href="/design-skills"
                className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-foreground underline underline-offset-4 hover:text-accent-strong transition-colors"
              >
                View All
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {DIRECTORY_SKILLS.map((skill) => (
                <DirectorySkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Blogs */}
        <section id="blogs" className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                  Featured Blogs
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  Concise engineering dispatches on autonomous workflows, live staging delivery, and deterministic SEO audits.
                </p>
              </div>
              <Link
                href="/blogs"
                className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-foreground underline underline-offset-4 hover:text-accent-strong transition-colors"
              >
                View All
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {FEATURED_BLOGS.map((blog) => {
                const Icon = blog.icon;
                return (
                  <Card
                    key={blog.href}
                    variant="bordered"
                    className="bg-background flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                        <Badge tone="accent">{blog.category}</Badge>
                      </div>
                      <h3 className="mt-6 font-display text-2xl font-normal text-foreground">
                        <Link
                          href={blog.href}
                          className="hover:text-accent-strong transition-colors"
                        >
                          {blog.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {blog.excerpt}
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-border flex items-center justify-between gap-3">
                      <span className="font-mono text-xs text-muted truncate">
                        {blog.href}
                      </span>
                      <Button
                        href={blog.href}
                        variant="primary"
                        size="sm"
                        className="shrink-0"
                      >
                        Open <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <DirectoryFooter variant="background" />
    </div>
  );
}
