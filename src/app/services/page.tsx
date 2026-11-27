import { ArrowRight, Check, Code2, Globe, Workflow } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedBlogsSection } from "@/components/blogs/FeaturedBlogsSection";
import {
  DirectoryFooter,
  DirectoryHeader,
} from "@/components/directory/DirectoryShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AGENCY_SERVICES } from "@/lib/agency-data";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Services — Website, Software & Automation Development (USA)",
  description:
    "Explore zallyy services for US small and medium businesses: custom website development, custom software & client portals, and workflow automation starting at low custom pricing.",
  path: "/services",
});

function ServiceIcon({ iconKey }: { iconKey: "globe" | "code" | "workflow" }) {
  switch (iconKey) {
    case "globe":
      return <Globe className="h-5 w-5" />;
    case "code":
      return <Code2 className="h-5 w-5" />;
    case "workflow":
      return <Workflow className="h-5 w-5" />;
  }
}

export default function ServicesIndexPage() {
  return (
    <div className="min-h-full flex flex-col bg-background">
      <DirectoryHeader />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-background py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <Badge tone="accent">US Small &amp; Medium Business Services</Badge>
              <h1 className="mt-5 font-display text-4xl font-light tracking-tight text-foreground sm:text-5xl">
                Software, websites &amp; automation tailored to your budget.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Whether you need a fast Next.js website, a custom client portal, or automated back-office workflows, we scope each engagement individually—starting at an accessible low entry price with live staging before you go live.
              </p>
            </div>
          </div>
        </section>

        {/* Service Pillars */}
        <section className="border-b border-border bg-surface py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 space-y-8">
            {AGENCY_SERVICES.map((service) => (
              <Card
                key={service.slug}
                variant="bordered"
                className="bg-background grid grid-cols-1 gap-8 lg:grid-cols-12"
              >
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-foreground">
                      <ServiceIcon iconKey={service.iconKey} />
                    </span>
                    <Badge tone="neutral">{service.eyebrow}</Badge>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-normal text-foreground sm:text-3xl">
                    <Link
                      href={service.href}
                      className="hover:text-accent-strong transition-colors"
                    >
                      {service.name}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Button href={service.href} variant="primary" size="sm">
                      Explore {service.shortTitle} <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                    <span className="font-mono text-xs text-muted">
                      {service.startingModel} · {service.timeline}
                    </span>
                  </div>
                </div>

                <div className="border-t border-border pt-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Key Deliverables
                  </p>
                  <ul className="mt-4 space-y-3">
                    {service.deliverables.map((item) => (
                      <li key={item.title} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" />
                        <span>{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Comparison Table */}
        <section className="border-b border-border bg-background py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl font-normal tracking-tight text-foreground">
              Which service fits your business today?
            </h2>
            <div className="mt-8 overflow-x-auto border border-border bg-background">
              <table className="w-full text-left border-collapse">
                <thead className="border-b border-border bg-surface text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                  <tr>
                    <th className="px-6 py-4">Service</th>
                    <th className="px-6 py-4">Best For</th>
                    <th className="px-6 py-4">Typical First Launch</th>
                    <th className="px-6 py-4">Pricing Structure</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm">
                  {AGENCY_SERVICES.map((service) => (
                    <tr key={service.slug} className="hover:bg-surface/60">
                      <td className="px-6 py-4 font-medium text-foreground">
                        <Link
                          href={service.href}
                          className="underline underline-offset-4 hover:text-accent-strong"
                        >
                          {service.shortTitle}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-muted">{service.idealFor}</td>
                      <td className="px-6 py-4 font-mono text-xs text-foreground">
                        {service.timeline}
                      </td>
                      <td className="px-6 py-4 text-muted">{service.startingModel}</td>
                    </tr>
                  ))}
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
