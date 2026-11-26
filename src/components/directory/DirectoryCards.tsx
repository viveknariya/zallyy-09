import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { DirectorySkill, DirectorySystem } from "./directory-data";
import { DirectoryIcon } from "./DirectoryShell";

/**
 * Tilda-styled card for a curated Design System in the directory.
 */
export function DirectorySystemCard({
  system,
  mode = "landing",
}: {
  system: DirectorySystem;
  mode?: "landing" | "catalog";
}) {
  return (
    <Card variant="bordered" className="bg-background flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${system.iconStyle.colorClass}`}
            style={{ background: system.iconStyle.background }}
          >
            <DirectoryIcon iconKey={system.iconKey} />
          </div>
          <Badge tone={system.badgeTone}>
            {system.screensCount} Reference Screens
          </Badge>
        </div>
        <h3 className="mt-6 font-display text-2xl font-normal text-foreground">
          {mode === "landing" ? system.name : system.catalogTitle}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {system.description}
        </p>
      </div>
      <div className="mt-8 pt-4 border-t border-border flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-muted">
          {mode === "landing" ? system.href : `${system.routesCount} routes`}
        </span>
        <Button href={system.href} variant="primary" size="sm">
          {mode === "landing" ? "Open" : "Explore"} <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </div>
    </Card>
  );
}

/**
 * Tilda-styled card for a portable Design Skill with direct GitHub repository link.
 */
export function DirectorySkillCard({ skill }: { skill: DirectorySkill }) {
  return (
    <Card variant="bordered" className="bg-background flex flex-col justify-between">
      <div>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full ${skill.iconStyle.colorClass}`}
          style={{ background: skill.iconStyle.background }}
        >
          <DirectoryIcon iconKey={skill.iconKey} />
        </div>
        <h3 className="mt-6 font-display text-2xl font-normal text-foreground">
          <Link
            href={skill.detailHref}
            className="hover:text-accent-strong transition-colors"
          >
            {skill.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {skill.summary}
        </p>
      </div>

      <div className="mt-8 pt-4 border-t border-border flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-muted truncate">
          {skill.localPath}
        </span>
        <Button href={skill.detailHref} variant="primary" size="sm" className="shrink-0">
          Open <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </div>
    </Card>
  );
}
