"use client";

import { Check, Copy } from "lucide-react";
import { Fragment, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Tabs } from "@/components/ui/Tabs";
import type { MarkdownBlock, SkillDocFile } from "@/lib/skill-loader";

interface SkillDocViewerProps {
  files: SkillDocFile[];
}

/**
 * Renders inline Markdown tokens (**bold**, `code`, and [label](url)) safely as React nodes.
 */
function renderInline(text: string) {
  const tokenRegex = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, idx) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={idx}
          className="border border-border bg-surface px-1.5 py-0.5 font-mono text-[12px] text-foreground"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isExternal = href.startsWith("http://") || href.startsWith("https://");
      if (isExternal) {
        return (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4 hover:text-accent-strong"
          >
            {label}
          </a>
        );
      }
      return (
        <span key={idx} className="font-mono text-xs text-foreground">
          {label}
        </span>
      );
    }

    return <Fragment key={idx}>{part}</Fragment>;
  });
}

function MarkdownBlockView({ block }: { block: MarkdownBlock }) {
  switch (block.type) {
    case "heading":
      if (block.level === 1) {
        return (
          <h2 className="mt-8 first:mt-0 font-display text-3xl font-normal tracking-tight text-foreground">
            {renderInline(block.text)}
          </h2>
        );
      }
      if (block.level === 2) {
        return (
          <h3 className="mt-10 first:mt-0 border-b border-border pb-2 font-display text-2xl font-normal tracking-tight text-foreground">
            {renderInline(block.text)}
          </h3>
        );
      }
      return (
        <h4 className="mt-6 first:mt-0 font-display text-lg font-medium text-foreground">
          {renderInline(block.text)}
        </h4>
      );

    case "paragraph":
      return (
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {renderInline(block.text)}
        </p>
      );

    case "hr":
      return <hr className="my-8 border-border" />;

    case "blockquote":
      return (
        <blockquote className="mt-4 border-l-2 border-accent bg-surface px-4 py-3 text-sm leading-relaxed text-foreground">
          {renderInline(block.text)}
        </blockquote>
      );

    case "code":
      return (
        <div className="mt-4 overflow-x-auto border border-border bg-surface p-5">
          {block.lang && (
            <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              {block.lang}
            </div>
          )}
          <pre className="font-mono text-xs leading-relaxed text-foreground">
            <code>{block.code}</code>
          </pre>
        </div>
      );

    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <ListTag
          className={`mt-4 space-y-2 pl-5 text-sm leading-relaxed text-muted ${
            block.ordered ? "list-decimal" : "list-disc"
          }`}
        >
          {block.items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ListTag>
      );
    }

    case "table":
      return (
        <div className="mt-5 overflow-x-auto border border-border bg-background">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-surface text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              <tr>
                {block.headers.map((header, idx) => (
                  <th key={idx} className="px-4 py-3 font-semibold">
                    {renderInline(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {block.rows.map((row, rowIdx) => (
                <tr key={rowIdx} className="align-top">
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} className="px-4 py-3 text-xs leading-relaxed text-muted">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

/**
 * Interactive tabbed viewer for SKILL.md, by-class.md, and by-component.md specs.
 */
export function SkillDocViewer({ files }: SkillDocViewerProps) {
  const [activeId, setActiveId] = useState<string>(files[0]?.id ?? "skill");
  const [copied, setCopied] = useState(false);

  const activeFile = files.find((f) => f.id === activeId) ?? files[0];
  if (!activeFile) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeFile.raw);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 border-b border-border sm:flex-row sm:items-end sm:justify-between">
        <Tabs
          items={files.map((f) => ({ id: f.id, label: f.label }))}
          activeId={activeFile.id}
          onChange={(id) => {
            setActiveId(id);
            setCopied(false);
          }}
          className="flex-wrap border-b-0"
        />

        <div className="pb-3 sm:pb-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy {activeFile.filename}
              </>
            )}
          </Button>
        </div>
      </div>

      <article className="border-2 border-foreground bg-background p-6 sm:p-10">
        <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
          <span className="font-mono text-xs text-muted">{activeFile.filename}</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
            Specification
          </span>
        </div>
        <div>
          {activeFile.blocks.map((block, idx) => (
            <MarkdownBlockView key={idx} block={block} />
          ))}
        </div>
      </article>
    </div>
  );
}
