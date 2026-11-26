"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Tabs } from "@/components/ui/Tabs";
import { TildaWorkspaceBar } from "./TildaWorkspaceBar";

const settingsTabs = [
  { id: "general", label: "General" },
  { id: "fonts", label: "Fonts & Colors" },
  { id: "analytics", label: "Analytics" },
  { id: "payments", label: "Payments" },
  { id: "privacy", label: "Privacy" },
];

/**
 * Multi-tab site settings modeled after tilda.cc/projects/settings.
 */
export function TildaSettings() {
  const [tab, setTab] = useState("general");
  const [httpsRedirect, setHttpsRedirect] = useState(true);
  const [cookieBanner, setCookieBanner] = useState(true);
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex-1 bg-surface">
      <TildaWorkspaceBar active="settings" />

      <div className="mx-auto max-w-4xl px-6 py-12 space-y-8">
        <div>
          <h1 className="font-display text-3xl font-normal text-foreground">
            Site Settings
          </h1>
          <p className="mt-1 text-sm text-muted">
            Configure domain routing, typography, analytics tags, payments, and privacy.
          </p>
        </div>

        <div className="overflow-x-auto">
          <Tabs
            items={settingsTabs}
            activeId={tab}
            onChange={(next) => {
              setTab(next);
              setSaved(false);
            }}
          />
        </div>

        {saved && (
          <div className="border border-border border-l-4 border-l-accent bg-background p-4 text-sm text-foreground">
            Settings saved for <span className="font-mono">studio.tilda.ws</span>.
          </div>
        )}

        <Card variant="bordered">
          {tab === "general" && (
            <div className="space-y-5">
              <h2 className="font-display text-xl font-medium text-foreground">
                General
              </h2>
              <Input
                id="site-title"
                label="Site Title"
                defaultValue="Editorial Studio"
              />
              <Input
                id="custom-domain"
                label="Custom Domain"
                defaultValue="studio.example.com"
                hint="Point an A record to your deployment IP to connect."
              />
              <div className="pt-2">
                <Button variant="accent" onClick={() => setSaved(true)}>
                  Save Changes
                </Button>
              </div>
            </div>
          )}

          {tab === "fonts" && (
            <div className="space-y-5">
              <h2 className="font-display text-xl font-medium text-foreground">
                Fonts &amp; Colors
              </h2>
              <Input
                id="heading-font"
                label="Display Font"
                defaultValue="Jost (Futura PT geometric scale)"
              />
              <Input
                id="body-font"
                label="Body Font"
                defaultValue="Plus Jakarta Sans"
              />
              <div className="pt-2">
                <Button variant="accent" onClick={() => setSaved(true)}>
                  Apply Typography
                </Button>
              </div>
            </div>
          )}

          {tab === "analytics" && (
            <div className="space-y-5">
              <h2 className="font-display text-xl font-medium text-foreground">
                Analytics
              </h2>
              <Input
                id="ga-id"
                label="Measurement ID"
                placeholder="G-XXXXXXXXXX"
                hint="Events fire automatically on published form and CTA clicks."
              />
              <div className="pt-2">
                <Button variant="accent" onClick={() => setSaved(true)}>
                  Save Analytics
                </Button>
              </div>
            </div>
          )}

          {tab === "payments" && (
            <div className="space-y-5">
              <h2 className="font-display text-xl font-medium text-foreground">
                Payments &amp; Currency
              </h2>
              <Input
                id="store-currency"
                label="Default Currency"
                defaultValue="USD ($)"
              />
              <Input
                id="tax-id"
                label="Merchant Descriptor"
                defaultValue="EDITORIAL STUDIO"
              />
              <div className="pt-2">
                <Button variant="accent" onClick={() => setSaved(true)}>
                  Save Payment Settings
                </Button>
              </div>
            </div>
          )}

          {tab === "privacy" && (
            <div className="space-y-6">
              <h2 className="font-display text-xl font-medium text-foreground">
                Privacy &amp; Security
              </h2>
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Force HTTPS Redirect
                  </p>
                  <p className="text-xs text-muted">
                    Automatically redirect all HTTP traffic to HTTPS.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={httpsRedirect}
                  onClick={() => setHttpsRedirect((v) => !v)}
                  className={`flex h-6 w-11 items-center rounded-full border border-foreground px-0.5 transition-colors cursor-pointer ${
                    httpsRedirect ? "bg-accent justify-end" : "bg-surface-muted justify-start"
                  }`}
                >
                  <span className="h-4 w-4 rounded-full bg-foreground" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Cookie Consent Banner
                  </p>
                  <p className="text-xs text-muted">
                    Display an editorial cookie notice on first visit.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={cookieBanner}
                  onClick={() => setCookieBanner((v) => !v)}
                  className={`flex h-6 w-11 items-center rounded-full border border-foreground px-0.5 transition-colors cursor-pointer ${
                    cookieBanner ? "bg-accent justify-end" : "bg-surface-muted justify-start"
                  }`}
                >
                  <span className="h-4 w-4 rounded-full bg-foreground" />
                </button>
              </div>

              <div className="pt-2">
                <Button variant="accent" onClick={() => setSaved(true)}>
                  Save Privacy Preferences
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
