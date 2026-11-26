import type { Metadata } from "next";
import { DirectorySkillCard } from "@/components/directory/DirectoryCards";
import {
  DirectoryFooter,
  DirectoryHeader,
} from "@/components/directory/DirectoryShell";
import { DIRECTORY_SKILLS } from "@/components/directory/directory-data";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";

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

      <main className="flex-1 py-16">
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
        </div>
      </main>

      <DirectoryFooter variant="surface" />
    </div>
  );
}
