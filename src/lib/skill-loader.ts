import fs from "node:fs";
import path from "node:path";

export type MarkdownBlock =
  | { type: "heading"; level: 1 | 2 | 3 | 4; text: string }
  | { type: "paragraph"; text: string }
  | { type: "code"; lang: string; code: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "hr" };

export interface SkillDocFile {
  id: "skill" | "by-class" | "by-component";
  label: string;
  filename: string;
  raw: string;
  blocks: MarkdownBlock[];
}

export interface LoadedSkillDocs {
  id: string;
  title: string;
  description: string;
  files: SkillDocFile[];
}

const ALLOWED_SKILL_PATTERN = /^[a-z0-9-]+$/;

function parseFrontmatter(raw: string): {
  name?: string;
  description?: string;
  body: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { body: raw };
  }

  const yamlBlock = match[1];
  const body = match[2];
  const lines = yamlBlock.split(/\r?\n/);

  let name: string | undefined;
  let description: string | undefined;
  let readingDesc = false;
  const descLines: string[] = [];

  for (const line of lines) {
    if (readingDesc) {
      if (/^\s+/.test(line)) {
        descLines.push(line.trim());
        continue;
      }
      readingDesc = false;
    }

    const nameMatch = line.match(/^name:\s*(.+)$/);
    if (nameMatch) {
      name = nameMatch[1].trim().replace(/^["']|["']$/g, "");
      continue;
    }

    const descMatch = line.match(/^description:\s*(.*)$/);
    if (descMatch) {
      const val = descMatch[1].trim();
      if (val === ">-" || val === ">" || val === "|-" || val === "|" || val === "") {
        readingDesc = true;
      } else {
        description = val.replace(/^["']|["']$/g, "");
      }
    }
  }

  if (!description && descLines.length > 0) {
    description = descLines.join(" ");
  }

  return { name, description, body };
}

function splitTableRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").map((cell) => cell.trim());
}

function isTableSeparator(line: string): boolean {
  const trimmed = line.trim();
  return /^\|?(\s*:?-+:?\s*\|)+\s*:?-+:?\s*\|?$/.test(trimmed);
}

/**
 * Lightweight, dependency-free Markdown block parser for skill documentation files.
 */
export function parseMarkdownBlocks(markdown: string): MarkdownBlock[] {
  const lines = markdown.split(/\r?\n/);
  const blocks: MarkdownBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i += 1;
      continue;
    }

    // Fenced code block
    if (trimmed.startsWith("```")) {
      const lang = trimmed.slice(3).trim();
      const codeLines: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i += 1;
      }
      i += 1; // skip closing fence
      blocks.push({ type: "code", lang, code: codeLines.join("\n") });
      continue;
    }

    // Horizontal rule
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      blocks.push({ type: "hr" });
      i += 1;
      continue;
    }

    // Headings
    const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      blocks.push({
        type: "heading",
        level: headingMatch[1].length as 1 | 2 | 3 | 4,
        text: headingMatch[2].trim(),
      });
      i += 1;
      continue;
    }

    // GFM Table
    if (
      trimmed.includes("|") &&
      i + 1 < lines.length &&
      isTableSeparator(lines[i + 1])
    ) {
      const headers = splitTableRow(trimmed);
      const rows: string[][] = [];
      i += 2; // skip header & separator
      while (i < lines.length && lines[i].trim().includes("|")) {
        rows.push(splitTableRow(lines[i]));
        i += 1;
      }
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    // Blockquote
    if (trimmed.startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i += 1;
      }
      blocks.push({ type: "blockquote", text: quoteLines.join(" ") });
      continue;
    }

    // Ordered or unordered list
    const isUnordered = /^[-*]\s+/.test(trimmed);
    const isOrdered = /^\d+\.\s+/.test(trimmed);
    if (isUnordered || isOrdered) {
      const items: string[] = [];
      while (i < lines.length) {
        const current = lines[i].trim();
        if (isUnordered && /^[-*]\s+/.test(current)) {
          items.push(current.replace(/^[-*]\s+/, ""));
          i += 1;
        } else if (isOrdered && /^\d+\.\s+/.test(current)) {
          items.push(current.replace(/^\d+\.\s+/, ""));
          i += 1;
        } else if (current && !/^(#{1,4}\s|```|---|\|)/.test(current) && items.length > 0 && /^\s{2,}/.test(lines[i])) {
          items[items.length - 1] += ` ${current}`;
          i += 1;
        } else {
          break;
        }
      }
      blocks.push({ type: "list", ordered: isOrdered, items });
      continue;
    }

    // Paragraph
    const paraLines: string[] = [];
    while (i < lines.length) {
      const current = lines[i].trim();
      if (
        !current ||
        current.startsWith("```") ||
        /^#{1,4}\s+/.test(current) ||
        /^(-{3,}|\*{3,})$/.test(current) ||
        /^[-*]\s+/.test(current) ||
        /^\d+\.\s+/.test(current) ||
        current.startsWith(">") ||
        (current.includes("|") && i + 1 < lines.length && isTableSeparator(lines[i + 1]))
      ) {
        break;
      }
      paraLines.push(current);
      i += 1;
    }
    if (paraLines.length > 0) {
      blocks.push({ type: "paragraph", text: paraLines.join(" ") });
    } else {
      i += 1;
    }
  }

  return blocks;
}

/**
 * Loads SKILL.md and reference guides for a design skill directory at build time.
 */
export function loadSkillDocs(skillId: string): LoadedSkillDocs | null {
  if (!ALLOWED_SKILL_PATTERN.test(skillId)) {
    return null;
  }

  const skillDir = path.join(process.cwd(), ".agents", "skills", skillId);
  const skillMdPath = path.join(skillDir, "SKILL.md");

  if (!fs.existsSync(skillMdPath)) {
    return null;
  }

  const skillRaw = fs.readFileSync(skillMdPath, "utf-8");
  const { name, description, body } = parseFrontmatter(skillRaw);

  const files: SkillDocFile[] = [
    {
      id: "skill",
      label: "SKILL.md",
      filename: "SKILL.md",
      raw: skillRaw,
      blocks: parseMarkdownBlocks(body),
    },
  ];

  const optionalRefs: {
    id: SkillDocFile["id"];
    label: string;
    relPath: string;
  }[] = [
    { id: "by-class", label: "By Class (tokens)", relPath: "references/by-class.md" },
    {
      id: "by-component",
      label: "By Component (23 UI)",
      relPath: "references/by-component.md",
    },
  ];

  for (const ref of optionalRefs) {
    const fullPath = path.join(skillDir, ref.relPath);
    if (fs.existsSync(fullPath)) {
      const raw = fs.readFileSync(fullPath, "utf-8");
      files.push({
        id: ref.id,
        label: ref.label,
        filename: ref.relPath,
        raw,
        blocks: parseMarkdownBlocks(raw),
      });
    }
  }

  return {
    id: skillId,
    title: name || skillId,
    description: description || "",
    files,
  };
}
