"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Tabs } from "@/components/ui/Tabs";

const swatches = [
  { name: "Background", hex: "#FFFFFF", cls: "bg-background border border-border" },
  { name: "Surface", hex: "#F7F7F7", cls: "bg-surface border border-border" },
  { name: "Foreground", hex: "#111111", cls: "bg-foreground" },
  { name: "Accent", hex: "#FA8A64", cls: "bg-accent" },
  { name: "Accent Strong", hex: "#FB5E1D", cls: "bg-accent-strong" },
  { name: "Accent Soft", hex: "#F5B39C", cls: "bg-accent-soft" },
];

/**
 * Interactive showcase of Tilda tokens, buttons, badges, tabs, and inputs.
 */
export function TildaComponentsShowcase() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-14">
      <div>
        <Badge tone="accent">Tilda Starter Kit</Badge>
        <h1 className="mt-4 font-display text-4xl font-light text-foreground">
          Tilda Component Library
        </h1>
        <p className="mt-2 text-base text-muted">
          Reusable UI primitives and tokens ready to compose new pages.
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
          Buttons & Badges
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
            Tabs
          </h2>
          <div className="mt-4">
            <Tabs
              items={[
                { id: "overview", label: "Overview" },
                { id: "tokens", label: "Tokens" },
                { id: "usage", label: "Usage" },
              ]}
              activeId={tab}
              onChange={setTab}
            />
            <p className="mt-4 text-sm text-muted">
              Active tab: <span className="font-mono text-foreground">{tab}</span>
            </p>
          </div>
        </Card>

        <Card variant="subtle">
          <h2 className="font-display text-xl font-medium text-foreground">
            Form Input
          </h2>
          <div className="mt-4">
            <Input
              id="demo-input"
              label="Project Name"
              placeholder="My Tilda Site"
              hint="Displayed in your workspace dashboard."
            />
          </div>
        </Card>
      </section>
    </div>
  );
}
