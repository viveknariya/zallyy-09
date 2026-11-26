"use client";

import { BookOpen, ChevronDown, Code2, Globe, HelpCircle, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

const topics = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Project structure, App Router conventions, and customizing tokens.",
  },
  {
    icon: Globe,
    title: "Domains & Publishing",
    description: "Connect custom domains, configure DNS records, and issue SSL.",
  },
  {
    icon: Code2,
    title: "Component API",
    description: "How to compose Button, Card, Tabs, Input, and sharp section blocks.",
  },
  {
    icon: HelpCircle,
    title: "Billing & Plans",
    description: "Switch between Free, Personal, and Business plans or manage referrals.",
  },
];

const faqs = [
  {
    q: "Can I connect my own custom domain?",
    a: "Yes. Personal and Business plans support custom domains with automatic HTTPS certificates.",
  },
  {
    q: "How do I export static HTML or use the API?",
    a: "Business plans include full code export and project webhook integrations under Site Settings.",
  },
  {
    q: "Where do form submissions appear?",
    a: "Every landing page form connects directly to the built-in CRM Contacts view.",
  },
];

/**
 * Support, FAQ search, accordion, and New Ticket form modeled after help.tilda.cc and tilda.cc/tickets.
 */
export function TildaHelp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [ticketSent, setTicketSent] = useState(false);

  const filteredFaqs = faqs.filter(
    (item) =>
      !searchQuery.trim() ||
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 bg-background py-16">
      <div className="mx-auto max-w-5xl px-6 space-y-16">
        {/* Search Header */}
        <section className="space-y-6">
          <div>
            <h1 className="font-display text-4xl font-light text-foreground">
              Have a question?
            </h1>
            <p className="mt-2 text-base text-muted">
              Guides, answers, and direct support tickets modeled after help.tilda.cc.
            </p>
          </div>

          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-muted" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search FAQ..."
              aria-label="Search FAQ"
              className="w-full border border-accent bg-background py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted focus:border-foreground focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Card key={topic.title} variant="subtle" className="hover:border-foreground">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-medium text-foreground">
                    {topic.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{topic.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Accordion FAQ */}
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-normal text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="border-t border-border divide-y divide-border">
            {filteredFaqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between py-5 text-left font-display text-lg font-medium text-foreground cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
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
        </section>

        {/* New Ticket Form */}
        <section className="border-t border-border pt-12">
          <div className="max-w-2xl space-y-6">
            <div>
              <h2 className="font-display text-2xl font-normal text-foreground">
                New Ticket
              </h2>
              <p className="mt-1 text-sm text-muted">
                Describe your issue or question and attach a link to the published page.
              </p>
            </div>

            {ticketSent ? (
              <div className="border border-border border-l-4 border-l-accent bg-accent-soft/20 p-4 text-sm text-foreground">
                Support ticket submitted. Our team typically replies within 4 business hours.
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setTicketSent(true);
                }}
              >
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="ticket-category"
                    className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground"
                  >
                    Category
                  </label>
                  <select
                    id="ticket-category"
                    defaultValue="Domains"
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none"
                  >
                    <option>Domains</option>
                    <option>Billing &amp; Plans</option>
                    <option>Zero Block Editor</option>
                    <option>CRM &amp; Forms</option>
                  </select>
                </div>

                <Input
                  id="ticket-subject"
                  label="Subject"
                  placeholder="Custom domain SSL pending"
                  required
                />

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="ticket-question"
                    className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground"
                  >
                    Your Question
                  </label>
                  <textarea
                    id="ticket-question"
                    rows={4}
                    required
                    placeholder="Describe your question..."
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-foreground focus:outline-none"
                  />
                </div>

                <Button type="submit" variant="accent">
                  Submit Ticket
                </Button>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
