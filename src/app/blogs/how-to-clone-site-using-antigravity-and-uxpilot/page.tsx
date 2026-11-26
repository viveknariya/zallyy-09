import type { Metadata } from "next";
import {
  BlogArticleShell,
  BlogCodeBlock,
  BlogInlineCode,
  BlogSection,
  BlogTakeaway,
} from "@/components/blogs/BlogArticleShell";

const SLUG = "how-to-clone-site-using-antigravity-and-uxpilot";
const TITLE = "How to Clone Any Website Using Antigravity & UXpilot";
const DESCRIPTION =
  "The 3-step autonomous cloning workflow: turn client requirements into a visual PDF contract, then prompt Antigravity to build production code in minutes.";

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

export default function CloneSiteWorkflowBlogPage() {
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
        { id: "prototype-in-uxpilot", title: "Prototype in UXpilot", number: 1 },
        {
          id: "autonomous-build-in-antigravity",
          title: "Autonomous Build in Antigravity",
          number: 2,
        },
        {
          id: "mechanical-hardening-pass",
          title: "Mechanical Hardening Pass",
          number: 3,
        },
      ]}
      relatedArticles={[
        {
          href: "/blogs/zero-upfront-software-development",
          title: "Why We Build Custom Software Before You Pay a Single Dollar",
          category: "Engineering Model",
          readTime: "1 min read",
        },
        {
          href: "/blogs/how-to-do-seo-with-codex-and-agentic-seo-skill",
          title: "Trustworthy SEO Audits with Codex & Agentic Skills",
          category: "SEO & Auditing",
          readTime: "1 min read",
        },
      ]}
    >
      <p className="text-lg leading-relaxed text-foreground">
        Most developers struggle when asking AI coding assistants to build full
        websites. Without an exact visual anchor, LLMs guess layouts, invent
        random colors, and deliver generic templates that fall apart in
        production.
      </p>

      <p>
        We developed a repeatable{" "}
        <strong className="font-semibold text-foreground">
          3-step autonomous cloning workflow
        </strong>{" "}
        that turns ambiguous requirements into pixel-faithful, production-ready
        applications.
      </p>

      <BlogSection
        id="prototype-in-uxpilot"
        number="01"
        eyebrow="Design Ground Truth"
        title="1. Prototype in UXpilot"
      >
        <p>
          Instead of drawing manual Figma mocks or writing multi-page markdown
          specifications, prompt UXpilot to generate a comprehensive multi-page
          visual PDF contract containing your hero composition, pricing
          matrices, mobile breakpoints, and spacing rules.
        </p>
        <p>
          Export the artifact as <BlogInlineCode>ref.pdf</BlogInlineCode>. This
          file acts as the immutable ground truth for all subsequent code
          generation passes.
        </p>
      </BlogSection>

      <BlogSection
        id="autonomous-build-in-antigravity"
        number="02"
        eyebrow="Autonomous Execution"
        title="2. Autonomous Build in Antigravity"
      >
        <p>
          Feed the visual ground truth directly into Google Antigravity in your
          terminal workspace:
        </p>
        <BlogCodeBlock
          label="bash — workspace"
          runtime="Antigravity CLI"
          command="$ @ref.pdf clone this site"
        />
        <p>
          Antigravity reads the PDF contract directly, reverse-engineers the
          typography hierarchy, extracts exact color tokens, configures fonts,
          builds the Next.js App Router tree, and sets up responsive Tailwind
          styling with zero guesswork.
        </p>
      </BlogSection>

      <BlogSection
        id="mechanical-hardening-pass"
        number="03"
        eyebrow="Verification & Hardening"
        title="3. Mechanical Hardening Pass"
      >
        <p>
          Before shipping to staging, run deterministic verification for WCAG
          AA+ accessibility, dark and light contrast ratios, and zero-error
          TypeScript builds:
        </p>
        <BlogCodeBlock
          label="bash — verification"
          runtime="Bun"
          command="$ bun run build && bun test"
        />
        <p>
          Every component is audited against hydration mismatches and responsive
          layout shifts (CLS), ensuring launch-grade reliability.
        </p>

        <BlogTakeaway
          label="Key Architectural Rule"
          quote="Treat visual references as immutable design contracts. Reference first, prompt second, verify always."
        />
      </BlogSection>
    </BlogArticleShell>
  );
}
