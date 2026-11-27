import { ArrowRight, Check } from "lucide-react";
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
import type { ServiceDefinition } from "@/lib/agency-data";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { AgencyFaqList } from "./AgencyFaqList";

/**
 * Shared commercial service page shell with Service + FAQPage JSON-LD and Tilda editorial bands.
 */
export function ServiceDetailPage({ service }: { service: ServiceDefinition }) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    url: `${SITE_URL}${service.href}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-full flex flex-col bg-background">
      <DirectoryHeader />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle, href: service.href },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-background py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <Badge tone="accent">{service.eyebrow}</Badge>

                <h1 className="mt-6 font-display text-4xl font-normal tracking-tight text-foreground sm:text-5xl leading-[1.1]">
                  {service.headline}
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                  {service.summary}
                </p>
              </div>

              <div className="lg:col-span-4">
                <Card variant="bordered" className="bg-surface p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Engagement Snapshot
                  </p>
                  <dl className="mt-4 space-y-4 border-t border-border pt-4 text-sm">
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                        Pricing Model
                      </dt>
                      <dd className="mt-1 font-display text-lg font-medium text-foreground">
                        {service.startingModel}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                        Target Staging Window
                      </dt>
                      <dd className="mt-1 font-medium text-foreground">
                        {service.timeline}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                        Built For
                      </dt>
                      <dd className="mt-1 text-muted">{service.idealFor}</dd>
                    </div>
                  </dl>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="border-b border-border bg-surface py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                What You Get
              </p>
              <h2 className="mt-3 font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                Production deliverables engineered for ROI
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {service.deliverables.map((item, idx) => (
                <Card key={item.title} variant="bordered" className="bg-background">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-mono text-xs font-semibold text-foreground">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-xl font-medium text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Common SMB Use Cases & Live UI Proof */}
        <section className="border-b border-border bg-background py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                US SMB Use Cases
              </p>
              <h2 className="mt-3 font-display text-3xl font-normal tracking-tight text-foreground">
                Problems we solve every week
              </h2>
              <ul className="mt-6 space-y-4">
                {service.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-foreground">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="leading-relaxed text-muted">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                Live Interactive Proof
              </p>
              <h2 className="mt-3 font-display text-3xl font-normal tracking-tight text-foreground">
                Inspect our production quality before hiring us
              </h2>
              <div className="mt-6 space-y-4">
                {service.proofLinks.map((proof) => (
                  <Card key={proof.href} variant="subtle" className="p-6 hover:border-foreground">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-display text-lg font-medium text-foreground">
                          {proof.label}
                        </h3>
                        <p className="mt-1 text-sm text-muted">{proof.note}</p>
                      </div>
                      <Button href={proof.href} variant="outline" size="sm" className="shrink-0">
                        View Demo
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Zero-Upfront Process */}
        <section className="border-b border-border bg-surface py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Zero-Upfront Engineering
                </p>
                <h2 className="mt-3 font-display text-3xl font-normal tracking-tight text-foreground">
                  How we ship without agency risk
                </h2>
              </div>
              <Link
                href="/blogs/zero-upfront-software-development"
                className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground underline underline-offset-4 hover:text-accent-strong transition-colors"
              >
                Read Our Model
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card variant="subtle" className="bg-background">
                <span className="font-mono text-xs text-accent-strong">STEP 01</span>
                <h3 className="mt-2 font-display text-xl font-medium text-foreground">
                  48-Hour Scope &amp; Low Entry Quote
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Share your goals. We send a clean architectural blueprint and a custom low-starting-price proposal—no obligation.
                </p>
              </Card>
              <Card variant="subtle" className="bg-background">
                <span className="font-mono text-xs text-accent-strong">STEP 02</span>
                <h3 className="mt-2 font-display text-xl font-medium text-foreground">
                  Live Staging Sandbox
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  We build your real {service.shortTitle.toLowerCase()} deliverables in an isolated staging environment so you can test everything hands-on.
                </p>
              </Card>
              <Card variant="subtle" className="bg-background">
                <span className="font-mono text-xs text-accent-strong">STEP 03</span>
                <h3 className="mt-2 font-display text-xl font-medium text-foreground">
                  Launch &amp; Pay When Live
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Once approved and connected to your production domain or workflows, you go live with clean code ownership and optional support.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-border bg-background py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              Common Questions
            </p>
            <h2 className="mt-3 font-display text-3xl font-normal tracking-tight text-foreground">
              {service.shortTitle} FAQ
            </h2>
            <div className="mt-8">
              <AgencyFaqList faqs={service.faqs} />
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="border-b border-border bg-surface py-16">
          <div className="mx-auto max-w-6xl px-6">
            <Card variant="bordered" className="bg-background flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <Badge tone="dark">Custom Pricing · Starting Low</Badge>
                <h2 className="mt-4 font-display text-2xl font-normal text-foreground sm:text-3xl">
                  Ready to scope your {service.shortTitle.toLowerCase()} project?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Tell us what your business needs in 2 minutes. We will send back a clear scope and starter quote within 48 hours.
                </p>
              </div>
              <Button
                href={`/pricing?service=${service.slug}#request-quote`}
                variant="accent"
                size="lg"
                className="shrink-0"
              >
                Start Free Scope <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          </div>
        </section>

        <FeaturedBlogsSection variant="background" />
      </main>

      <DirectoryFooter variant="surface" />
    </div>
  );
}
