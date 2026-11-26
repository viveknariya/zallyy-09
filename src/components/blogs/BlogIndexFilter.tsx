"use client";

import { ArrowRight, Layers, Search, Workflow } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Tabs, type TabItem } from "@/components/ui/Tabs";

export interface BlogCardItem {
  slug: string;
  href: string;
  categoryId: string;
  categoryLabel: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  iconKey: "workflow" | "layers" | "search";
}

interface BlogIndexFilterProps {
  categories: TabItem[];
  posts: BlogCardItem[];
}

function renderPostIcon(iconKey: BlogCardItem["iconKey"]) {
  switch (iconKey) {
    case "workflow":
      return <Workflow className="h-5 w-5" />;
    case "layers":
      return <Layers className="h-5 w-5" />;
    case "search":
      return <Search className="h-5 w-5" />;
  }
}

/**
 * Client filter feed using Tilda underline Tabs and sharp 0px Card blocks.
 */
export function BlogIndexFilter({ categories, posts }: BlogIndexFilterProps) {
  const [activeCategory, setActiveCategory] = useState(
    categories[0]?.id ?? "all"
  );

  const visiblePosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.categoryId === activeCategory);

  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <Tabs
            items={categories}
            activeId={activeCategory}
            onChange={setActiveCategory}
          />
          <span className="font-mono text-xs text-muted">
            {visiblePosts.length} {visiblePosts.length === 1 ? "article" : "articles"}
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {visiblePosts.map((post) => (
            <Card
              key={post.slug}
              variant="subtle"
              className="flex flex-col justify-between bg-background hover:border-foreground"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <Badge tone="accent">{post.categoryLabel}</Badge>
                  <span className="font-mono text-xs text-muted">
                    {post.date}
                  </span>
                </div>

                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
                  {renderPostIcon(post.iconKey)}
                </div>

                <h2 className="mt-5 font-display text-xl font-medium text-foreground">
                  <Link
                    href={post.href}
                    className="hover:text-accent-strong transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="font-mono text-xs text-muted">
                  {post.readTime}
                </span>
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-foreground hover:text-accent-strong transition-colors"
                >
                  Read Article <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
