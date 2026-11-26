"use client";

import { FileText } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import type { SkillDocFile } from "@/lib/skill-loader";

interface SkillDocViewerProps {
  skillId: string;
  files: SkillDocFile[];
}

/**
 * Interactive brief viewer for SKILL.md, by-class.md, and by-component.md.
 */
export function SkillDocViewer({ skillId, files }: SkillDocViewerProps) {
  const [activeId, setActiveId] = useState<string>(files[0]?.id ?? "skill");

  const activeFile = files.find((f) => f.id === activeId) ?? files[0];
  if (!activeFile) return null;

  return (
    <div className="space-y-8">
      <div className="border-b border-border">
        <Tabs
          items={files.map((f) => ({ id: f.id, label: f.label }))}
          activeId={activeFile.id}
          onChange={setActiveId}
          className="flex-wrap border-b-0"
        />
      </div>

      {/* Concise Brief Card for Active File */}
      <article className="border-2 border-foreground bg-background p-6 sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-foreground">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs text-foreground">
                .agents/skills/{skillId}/{activeFile.filename}
              </p>
              <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                {activeFile.lineCount} lines · {activeFile.topics.length} sections
              </p>
            </div>
          </div>

          <Badge tone="neutral">File Brief</Badge>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <h2 className="font-display text-2xl font-normal text-foreground">
              {activeFile.label}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
              {activeFile.summary}
            </p>
          </div>

          {activeFile.topics.length > 0 && (
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
                Covered in this file
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {activeFile.topics.map((topic) => (
                  <div
                    key={topic}
                    className="border border-border bg-surface px-3.5 py-2.5 text-xs text-foreground"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
