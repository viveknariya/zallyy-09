import { ArrowRight, Code2, CreditCard, Palette } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Design Systems — Curated UI Kits & Next.js Starter Templates",
  description:
    "Browse curated website design systems, color palettes, typography scales, and Next.js App Router starter templates.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
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
          <nav className="flex items-center gap-6">
            <Link
              href="/design-systems"
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/80 hover:text-foreground"
            >
              Catalog
            </Link>
            <a
              href="https://github.com/viveknariya/zallyy-09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/80 hover:text-foreground"
            >
              GitHub
            </a>
            <Button href="/design-systems/tilda" variant="outline" size="sm">
              Explore Tilda
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="border-b border-border py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <Badge tone="accent">Multi-System Directory</Badge>
            <h1 className="mt-6 font-display text-4xl font-normal tracking-tight text-foreground sm:text-6xl leading-[1.1]">
              Production design systems, ready for Next.js.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Each design system lives at its own dedicated route with isolated
              tokens, reusable components, and production-ready starter pages.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/design-systems" variant="accent" size="lg">
                Browse All Systems <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/design-systems/tilda" variant="outline" size="lg">
                Open Tilda System
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-surface py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl font-normal text-foreground">
                  Featured Systems
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Click a system to inspect its tokens, components, and starter pages.
                </p>
              </div>
              <Link
                href="/design-systems"
                className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground underline"
              >
                View All
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card variant="bordered" className="bg-background flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
                      <Palette className="h-5 w-5" />
                    </div>
                    <Badge tone="accent">50 Reference Screens</Badge>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-normal text-foreground">
                    Tilda Publishing
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    High-contrast editorial minimalism with warm coral accents
                    (#FA8A64), sharp 2px ink borders, and Jost display type.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">
                    /design-systems/tilda
                  </span>
                  <Button href="/design-systems/tilda" variant="primary" size="sm">
                    Open <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </Card>

              <Card variant="bordered" className="bg-background flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full text-white"
                      style={{ background: "linear-gradient(135deg, #6B57FF 0%, #167DFF 100%)" }}
                    >
                      <Code2 className="h-5 w-5" />
                    </div>
                    <Badge tone="dark">39 Reference Screens</Badge>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-normal text-foreground">
                    JetBrains
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Dark-first developer UI (#19191C), electric blue pill CTAs
                    (#167DFF), IDE gradient badges, and JetBrains Mono.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">
                    /design-systems/jetbrains
                  </span>
                  <Button href="/design-systems/jetbrains" variant="primary" size="sm">
                    Open <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </Card>

              <Card variant="bordered" className="bg-background flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <Badge tone="neutral">39 Reference Screens</Badge>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-normal text-foreground">
                    Polar
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    SaaS billing &amp; usage monetization UI with rounded-2xl cards,
                    obsidian auth modals, and pill controls.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">
                    /design-systems/polar
                  </span>
                  <Button href="/design-systems/polar" variant="primary" size="sm">
                    Open <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
