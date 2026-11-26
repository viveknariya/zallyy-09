import { ArrowRight, Calendar, Code2, CreditCard, Palette } from "lucide-react";
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
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/viveknariya/zallyy-09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/80 hover:text-foreground"
            >
              GitHub
            </a>
            <Button href="/design-systems/tilda" variant="outline" size="sm">
              Tilda System
            </Button>
          </div>
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

            <Card variant="bordered" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-white"
                    style={{ background: "linear-gradient(135deg, #6B57FF 0%, #167DFF 100%)" }}
                  >
                    <Code2 className="h-5 w-5" />
                  </div>
                  <Badge tone="dark">jetbrains.com</Badge>
                </div>
                <h2 className="mt-6 font-display text-2xl font-normal text-foreground">
                  JetBrains Design System
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Dark-first developer UI (#19191C), electric blue pill CTAs
                  (#167DFF), IDE gradient badges, and JetBrains Mono.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                <span className="font-mono text-xs text-muted">8 routes</span>
                <Button href="/design-systems/jetbrains" variant="primary" size="sm">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </Card>

            <Card variant="bordered" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <Badge tone="neutral">polar.sh</Badge>
                </div>
                <h2 className="mt-6 font-display text-2xl font-normal text-foreground">
                  Polar Design System
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  SaaS billing &amp; analytics UI with rounded-2xl cards,
                  obsidian auth modals, and pill controls.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                <span className="font-mono text-xs text-muted">11 routes</span>
                <Button href="/design-systems/polar" variant="primary" size="sm">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </Card>

            <Card variant="bordered" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-white"
                    style={{ background: "#FF5416" }}
                  >
                    <Calendar className="h-5 w-5" />
                  </div>
                  <Badge tone="neutral">cron.com</Badge>
                </div>
                <h2 className="mt-6 font-display text-2xl font-normal text-foreground">
                  Cron Design System
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Keyboard-first calendar grid (#18181A), vermilion #FF5416
                  accents, keycap shortcuts, and event blocks.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                <span className="font-mono text-xs text-muted">6 routes</span>
                <Button href="/design-systems/cron" variant="primary" size="sm">
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
