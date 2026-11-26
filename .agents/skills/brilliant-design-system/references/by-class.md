# Brilliant Design System — Lookup by Class / Token

## 1. Shape & Border Radius

| Class / Token | Allowed Components | Forbidden Components (Do NOT Use) |
|---|---|---|
| `rounded-none` | Full-bleed section bands, legal dividers, table rows | Buttons, course cards, quiz options, inputs |
| `rounded-md` | Micro status badges (`NEW`, `TOP PICK`, `+ FOR YOU`), inline checkmark squares | Primary CTAs, hero cards, auth modals |
| `rounded-lg` | Settings sidebar buttons, secondary utility buttons (`Go home`), roadmap nodes | Primary marketing CTAs (use `rounded-full`), course trays |
| `rounded-xl` | Quiz option cards, inputs, selects, alert/explanation boxes, icon containers | Full-page hero wrappers, pill CTAs |
| `rounded-2xl` / `rounded-3xl` | Course cards, streak cards, auth cards, checkout card, course trays | Compact badges, inline text links |
| `rounded-full` | Primary green CTAs, dark pill CTAs, `Gift Premium` pill, streak badges, tabs, toggle switches, avatars | Data tables, multi-line quiz option cards |

## 2. Background & Surface Tokens

| Class / Token | Allowed Components | Forbidden Components (Do NOT Use) |
|---|---|---|
| `bg-background` | Page canvas, Navbar, course cards, auth modals, form inputs | Midnight Navy proof bands, footers |
| `bg-surface` | Course carousel trays, sidebar rails, subtle card wells, 404 Go home button | Primary green CTAs, active quiz selections |
| `bg-surface-muted` | Progress bar tracks, inactive switch tracks, subtle dividers | Primary card containers |
| `bg-accent` | Primary green pill CTAs (`Get started`, `Subscribe now`), active progress fills, active switches, `NEW` badge | Body text backgrounds, full-page hero backgrounds |
| `bg-accent-strong` | Hover state for primary green CTAs (`hover:bg-accent-strong`) | Static surfaces, badges with dark text |
| `bg-accent-soft` | `START A LEARNING HABIT` card footer, correct quiz option background, `IN PROGRESS` badge | Destructive actions, Midnight Navy bands |
| `bg-[#0F1736]` | Marketing proof bands (`10M learners`), Paywall hero, Checkout trial timeline | Settings forms, interactive quiz canvas |
| `bg-[#000000]` / `bg-[#040404]` | Global `BrilliantFooter` and `BrilliantHelpCenter` header | Marketing cards, modal surfaces |

## 3. Border & Shadow Rules

| Class / Token | Allowed Components | Forbidden Components (Do NOT Use) |
|---|---|---|
| `border-border` | Standard cards, inputs, tables, navbars, segmented tabs | Active quiz answers, featured gold lesson card |
| `border-border-strong` / `border-foreground` | Selected course cards, selected quiz options (pre-check), educator classroom table | Subtle secondary cards, muted footers |
| `border-2` | Quiz option cards, Jump back in card (`border-[#EABC37]`), onboarding selection cards | Standard table cells, small pills |
| `shadow-[0_3px_0_#1e9d3d]` / `shadow-[0_4px_0_#1e9d3d]` | Tactile green primary CTAs (`Get started`, `Subscribe now`, `Check`) | Outline buttons, dark pills, static cards |
| `shadow-[0_5px_0_#EABC37]` | Featured active lesson card (`Jump back in`) | Auth cards, settings cards, list rows |

## 4. Typography

| Class / Token | Allowed Components | Forbidden Components (Do NOT Use) |
|---|---|---|
| `font-serif` (`Newsreader`) | Marketing hero headings, proof band titles, Paywall hero, Educators, About, Careers, Legal H1s | Navbar items, quiz options, table headers, buttons |
| `font-sans` (`Plus Jakarta Sans`) | UI headings, course titles, quiz prompts, buttons, body copy, forms | Code blocks, XP counters |
| `font-mono` | XP counters (`45 of 175 XP`), lesson counts, math formulas (`y'(0)`), hex tokens, dates | Paragraph prose, marketing headlines |
| Micro-labels (`text-[10px]` / `text-[11px] font-bold uppercase tracking-wider`) | Category kickers (`SCIENCE`, `LEARNING PATH`), status badges (`TOP PICK`, `MOST POPULAR`), table headers | Body text, button labels |
