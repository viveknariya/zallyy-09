"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is included in the All Products Pack?",
    a: "Every JetBrains desktop IDE, .NET tools, profilers, and collaborative development extensions under a single subscription.",
  },
  {
    q: "How do continuity discounts work?",
    a: "Renewing an annual subscription unlocks automatic loyalty pricing in year two and year three.",
  },
  {
    q: "Are academic and open-source licenses available?",
    a: "Yes. Verified students, teachers, and qualifying open-source maintainers receive free educational or community licenses.",
  },
];

/**
 * JetBrains-styled FAQ accordion using divide-y hairlines and surface-muted framing.
 */
export function JetBrainsFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-background py-16 border-b border-border">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Licensing FAQ
        </h2>
        <div className="mt-8 divide-y divide-border border-t border-b border-border">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between py-5 text-left text-base font-semibold text-foreground cursor-pointer"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted transition-transform ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-muted">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
