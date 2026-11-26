# SEO Action Plan

Audit date: 2026-11-26

## P0 — Quick wins, do first

1. Fix inherited social metadata. Add route-specific `openGraph.url`, title, description, and `twitter.title`/description for system, skill, and article routes. Add one stable share image. Evidence: rendered `/design-systems/tilda/login` points social metadata at the homepage.
2. Add root `Organization` and `WebSite` JSON-LD. Keep it JSON-LD only and align it with visible brand/GitHub information.
3. Add `Article` JSON-LD and visible author/date/updated fields to all three blog articles.
4. Replace `new Date()` in `src/app/sitemap.ts` with real content timestamps or omit `lastModified`.

## P1 — Within one week

5. Decide the indexation policy for login, signup, recover/reset-password, privacy, terms, and other demo-only routes. Remove non-search pages from the sitemap and add `robots: { index: false, follow: true }` where appropriate.
6. Expand the homepage beyond the measured 264 rendered words: explain audience, services, proof, process, and next actions in distinct sections.
7. Expand each blog post beyond the measured 164-word article sample with original examples, code/output, practical steps, and author expertise.

## P2 — Strategic improvements

8. Create a production SEO verification job for robots, sitemap, redirects, security headers, canonical consistency, social metadata, and broken links.
9. Add stable `dateModified` data to articles and only update it when content changes.
10. Re-run mobile PageSpeed/CrUX checks after production DNS is reachable; prioritize LCP, CLS, then INP based on measured data.

## Suggested implementation order

```text
metadata inheritance → JSON-LD entities → article E-E-A-T → sitemap policy → content expansion → production crawl/CWV verification
```

## Success criteria

- Every indexable route has matching title, description, canonical, Open Graph URL/title/description, and a valid share image.
- Homepage has Organization/WebSite schema; each article has valid Article schema with author and dates; detail routes retain BreadcrumbList.
- Sitemap contains only intended indexable URLs and uses truthful modification dates.
- Production checks pass for HTTPS redirects, robots/sitemap, security headers, broken links, and mobile CWV.
