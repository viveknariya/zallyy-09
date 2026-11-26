"use client";

import { ArrowRight, Code2, Globe, LayoutGrid } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";

const categories = [
  { id: "all", label: "All Articles" },
  { id: "updates", label: "Feature Updates" },
  { id: "design", label: "Web Design" },
  { id: "marketing", label: "Marketing" },
];

const posts = [
  {
    id: "timelapse",
    category: "design",
    tag: "Web Design",
    date: "Oct 18, 2026",
    title: "Modular Block Architecture for High-Contrast Editorial Sites",
    excerpt:
      "See how 0px geometric framing, alternating #FFFFFF / #F7F7F7 surfaces, and coral accents guide reader attention.",
    icon: LayoutGrid,
  },
  {
    id: "zero-block",
    category: "updates",
    tag: "Feature Updates",
    date: "Oct 10, 2026",
    title: "Introducing Multi-Tab Analytics & Dual-Month Date Pickers",
    excerpt:
      "Track daily vs. monthly sessions, device splits, and CRM lead pipelines directly inside your project workspace.",
    icon: Globe,
  },
  {
    id: "crm-flows",
    category: "marketing",
    tag: "Marketing",
    date: "Oct 02, 2026",
    title: "Connecting Landing Page Forms to Your Built-In CRM Pipeline",
    excerpt:
      "Capture leads from hero and pricing CTAs with zero third-party glue code and inspect contact cards in one click.",
    icon: Code2,
  },
];

/**
 * Editorial Blog hub modeled after blog-en.tilda.cc.
 */
export function TildaBlog() {
  const [category, setCategory] = useState("all");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const visiblePosts =
    category === "all" ? posts : posts.filter((p) => p.category === category);

  return (
    <div className="flex-1 bg-background">
      {/* Editorial Blog Hero */}
      <section className="border-b border-border bg-background py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="font-display text-4xl font-light tracking-tight text-foreground sm:text-5xl">
              Tilda Blog
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Feature updates, web design &amp; marketing tips, and hints on how
              to get the most out of the platform. Subscribe to get selected
              news to your inbox once a month.
            </p>

            {subscribed ? (
              <div className="mt-8 border border-accent bg-accent-soft/20 p-4 text-sm text-foreground">
                Subscribed <span className="font-mono">{email}</span> to the monthly digest.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setSubscribed(true);
                }}
                className="mt-8 flex max-w-lg flex-col sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type your email here"
                  aria-label="Email address"
                  className="flex-1 border border-foreground bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none"
                />
                <button
                  type="submit"
                  className="border border-foreground bg-foreground px-7 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-background hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="mt-3 text-xs text-muted">
              We&apos;ll send you our news digest once a month.
            </p>
          </div>

          {/* Geometric stacked blocks illustration */}
          <div className="lg:col-span-5">
            <div className="border border-border bg-surface p-8">
              <div className="space-y-3">
                <div className="flex items-center justify-between border border-foreground bg-background p-4">
                  <span className="font-mono text-xs text-foreground">&lt;/&gt; Block Stack</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-foreground">
                    2
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-border bg-background p-4">
                    <div className="h-2 w-12 bg-foreground/20" />
                    <div className="mt-2 h-2 w-20 bg-foreground/10" />
                  </div>
                  <div className="border border-border bg-background p-4">
                    <div className="h-2 w-10 bg-accent" />
                    <div className="mt-2 h-2 w-16 bg-foreground/15" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Feed */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <Tabs items={categories} activeId={category} onChange={setCategory} />
            <span className="font-mono text-xs text-muted">
              {visiblePosts.length} articles
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {visiblePosts.map((post) => {
              const Icon = post.icon;
              return (
                <Card
                  key={post.id}
                  variant="subtle"
                  className="flex flex-col justify-between bg-background"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <Badge tone="accent">{post.tag}</Badge>
                      <span className="font-mono text-xs text-muted">
                        {post.date}
                      </span>
                    </div>
                    <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 font-display text-xl font-medium text-foreground">
                      {post.title}
                    </h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                      Read Article <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
