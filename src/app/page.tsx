import { ArrowRight, Layers, Sparkles, Terminal } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
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
} from "@/components/directory/directory-data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SITE_DOMAIN, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description:
    "zallyy (zallyy.com) is a software development agency building production Next.js applications, curated design systems, and portable AI agent skills.",
  alternates: { canonical: "/" },
};

const ARCHITECTURE_PILLARS = [
  {
    num: "01",
    title: "Scoped CSS Tokens",
    body: "Every design system mounts its own [data-design-system] palette and font scale in globals.css without leaking across routes.",
    icon: Layers,
  },
  {
    num: "02",
    title: "Component-First UI Kits",
    body: "Each brand ships typed Server and Client primitives, interactive playgrounds, and full App Router route coverage.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "Portable Design Skills",
    body: "Every system includes a SKILL.md plus bidirectional by-class and by-component reference guides hosted on GitHub.",
    icon: Terminal,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-full flex flex-col bg-background">
      <DirectoryHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge tone="accent">{SITE_TAGLINE}</Badge>
              <h1 className="mt-6 font-display text-4xl font-normal tracking-tight text-foreground sm:text-6xl leading-[1.1]">
                Software systems &amp; interfaces built for production.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                <span className="font-semibold text-foreground">{SITE_NAME}</span>{" "}
                (<span className="font-mono text-sm text-foreground">{SITE_DOMAIN}</span>)
                is a software development agency shipping production web platforms,
                curated UI systems under{" "}
                <span className="font-mono text-sm text-foreground">/design-systems</span>,
                and portable{" "}
                <span className="font-mono text-sm text-foreground">SKILL.md</span>{" "}
                agent specs.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button href="/design-systems" variant="accent" size="lg">
                  Browse Design Systems <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/design-skills" variant="outline" size="lg">
                  Explore Design Skills
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Design Systems */}
        <section id="design-systems" className="border-b border-border bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                  Featured Design Systems
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  Open any system to inspect its scoped tokens, interactive components, and full route demos.
                </p>
              </div>
              <Link
                href="/design-systems"
                className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-foreground underline underline-offset-4 hover:text-accent-strong transition-colors"
              >
                View All
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {DIRECTORY_SYSTEMS.map((sys) => (
                <DirectorySystemCard key={sys.slug} system={sys} mode="landing" />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Design Skills */}
        <section id="design-skills" className="border-b border-border bg-background py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                  Featured Design Skills
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  Each design system pairs with a structured agent skill containing tokens, Do/Don&apos;t rules, and 23 component specs on GitHub.
                </p>
              </div>
              <Link
                href="/design-skills"
                className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-foreground underline underline-offset-4 hover:text-accent-strong transition-colors"
              >
                View All
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {DIRECTORY_SKILLS.map((skill) => (
                <DirectorySkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div>
              <Badge tone="neutral">Architecture</Badge>
              <h2 className="mt-4 font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                Built for Humans &amp; Coding Agents
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {ARCHITECTURE_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <Card key={pillar.num} variant="subtle" className="bg-background">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-display text-2xl font-light text-muted">
                        {pillar.num}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-medium text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {pillar.body}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <DirectoryFooter variant="background" />
    </div>
  );
}
