import { ArrowRight, Palette } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

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
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-foreground"
          >
            Design Systems
          </Link>
          <Button href="/design-systems/tilda" variant="outline" size="sm">
            Tilda System
          </Button>
        </div>
      </header>

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
        ]}
      />

      <main className="flex-1 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Badge tone="accent">Catalog</Badge>
          <h1 className="mt-4 font-display text-4xl font-light text-foreground">
            Design Systems Directory
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted">
            Every design system is self-contained under its own SEO-friendly
            route with scoped tokens, reusable components, and demo pages.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card variant="bordered" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
                    <Palette className="h-5 w-5" />
                  </div>
                  <Badge tone="accent">tilda.cc</Badge>
                </div>
                <h2 className="mt-6 font-display text-2xl font-normal text-foreground">
                  Tilda Design System
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Editorial minimalism, coral accents (#FA8A64), sharp 2px
                  frames, pricing tabs, auth flows, and workspace tables.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                <span className="font-mono text-xs text-muted">10 routes</span>
                <Button href="/design-systems/tilda" variant="accent" size="sm">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
