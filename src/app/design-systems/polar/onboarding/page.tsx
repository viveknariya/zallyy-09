import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Polar Account Onboarding Pattern",
  description: "Personal and business onboarding step pattern modeled after polar.sh/onboarding.",
  alternates: { canonical: "/design-systems/polar/onboarding" },
};

export default function PolarOnboardingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Polar", href: "/design-systems/polar" },
          { label: "Onboarding", href: "/design-systems/polar/onboarding" },
        ]}
      />
      <section className="flex-1 bg-surface py-16">
        <div className="mx-auto max-w-lg px-6">
          <div className="rounded-2xl border border-border bg-background p-8 space-y-6">
            <div>
              <span className="font-mono text-xs text-muted">Step 1 of 2</span>
              <h1 className="mt-2 text-2xl font-semibold text-foreground">
                Set up your organization
              </h1>
              <p className="mt-1.5 text-sm text-muted">
                Choose how you want to sell software and receive payouts.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="polar-org" className="block text-xs font-medium text-foreground mb-1.5">
                  Organization Name
                </label>
                <input
                  id="polar-org"
                  defaultValue="Acme AI"
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-foreground focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="polar-slug" className="block text-xs font-medium text-foreground mb-1.5">
                  Handle
                </label>
                <input
                  id="polar-slug"
                  defaultValue="acme-ai"
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 font-mono text-sm text-foreground focus:border-foreground focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-foreground py-2.5 text-sm font-medium text-background cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
