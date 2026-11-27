import type { Metadata } from "next";
import { FeaturedBlogsSection } from "@/components/blogs/FeaturedBlogsSection";
import { DirectorySystemCard } from "@/components/directory/DirectoryCards";
import {
  DirectoryFooter,
  DirectoryHeader,
} from "@/components/directory/DirectoryShell";
import { DIRECTORY_SYSTEMS } from "@/components/directory/directory-data";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "All Design Systems",
  description:
    "Explore all website design systems, UI component libraries, color palettes, and Next.js starter templates.",
  alternates: { canonical: "/design-systems" },
  openGraph: {
    title: "All Design Systems",
    description:
      "Explore all website design systems, UI component libraries, and Next.js starter templates.",
    url: "/design-systems",
  },
};

export default function DesignSystemsIndexPage() {
  return (
    <div className="min-h-full flex flex-col bg-background">
      <DirectoryHeader />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
        ]}
      />

      <main className="flex-1">
        <section className="border-b border-border bg-background py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div>
              <Badge tone="accent">Systems</Badge>
              <h1 className="mt-4 font-display text-4xl font-light text-foreground">
                Design Systems Directory
              </h1>
              <p className="mt-3 max-w-2xl text-base text-muted">
                Every design system is self-contained under its own SEO-friendly
                route with scoped tokens, reusable components, and demo pages.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {DIRECTORY_SYSTEMS.map((sys) => (
                <DirectorySystemCard key={sys.slug} system={sys} mode="catalog" />
              ))}
            </div>

            <div className="mt-12 border border-border border-l-4 border-l-accent bg-accent-soft/20 p-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
                  For US Small &amp; Medium Businesses
                </p>
                <p className="mt-1 text-sm text-muted">
                  Want us to customize one of these systems into your business website, client portal, or automated workflow—starting low with live staging first?
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Button href="/services" variant="outline" size="sm">
                  View Services
                </Button>
                <Button href="/pricing#request-quote" variant="accent" size="sm">
                  Get Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        <FeaturedBlogsSection variant="surface" />
      </main>

      <DirectoryFooter variant="background" />
    </div>
  );
}
