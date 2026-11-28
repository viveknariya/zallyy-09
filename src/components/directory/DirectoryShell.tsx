import { Calendar, Code2, CreditCard, Palette, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SITE_CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_TAGLINE } from "@/lib/site";
import {
  DIRECTORY_SKILLS,
  DIRECTORY_SYSTEMS,
  type DirectorySystem,
  REPO_URL,
} from "./directory-data";

function BrandLockup({ size = 28 }: { size?: 24 | 28 }) {
  const sizeClass = size === 24 ? "h-6 w-6" : "h-7 w-7";
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/logo.svg"
        alt=""
        width={size}
        height={size}
        aria-hidden="true"
        className={sizeClass}
      />
      <span>{SITE_NAME}</span>
    </span>
  );
}

export function DirectoryIcon({ iconKey }: { iconKey: DirectorySystem["iconKey"] }) {
  switch (iconKey) {
    case "palette":
      return <Palette className="h-5 w-5" />;
    case "code":
      return <Code2 className="h-5 w-5" />;
    case "credit-card":
      return <CreditCard className="h-5 w-5" />;
    case "calendar":
      return <Calendar className="h-5 w-5" />;
    case "zap":
      return <Zap className="h-5 w-5" />;
    case "sparkles":
      return <Sparkles className="h-5 w-5" />;
  }
}

/**
 * Top navigation header for the agency landing page, commercial service routes, and developer catalog.
 */
export function DirectoryHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground shrink-0"
        >
          <BrandLockup size={28} />
        </Link>
        <nav
          className="flex items-center gap-4 sm:gap-6"
          aria-label="Primary navigation"
        >
          <Link
            href="/services"
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/80 hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            href="/pricing"
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/80 hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/blogs"
            className="hidden sm:inline-block text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/80 hover:text-foreground transition-colors"
          >
            Blogs
          </Link>
          <Button
            href="/pricing#request-quote"
            variant="outline"
            size="sm"
            className="shrink-0"
          >
            Get Quote
          </Button>
        </nav>
      </div>
    </header>
  );
}

/**
 * Complete editorial multi-column footer connecting agency services, pricing, design systems, and skills.
 */
export function DirectoryFooter({ variant = "surface" }: { variant?: "surface" | "background" }) {
  const bgClass = variant === "background" ? "bg-background" : "bg-surface";

  return (
    <footer className={`mt-auto border-t border-border ${bgClass}`}>
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Row 1 (1-2-2-2): Brand + Services, Pricing, Blogs */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="font-display text-lg font-semibold tracking-tight text-foreground"
            >
              <BrandLockup size={24} />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {SITE_TAGLINE} for US small and medium businesses—backed by open
              Next.js design systems and portable AI skills.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/services"
                  className="text-sm font-medium text-foreground hover:text-accent-strong transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/website-development"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-development"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/automation-development"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Automation Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              Pricing &amp; Contact
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/pricing"
                  className="text-sm font-medium text-foreground hover:text-accent-strong transition-colors"
                >
                  Custom Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing#request-quote"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Scope Estimator
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Common Questions
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONTACT_EMAIL}`}
                  className="font-mono text-xs text-muted hover:text-foreground transition-colors"
                >
                  {SITE_CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              Blogs
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/blogs"
                  className="text-sm font-medium text-foreground hover:text-accent-strong transition-colors"
                >
                  All Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs/how-to-clone-site-using-antigravity-and-uxpilot"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Clone Sites with Antigravity &amp; UXpilot
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs/zero-upfront-software-development"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Zero-Upfront Engineering Model
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs/how-to-do-seo-with-codex-and-agentic-seo-skill"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  SEO Audits with Codex Skills
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 2 (1-2-2-2): Empty Col 1 + Design Systems, Design Skills, Repository & Specs */}
        <div className="mt-10 grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="hidden lg:block" aria-hidden="true" />

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              Design Systems
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/design-systems"
                  className="text-sm font-medium text-foreground hover:text-accent-strong transition-colors"
                >
                  All Design Systems
                </Link>
              </li>
              {DIRECTORY_SYSTEMS.map((sys) => (
                <li key={sys.slug}>
                  <Link
                    href={sys.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {sys.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              Design Skills
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/design-skills"
                  className="text-sm font-medium text-foreground hover:text-accent-strong transition-colors"
                >
                  All Design Skills
                </Link>
              </li>
              {DIRECTORY_SKILLS.map((skill) => (
                <li key={skill.id}>
                  <Link
                    href={skill.detailHref}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {skill.id}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              Repository &amp; Specs
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href={`${REPO_URL}/tree/main/.agents/skills`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Skills Folder (.agents/skills)
                </a>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  XML Sitemap
                </Link>
              </li>
              <li>
                <Link
                  href="/robots.txt"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Robots Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            {SITE_NAME} · {SITE_TAGLINE} —{" "}
            <span className="font-mono text-foreground">{SITE_DOMAIN}</span>
          </p>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground hover:text-accent-strong transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
