---
name: brilliant-design-system
description: Design system guidelines, tokens, Refero visual references, and component composition rules for the Brilliant.org-inspired section (/design-systems/brilliant) of this Next.js App Router starter template. Use whenever creating, editing, or reviewing Brilliant UI components, sections, or pages.
---

# Brilliant Design System

This skill defines the visual grammar, scoped tokens, component boundaries, and SEO conventions for `/design-systems/brilliant/*`, inspired by Brilliant (`brilliant.org`).

---

## Core Design Principles

1. **Crisp Light Learning Surfaces + Midnight Navy Proof Bands**: Primary learning workspaces (`Home`, `Courses`, `Lesson`, `Settings`) run on `#FFFFFF` (`bg-background`) with `#F7F7F7` (`bg-surface`) course trays. High-conviction marketing proof bands, paywalls, and trial checkouts flip to Midnight Blueprint Navy (`#0F1736`) with `#000000` footers and `#040404` Help headers.
2. **Tactile Gamified Accents**:
   - **Brilliant Green** (`#2AB54B` / `bg-accent` with `#1E9D3D` `shadow-[0_3px_0_#1e9d3d]`) drives primary learning CTAs (`Get started`, `Subscribe now`, `Check`).
   - **Streak Lightning Gold** (`#FDE047`, `#EABC37`, `#FFFBEB`) marks active streaks (`2 ⚡`), `TOP PICK` / `MOST POPULAR` pills, and the active `Jump back in` course card.
   - **Dark Ink Pill** (`#222222`) anchors modal confirmations (`Continue`, `Log in`, `Continue cancellation`).
3. **Editorial Serif + Clean UI Sans Pairing**: Marketing hero headlines, proof sections, Educators, About, Careers, and Legal headings use `font-serif` (`Newsreader` via `--font-brilliant-serif`), while interactive controls, dashboards, and quiz options use `font-sans` (`Plus Jakarta Sans`) and `font-mono` (`JetBrains Mono`) for XP and formulas.
4. **Friendly Rounded Geometry**: Pill CTAs use `rounded-full`; cards, trays, and quiz options use `rounded-2xl` / `rounded-xl` with crisp 1px–2px borders instead of heavy drop shadows.
5. **Component-First Rule**: Reuse and extend primitives in `src/components/systems/brilliant/` rather than duplicating markup across routes.

---

## Scoped Tokens, Palette & Typography

Tokens are scoped to `[data-design-system="brilliant"]` in `src/app/globals.css` and applied in `src/app/design-systems/brilliant/layout.tsx`:

| Token | Value | Role |
|---|---|---|
| `--background` | `#ffffff` | Primary page & card background |
| `--foreground` | `#111111` | Primary text & active underline tabs |
| `--surface` | `#f7f7f7` | Course trays, muted banners, settings rail |
| `--surface-muted` | `#efefef` | Progress tracks & switch tracks |
| `--border` | `#e5e5e5` | Standard 1px hairlines |
| `--border-strong` | `#202020` | High-contrast educator/table frames |
| `--accent` | `#2ab54b` | Primary green CTA & correct quiz state |
| `--accent-strong` | `#1e9d3d` | Green hover & tactile 3D lip shadow |
| `--accent-soft` | `#e8f7ee` | Habit checklist & positive feedback tint |
| `--muted` | `#666666` | Secondary descriptions & labels |

Fonts in `src/app/layout.tsx`:
- `font-serif`: `Newsreader` (`--font-brilliant-serif`)
- `font-sans`: `Plus Jakarta Sans` (`--font-tilda-sans`)
- `font-mono`: `JetBrains Mono` (`--font-tilda-mono`)

---

## SEO & Route Checklist

- Root wrapper: `src/app/design-systems/brilliant/layout.tsx` sets `data-design-system="brilliant"` with `BrilliantNavbar` and `BrilliantFooter`.
- Every `page.tsx` under `src/app/design-systems/brilliant/` exports `export const metadata: Metadata` (`title`, `description`, `alternates: { canonical }`) and renders `<Breadcrumbs items={[...]} />`.
- All 21 routes are registered in `src/app/sitemap.ts`, featured on `src/app/page.tsx`, and cataloged on `src/app/design-systems/page.tsx`.
- **No-Refero-in-UI Rule**: Never place the word `"Refero"` in any user-facing UI, metadata, or `src/` file.

---

## Bidirectional Lookup Guides

- Token/Class → Components: [references/by-class.md](./references/by-class.md)
- Component → Classes & Do/Don't: [references/by-component.md](./references/by-component.md)

---

## Component Inventory (`src/components/systems/brilliant/`)

### Server-Safe Components
- `brilliant-data.ts`: Typed course catalog, roadmap steps, quiz items, blog posts, help collections, and careers roles.
- `BrilliantLogo.tsx`: `BrilliantMark`, `BalancePuzzleSvg`, and `UndefinedDerivativeSvg`.
- `BrilliantFooter.tsx`: Pure black (`#000000`) multi-column footer with directory back-link.
- `BrilliantEditorial.tsx` (`BrilliantBlogGrid`, `BrilliantBlogArticle`, `BrilliantAboutView`, `BrilliantCareersView`, `BrilliantLegalDocument` — note `BrilliantHelpCenter` uses `"use client"` at module top for live article search).

### Client Components (`"use client"`)
- `BrilliantNavbar.tsx`: Sticky header with bottom-underline active links, `Gift Premium` pill, streak badge, and mobile drawer.
- `BrilliantLanding.tsx`: Hero, subject chips, Midnight Navy proof bands, and tabbed Guided Paths preview.
- `BrilliantHomeDashboard.tsx`: Streak card, habit checklist, XP league lock, and gold-bordered Jump back in card.
- `BrilliantCoursesCatalog.tsx`: Category filter chips, course trays, and interactive zigzag level roadmap.
- `BrilliantInteractiveLesson.tsx`: Progress bar, balance/gears puzzle, quiz option cards, and explanation drawer.
- `BrilliantOnboarding.tsx`: Mascot recommendation bubble, `TOP PICK` cards, and daily goal selector.
- `BrilliantPricing.tsx`: Midnight Navy paywall, Annual/Monthly cards, comparison table, and Gift/Group cards.
- `BrilliantCheckout.tsx`: 7-day trial timeline, payment form, and Premium welcome confirmation.
- `BrilliantCancelTrial.tsx`: Trial retention modal and cancellation confirmation.
- `BrilliantAuthCard.tsx`: Unified Log In, Sign Up, and Reset Password card.
- `BrilliantSettings.tsx`: Settings rail, notification toggles, data export, and Delete Account confirmation.
- `BrilliantEducators.tsx`: Educator landing page, classroom progress matrix, privacy cards, and FAQ accordion.
- `BrilliantComponentsShowcase.tsx`: Interactive token, typography, button, and quiz specimen page.

---

## Refero Screen Catalog (`design-references/brilliant/`)

| Page Type | Route | Local Reference Image(s) |
|---|---|---|
| Product Page & Landing | `/design-systems/brilliant`, `/educators` | `design-references/brilliant/images/product-page-landing-home-page-d036ab10.jpg`, `product-page-landing-3181f493.jpg` |
| Home Page | `/design-systems/brilliant/home` | `design-references/brilliant/images/home-page-cf3d5290.jpg`, `home-page-06ba0491.jpg` |
| Discover | `/design-systems/brilliant/courses` | `design-references/brilliant/images/discover-a9118fc3.jpg`, `discover-d82065de.jpg` |
| Quiz & Poll | `/design-systems/brilliant/lesson` | `design-references/brilliant/images/quiz-poll-151cb6cc.jpg`, `quiz-poll-c9b7488c.jpg` |
| Account Setup | `/design-systems/brilliant/onboarding` | `design-references/brilliant/images/account-setup-b51a280c.jpg`, `account-setup-3345cd32.jpg` |
| Paywall & Subscription | `/design-systems/brilliant/subscribe` | `design-references/brilliant/images/paywall-subscription-0a5188a7.jpg`, `paywall-subscription-6c935bdd.jpg` |
| Checkout | `/design-systems/brilliant/checkout` | `design-references/brilliant/images/checkout-02881b1d.jpg`, `checkout-2fbdab5b.jpg` |
| Cancel Subscription | `/design-systems/brilliant/cancel` | `design-references/brilliant/images/cancel-subscription-d7dc9be5.jpg`, `cancel-subscription-475330ce.jpg` |
| Settings & Delete Account | `/design-systems/brilliant/settings` | `design-references/brilliant/images/settings-2662749c.jpg`, `settings-fab58377.jpg`, `settings-delete-account-8f43c5a6.jpg` |
| Log In / Sign Up / Reset | `/login`, `/signup`, `/reset-password` | `design-references/brilliant/images/log-in-0cad85ab.jpg`, `sign-up-38dfa61e.jpg`, `reset-password-1c65ff9a.jpg` |
| Blog & Blog Post Page | `/blog`, `/blog/post` | `design-references/brilliant/images/blog-79f712b3.jpg`, `blog-post-page-69446505.jpg` |
| About & Careers | `/about`, `/careers` | `design-references/brilliant/images/about-337b6fd9.jpg`, `careers-bb7f4fd9.jpg` |
| Support & Help | `/help` | `design-references/brilliant/images/support-help-c352bf56.jpg`, `support-help-24ae5c8c.jpg` |
| Privacy & Terms | `/privacy`, `/terms` | `design-references/brilliant/images/privacy-policy-e02199d8.jpg`, `terms-conditions-263aecb2.jpg` |
| 404 Page | `/design-systems/brilliant/not-found.tsx` | `design-references/brilliant/images/404-page-81eccf82.jpg` |

---

## Verification

```bash
bunx next typegen && bunx tsc --noEmit && bun run lint && bun run build
```
