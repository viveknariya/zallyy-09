"use client";

import { ArrowRight, Check, Globe, LayoutGrid, Sparkles } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { TildaWorkspaceBar } from "./TildaWorkspaceBar";

const starterTemplates = [
  {
    id: "editorial",
    name: "Editorial Studio",
    category: "Agency & Portfolio",
    blocks: "18 blocks",
  },
  {
    id: "saas",
    name: "SaaS Product Launch",
    category: "Landing Page",
    blocks: "24 blocks",
  },
  {
    id: "store",
    name: "Minimal Storefront",
    category: "E-Commerce",
    blocks: "32 blocks",
  },
];

/**
 * Guided Account Setup & Project Onboarding flow modeled after tilda.cc/identity and tilda.cc/projects.
 */
export function TildaSetup() {
  const [step, setStep] = useState(1);
  const [workspaceName, setWorkspaceName] = useState("Editorial Studio");
  const [subdomain, setSubdomain] = useState("studio");
  const [template, setTemplate] = useState("editorial");
  const [launched, setLaunched] = useState(false);

  return (
    <div className="flex-1 bg-surface">
      <TildaWorkspaceBar active="setup" />

      <div className="mx-auto max-w-4xl px-6 py-12 space-y-10">
        <div>
          <Badge tone="accent">Account Setup</Badge>
          <h1 className="mt-4 font-display text-3xl font-normal text-foreground sm:text-4xl">
            Set up your workspace
          </h1>
          <p className="mt-2 text-sm text-muted">
            Configure your project title, subdomain, and starter template in three steps.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="grid grid-cols-3 border border-border bg-background divide-x divide-border">
          {[
            { num: 1, label: "Workspace" },
            { num: 2, label: "Template" },
            { num: 3, label: "Launch" },
          ].map((item) => {
            const active = step === item.num;
            const completed = step > item.num || launched;
            return (
              <button
                key={item.num}
                type="button"
                onClick={() => setStep(item.num)}
                className={`flex items-center gap-3 px-5 py-4 text-left transition-colors cursor-pointer ${
                  active ? "bg-foreground text-background" : "bg-background text-foreground hover:bg-surface"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    completed
                      ? "bg-accent text-foreground"
                      : active
                        ? "bg-background text-foreground"
                        : "bg-surface-muted text-foreground"
                  }`}
                >
                  {completed ? <Check className="h-3.5 w-3.5" /> : item.num}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em]">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        <Card variant="bordered">
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-foreground">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-medium text-foreground">
                    Name &amp; Subdomain
                  </h2>
                  <p className="text-xs text-muted">
                    You can attach a custom domain anytime in Settings.
                  </p>
                </div>
              </div>

              <Input
                id="setup-workspace"
                label="Workspace Name"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
              />
              <Input
                id="setup-subdomain"
                label="Free Subdomain"
                value={subdomain}
                onChange={(e) => setSubdomain(e.target.value)}
                hint={`Will publish to ${subdomain || "site"}.tilda.ws`}
              />

              <div className="flex justify-end pt-2">
                <Button variant="accent" onClick={() => setStep(2)}>
                  Continue to Templates <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-foreground">
                  <LayoutGrid className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-medium text-foreground">
                    Choose a Starter Template
                  </h2>
                  <p className="text-xs text-muted">
                    Every layout uses sharp 0px geometric blocks.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {starterTemplates.map((tpl) => {
                  const selected = template === tpl.id;
                  return (
                    <button
                      key={tpl.id}
                      type="button"
                      onClick={() => setTemplate(tpl.id)}
                      className={`border p-5 text-left transition-colors cursor-pointer ${
                        selected
                          ? "border-2 border-foreground bg-accent-soft/15"
                          : "border-border bg-background hover:border-foreground"
                      }`}
                    >
                      <Badge tone={selected ? "accent" : "neutral"}>
                        {tpl.blocks}
                      </Badge>
                      <h3 className="mt-4 font-display text-lg font-medium text-foreground">
                        {tpl.name}
                      </h3>
                      <p className="mt-1 text-xs text-muted">{tpl.category}</p>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-2">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button variant="accent" onClick={() => setStep(3)}>
                  Review Setup <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-foreground">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-medium text-foreground">
                    Ready to Launch
                  </h2>
                  <p className="text-xs text-muted">
                    Confirm your workspace configuration below.
                  </p>
                </div>
              </div>

              <div className="border border-border bg-surface p-5 space-y-2 text-sm">
                <p>
                  <span className="text-muted">Workspace:</span>{" "}
                  <span className="font-medium text-foreground">{workspaceName}</span>
                </p>
                <p>
                  <span className="text-muted">Domain:</span>{" "}
                  <span className="font-mono text-xs text-foreground">
                    {subdomain || "site"}.tilda.ws
                  </span>
                </p>
                <p>
                  <span className="text-muted">Template:</span>{" "}
                  <span className="font-medium text-foreground">
                    {starterTemplates.find((t) => t.id === template)?.name}
                  </span>
                </p>
              </div>

              {launched ? (
                <div className="border border-border border-l-4 border-l-accent bg-accent-soft/20 p-4 text-sm text-foreground">
                  Workspace provisioned! Open{" "}
                  <span className="font-mono">{subdomain || "site"}.tilda.ws</span>{" "}
                  in Projects to begin editing.
                </div>
              ) : (
                <div className="flex items-center justify-between pt-2">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button variant="accent" onClick={() => setLaunched(true)}>
                    Create Workspace
                  </Button>
                </div>
              )}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
