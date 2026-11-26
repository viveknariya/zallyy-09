import { ChevronRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    num: "01",
    title: "Payments, Usage & Billing",
    description:
      "Sell SaaS with flexible pricing models or bill users for usage like AI token consumption.",
  },
  {
    num: "02",
    title: "Customer Management",
    description:
      "Advanced customer lifecycle management with detailed profiles & analytics.",
  },
  {
    num: "03",
    title: "Global Merchant of Record",
    description:
      "Sit back, relax, while we handle all headaches & tax compliance. No sales tax to worry about.",
  },
];

const logos = ["tailwindcss", "speakeasy", "Stilla", "midday"];

/**
 * Polar.sh hero section with centered headline, pill CTAs, logo wall, and numbered 01-03 pillars.
 */
export function PolarHero() {
  return (
    <section className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-medium tracking-tight text-foreground sm:text-7xl leading-[1.05]">
            Turn Usage
            <br />
            Into Revenue
          </h1>
          <p className="mt-6 text-lg text-muted">
            A billing platform built for AI &amp; software companies
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/design-systems/polar/dashboard"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-neutral-800 transition-colors"
            >
              Get Started <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/design-systems/polar/components"
              className="inline-flex items-center rounded-full bg-surface-muted px-5 py-2.5 text-sm font-medium text-foreground hover:bg-border transition-colors"
            >
              Explore Components
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-10 text-sm font-semibold text-foreground/80">
          {logos.map((logo) => (
            <span key={logo} className="tracking-tight">
              {logo}
            </span>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((item) => (
            <div
              key={item.num}
              className="rounded-2xl border border-border bg-background p-7"
            >
              <span className="font-mono text-xs text-muted">· {item.num}</span>
              <div className="mt-6 h-20 rounded-xl bg-surface border border-border/60 flex items-center justify-center">
                <span className="font-mono text-xs text-muted">
                  Polar Module {item.num}
                </span>
              </div>
              <h2 className="mt-6 text-base font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
