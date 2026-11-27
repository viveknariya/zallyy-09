"use client";

import { Building2, Check, Sparkles, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";

const billingTabs = [
  { id: "annual", label: "Billed annually" },
  { id: "monthly", label: "Month to month" },
];

const plans = [
  {
    name: "Free",
    subtitle: "1 website",
    annualPrice: "$0",
    monthlyPrice: "$0",
    description:
      "Make a simple and beautiful website with our collection of key blocks.",
    icon: Sparkles,
    features: ["1 website", "Core UI blocks", "50 MB storage"],
    cta: "Start Free",
    variant: "outline" as const,
  },
  {
    name: "Personal",
    subtitle: "1 website",
    annualPrice: "$10",
    monthlyPrice: "$15",
    description: "Full access to the blocks, custom domain, and more.",
    icon: User,
    features: [
      "1 website + custom domain",
      "Full block library",
      "1 GB storage & analytics",
    ],
    cta: "Choose Personal",
    variant: "accent" as const,
  },
  {
    name: "Business",
    subtitle: "5 websites",
    annualPrice: "$20",
    monthlyPrice: "$25",
    description:
      "All the Personal Plan features, 5 websites, and code export.",
    icon: Building2,
    features: [
      "5 websites + code export",
      "API & team collaboration",
      "Priority support",
    ],
    cta: "Choose Business",
    variant: "primary" as const,
  },
];

const compareRows = [
  { feature: "Number of websites", free: "1 website", personal: "1 website", business: "5 websites" },
  { feature: "Pages per website", free: "50", personal: "500", business: "500" },
  { feature: "Storage per project", free: "50 MB", personal: "1 GB", business: "1 GB" },
  { feature: "Zero Block custom editor", free: true, personal: true, business: true },
  { feature: "Custom domain & SSL", free: false, personal: true, business: true },
  { feature: "Full block library & CRM", free: false, personal: true, business: true },
  { feature: "Source code export & API", free: false, personal: false, business: true },
];

function CompareCell({ value }: { value: string | boolean }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-foreground">{value}</span>;
  }
  if (value) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-accent bg-accent-soft/20 text-accent-strong">
        <Check className="h-3.5 w-3.5" />
      </span>
    );
  }
  return <span className="text-sm text-muted">—</span>;
}

/**
 * Pricing section and Compare Plans matrix modeled after tilda.cc/pricing and tilda.cc/pricing-compare.
 */
export function TildaPricing({
  showComparison = false,
  headingLevel = "h2",
}: {
  showComparison?: boolean;
  headingLevel?: "h1" | "h2";
}) {
  const [billing, setBilling] = useState("annual");
  const HeadingTag = headingLevel;

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6 space-y-20">
        <div>
          <div className="text-center">
            <HeadingTag className="font-display text-4xl font-light tracking-tight text-foreground sm:text-5xl">
              Pricing: Plans for everyone
            </HeadingTag>
            <div className="mt-8 flex justify-center">
              <Tabs items={billingTabs} activeId={billing} onChange={setBilling} />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const price =
                billing === "annual" ? plan.annualPrice : plan.monthlyPrice;
              return (
                <Card
                  key={plan.name}
                  variant="bordered"
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-foreground">
                    <Icon className="h-8 w-8 stroke-[1.5]" />
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-normal text-foreground">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {plan.subtitle}
                  </p>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-medium text-foreground">
                      {price}
                    </span>
                    <span className="text-xs text-muted">/mo</span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {plan.description}
                  </p>

                  <ul className="mt-6 w-full space-y-2.5 border-t border-border pt-6 text-left text-sm">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5">
                        <Check className="h-4 w-4 shrink-0 text-accent-strong" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 w-full pt-2">
                    <Button
                      href="/design-systems/tilda/signup"
                      variant={plan.variant}
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {showComparison && (
          <div>
            <div className="text-center">
              <h2 className="font-display text-3xl font-light tracking-tight text-foreground sm:text-4xl">
                Compare Plans
              </h2>
              <p className="mt-2 text-sm text-muted">
                Side-by-side breakdown of storage, pages, and publishing capabilities.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto border border-border bg-background">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-background text-xs font-semibold text-foreground">
                  <tr>
                    <th className="px-6 py-4">Features</th>
                    <th className="px-6 py-4 text-center">Free</th>
                    <th className="px-6 py-4 text-center">Personal</th>
                    <th className="px-6 py-4 text-center">Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {compareRows.map((row, idx) => (
                    <tr
                      key={row.feature}
                      className={idx % 2 === 0 ? "bg-surface" : "bg-background"}
                    >
                      <td className="px-6 py-4 font-medium text-foreground">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <CompareCell value={row.free} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <CompareCell value={row.personal} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <CompareCell value={row.business} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
