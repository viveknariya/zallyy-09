import { ArrowRight, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TildaMark } from "./TildaLogo";

/**
 * Split-screen editorial hero modeled directly after tilda.cc/?lang=en.
 * Left panel features the centered circle-T emblem on #EFEFEF geometric composition;
 * right panel delivers high-contrast typography and coral CTA.
 */
export function TildaHero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2">
        {/* Left geometric editorial composition */}
        <div className="relative flex min-h-[380px] flex-col items-center justify-center overflow-hidden border-b border-border bg-surface-muted px-8 py-16 lg:min-h-[520px] lg:border-b-0 lg:border-r">
          {/* Geometric wireframe block motifs inspired by tilda.cc/ */}
          <div className="pointer-events-none absolute top-8 left-8 h-24 w-32 border border-foreground/30 bg-background/70 p-3">
            <div className="h-2 w-12 bg-foreground/20" />
            <div className="mt-2 h-1.5 w-20 bg-foreground/15" />
            <div className="mt-4 h-6 w-14 border border-accent bg-accent-soft/40" />
          </div>

          <div className="pointer-events-none absolute top-10 right-8 h-28 w-28 border border-foreground/30 bg-background/80 p-3">
            <div className="flex items-center justify-between">
              <span className="h-3 w-3 rounded-full bg-accent" />
              <span className="h-2 w-10 bg-foreground/20" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="h-10 border border-border bg-surface" />
              <div className="h-10 border border-border bg-surface" />
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-10 left-10 h-20 w-40 border border-foreground/30 bg-background/75 p-3">
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full bg-accent" />
              <span className="h-2 w-20 bg-foreground/25" />
            </div>
            <div className="mt-3 h-2 w-28 bg-foreground/15" />
          </div>

          <div className="pointer-events-none absolute bottom-8 right-10 h-24 w-36 border border-foreground/30 bg-background/75 p-3">
            <div className="h-2 w-16 bg-foreground/20" />
            <div className="mt-3 flex gap-2">
              <div className="h-10 flex-1 border border-border bg-accent-soft/30" />
              <div className="h-10 flex-1 border border-border bg-surface" />
            </div>
          </div>

          {/* Centerpiece Tilda circle mark */}
          <div className="relative z-10 flex h-44 w-44 items-center justify-center rounded-full border-2 border-foreground bg-surface-muted">
            <TildaMark className="h-32 w-32 text-foreground" />
          </div>

          <a
            href="#tilda-features"
            aria-label="Scroll to features"
            className="mt-10 inline-flex h-12 w-12 items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
          >
            <ChevronDown className="h-5 w-5" />
          </a>
        </div>

        {/* Right high-contrast copy & CTAs */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-14 lg:py-24">
          <div>
            <Badge tone="accent">Tilda.cc Design System</Badge>
          </div>
          <h1 className="mt-6 font-display text-4xl font-normal tracking-tight text-foreground sm:text-5xl leading-[1.1]">
            Create beautiful websites without any code on Tilda
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            550+ pre-designed blocks, sharp geometric containers, warm coral
            focal points, and an 86-screen reference archive mapped into
            production Next.js routes.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/design-systems/tilda/components" variant="outline" size="lg">
              Overview
            </Button>
            <Button href="/design-systems/tilda/signup" variant="accent" size="lg">
              Create a website for free <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <p className="font-display text-2xl font-normal text-foreground">86</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                Screens
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-normal text-foreground">18</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                Page Types
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-normal text-foreground">0px</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                Card Radius
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
