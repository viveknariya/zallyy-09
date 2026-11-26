"use client";

import { Gift, Megaphone, UserCheck } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { TildaWorkspaceBar } from "./TildaWorkspaceBar";

const referralSteps = [
  {
    step: "1",
    title: "Invite your friends",
    description:
      "Tell friends about Tilda by sending your unique referral link or sharing it with your team.",
    icon: Megaphone,
  },
  {
    step: "2",
    title: "Your friend purchases a plan",
    description:
      "Your referral joins Tilda, sets up a project, and activates any paid subscription.",
    icon: UserCheck,
  },
  {
    step: "3",
    title: "Get a bonus",
    description:
      "Both you and your friend receive 1 free month added to your active Personal plan.",
    icon: Gift,
  },
];

/**
 * Profile, billing status, and 3-step Referral Program modeled after tilda.cc/identity and tilda.cc/identity/referrals.
 */
export function TildaAccount() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex-1 bg-background">
      <TildaWorkspaceBar active="account" />

      <div className="mx-auto max-w-5xl px-6 py-12 space-y-16">
        {/* Profile Section */}
        <section className="mx-auto max-w-xl space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <h1 className="font-display text-3xl font-normal text-foreground">
                Profile &amp; Account
              </h1>
              <p className="mt-1 text-sm text-muted">
                Manage personal identity, language, and subscription status.
              </p>
            </div>
            <Badge tone="accent">Personal Plan</Badge>
          </div>

          {saved && (
            <div className="border border-border border-l-4 border-l-accent bg-accent-soft/20 p-4 text-sm text-foreground">
              Profile preferences saved.
            </div>
          )}

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSaved(true);
            }}
          >
            <Input id="profile-name" label="Name" defaultValue="Alex Rivera" />
            <Input
              id="profile-email"
              label="Email"
              type="email"
              defaultValue="alex@studio.io"
              hint="Verified primary email address for workspace notifications."
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="profile-language"
                  className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground"
                >
                  Language
                </label>
                <select
                  id="profile-language"
                  defaultValue="English"
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>German</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="profile-country"
                  className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground"
                >
                  Country
                </label>
                <select
                  id="profile-country"
                  defaultValue="United States"
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none"
                >
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <Button type="submit" variant="accent" className="w-full">
                Save
              </Button>
            </div>
          </form>
        </section>

        {/* Referral 3-step cards */}
        <section className="border-t border-border pt-14">
          <div className="text-center">
            <h2 className="font-display text-3xl font-normal text-foreground">
              Invite Friends And Get Personal Plan For Free
            </h2>
            <p className="mt-2 text-sm text-muted">
              Modeled after tilda.cc/identity/referrals with numbered circular badges.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {referralSteps.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.step}
                  variant="subtle"
                  className="relative pt-10 text-center"
                >
                  <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background font-display text-sm font-semibold text-foreground">
                    {item.step}
                  </div>
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
