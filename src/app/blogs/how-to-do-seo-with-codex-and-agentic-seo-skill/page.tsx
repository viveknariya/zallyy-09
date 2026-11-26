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
  "How we used GPT-5 and the SEO skill in Codex: run $seo, review the audit findings, and work through its prioritized action plan.";

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
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
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
      publishedAt="2026-11-08"
      tocItems={[
        {
          id: "separate-reasoning-from-evidence",
          title: "Model, Skill, and Scope",
          number: 1,
        },
        {
          id: "run-evidence-based-audits",
          title: "Run the SEO Skill",
          number: 2,
        },
        {
          id: "verify-before-you-ship",
          title: "Review Findings and Act",
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
        We used GPT-5 in Codex with the <BlogInlineCode>seo</BlogInlineCode>
        skill to audit the zallyy.com project. The process was simple: run the
        skill, review its evidence-backed findings, then work through the action
        plan.
      </p>

      <p>
        This is the basic workflow another project can follow, without needing
        a transcript of the tooling details.
      </p>

      <BlogSection
        id="separate-reasoning-from-evidence"
        number="01"
        eyebrow="Our Setup"
        title="1. Choose the Model and Skill"
      >
        <p>
          The model for this audit was GPT-5. The skill was
          <BlogInlineCode>seo</BlogInlineCode>, which provides a structured
          process for checking technical SEO, metadata, content, and crawlability.
        </p>
      </BlogSection>

      <BlogSection
        id="run-evidence-based-audits"
        number="02"
        eyebrow="Start the Audit"
        title="2. Run $seo"
      >
        <p>
          We invoked <BlogInlineCode>$seo</BlogInlineCode> in Codex and asked
          it to audit the current project. The skill reviewed the site and
          created a full audit report plus a prioritized action plan.
        </p>
      </BlogSection>

      <BlogSection
        id="verify-before-you-ship"
        number="03"
        eyebrow="From Findings to Fixes"
        title="3. Review the Audit, Then Follow the Plan"
      >
        <p>
          The report highlighted metadata inheritance, missing structured data,
          short article content, and sitemap improvements. It also marked
          checks blocked by DNS or the build environment as limitations rather
          than confirmed site issues.
        </p>
        <p>
          We then followed the action plan: corrected social metadata, added
          article publication details and structured data, removed account
          routes from the sitemap, and stopped assigning every sitemap entry a
          new modification date. Review the evidence, prioritize the fixes, and
          work through them in order.
        </p>

        <BlogTakeaway
          label="The Workflow"
          quote="Choose the model, run the SEO skill, review its findings, and use the action plan to make improvements."
        />
      </BlogSection>
    </BlogArticleShell>
  );
}
