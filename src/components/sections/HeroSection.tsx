import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

/**
 * Editorial hero section modeled after Tilda.cc's clean typography and high-contrast layout.
 */
export function HeroSection() {
  return (
    <section className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge tone="accent">Tilda.cc Design System</Badge>
          <h1 className="mt-6 font-display text-4xl font-normal tracking-tight text-foreground sm:text-6xl leading-[1.1]">
            Create a website that looks designed, not templated.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            A modular Next.js App Router starter template built from 50
            Tilda.cc design references—complete with reusable UI primitives,
            pricing tiers, auth flows, and workspace views.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/design-systems/tilda/signup" variant="accent" size="lg">
              Create a Website <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/design-systems/tilda/components" variant="outline" size="lg">
              Explore Components
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
