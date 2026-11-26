import { Layers, LayoutGrid, Palette, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: LayoutGrid,
    title: "Modular Block Architecture",
    description:
      "Compose landing pages, pricing tables, and dashboards from clean, single-purpose React components.",
  },
  {
    icon: Palette,
    title: "Tilda Visual Tokens",
    description:
      "Warm coral accents, crisp 2px ink borders, and geometric display typography ready out of the box.",
  },
  {
    icon: Zap,
    title: "App Router & Bun Ready",
    description:
      "Built on Next.js App Router with src/ directory conventions, TypeScript, and fast Bun tooling.",
  },
  {
    icon: Layers,
    title: "50 Refero References",
    description:
      "Backed by a local archive of Tilda.cc screenshots and extracted color/font metadata.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Auth Starters",
    description:
      "Pre-wired Login, Sign Up, and Password Recovery routes sharing one unified AuthCard component.",
  },
  {
    icon: Sparkles,
    title: "Workspace & CRM Views",
    description:
      "Includes starter project grids, settings panels, and clean tabular data views.",
  },
];

/**
 * Editorial 3-column feature grid with Tilda's signature circular coral icon badges.
 */
export function FeatureGrid() {
  return (
    <section className="py-20 bg-surface border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            Everything you need to ship fast
          </h2>
          <p className="mt-4 text-base text-muted">
            Built component-first so you can customize, remix, and scale every
            section cleanly.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} variant="subtle" className="bg-background">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
