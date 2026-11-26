"use client";

import { Check } from "lucide-react";
import { useState } from "react";

const storeTabs = ["For Organizations", "For Individual Use", "Special Offers"];

const plans = [
  {
    name: "IntelliJ IDEA Ultimate",
    description:
      "A complete toolset for JVM-based web, mobile and enterprise development.",
    yearly: "$499.00",
    monthly: "$49.90",
    badge: null,
    features: ["Java, Kotlin, Scala", "Spring & Jakarta EE", "Database tools included"],
  },
  {
    name: "All Products Pack",
    description:
      "Get 11 IDEs, 3 extensions, 2 profilers, and a collaborative development service.",
    yearly: "$649.00",
    monthly: "$64.90",
    badge: "BEST OFFER",
    features: ["Includes 17 tools", "All JetBrains IDEs", "Code With Me & AI ready"],
  },
  {
    name: "dotUltimate",
    description:
      "All .NET tools, ReSharper C++ and JetBrains Rider, together in one pack.",
    yearly: "$399.00",
    monthly: "$39.90",
    badge: null,
    features: ["Includes 6 tools", "Rider & ReSharper", "dotTrace & dotMemory"],
  },
];

/**
 * Light-surface Store & Pricing section modeled after jetbrains.com/store/#commercial.
 */
export function JetBrainsPricing() {
  const [activeTab, setActiveTab] = useState(storeTabs[0]);
  const [billing, setBilling] = useState<"yearly" | "monthly">("yearly");

  return (
    <section className="bg-white py-16 text-[#19191C]">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Subscription options &amp; Pricing
        </h2>

        <div className="mt-8 flex flex-wrap gap-6 border-b border-[#E5E7EB]">
          {storeTabs.map((tab) => {
            const active = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium transition-colors cursor-pointer border-b-2 -mb-px ${
                  active
                    ? "border-[#167DFF] text-[#167DFF]"
                    : "border-transparent text-[#6B7280] hover:text-[#19191C]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="mt-8 inline-flex rounded-full border border-[#D1D5DB] p-0.5 bg-white">
          <button
            type="button"
            onClick={() => setBilling("yearly")}
            className={`rounded-full px-5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
              billing === "yearly"
                ? "border border-[#167DFF] bg-[#167DFF]/10 text-[#167DFF]"
                : "text-[#4B5563]"
            }`}
          >
            Yearly billing · Save 2 months
          </button>
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={`rounded-full px-5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
              billing === "monthly"
                ? "border border-[#167DFF] bg-[#167DFF]/10 text-[#167DFF]"
                : "text-[#4B5563]"
            }`}
          >
            Monthly billing
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col justify-between rounded-lg border border-[#E5E7EB] bg-white p-8"
            >
              {plan.badge && (
                <span className="absolute -top-3 right-6 rounded bg-[#EA3829] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {plan.badge}
                </span>
              )}
              <div>
                <h3 className="text-xl font-bold text-[#19191C]">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-[#19191C]">
                    {billing === "yearly" ? plan.yearly : plan.monthly}
                  </span>
                  <span className="text-xs text-[#6B7280]">
                    {billing === "yearly" ? "/year" : "/month"}
                  </span>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-[#E5E7EB] pt-5 text-sm text-[#374151]">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#167DFF]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className="mt-8 w-full rounded-full bg-[#167DFF] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#087CFA] transition-colors cursor-pointer"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
