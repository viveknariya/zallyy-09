import type { Metadata } from "next";
import { FeaturedBlogsSection } from "@/components/blogs/FeaturedBlogsSection";
import { DirectorySkillCard } from "@/components/directory/DirectoryCards";
import {
  DirectoryFooter,
  DirectoryHeader,
} from "@/components/directory/DirectoryShell";
import { DIRECTORY_SKILLS } from "@/components/directory/directory-data";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "All Design Skills",
  description:
    "Browse portable design system agent skills with SKILL.md specifications, token lookup tables, 23-component rules, and GitHub repository links.",
  alternates: { canonical: "/design-skills" },
  openGraph: {
    title: "All Design Skills",
    description:
      "Browse portable design system agent skills with GitHub links and component lookup guides.",
    url: "/design-skills",
  },
};

export default function DesignSkillsIndexPage() {
  return (
    <div className="min-h-full flex flex-col bg-background">
      <DirectoryHeader />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Skills", href: "/design-skills" },
        ]}
      />

      <main className="flex-1">
        <section className="border-b border-border bg-background py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div>
              <Badge tone="accent">Skills</Badge>
              <h1 className="mt-4 font-display text-4xl font-light text-foreground">
                Design Skills Directory
              </h1>
              <p className="mt-3 max-w-2xl text-base text-muted">
                Structured skill packs in{" "}
                <span className="font-mono text-sm text-foreground">.agents/skills/</span>{" "}
                documenting tokens, allowed/forbidden classes, and 23 UI
                components.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {DIRECTORY_SKILLS.map((skill) => (
                <DirectorySkillCard key={skill.id} skill={skill} />
              ))}
            </div>

            <div className="mt-12 border border-border border-l-4 border-l-accent bg-accent-soft/20 p-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
                  Prefer Done-For-You Engineering?
                </p>
                <p className="mt-1 text-sm text-muted">
                  Free for developers to install—or hire the zallyy team to build your custom website, software, or workflow automation starting at a low entry price.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Button
                  href="/services/automation-development"
                  variant="outline"
                  size="sm"
                >
                  Automation Services
                </Button>
                <Button href="/pricing#request-quote" variant="accent" size="sm">
                  Get Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        <FeaturedBlogsSection variant="surface" />
      </main>

      <DirectoryFooter variant="background" />
    </div>
  );
}
