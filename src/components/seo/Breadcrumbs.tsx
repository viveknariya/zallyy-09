import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Accessible breadcrumb bar paired with schema.org BreadcrumbList JSON-LD for SEO.
 */
export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <div className={`border-b border-border bg-surface/60 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-2 gap-y-1 px-6 py-3 text-xs text-muted"
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <span key={item.href} className="inline-flex items-center gap-2">
              {idx > 0 && <ChevronRight className="h-3.5 w-3.5 text-muted/70" />}
              {isLast ? (
                <span className="font-semibold text-foreground" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
