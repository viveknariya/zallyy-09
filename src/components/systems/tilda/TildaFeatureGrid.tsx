import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Layers,
  LayoutGrid,
  Palette,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: LayoutGrid,
    title: "Modular Block Architecture",
    description:
      "Compose landing pages, pricing matrices, and workspace tables from sharp 0px React components.",
    href: "/design-systems/tilda/components",
    linkLabel: "Explore components",
  },
  {
    icon: BarChart3,
    title: "Statistics & CRM Analytics",
    description:
      "Monitor sessions, device splits, conversion funnels, and custom date ranges with dual-month pickers.",
    href: "/design-systems/tilda/dashboard",
    linkLabel: "Open dashboard",
  },
  {
    icon: Users,
    title: "CRM Contacts & Modal Cards",
    description:
      "Filter incoming leads, inspect contact cards in crisp 2px framed modals, and track pipeline stages.",
    href: "/design-systems/tilda/contacts",
    linkLabel: "View contacts",
  },
  {
    icon: Palette,
    title: "Curated Colors & Gradients",
    description:
      "Tilda Coral Sunset, Warm Peach Editorial, Lavender Mist, and Sky & Mint gradient tokens.",
    href: "/design-systems/tilda/colors",
    linkLabel: "Browse palette",
  },
  {
    icon: BookOpen,
    title: "Editorial Blog & Media Kit",
    description:
      "Newsletter subscription banners, category tabs, press asset guidelines, and clean reading columns.",
    href: "/design-systems/tilda/blog",
    linkLabel: "Read blog",
  },
  {
    icon: ShieldCheck,
    title: "Auth, Setup & Settings",
    description:
      "Login, Sign Up, Password Recovery, onboarding setup wizard, and multi-tab project settings.",
    href: "/design-systems/tilda/setup",
    linkLabel: "Launch setup",
  },
];

/**
 * Alternating bg-surface 3-column feature grid with circular coral icon badges.
 */
export function TildaFeatureGrid() {
  return (
    <section id="tilda-features" className="border-b border-border bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
              Everything you need to ship fast
            </h2>
            <p className="mt-3 text-base text-muted">
              Every Tilda screen pattern — from marketing heroes to analytics
              calendars and CRM modals — built component-first.
            </p>
          </div>
          <Link
            href="/design-systems/tilda/media-kit"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-foreground underline underline-offset-4 hover:text-accent-strong transition-colors"
          >
            <Layers className="h-3.5 w-3.5" /> Brand Media Kit
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                variant="subtle"
                className="flex flex-col justify-between bg-background"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-foreground hover:text-accent-strong transition-colors"
                  >
                    {feature.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
