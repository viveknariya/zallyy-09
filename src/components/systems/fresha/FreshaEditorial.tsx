"use client";

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronDown,
  Info,
  Lightbulb,
  Search,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FreshaCalendarScene, VenueInteriorArtwork } from "./FreshaArt";
import {
  CAREERS_ROLES,
  FRESHA_BLOG_POSTS,
  HELP_TOPICS,
  SITEMAP_COUNTRIES,
  TOP_LOCATIONS_SITEMAP,
} from "./fresha-data";

const POPULAR_ARTICLES = [
  {
    title: "Schedule and update team shifts",
    summary: "Learn how to use advanced scheduling to create manageable team shifts.",
  },
  {
    title: "Add and manage client patch tests",
    summary: "Incorporate patch tests for certain services to detect potential sensitivities.",
  },
  {
    title: "Create email blast campaigns",
    summary: "Craft and launch targeted email campaigns that drive client engagement.",
  },
  {
    title: "Creating smart pricing",
    summary: "Automatically adjust pricing during busy or off-peak calendar periods.",
  },
  {
    title: "Add team members",
    summary: "Onboard new team members by setting them up with a profile in your workspace.",
  },
];

const HELP_FAQS = [
  {
    q: "Can I assign a team member to more than one location?",
    a: "Yes. Team members can be assigned across multiple locations through their workspace profile under Locations.",
  },
  {
    q: "Can I adjust permission levels after a member has been invited?",
    a: "You can update permission levels at any time from Team → Actions → Edit → Save.",
  },
  {
    q: "Can I create a team member profile without giving them system access?",
    a: "Yes. Set Permission level to No access so the calendar stays organized without requiring an email invite.",
  },
];

/**
 * Support & Help hub matching fresha.com/help-center with search bar, blob icons, and colorful bottom banner.
 */
export function FreshaHelpCenterView() {
  const [query, setQuery] = useState("");
  const filteredArticles = POPULAR_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.summary.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-0 h-[420px] w-[520px] rounded-full bg-[#d5d3ff]/60 blur-[90px]"
      />

      <div className="relative mx-auto max-w-4xl px-6 py-16 space-y-14">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Explore. Learn. Grow.
          </h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search our help center"
              className="h-12 w-full rounded-full border border-border bg-background pl-11 pr-4 text-sm text-foreground shadow-sm focus:border-foreground focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-muted">Frequently asked:</span>
            {[
              "How to create an appointment",
              "How to set up payments",
              "How to add team members",
            ].map((pill) => (
              <Link
                key={pill}
                href="/design-systems/fresha/help/article"
                className="rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-foreground hover:bg-surface"
              >
                {pill}
              </Link>
            ))}
          </div>
        </div>

        {/* Two Hero Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Link
            href="/design-systems/fresha/help/article"
            className="rounded-2xl border border-border bg-background p-6 hover:border-foreground/30 transition-colors space-y-3 shadow-sm"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="text-base font-bold text-foreground">Getting started</h2>
            <p className="text-xs text-muted">Set up your new account for success.</p>
          </Link>

          <Link
            href="/design-systems/fresha/help/article"
            className="rounded-2xl border border-border bg-background p-6 hover:border-foreground/30 transition-colors space-y-3 shadow-sm"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="text-base font-bold text-foreground">Knowledge base</h2>
            <p className="text-xs text-muted">Follow step-by-step guides to master your calendar.</p>
          </Link>
        </div>

        {/* Popular Articles */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Popular articles</h2>
          <div className="space-y-3">
            {filteredArticles.map((art) => (
              <Link
                key={art.title}
                href="/design-systems/fresha/help/article"
                className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4 hover:border-foreground/30 hover:bg-surface/30 transition-colors"
              >
                <div className="hidden sm:flex h-14 w-24 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#eeebff] to-[#d5d3ff] text-accent">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{art.title}</h3>
                  <p className="mt-1 text-xs text-muted">{art.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Knowledge Base 6-Card Grid */}
        <section className="space-y-5">
          <div>
            <h2 className="text-xl font-bold text-foreground">Knowledge base</h2>
            <p className="text-xs text-muted mt-1">
              Explore guides and master every workflow for your business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HELP_TOPICS.map((topic) => (
              <Link
                key={topic.title}
                href="/design-systems/fresha/help/article"
                className="rounded-2xl border border-border bg-background p-5 space-y-2.5 hover:border-foreground/30 transition-colors"
              >
                <span className="inline-block rounded-lg bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent">
                  {topic.tag}
                </span>
                <h3 className="text-sm font-bold text-foreground">{topic.title}</h3>
                <p className="text-xs leading-relaxed text-muted">{topic.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Multi-blob Here to Help Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-surface p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-gradient-to-tr from-[#6950f3] via-[#c5ff00] to-[#ef6997] opacity-65 blur-2xl"
          />
          <div className="relative max-w-md space-y-3">
            <h2 className="text-2xl font-bold text-foreground">Here to help</h2>
            <p className="text-xs leading-relaxed text-muted">
              Can&apos;t find an answer? Connect with our specialist team directly.
            </p>
            <Link
              href="/design-systems/fresha/login"
              className="inline-flex h-10 items-center rounded-xl bg-foreground px-5 text-xs font-semibold text-background"
            >
              Contact us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

/**
 * Detailed Knowledge Base guide matching help-center/knowledge-base/team/47-add-team-members.
 */
export function FreshaHelpArticleView() {
  const [platform, setPlatform] = useState<"Desktop" | "Mobile">("Desktop");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [voted, setVoted] = useState<"yes" | "no" | null>(null);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
      <div className="lg:col-span-8 space-y-8">
        <div className="space-y-3">
          <Link
            href="/design-systems/fresha/help"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Help Center
          </Link>
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Add team members
          </h1>
          <p className="text-sm leading-relaxed text-muted">
            Welcome new members to your workspace by setting them up with a team member profile in your business calendar.
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-[#eeebff] via-[#f9b6f8]/30 to-[#d5d3ff]/60 p-8 flex items-center justify-center gap-4">
          <div className="rounded-2xl bg-background p-4 shadow-sm border border-border flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-xs font-bold">
              MC
            </span>
            <span className="text-sm font-bold text-foreground">Michael</span>
          </div>
          <div className="rounded-2xl bg-background p-4 shadow-sm border border-border flex items-center gap-3">
            <Users className="h-5 w-5 text-accent" />
            <span className="text-sm font-bold text-foreground">Add member</span>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Creating a team member</h2>
          <div className="inline-flex rounded-full border border-border bg-surface p-1">
            {(["Desktop", "Mobile"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPlatform(p)}
                className={`rounded-full px-4 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                  platform === p ? "bg-foreground text-background" : "text-muted hover:text-foreground"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <ol className="space-y-3 pt-2 text-sm text-foreground">
            {(platform === "Desktop"
              ? [
                  "Open Team from the left workspace sidebar and select Team members.",
                  "Click Add in the upper-right corner and choose New team member.",
                  "Configure personal details, calendar color, service permissions, and save.",
                ]
              : [
                  "Open the Business mobile app and tap More → Team members.",
                  "Tap the plus (+) button in the top header.",
                  "Enter profile info, toggle calendar visibility, and tap Save.",
                ]
            ).map((stepText, idx) => (
              <li key={stepText} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  {idx + 1}
                </span>
                <span className="pt-0.5">{stepText}</span>
              </li>
            ))}
          </ol>

          <div className="rounded-xl bg-surface p-4 flex items-start gap-3 text-xs text-foreground">
            <Info className="h-4 w-4 shrink-0 text-muted mt-0.5" />
            <p>
              Permission levels can be customized later under workspace permissions. Setting access to No access keeps the calendar slot without sending an invite.
            </p>
          </div>

          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 flex items-start gap-3 text-xs text-emerald-950">
            <Lightbulb className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
            <p>
              Double-check that every specialist&apos;s job title and profile photo are complete so clients see consistent bios during online booking.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-3 border-t border-border pt-8">
          <h2 className="text-xl font-bold text-foreground">FAQs</h2>
          <div className="divide-y divide-border rounded-2xl border border-border">
            {HELP_FAQS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.q} className="p-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold text-foreground cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && <p className="mt-2.5 text-xs leading-relaxed text-muted">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <span className="text-xs font-semibold text-foreground">Was this guide helpful?</span>
          <button
            type="button"
            onClick={() => setVoted("yes")}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium cursor-pointer ${
              voted === "yes" ? "border-accent bg-accent-soft text-accent" : "border-border"
            }`}
          >
            Yes, thanks <ThumbsUp className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setVoted("no")}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium cursor-pointer ${
              voted === "no" ? "border-foreground bg-surface" : "border-border"
            }`}
          >
            Not really <ThumbsDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Right Sticky Guide TOC */}
      <aside className="lg:col-span-4 lg:sticky lg:top-24 rounded-2xl border border-border bg-background p-5 space-y-3 text-xs">
        <p className="font-bold text-foreground">This guide covers</p>
        <ul className="space-y-2 border-l-2 border-border pl-3">
          <li className="font-semibold text-accent">Creating a team member</li>
          <li className="text-muted">Adding personal details</li>
          <li className="text-muted">Workspace permissions</li>
          <li className="text-muted">Pay &amp; commissions</li>
          <li className="text-muted">FAQs</li>
        </ul>
      </aside>
    </div>
  );
}

/**
 * Fresha Blog grid matching fresha.com/blog with topic filter pills and pagination.
 */
export function FreshaBlogGrid() {
  const [topic, setTopic] = useState<string>("All topics");
  const topics = ["All topics", "Meet the Partners", "Fresha Features", "Fresha News", "Business Tips"];
  const posts =
    topic === "All topics"
      ? FRESHA_BLOG_POSTS
      : FRESHA_BLOG_POSTS.filter((p) => p.category === topic);

  return (
    <div className="mx-auto max-w-6xl px-6 py-14 space-y-10">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Latest news on Fresha
        </h1>
        <div className="flex flex-wrap justify-center gap-2">
          {topics.map((t) => {
            const active = topic === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  active
                    ? "bg-foreground text-background"
                    : "text-foreground/80 hover:bg-surface"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, idx) => (
          <Link
            key={post.slug}
            href="/design-systems/fresha/blog/post"
            className="group flex flex-col rounded-2xl border border-border bg-background overflow-hidden hover:border-foreground/30 transition-colors"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-surface">
              {post.variant === "gradient" ? (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#6950f3] via-[#b84cdc] to-[#ef6997] text-lg font-bold text-white">
                  {post.accentLabel}
                </div>
              ) : (
                <VenueInteriorArtwork
                  variant={idx % 2 === 0 ? "salon" : "barber"}
                  className="h-full w-full transition-transform duration-300 group-hover:scale-[1.03]"
                />
              )}
            </div>
            <div className="p-6 space-y-2">
              <h2 className="text-lg font-bold leading-snug text-foreground group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-xs italic text-muted">by Editorial Team on {post.date}</p>
              <p className="text-xs leading-relaxed text-muted">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Editorial Blog article view matching fresha.com/blog/best-salon-scheduling-software-2024.
 */
export function FreshaBlogArticle() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-12 space-y-10">
      <div className="space-y-4">
        <Link
          href="/design-systems/fresha/blog"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold text-foreground hover:bg-surface"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          7 Best Salon Scheduling Software Platforms
        </h1>
        <p className="text-xs text-muted">
          Written by Editorial Team · Updated June 6 · 8 minute read
        </p>
      </div>

      <FreshaCalendarScene />

      <div className="space-y-6 text-base leading-relaxed text-foreground/85">
        <p>
          Running a busy salon, barbershop, or wellness studio requires more than a shared paper book. Modern teams rely on automated appointment reminders, upfront deposit protection, retail POS tracking, and marketplace visibility so chairs stay filled every day.
        </p>
        <h2 className="text-2xl font-bold text-foreground pt-2">
          1. Subscription-Free All-in-One Calendar &amp; POS
        </h2>
        <p>
          With zero fixed monthly seat fees, independent stylists and multi-studio owners can launch online booking, client intake forms, and automated SMS reminders immediately—paying small transaction rates only when processing optional payments or campaigns.
        </p>
      </div>

      <div className="border-t border-border pt-10 space-y-5">
        <h2 className="text-xl font-bold text-foreground">Related Articles</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {FRESHA_BLOG_POSTS.slice(1, 4).map((post) => (
            <Link
              key={post.slug}
              href="/design-systems/fresha/blog/post"
              className="rounded-xl border border-border p-4 hover:bg-surface/40 space-y-2"
            >
              <p className="text-sm font-bold text-foreground">{post.title}</p>
              <p className="text-xs text-muted">{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

/**
 * Filterable Careers & Openings page matching fresha.com/careers/openings.
 */
export function FreshaCareersView() {
  const [country, setCountry] = useState("All");
  const [dept, setDept] = useState("All departments");

  const filtered = CAREERS_ROLES.filter(
    (r) =>
      (country === "All" || r.country === country) &&
      (dept === "All departments" || r.dept === dept)
  );
  const cities = Array.from(new Set(filtered.map((r) => r.city)));

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs text-muted">Home · Careers · Openings</p>
          <h1 className="mt-1 text-3xl font-bold text-foreground sm:text-4xl">Jobs</h1>
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            aria-label="Filter by country"
            className="h-10 rounded-full border border-border-strong bg-background px-4 text-xs font-medium text-foreground"
          >
            <option value="All">All countries</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
          </select>
          <select
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            aria-label="Filter by department"
            className="h-10 rounded-full border border-border-strong bg-background px-4 text-xs font-medium text-foreground"
          >
            <option>All departments</option>
            <option>Engineering</option>
            <option>Product</option>
            <option>Commercial</option>
            <option>Finance &amp; Operations</option>
          </select>
        </div>
      </div>

      <div className="space-y-10">
        {cities.map((city) => (
          <section key={city} className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">{city}</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {filtered
                .filter((r) => r.city === city)
                .map((role) => (
                  <Link
                    key={role.title}
                    href="/design-systems/fresha/for-business"
                    className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background p-5 hover:border-foreground/40 hover:bg-surface/40 transition-colors"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-foreground">{role.title}</h3>
                      <p className="mt-1 text-xs text-muted">
                        {role.city} · {role.dept}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-foreground" />
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>

      <div className="border-t border-border pt-10 text-center space-y-4">
        <h2 className="text-lg font-bold text-foreground">Nothing for you?</h2>
        <div className="flex justify-center gap-3">
          <Link
            href="/design-systems/fresha/login"
            className="rounded-xl bg-foreground px-5 py-2.5 text-xs font-semibold text-background"
          >
            Send us your CV
          </Link>
          <button
            type="button"
            onClick={() => {
              setCountry("All");
              setDept("All departments");
            }}
            className="rounded-xl border border-border-strong px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-surface cursor-pointer"
          >
            See all offers
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Location & Country Sitemap directory matching fresha.com/sitemap.
 */
export function FreshaSitemapView() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 space-y-12">
      <section className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Top Locations</h1>
        <div className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3 text-sm">
          {TOP_LOCATIONS_SITEMAP.map((loc) => (
            <Link
              key={loc}
              href="/design-systems/fresha/search"
              className="text-foreground/85 hover:text-accent hover:underline"
            >
              {loc}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border pt-10 space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Countries</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3 text-sm">
          {SITEMAP_COUNTRIES.map((country) => (
            <Link
              key={country}
              href="/design-systems/fresha/search"
              className="text-foreground/85 hover:text-accent hover:underline"
            >
              {country}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

/**
 * Legal Portal supporting Overview, Terms of Use, and Privacy Policy matching terms.fresha.com.
 */
export function FreshaLegalView({
  initialSection,
}: {
  initialSection: "privacy" | "terms";
}) {
  const [tab, setTab] = useState<"overview" | "terms" | "privacy">(initialSection);

  return (
    <div className="bg-background">
      {/* Legal Subnav Strip */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto px-6">
          {[
            { id: "overview" as const, label: "Overview" },
            { id: "terms" as const, label: "Terms of use" },
            { id: "privacy" as const, label: "Privacy policy" },
          ].map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`relative py-3.5 text-sm font-medium whitespace-nowrap cursor-pointer ${
                  active
                    ? "text-foreground font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">
        {tab === "overview" ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Terms of Use", desc: "Rules governing site access, acceptable usage, and third-party services.", target: "terms" as const },
              { title: "Privacy Policy", desc: "How personal booking details, addresses, and payment tokens are protected.", target: "privacy" as const },
              { title: "Service Terms", desc: "Summary of appointment confirmations, deposits, and cancellation windows.", target: "terms" as const },
              { title: "Partner Terms", desc: "Guidelines for salons, barbershops, and spas operating on the marketplace.", target: "terms" as const },
              { title: "Data Protection Policy", desc: "Standards for handling client records, consent, and retention timelines.", target: "privacy" as const },
              { title: "Cookie Policy", desc: "Details on essential session storage and booking experience preferences.", target: "privacy" as const },
            ].map((card) => (
              <div key={card.title} className="space-y-2">
                <h2 className="text-lg font-bold text-foreground">{card.title}</h2>
                <p className="text-xs leading-relaxed text-muted">{card.desc}</p>
                <button
                  type="button"
                  onClick={() => setTab(card.target)}
                  className="text-xs font-medium text-[#0284c7] hover:underline cursor-pointer"
                >
                  Read {card.title}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
            <aside className="lg:col-span-3 space-y-2 text-xs text-[#0284c7]">
              <p className="font-semibold text-foreground">Sections</p>
              <ul className="space-y-1.5">
                <li>Introduction</li>
                <li>Information we collect</li>
                <li>Booking &amp; partner records</li>
                <li>Payment processing</li>
                <li>Your privacy rights</li>
              </ul>
            </aside>

            <div className="lg:col-span-9 space-y-6 text-sm leading-relaxed text-foreground/85">
              <h1 className="text-3xl font-bold text-foreground">
                {tab === "privacy" ? "Fresha Privacy Notice" : "Fresha Terms of Use"}
              </h1>
              <p>
                {tab === "privacy"
                  ? "We are committed to protecting the privacy of every client and business partner using our appointment marketplace, wallet tools, and point-of-sale platform."
                  : "These Terms of Use set out the rules for browsing local venues, managing appointments, purchasing gift cards, and using our web and mobile experiences."}
              </p>

              {/* Signature warm-cream partner notice box observed in Fresha Privacy screen */}
              <div className="rounded-lg bg-[#FFFCEB] border border-[#F5E6A8] p-5 text-xs text-foreground space-y-2">
                <p className="font-semibold">
                  Partner booking controller notice
                </p>
                <p>
                  The salon, studio, or wellness Partner you book with acts as the data controller for appointment records, consultation forms, and treatment notes stored in your visit profile.
                </p>
              </div>

              <h2 className="text-xl font-bold text-foreground pt-2">
                {tab === "privacy" ? "How we protect payment data" : "What you are allowed to do"}
              </h2>
              <p>
                All card numbers, saved wallet balances, and digital receipts are transmitted over encrypted TLS sessions and processed by PCI-compliant payment infrastructure.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
