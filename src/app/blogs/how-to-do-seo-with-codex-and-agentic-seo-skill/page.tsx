import type { Metadata } from "next";
import {
  BlogArticleShell,
  BlogCodeBlock,
  BlogInlineCode,
  BlogSection,
  BlogTakeaway,
} from "@/components/blogs/BlogArticleShell";

const SLUG = "how-to-do-seo-with-codex-and-agentic-seo-skill";
const TITLE = "Trustworthy SEO Audits with Codex & Agentic Skills";
const DESCRIPTION =
  "How to replace vague AI SEO advice with deterministic evidence checks: schema verification, canonical audits, and automated crawler reporting.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blogs/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `/blogs/${SLUG}`,
    type: "article",
  },
};

export default function CodexSeoAuditBlogPage() {
  return (
    <BlogArticleShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Blogs", href: "/blogs" },
        { label: TITLE, href: `/blogs/${SLUG}` },
      ]}
      title={TITLE}
      excerpt={DESCRIPTION}
      tocItems={[
        {
          id: "separate-reasoning-from-evidence",
          title: "Separate Reasoning from Evidence",
          number: 1,
        },
        {
          id: "run-evidence-based-audits",
          title: "Run Evidence-Based Audits in Codex",
          number: 2,
        },
        {
          id: "verify-before-you-ship",
          title: "Verify Before You Ship",
          number: 3,
        },
      ]}
      relatedArticles={[
        {
          href: "/blogs/how-to-clone-site-using-antigravity-and-uxpilot",
          title: "How to Clone Any Website Using Antigravity & UXpilot",
          category: "Workflow",
          readTime: "1 min read",
        },
        {
          href: "/blogs/zero-upfront-software-development",
          title: "Why We Build Custom Software Before You Pay a Single Dollar",
          category: "Engineering Model",
          readTime: "1 min read",
        },
      ]}
    >
      <p className="text-lg leading-relaxed text-foreground">
        Never ask an AI coding assistant to &ldquo;make this site rank.&rdquo;
        LLMs hallucinate scores, invent keyword density metrics, and offer
        generic marketing advice. Trustworthy technical SEO requires{" "}
        <strong className="font-semibold text-foreground">
          deterministic evidence
        </strong>
        .
      </p>

      <p>
        Here is how we run high-accuracy, zero-hallucination SEO audits using
        Codex CLI and open-source verification skills.
      </p>

      <BlogSection
        id="separate-reasoning-from-evidence"
        number="01"
        eyebrow="Deterministic Auditing"
        title="1. Separate Reasoning from Evidence"
      >
        <p>
          Use deterministic scripts to inspect actual HTTP status codes,
          metadata tags, canonical declarations, and Core Web Vitals telemetry.
          Let headless scripts gather raw factual data rather than asking an
          LLM to guess.
        </p>
      </BlogSection>

      <BlogSection
        id="run-evidence-based-audits"
        number="02"
        eyebrow="Schema Verification"
        title="2. Run Evidence-Based Audits in Codex"
      >
        <p>
          Execute the audit runner against your local development server or
          staging deployment:
        </p>
        <BlogCodeBlock
          label="terminal — audit"
          runtime="Python 3.12"
          command="$ audit_runner.py --target https://zallyy.com --verify"
        />
        <p>
          Codex cross-references JSON-LD structured data directly against
          official Schema.org specifications, flags missing OpenGraph
          dimensions, identifies broken internal anchors, and verifies canonical
          tag consistency across all App Router routes.
        </p>
      </BlogSection>

      <BlogSection
        id="verify-before-you-ship"
        number="03"
        eyebrow="Hardening & Validation"
        title="3. Verify Before You Ship"
      >
        <p>
          Fix issues directly in Next.js App Router metadata exports (
          <BlogInlineCode>generateMetadata</BlogInlineCode>), generate dynamic
          XML sitemaps, and re-run the crawl locally.
        </p>

        <BlogTakeaway
          label="Verification Protocol"
          quote="Don't guess SEO ranking. Verify code, validate structured JSON-LD schemas, and let automated scripts prove compliance."
        />
      </BlogSection>
    </BlogArticleShell>
  );
}
