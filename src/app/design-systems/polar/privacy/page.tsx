import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Polar Privacy Policy Pattern",
  description: "Clean editorial legal document layout modeled after polar.sh/legal/privacy-policy.",
  alternates: { canonical: "/design-systems/polar/privacy" },
};

export default function PolarPrivacyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Polar", href: "/design-systems/polar" },
          { label: "Privacy Policy", href: "/design-systems/polar/privacy" },
        ]}
      />
      <article className="flex-1 bg-background py-16">
        <div className="mx-auto max-w-3xl px-6 space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted">Last updated: November 2026</p>
          <div className="rounded-2xl border border-border p-8 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              This starter legal page demonstrates Polar’s clean editorial
              typography and rounded-2xl framing for compliance documents.
            </p>
            <p>
              Replace this copy with your organization’s data collection,
              cookie, and GDPR/CCPA disclosures.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
