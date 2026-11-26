import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Polar Terms & Conditions Pattern",
  description: "Clean editorial terms layout modeled after polar.sh/legal/master-services-terms.",
  alternates: { canonical: "/design-systems/polar/terms" },
};

export default function PolarTermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Polar", href: "/design-systems/polar" },
          { label: "Terms", href: "/design-systems/polar/terms" },
        ]}
      />
      <article className="flex-1 bg-background py-16">
        <div className="mx-auto max-w-3xl px-6 space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Master Services Terms
          </h1>
          <p className="text-sm text-muted">Effective: November 2026</p>
          <div className="rounded-2xl border border-border p-8 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              This starter terms page provides a ready-to-customize layout for
              SaaS Merchant of Record agreements, billing terms, and SLAs.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
