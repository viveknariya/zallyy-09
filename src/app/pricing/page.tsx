import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { PricingEstimator } from "@/components/agency/PricingEstimator";
import { FeaturedBlogsSection } from "@/components/blogs/FeaturedBlogsSection";
import {
  DirectoryFooter,
  DirectoryHeader,
} from "@/components/directory/DirectoryShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Custom Pricing & Zero-Upfront Model (Starting Low)",
  description:
    "Transparent custom pricing for US small and medium businesses starting at a low entry point. Build websites, software, and workflow automation on live staging before you pay.",
  path: "/pricing",
});

function PricingEstimatorFallback() {
  return (
    <div className="h-96 w-full animate-pulse border-2 border-foreground bg-surface-muted" />
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-full flex flex-col bg-background">
      <DirectoryHeader />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Pricing", href: "/pricing" },
        ]}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-background py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <Badge tone="accent">Custom Pricing · Low Starting Point</Badge>
              <h1 className="mt-5 font-display text-4xl font-light tracking-tight text-foreground sm:text-5xl">
                Pay for the exact scope you need—after you see it working.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                US small and medium businesses shouldn&apos;t have to risk $20,000+ upfront for a website, portal, or automation. Our custom pricing scales from a low starter tier and launches on live staging first.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Scope Builder */}
        <section id="request-quote" className="border-b border-border bg-surface py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Suspense fallback={<PricingEstimatorFallback />}>
              <PricingEstimator />
            </Suspense>
          </div>
        </section>

        {/* Comparison Matrix */}
        <section className="border-b border-border bg-background py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-display text-3xl font-normal tracking-tight text-foreground">
                  zallyy vs. Traditional Agencies
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Why US small and medium businesses switch from traditional retainers.
                </p>
              </div>
              <Link
                href="/services"
                className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground underline underline-offset-4 hover:text-accent-strong transition-colors"
              >
                Explore All Services
              </Link>
            </div>

            <div className="mt-8 overflow-x-auto border border-border bg-background">
              <table className="w-full text-left border-collapse">
                <thead className="border-b border-border bg-surface text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                  <tr>
                    <th className="px-6 py-4">Dimension</th>
                    <th className="px-6 py-4">zallyy</th>
                    <th className="px-6 py-4">Traditional Agency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm">
                  <tr className="hover:bg-surface/60">
                    <td className="px-6 py-4 font-medium text-foreground">
                      Starting Price Structure
                    </td>
                    <td className="px-6 py-4 text-foreground">
                      Custom per service, starting at a low entry point
                    </td>
                    <td className="px-6 py-4 text-muted">
                      High fixed minimums ($15k–$50k+)
                    </td>
                  </tr>
                  <tr className="hover:bg-surface/60">
                    <td className="px-6 py-4 font-medium text-foreground">
                      Upfront Risk
                    </td>
                    <td className="px-6 py-4 text-foreground">
                      48-hour blueprint + live staging preview before going live
                    </td>
                    <td className="px-6 py-4 text-muted">
                      30–50% non-refundable deposit before code begins
                    </td>
                  </tr>
                  <tr className="hover:bg-surface/60">
                    <td className="px-6 py-4 font-medium text-foreground">
                      UI Proof Before Hiring
                    </td>
                    <td className="px-6 py-4 text-foreground">
                      5 live interactive design systems you can click today
                    </td>
                    <td className="px-6 py-4 text-muted">
                      Static slide decks and screenshots
                    </td>
                  </tr>
                  <tr className="hover:bg-surface/60">
                    <td className="px-6 py-4 font-medium text-foreground">
                      Code &amp; Automation Ownership
                    </td>
                    <td className="px-6 py-4 text-foreground">
                      Clean Next.js, TypeScript &amp; API ownership
                    </td>
                    <td className="px-6 py-4 text-muted">
                      Proprietary lock-in or bloated no-code task fees
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <FeaturedBlogsSection variant="surface" />
      </main>

      <DirectoryFooter variant="background" />
    </div>
  );
}
