import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { SkillDocViewer } from "@/components/directory/SkillDocViewer";
import {
  DirectoryFooter,
  DirectoryHeader,
} from "@/components/directory/DirectoryShell";
import { DIRECTORY_SKILLS } from "@/components/directory/directory-data";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { loadSkillDocs } from "@/lib/skill-loader";

export function generateStaticParams() {
  return DIRECTORY_SKILLS.map((skill) => ({ skill: skill.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ skill: string }>;
}): Promise<Metadata> {
  const { skill: skillId } = await params;
  const skill = DIRECTORY_SKILLS.find((s) => s.id === skillId);
  if (!skill) {
    return { title: "Skill Not Found" };
  }

  return {
    title: `${skill.name} — Design Skills`,
    description: skill.summary,
    alternates: { canonical: skill.detailHref },
    openGraph: {
      title: `${skill.name} — Design Skills`,
      description: skill.summary,
      url: skill.detailHref,
    },
  };
}

function SkillDetailSkeleton() {
  return (
    <>
      <div className="border-b border-border bg-surface/60">
        <div className="mx-auto max-w-6xl px-6 py-3">
          <div className="h-4 w-52 animate-pulse bg-surface-muted" />
        </div>
      </div>
      <section className="border-b border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-4">
          <div className="h-10 w-72 animate-pulse bg-surface-muted" />
          <div className="h-4 w-full max-w-xl animate-pulse bg-surface-muted" />
          <div className="h-4 w-48 animate-pulse bg-surface-muted" />
        </div>
      </section>
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-6">
          <div className="h-10 w-80 animate-pulse border-b border-border bg-surface" />
          <div className="h-96 w-full animate-pulse border-2 border-border bg-surface" />
        </div>
      </section>
    </>
  );
}

async function SkillDetailContent({
  params,
}: {
  params: Promise<{ skill: string }>;
}) {
  const { skill: skillId } = await params;
  const skill = DIRECTORY_SKILLS.find((s) => s.id === skillId);
  const docs = skill ? loadSkillDocs(skill.id) : null;

  if (!skill || !docs) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Skills", href: "/design-skills" },
          { label: skill.name, href: skill.detailHref },
        ]}
      />

      {/* Skill Header */}
      <section className="border-b border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl font-normal tracking-tight text-foreground sm:text-5xl">
                {skill.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {docs.description || skill.summary}
              </p>
              <p className="mt-3 font-mono text-xs text-muted">
                Path: <span className="text-foreground">{skill.localPath}</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button href={skill.systemHref} variant="accent" size="md">
                Design System <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={skill.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
              >
                GitHub <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Skill Documentation Tabs */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SkillDocViewer files={docs.files} />
        </div>
      </section>
    </>
  );
}

export default function DesignSkillDetailPage({
  params,
}: PageProps<"/design-skills/[skill]">) {
  return (
    <div className="min-h-full flex flex-col bg-background">
      <DirectoryHeader />

      <main className="flex-1">
        <Suspense fallback={<SkillDetailSkeleton />}>
          <SkillDetailContent params={params} />
        </Suspense>
      </main>

      <DirectoryFooter variant="surface" />
    </div>
  );
}
