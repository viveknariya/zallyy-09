import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  DirectoryFooter,
  DirectoryHeader,
} from "@/components/directory/DirectoryShell";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { BlogToc, type BlogTocItem } from "./BlogToc";

export interface RelatedArticleItem {
  href: string;
  title: string;
  category: string;
  readTime: string;
}

interface BlogArticleShellProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  excerpt: string;
  tocItems: BlogTocItem[];
  relatedArticles: RelatedArticleItem[];
  children: ReactNode;
}

/**
 * High-contrast Tilda editorial shell for technical blog articles (no author metadata).
 */
export function BlogArticleShell({
  breadcrumbs,
  title,
  excerpt,
  tocItems,
  relatedArticles,
  children,
}: BlogArticleShellProps) {
  return (
    <div className="min-h-full flex flex-col bg-background">
      <DirectoryHeader />
      <Breadcrumbs items={breadcrumbs} />

      <header className="border-b border-border bg-surface py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl font-normal tracking-tight text-foreground sm:text-5xl leading-[1.1]">
              {title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {excerpt}
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-background py-14 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-start">
          <BlogToc items={tocItems} />

          <article className="min-w-0 flex-1 max-w-3xl">
            <div className="space-y-8 text-base leading-relaxed text-muted">
              {children}
            </div>

            {relatedArticles.length > 0 && (
              <section className="mt-16 border-t border-border pt-12">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-display text-2xl font-normal tracking-tight text-foreground">
                    Related Dispatches
                  </h2>
                  <Button href="/blogs" variant="outline" size="sm">
                    All Articles
                  </Button>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {relatedArticles.map((article) => (
                    <Card
                      key={article.href}
                      variant="subtle"
                      className="flex flex-col justify-between hover:border-foreground"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <Badge tone="neutral">{article.category}</Badge>
                          <span className="font-mono text-xs text-muted">
                            {article.readTime}
                          </span>
                        </div>
                        <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                          <Link
                            href={article.href}
                            className="hover:text-accent-strong transition-colors"
                          >
                            {article.title}
                          </Link>
                        </h3>
                      </div>
                      <div className="mt-6 border-t border-border pt-4">
                        <Link
                          href={article.href}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-foreground hover:text-accent-strong transition-colors"
                        >
                          Read Article <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>
      </main>

      <DirectoryFooter variant="surface" />
    </div>
  );
}

interface BlogSectionProps {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

/**
 * Numbered editorial article section with coral circular step marker.
 */
export function BlogSection({
  id,
  number,
  eyebrow,
  title,
  children,
}: BlogSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 space-y-4 border-t border-border pt-8"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent font-mono text-xs font-semibold text-foreground">
          {number}
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
          {eyebrow}
        </span>
      </div>

      <h2 className="font-display text-2xl font-normal tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>

      <div className="space-y-4 text-base leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

/**
 * Sharp high-contrast CLI/code specimen block (0px radius, no shadow).
 */
export function BlogCodeBlock({
  label,
  runtime,
  command,
}: {
  label: string;
  runtime?: string;
  command: string;
}) {
  return (
    <div className="border-2 border-foreground bg-foreground text-background">
      <div className="flex items-center justify-between border-b border-background/20 px-4 py-2 font-mono text-[11px] text-background/70">
        <span>{label}</span>
        {runtime && <span>{runtime}</span>}
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-xs text-accent">
        <code>{command}</code>
      </pre>
    </div>
  );
}

/**
 * Inline monospace token highlight styled cleanly without rounded pill corners.
 */
export function BlogInlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="border border-border bg-surface px-1.5 py-0.5 font-mono text-xs font-medium text-foreground">
      {children}
    </code>
  );
}

/**
 * Tilda Alert-style editorial takeaway banner (border-l-4 border-l-accent).
 */
export function BlogTakeaway({
  label,
  quote,
}: {
  label: string;
  quote: string;
}) {
  return (
    <div className="mt-6 border border-border border-l-4 border-l-accent bg-accent-soft/20 p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
        {label}
      </p>
      <p className="mt-2 font-display text-lg font-normal leading-relaxed text-foreground">
        {quote}
      </p>
    </div>
  );
}
