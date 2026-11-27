import { ArrowRight, Code2, Globe, Workflow } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { AgencyFaqList } from "@/components/agency/AgencyFaqList";
import { FeaturedBlogsSection } from "@/components/blogs/FeaturedBlogsSection";
import {
  DirectorySkillCard,
  DirectorySystemCard,
} from "@/components/directory/DirectoryCards";
import {
  DirectoryFooter,
  DirectoryHeader,
} from "@/components/directory/DirectoryShell";
import {
  DIRECTORY_SKILLS,
  DIRECTORY_SYSTEMS,
  REPO_URL,
} from "@/components/directory/directory-data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AGENCY_SERVICES, HOME_FAQS } from "@/lib/agency-data";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_DOMAIN, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: `${SITE_NAME} — US Software, Website & Automation Agency`,
  description:
    "Affordable website development, custom software, and workflow automation for US small and medium businesses. Custom pricing starting low, live staging before you pay, plus open Next.js design systems and AI skills.",
  path: "/",
});

function ServiceCardIcon({ iconKey }: { iconKey: "globe" | "code" | "workflow" }) {
  switch (iconKey) {
    case "globe":
      return <Globe className="h-5 w-5" />;
    case "code":
      return <Code2 className="h-5 w-5" />;
    case "workflow":
      return <Workflow className="h-5 w-5" />;
  }
}

export default function HomePage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: `${SITE_TAGLINE} serving US small and medium businesses with custom website development, software development, and workflow automation.`,
    sameAs: [REPO_URL],
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((faq) => ({
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge tone="accent">US Small &amp; Medium Business Agency</Badge>
              <h1 className="mt-6 font-display text-4xl font-normal tracking-tight text-foreground sm:text-6xl leading-[1.1]">
                Websites, custom software &amp; automation built before you pay.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                <span className="font-semibold text-foreground">{SITE_NAME}</span>{" "}
                (<span className="font-mono text-sm text-foreground">{SITE_DOMAIN}</span>)
                helps US small and medium businesses launch production websites,
                custom internal software, and workflow automations—with{" "}
                <strong className="font-semibold text-foreground">
                  custom pricing starting low
                </strong>{" "}
                and live staging proof before launch.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button href="/pricing#request-quote" variant="accent" size="lg">
                  Get a Custom Quote <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  Explore Services
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 border-t border-border pt-8 text-left sm:grid-cols-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Pricing Model
                  </p>
                  <p className="mt-1 font-display text-lg font-medium text-foreground">
                    Custom &amp; Low Starting Tier
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Risk Reversal
                  </p>
                  <p className="mt-1 font-display text-lg font-medium text-foreground">
                    Live Staging Before Launch
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Open Proof
                  </p>
                  <p className="mt-1 font-display text-lg font-medium text-foreground">
                    5 Production UI Systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section id="services" className="border-b border-border bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Core Agency Services
                </p>
                <h2 className="mt-2 font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                  Built for US Small &amp; Medium Businesses
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  Start with one focused website, client portal, or automated workflow—scoped around your budget instead of bloated enterprise retainers.
                </p>
              </div>
              <Link
                href="/services"
                className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-foreground underline underline-offset-4 hover:text-accent-strong transition-colors"
              >
                Compare Services
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {AGENCY_SERVICES.map((service) => (
                <Card
                  key={service.slug}
                  variant="bordered"
                  className="bg-background flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
                        <ServiceCardIcon iconKey={service.iconKey} />
                      </div>
                      <Badge tone="neutral">{service.timeline}</Badge>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-normal text-foreground">
                      <Link
                        href={service.href}
                        className="hover:text-accent-strong transition-colors"
                      >
                        {service.shortTitle}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {service.summary}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border flex items-center justify-between gap-3">
                    <span className="text-xs font-medium text-foreground">
                      {service.startingModel}
                    </span>
                    <Button
                      href={service.href}
                      variant="primary"
                      size="sm"
                      className="shrink-0"
                    >
                      Details <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Zero-Upfront Process */}
        <section className="border-b border-border bg-background py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  How We Deliver
                </p>
                <h2 className="mt-2 font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                  Low Starting Pricing, Zero-Upfront Staging
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  Traditional agencies ask for $20,000 upfront and months of waiting. We deliver working software on a live staging URL first so you see real value before going live.
                </p>
              </div>
              <Link
                href="/pricing"
                className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-foreground underline underline-offset-4 hover:text-accent-strong transition-colors"
              >
                View Pricing Model
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card variant="surface">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent font-mono text-xs font-semibold text-foreground">
                  01
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-foreground">
                  48-Hour Scope &amp; Custom Quote
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Tell us your website, software, or automation bottleneck. You receive a clear technical roadmap and low-starting-price estimate tailored to your scope.
                </p>
              </Card>
              <Card variant="surface">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent font-mono text-xs font-semibold text-foreground">
                  02
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-foreground">
                  Test in Live Staging
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  We build on production Next.js, TypeScript, and PostgreSQL infrastructure and deploy continuous previews you can test with your own team.
                </p>
              </Card>
              <Card variant="surface">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent font-mono text-xs font-semibold text-foreground">
                  03
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-foreground">
                  Go Live &amp; Scale on Demand
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Once your site, portal, or automation is live on your domain and workflows, you pay transparently and keep clean ownership of your codebase.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Design Systems (Live Proof + Free Dev Assets) */}
        <section id="design-systems" className="border-b border-border bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Live UI Proof &amp; Open Developer Templates
                </p>
                <h2 className="mt-2 font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                  Interactive Design Systems
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  Inspect the exact production UI systems we build with—free for developers to explore, and ready for us to customize into your company website, SaaS, or client portal.
                </p>
              </div>
              <Link
                href="/design-systems"
                className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-foreground underline underline-offset-4 hover:text-accent-strong transition-colors"
              >
                View All Systems
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {DIRECTORY_SYSTEMS.map((sys) => (
                <DirectorySystemCard key={sys.slug} system={sys} mode="landing" />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Design Skills (For Developers & AI Builders) */}
        <section id="design-skills" className="border-b border-border bg-background py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  For Developers &amp; AI Coding Agents
                </p>
                <h2 className="mt-2 font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                  Portable Design Skills
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  Each design system pairs with an open <span className="font-mono text-xs text-foreground">SKILL.md</span> agent specification containing tokens, Do/Don&apos;t rules, and 23 component specs on GitHub.
                </p>
              </div>
              <Link
                href="/design-skills"
                className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-foreground underline underline-offset-4 hover:text-accent-strong transition-colors"
              >
                View All Skills
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {DIRECTORY_SKILLS.map((skill) => (
                <DirectorySkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Blogs */}
        <FeaturedBlogsSection variant="surface" hasBottomBorder />

        {/* FAQ & Final CTA */}
        <section id="faq" className="bg-background py-20">
          <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Badge tone="neutral">FAQ</Badge>
              <h2 className="mt-4 font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                Common Questions
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Clear answers about our US SMB services, low starting custom pricing, and how our open design systems fit in.
              </p>
            </div>

            <div className="lg:col-span-7">
              <AgencyFaqList faqs={HOME_FAQS} />
            </div>
          </div>
        </section>
      </main>

      <DirectoryFooter variant="surface" />
    </div>
  );
}
