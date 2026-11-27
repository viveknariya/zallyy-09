"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Tabs, type TabItem } from "@/components/ui/Tabs";
import { SITE_CONTACT_EMAIL } from "@/lib/site";

const SERVICE_TABS: TabItem[] = [
  { id: "website-development", label: "Website Development" },
  { id: "software-development", label: "Custom Software" },
  { id: "automation-development", label: "Workflow Automation" },
];

const BUSINESS_SIZES = [
  { id: "small", label: "Small Business (1–20 staff)" },
  { id: "medium", label: "Medium Business (20–200 staff)" },
  { id: "startup", label: "Startup / Solo Founder" },
];

const SCOPE_OPTIONS: Record<string, string[]> = {
  "website-development": [
    "New SMB Lead-Gen Website",
    "WordPress / Wix Migration to Next.js",
    "Technical SEO & Schema Setup",
    "Custom Landing Pages & Pricing UI",
  ],
  "software-development": [
    "Client or Vendor Portal",
    "Internal Operations Dashboard",
    "SaaS MVP with Auth & Billing",
    "Replace Spreadsheets / Airtable",
  ],
  "automation-development": [
    "CRM, Stripe & QuickBooks Sync",
    "Replace Zapier / Make Workflows",
    "AI Inbox / Lead / PDF Automation",
    "Automated Reporting & Alerts",
  ],
};

/**
 * Interactive Tilda-styled project scope builder for custom low-starting-price quotes.
 */
export function PricingEstimator({ initialService }: { initialService?: string }) {
  const searchParams = useSearchParams();
  const paramService = searchParams.get("service") ?? initialService;
  const validInitial = SERVICE_TABS.some((t) => t.id === paramService)
    ? (paramService as string)
    : "website-development";

  const [serviceId, setServiceId] = useState<string>(validInitial);
  const [businessSize, setBusinessSize] = useState<string>("small");
  const [selectedScopes, setSelectedScopes] = useState<string[]>([
    SCOPE_OPTIONS[validInitial][0],
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [copied, setCopied] = useState(false);

  const activeServiceLabel =
    SERVICE_TABS.find((t) => t.id === serviceId)?.label ?? "Website Development";
  const activeSizeLabel =
    BUSINESS_SIZES.find((b) => b.id === businessSize)?.label ?? "Small Business";

  const toggleScope = (scope: string) => {
    setSelectedScopes((prev) =>
      prev.includes(scope) ? prev.filter((item) => item !== scope) : [...prev, scope],
    );
  };

  const handleTabChange = (nextService: string) => {
    setServiceId(nextService);
    setSelectedScopes([SCOPE_OPTIONS[nextService][0]]);
  };

  const scopeSummary = [
    `Service: ${activeServiceLabel}`,
    `Business Segment: ${activeSizeLabel}`,
    `Requested Scope: ${selectedScopes.length > 0 ? selectedScopes.join(", ") : "Custom Consultation"}`,
    `Contact Name: ${name || "Not provided"}`,
    `Work Email: ${email || "Not provided"}`,
    `Project Goal: ${goal || "Looking for a low-starting-price custom proposal & staging preview."}`,
  ].join("\n");

  const mailtoHref = `mailto:${SITE_CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Custom Scope Request — ${activeServiceLabel}`,
  )}&body=${encodeURIComponent(scopeSummary)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(scopeSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Card variant="bordered" className="bg-background">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-strong">
            48-Hour Blueprint · Zero Upfront Cost
          </p>
          <h2 className="mt-2 font-display text-2xl font-normal text-foreground sm:text-3xl">
            Build Your Custom Scope Brief
          </h2>
          <p className="mt-2 text-sm text-muted">
            Select what you need below. We tailor pricing to your exact scope—starting at an accessible entry tier for US small businesses.
          </p>
        </div>

        <Tabs
          items={SERVICE_TABS}
          activeId={serviceId}
          onChange={handleTabChange}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
                1. Business Size
              </p>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {BUSINESS_SIZES.map((size) => {
                  const active = businessSize === size.id;
                  return (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setBusinessSize(size.id)}
                      className={`px-4 py-3 text-left text-xs font-medium transition-colors cursor-pointer ${
                        active
                          ? "border-2 border-foreground bg-surface text-foreground"
                          : "border border-border bg-background text-muted hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {size.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
                2. What Should We Build?
              </p>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SCOPE_OPTIONS[serviceId].map((scope) => {
                  const checked = selectedScopes.includes(scope);
                  return (
                    <button
                      key={scope}
                      type="button"
                      onClick={() => toggleScope(scope)}
                      className={`flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors cursor-pointer ${
                        checked
                          ? "border-2 border-foreground bg-accent-soft/20 text-foreground"
                          : "border border-border bg-background text-muted hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center border ${
                          checked
                            ? "border-foreground bg-accent text-foreground"
                            : "border-foreground bg-background"
                        }`}
                      >
                        {checked && <Check className="h-3 w-3" />}
                      </span>
                      <span>{scope}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                id="quote-name"
                label="Your Name"
                placeholder="Jordan Taylor"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                id="quote-email"
                type="email"
                label="Work Email"
                placeholder="jordan@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="quote-goal"
                className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground"
              >
                Project Goal or Current Bottleneck
              </label>
              <textarea
                id="quote-goal"
                rows={3}
                placeholder="Example: Rebuild our outdated service website and automate lead syncing into HubSpot + Stripe..."
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-foreground focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-2 border-foreground bg-surface p-6 flex flex-col justify-between h-full">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Generated Project Brief
                </p>
                <pre className="mt-4 whitespace-pre-wrap border border-border bg-background p-4 font-mono text-xs leading-relaxed text-foreground">
                  {scopeSummary}
                </pre>
              </div>

              <div className="mt-6 space-y-3">
                <Button href={mailtoHref} variant="accent" size="md" className="w-full">
                  <Mail className="h-4 w-4" /> Email Scope to {SITE_CONTACT_EMAIL}
                </Button>
                <Button
                  type="button"
                  onClick={handleCopy}
                  variant="outline"
                  size="md"
                  className="w-full"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" /> Brief Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> Copy Brief
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
