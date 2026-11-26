"use client";

import { ArrowRight, BookOpen, Globe, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BLOG_POSTS, CAREERS_ROLES, HELP_COLLECTIONS } from "./brilliant-data";
import { BrilliantMark } from "./BrilliantLogo";

/**
 * Brilliant Support & Help center (help.brilliant.org) with pure black search header and 6 collection cards.
 */
export function BrilliantHelpCenter() {
  const [query, setQuery] = useState("");
  const filtered = HELP_COLLECTIONS.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <section className="bg-[#040404] py-12 text-white">
        <div className="mx-auto max-w-3xl px-6 space-y-5">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span className="font-bold text-white text-base">Brilliant Help</span>
            <span className="inline-flex items-center gap-1">
              <Globe className="h-3.5 w-3.5" /> English
            </span>
          </div>
          <h1 className="text-2xl font-bold">
            Advice and answers from the Brilliant.org Team
          </h1>
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-4 w-4 text-zinc-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for articles..."
              className="w-full rounded-xl bg-[#262626] py-3 pl-11 pr-4 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 space-y-4">
        {filtered.map((col) => (
          <div
            key={col.id}
            className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5 hover:border-foreground/30 transition-colors"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h2 className="text-sm font-bold text-foreground">{col.title}</h2>
              <p className="text-xs text-muted">{col.description}</p>
              <div className="pt-1 flex items-center gap-2 text-[11px] text-muted">
                <BrilliantMark className="h-4 w-4" />
                <span>By Brilliant · {col.articles} articles</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

/**
 * Brilliant Blog index view (blog.brilliant.org).
 */
export function BrilliantBlogGrid() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 space-y-10">
      <div className="flex items-center justify-between border-b border-border pb-6">
        <div className="flex items-center gap-2.5">
          <BrilliantMark className="h-7 w-7" />
          <span className="text-xl font-bold text-foreground">Brilliant Blog</span>
        </div>
        <Link
          href="/design-systems/brilliant/careers"
          className="text-xs font-semibold text-muted hover:text-foreground"
        >
          Careers
        </Link>
      </div>

      <h1 className="text-2xl font-medium text-foreground">
        Behind the scenes with the Brilliant team
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {BLOG_POSTS.map((post, idx) => (
          <Link
            key={post.slug}
            href="/design-systems/brilliant/blog/post"
            className="group rounded-2xl border border-border bg-background overflow-hidden hover:border-foreground/40 transition-colors"
          >
            <div
              className={`h-44 p-5 flex items-end ${
                idx === 0
                  ? "bg-gradient-to-br from-[#FDE68A] via-[#F5D0FE] to-[#DBEAFE]"
                  : idx === 1
                  ? "bg-gradient-to-br from-[#FEF3C7] to-[#E5E7EB]"
                  : "bg-gradient-to-br from-[#DBEAFE] to-[#DCFCE7]"
              }`}
            >
              <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">
                {post.category}
              </span>
            </div>
            <div className="p-5 space-y-2">
              <h2 className="text-base font-bold text-foreground group-hover:text-accent-strong transition-colors">
                {post.title}
              </h2>
              <p className="text-xs leading-relaxed text-muted">{post.summary}</p>
              <p className="pt-1 font-mono text-[11px] text-muted">
                {post.date} · {post.readTime}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Brilliant long-form Blog Post specimen (blog.brilliant.org/decomposition-and-abstraction).
 */
export function BrilliantBlogArticle() {
  const post = BLOG_POSTS[0];
  return (
    <article className="mx-auto max-w-3xl px-6 py-14 space-y-8">
      <Link
        href="/design-systems/brilliant/blog"
        className="text-xs font-semibold text-muted hover:text-foreground"
      >
        ← Back to Brilliant Blog
      </Link>

      <header className="space-y-4 text-center">
        <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong">
          {post.category}
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>
        <p className="font-mono text-xs text-muted">
          {post.date} · {post.readTime}
        </p>
      </header>

      <div className="flex h-64 items-center justify-center rounded-3xl bg-gradient-to-br from-[#FDE68A] via-[#F5D0FE] to-[#DBEAFE] border border-border">
        <div className="rounded-2xl bg-white p-6 shadow-sm flex items-center gap-3">
          <BrilliantMark className="h-10 w-10" />
          <code className="font-mono text-sm font-semibold text-foreground">
            decompose(problem) → intuition
          </code>
        </div>
      </div>

      <div className="space-y-5 text-base leading-relaxed text-foreground/85">
        <p>
          2025&apos;s hottest programming language? Plain English, courtesy of AI.
          More people than ever before are able to build their own tools using LLM
          assistants. AI can handle the technical heavy lifting. What it needs from
          you is crystal-clear thinking.
        </p>
        <p>
          That is why our upcoming computer science courses focus on decomposition,
          state modeling, and debugging intuition—skills that transfer across
          Python, TypeScript, and natural-language specifications alike.
        </p>
      </div>
    </article>
  );
}

/**
 * Brilliant About page (/about/) with serif heading and geometric mission layout.
 */
export function BrilliantAboutView() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 items-center">
        <div className="md:col-span-7 space-y-5">
          <h1 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl">
            About us
          </h1>
          <p className="text-base leading-relaxed text-foreground/85">
            Brilliant&apos;s mission is to create a world of better problem solvers.
            We make games for learning in math, science, computer science, and data analysis.
          </p>
          <p className="text-sm leading-relaxed text-muted">
            On Brilliant, you learn by doing — there are no passive video lectures,
            everything is interactive. We help learners develop intuition through
            interaction, build understanding through experimentation, and have fun.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/design-systems/brilliant/courses"
              className="rounded-full bg-accent px-6 py-2.5 text-xs font-semibold text-white hover:bg-accent-strong"
            >
              Explore courses
            </Link>
            <Link
              href="/design-systems/brilliant/careers"
              className="rounded-full border border-border px-6 py-2.5 text-xs font-semibold text-foreground hover:bg-surface"
            >
              View careers
            </Link>
          </div>
        </div>

        <div className="md:col-span-5 flex justify-center">
          <div className="rounded-3xl border border-border bg-surface p-8">
            <svg viewBox="0 0 220 190" className="w-56 h-auto" aria-label="Geometric squares proof">
              <rect x="30" y="75" width="44" height="44" fill="#F87171" stroke="#111111" strokeWidth="2.5" />
              <rect x="74" y="119" width="60" height="60" fill="#3B82F6" stroke="#111111" strokeWidth="2.5" />
              <polygon points="74,75 74,119 134,119" fill="#FFFFFF" stroke="#111111" strokeWidth="2.5" />
              <polygon points="74,75 134,119 178,59 118,15" fill="#FACC15" stroke="#111111" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Brilliant Careers page (/careers/) with serif hero, culture pillars, and open roles table.
 */
export function BrilliantCareersView() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 space-y-14">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl">
          Careers at Brilliant
        </h1>
        <p className="text-sm leading-relaxed text-muted">
          We&apos;re committed to our mission of creating a world of problem solvers.
          We&apos;re glad you&apos;re here to see if Brilliant might be right for you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          {
            title: "Top-tier talent, anchored in SF + NYC",
            body: "A focused team combining creative pedagogy, software engineering, and interactive visual design.",
          },
          {
            title: "Changing how the world learns",
            body: "People learn by doing. We push the boundaries of tactile STEM problem solving.",
          },
          {
            title: "High impact, low ego",
            body: "We are lifelong learners who ship fast, test with real students, and care deeply about craft.",
          },
        ].map((pillar) => (
          <div key={pillar.title} className="rounded-2xl border border-border bg-surface p-6 space-y-2">
            <h2 className="text-base font-bold text-foreground">{pillar.title}</h2>
            <p className="text-xs leading-relaxed text-muted">{pillar.body}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Open Positions</h2>
        <div className="divide-y divide-border rounded-2xl border border-border bg-background">
          {CAREERS_ROLES.map((role) => (
            <div
              key={role.title}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5"
            >
              <div>
                <p className="text-sm font-bold text-foreground">{role.title}</p>
                <p className="text-xs text-muted">
                  {role.team} · {role.location}
                </p>
              </div>
              <Link
                href="/design-systems/brilliant/about"
                className="inline-flex items-center gap-1 text-xs font-semibold text-accent-strong hover:underline"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Legal document template for Brilliant Privacy Policy and Terms & Conditions.
 */
export function BrilliantLegalDocument({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 space-y-8">
      <header className="border-b border-border pb-6 space-y-2">
        <h1 className="font-serif text-4xl font-semibold text-foreground">{title}</h1>
        <p className="font-mono text-xs text-muted">Last updated: {updated}</p>
      </header>
      <div className="space-y-6">
        {sections.map((s) => (
          <section key={s.heading} className="space-y-2">
            <h2 className="text-base font-bold text-foreground">{s.heading}</h2>
            <p className="text-sm leading-relaxed text-muted">{s.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
