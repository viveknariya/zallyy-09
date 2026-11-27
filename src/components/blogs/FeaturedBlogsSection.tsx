import { ArrowRight, Layers, Search, Workflow } from "lucide-react";
import Link from "next/link";
import type { BlogCardItem } from "@/components/blogs/BlogIndexFilter";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { BLOG_POSTS } from "@/lib/blogs-data";

function BlogCardIcon({ iconKey }: { iconKey: BlogCardItem["iconKey"] }) {
  switch (iconKey) {
    case "workflow":
      return <Workflow className="h-5 w-5" />;
    case "layers":
      return <Layers className="h-5 w-5" />;
    case "search":
      return <Search className="h-5 w-5" />;
  }
}

interface FeaturedBlogsSectionProps {
  variant?: "surface" | "background";
  hasBottomBorder?: boolean;
}

/**
 * Shared Tilda-styled Featured Blogs section synced across company pages.
 */
export function FeaturedBlogsSection({
  variant = "surface",
  hasBottomBorder = false,
}: FeaturedBlogsSectionProps) {
  const sectionBg = variant === "background" ? "bg-background" : "bg-surface";
  const cardBg = variant === "background" ? "bg-surface" : "bg-background";
  const borderClass = hasBottomBorder ? "border-b border-border" : "";

  return (
    <section id="blogs" className={`${borderClass} ${sectionBg} py-20`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              Engineering &amp; Delivery Notes
            </p>
            <h2 className="mt-2 font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
              Featured Blogs
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Dispatches on our zero-upfront agency model, autonomous build workflows, and deterministic SEO verification.
            </p>
          </div>
          <Link
            href="/blogs"
            className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-foreground underline underline-offset-4 hover:text-accent-strong transition-colors"
          >
            View All Articles
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((blog) => (
            <Card
              key={blog.href}
              variant="bordered"
              className={`${cardBg} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
                    <BlogCardIcon iconKey={blog.iconKey} />
                  </div>
                  <Badge tone="accent">{blog.categoryLabel}</Badge>
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
          ))}
        </div>
      </div>
    </section>
  );
}
