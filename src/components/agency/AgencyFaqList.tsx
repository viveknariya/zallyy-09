"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { ServiceFaq } from "@/lib/agency-data";

/**
 * Tilda-styled FAQ accordion using hairline divide-y dividers and 0px geometry.
 */
export function AgencyFaqList({ faqs }: { faqs: ServiceFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-b border-border divide-y divide-border">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="w-full py-5 flex items-center justify-between gap-6 text-left font-display text-lg font-medium text-foreground cursor-pointer hover:text-accent-strong transition-colors"
            >
              <span>{faq.question}</span>
              <span className="shrink-0 text-foreground">
                {isOpen ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </span>
            </button>
            {isOpen && (
              <div className="pb-5 pr-8 text-sm leading-relaxed text-muted">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
