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
    description:
      "Full access to the blocks, custom domain, and more.",
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

/**
 * Pricing section modeled directly after Tilda.cc's pricing page with Annual/Monthly tabs
 * and 3 crisp-bordered plan cards featuring circular coral icon badges.
 */
export function PricingSection() {
  const [billing, setBilling] = useState("annual");

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-light tracking-tight text-foreground sm:text-5xl">
            Pricing: Plans for everyone
          </h2>
          <div className="mt-8 flex justify-center">
            <Tabs
              items={billingTabs}
              activeId={billing}
              onChange={setBilling}
            />
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
                    href="/signup"
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
    </section>
  );
}
