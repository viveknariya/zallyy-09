"use client";

import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Tabs } from "@/components/ui/Tabs";

const swatches = [
  { name: "Background", hex: "#FFFFFF", cls: "bg-background border border-border" },
  { name: "Surface", hex: "#F7F7F7", cls: "bg-surface border border-border" },
  { name: "Surface Muted", hex: "#EFEFEF", cls: "bg-surface-muted border border-border" },
  { name: "Foreground", hex: "#111111", cls: "bg-foreground" },
  { name: "Accent", hex: "#FA8A64", cls: "bg-accent" },
  { name: "Accent Strong", hex: "#FB5E1D", cls: "bg-accent-strong" },
];

/**
 * Interactive showcase of Tilda tokens, buttons, badges, tabs, inputs, toggles, alerts, and pagination.
 */
export function TildaComponentsShowcase() {
  const [tab, setTab] = useState("overview");
  const [toggleOn, setToggleOn] = useState(true);
  const [page, setPage] = useState(1);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-14">
      <div>
        <Badge tone="accent">Tilda Design System</Badge>
        <h1 className="mt-4 font-display text-4xl font-light text-foreground">
          Tilda Component Library
        </h1>
        <p className="mt-2 text-base text-muted">
          Sharp 0px geometric UI primitives, circular coral icon badges, and editorial surface tokens.
        </p>
      </div>

      <section>
        <h2 className="font-display text-2xl font-normal text-foreground">
          Color Tokens
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {swatches.map((s) => (
            <div key={s.name} className="space-y-2">
              <div className={`h-20 w-full ${s.cls}`} />
              <p className="text-xs font-semibold text-foreground">{s.name}</p>
              <p className="font-mono text-xs text-muted">{s.hex}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-normal text-foreground">
          Buttons &amp; Badges
        </h2>
        <Card variant="subtle" className="mt-6 flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Badge tone="neutral">Neutral</Badge>
          <Badge tone="accent">Accent</Badge>
          <Badge tone="dark">Dark</Badge>
        </Card>
      </section>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card variant="subtle">
          <h2 className="font-display text-xl font-medium text-foreground">
            Tabs &amp; Pagination
          </h2>
          <div className="mt-4 space-y-6">
            <Tabs
              items={[
                { id: "overview", label: "Overview" },
                { id: "tokens", label: "Tokens" },
                { id: "usage", label: "Usage" },
              ]}
              activeId={tab}
              onChange={setTab}
            />
            <p className="text-sm text-muted">
              Active tab: <span className="font-mono text-foreground">{tab}</span>
            </p>

            <div className="inline-flex items-center border border-border bg-background divide-x divide-border">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setPage(num)}
                  className={`px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                    page === num
                      ? "bg-foreground text-background"
                      : "text-foreground hover:bg-surface-muted"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </Card>

        <Card variant="subtle">
          <h2 className="font-display text-xl font-medium text-foreground">
            Form Input &amp; Switch
          </h2>
          <div className="mt-4 space-y-5">
            <Input
              id="demo-input"
              label="Project Name"
              placeholder="My Tilda Site"
              hint="Displayed in your workspace dashboard."
            />

            <div className="flex items-center justify-between border-t border-border pt-4">
              <span className="text-sm font-medium text-foreground">
                Enable SSL Redirect
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={toggleOn}
                onClick={() => setToggleOn((v) => !v)}
                className={`flex h-6 w-11 items-center rounded-full border border-foreground px-0.5 transition-colors cursor-pointer ${
                  toggleOn ? "bg-accent justify-end" : "bg-surface-muted justify-start"
                }`}
              >
                <span className="h-4 w-4 rounded-full bg-foreground" />
              </button>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-normal text-foreground">
          Alert Banners
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex items-start gap-3 border border-border border-l-4 border-l-accent bg-accent-soft/20 p-4 text-sm text-foreground">
            <Info className="h-4 w-4 shrink-0 mt-0.5 text-accent-strong" />
            <span>Custom domain verification pending DNS propagation.</span>
          </div>
          <div className="flex items-start gap-3 border border-border border-l-4 border-l-accent-strong bg-accent-soft/25 p-4 text-sm text-foreground">
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-accent-strong" />
            <span>SSL certificate renewal requires an active A record.</span>
          </div>
          <div className="flex items-start gap-3 border border-border border-l-4 border-l-foreground bg-surface p-4 text-sm text-foreground">
            <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-foreground" />
            <span>All 12 pages published cleanly to production.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
