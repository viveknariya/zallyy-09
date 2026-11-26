# SEO Full Audit Report

Audit date: 2026-11-26  
Scope: Full-site audit of the local Zallyy Next.js project, with rendered checks against the local development server and static source inspection. Production DNS/PageSpeed checks were attempted but unavailable in this environment.

## A) Audit Summary

Overall SEO health: **57/100 — Needs Improvement**  
Score confidence: **Low–Medium** because field performance, production headers, and external crawlability could not be measured.

Detected business type: Software development agency / design-system and engineering resource directory.

Top issues:

1. Route-specific titles/canonicals are overridden by inherited root Open Graph and Twitter metadata on nested pages.
2. Homepage has no JSON-LD; articles have BreadcrumbList only and no Article/BlogPosting entity data.
3. Homepage and articles are thin against the selected quality gates (264 and 164 rendered words measured).
4. Sitemap marks every URL as modified “now” on every generation.
5. Login, signup, recovery, and legal demo routes are in the sitemap without an explicit indexation strategy.

Top opportunities:

1. Add reusable Organization, WebSite, and Article JSON-LD with matching visible author/date data.
2. Make social metadata route-specific and add `images` for share previews.
3. Expand the homepage and blog posts with original, specific, citable content.

## Category Scores

| Category | Score | Confidence | Rationale |
|---|---:|---|---|
| Technical SEO | 62 | Medium | Canonical, robots, sitemap, language, and viewport are present; sitemap freshness and indexation policy need work. |
| Content Quality | 50 | Medium | Clear topical structure and internal linking, but measured content is thin and author/E-E-A-T signals are absent. |
| On-Page SEO | 70 | Medium | Rendered pages have unique titles, descriptions, H1s, and canonicals; social inheritance reduces page fidelity. |
| Schema / Structured Data | 25 | High | BreadcrumbList is present on detail routes; homepage entity and article schema are absent. |
| Performance / CWV | Insufficient data | Low | PageSpeed and field metrics could not be fetched; local dev output is not a production performance measurement. |
| Images | 80 | Medium | No content images were found on sampled pages; logos use dimensions and empty alt as decorative images. |
| AI Search Readiness | 40 | Low–Medium | Descriptive headings and internal links help, but no `llms.txt`, Organization/Article schema, author signals, or deeper source content were verified. |

## B) Findings Table

| Area | Severity | Confidence | Finding | Evidence | Fix |
|---|---|---|---|---|---|
| Social metadata | Warning | Confirmed | Nested routes inherit homepage Open Graph/Twitter values. | Rendered `/design-systems/tilda/login` has a route title/canonical but `og:url=https://zallyy.com` and homepage title/description. Root values are defined in [src/app/layout.tsx](src/app/layout.tsx:49). | Add route-level `openGraph` and `twitter` metadata, including the route URL and title/description; add a shared default image. |
| Structured data | Warning | Confirmed | Homepage emits no JSON-LD. | `parse_html.py` returned `schema=[]` for rendered `/`; the only JSON-LD emitter is [Breadcrumbs.tsx](src/components/seo/Breadcrumbs.tsx:19), which the homepage does not use. | Add Organization and WebSite JSON-LD at the root/homepage. |
| Article SEO | Warning | Confirmed | Blog articles lack Article/BlogPosting schema and visible author/date signals. | Parsed article schema contained BreadcrumbList only; [BlogArticleShell.tsx](src/components/blogs/BlogArticleShell.tsx:30) explicitly says “no author metadata.” | Add visible author/date/updated data and matching Article JSON-LD with `headline`, `datePublished`, `dateModified`, `author`, `publisher`, and `mainEntityOfPage`. |
| Content quality | Warning | Confirmed | Homepage and blog content are thin against the selected quality gates. | `readability.py` measured 264 homepage words and 164 article words; gates are 500 and 1,500 respectively. | Expand with original examples, implementation detail, use cases, outcomes, and concise takeaways. |
| Sitemap freshness | Warning | Confirmed | Every sitemap URL gets the current timestamp. | [src/app/sitemap.ts](src/app/sitemap.ts:89) sets `const lastModified = new Date()` for all routes. | Use content-specific timestamps or omit `lastModified` when unknown. |
| Indexation strategy | Warning | Likely | Account/demo/legal routes are listed in the sitemap without an explicit noindex decision. | `sitemap.ts` includes login/signup/recovery and privacy/terms routes; no route-level `robots` metadata was found. | Keep only genuinely searchable pages in the sitemap; noindex low-value account/demo routes if they are not intended to rank. |
| Crawlability | Pass | Confirmed | Robots allows crawling and points to the sitemap. | Rendered `/robots.txt` returned `User-Agent: *`, `Allow: /`, and `Sitemap: https://zallyy.com/sitemap.xml`; source: [robots.ts](src/app/robots.ts:4). | Keep this policy, then verify it on production after DNS is available. |
| On-page structure | Pass | Confirmed | Sampled homepage and article have one H1, descriptive title/description, canonical, `lang=en`, and viewport. | `parse_html.py` confirmed all values on rendered local pages. | Preserve the pattern across all route families. |

## Technical and Content Notes

- Sitemap route coverage matches the 72 `page.tsx` route files in a static comparison, excluding the dynamic `[skill]` route which is populated from `DIRECTORY_SKILLS`.
- Sampled images are decorative brand logos with explicit dimensions and empty alt text; this is appropriate for those images. No content imagery was present in the sampled homepage/article HTML.
- The local development response exposes `X-Powered-By: Next.js` and does not prove production security headers. Treat production header status as unknown until deployed headers can be fetched.
- `llms.txt`, security headers, broken-link crawl, redirect checks, and PageSpeed were attempted against `https://zallyy.com`; DNS resolution failed in the audit environment.

## Environment Limitations

- Production hostname resolution failed for `zallyy.com` and `www.googleapis.com`, so no production robots, headers, redirects, broken-link crawl, or PageSpeed/CWV field data could be confirmed.
- `next build` reached Turbopack CSS processing but failed with `Operation not permitted` while creating a process/binding to a port. `bun run lint` passed with exit code 0. This is recorded as an environment/tooling limitation, not a confirmed application build defect.

## C) Verification

The six proposed findings were passed through `finding_verifier.py`: 6 raw findings, 6 verified, 0 dropped.

## D) Unknowns and Follow-ups

- Verify production status codes, cache headers, HTTPS redirects, HSTS/CSP, and real-user CWV after DNS/deployment access is available.
- Confirm intended indexation for each demo system route and legal/account route.
- Add Search Console/CrUX evidence before treating performance score as actionable.
