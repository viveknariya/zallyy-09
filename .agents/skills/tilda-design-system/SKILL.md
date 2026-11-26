---
name: tilda-design-system
description: >-
  Design system guidelines, tokens, Refero visual references, and component
  composition rules for the Tilda.cc-inspired section (/design-systems/tilda)
  of this Next.js App Router starter template. Use whenever creating, editing,
  reviewing, or refactoring Tilda UI components, sections, or pages.
---

# Tilda Design System Skill

This skill governs all Tilda UI work in `/design-systems/tilda/*` (`src/components/systems/tilda/` + `src/components/ui/`), grounded in **86** `tilda.cc` design references archived in `design-references/tilda/`.

## 1. Core Design Principles

1. **High-Contrast Editorial Minimalism**: Crisp `#FFFFFF` canvases alternating with `#F7F7F7` surfaces, `#111111` ink, and `#E5E5E5` hairlines.
2. **Warm Coral Focal Accents**: Use `#FA8A64` (`bg-accent`) and `#FB5E1D` (`bg-accent-strong`) sparingly for primary CTAs, circular icon badges, and active highlights.
3. **Sharp Containers, Circular Badges**: Keep cards, buttons, inputs, modals, and tables strictly rectangular (`0px` radius). Reserve `rounded-full` exclusively for coral icon badges (`bg-accent`), avatars, toggle tracks/thumbs, and selected calendar day indicators.
4. **Geometric Display + Clean Sans**: Pair `font-display` (`Jost`, echoing `Futura PT`) for headings and numerals with `font-sans` (`Plus Jakarta Sans`, echoing `Tilda Sans`) for body copy and `font-mono` (`JetBrains Mono`) for domains, hex codes, emails, and dates.
5. **Component-First Composition**: Always compose new sections from `src/components/ui/` primitives and `src/components/systems/tilda/` modules before introducing custom styles.

---

## 2. Scoped Tokens, Palette & Typography (`src/app/globals.css` & `src/app/layout.tsx`)

All Tilda routes mount inside `<div data-design-system="tilda">` in `src/app/design-systems/tilda/layout.tsx`.

### Semantic Color Tokens (`[data-design-system="tilda"]`)
| CSS Variable | Tailwind Class | Hex | Role |
| :--- | :--- | :--- | :--- |
| `--background` | `bg-background` | `#FFFFFF` | Primary page background |
| `--foreground` | `text-foreground` | `#111111` | Primary ink, strong borders, workspace bar |
| `--surface` | `bg-surface` | `#F7F7F7` | Alternating section & footer background |
| `--surface-muted` | `bg-surface-muted` | `#EFEFEF` | Split-hero left panel, neutral badge fill |
| `--border` | `border-border` | `#E5E5E5` | Hairline dividers & subtle card borders |
| `--border-strong` | `border-foreground` | `#111111` | Featured `2px` card, modal & button borders |
| `--accent` | `bg-accent` | `#FA8A64` | Coral primary CTA & circular icon badges |
| `--accent-strong` | `bg-accent-strong` | `#FB5E1D` | Hover accent, checkmarks, inline links |
| `--accent-soft` | `bg-accent-soft` | `#F5B39C` | Soft coral badge & callout tint |
| `--muted` | `text-muted` | `#6C6C6C` | Secondary copy, captions, table metadata |

### Gradient Recipes (from `tilda.cc/colors/#gradients`)
- **Tilda Coral Sunset**: `linear-gradient(135deg, #FA8A64 0%, #FB5E1D 100%)`
- **Warm Peach Editorial**: `linear-gradient(135deg, #F5B39C 0%, #EA977D 100%)`
- **Lavender Mist**: `linear-gradient(135deg, #DBCFEE 0%, #949BE1 100%)`
- **Sky & Mint**: `linear-gradient(135deg, #5DA6E9 0%, #6EE14D 100%)`

### Typography Scale
- **Hero H1**: `font-display text-4xl sm:text-5xl font-normal tracking-tight leading-[1.1]`
- **Page H1 (Editorial)**: `font-display text-4xl sm:text-5xl font-light tracking-tight`
- **Section H2**: `font-display text-3xl sm:text-4xl font-normal tracking-tight`
- **Card H3**: `font-display text-xl font-medium`
- **Body**: `text-sm` or `text-base leading-relaxed text-muted`
- **Micro-label / Nav / Table Header**: `text-[11px] font-semibold uppercase tracking-[0.12em]`–`0.14em`

---

## 3. Class & Token Usage Rules (Bidirectional Lookup)

For complete Do / Don't rules across all **23 standard UI components**, read the two reference guides:
- **Token/Class → Components**: [By Class](./references/by-class.md)
- **Component → Classes**: [By Component](./references/by-component.md)

---

## 4. Component Inventory (`src/components/ui/` & `src/components/systems/tilda/`)

### Shared UI Primitives (`src/components/ui/`)
- **`Button`** (`Button.tsx`, Server-safe): `variant="primary" | "outline" | "accent" | "ghost"`, `size="sm" | "md" | "lg"`.
- **`Card`** (`Card.tsx`, Server-safe): `variant="bordered"` (`border-2 border-foreground`), `"subtle"` (`border border-border`), `"surface"` (`bg-surface border border-border`).
- **`Tabs`** (`Tabs.tsx`, `"use client"`): Underline-tab switcher (`items: TabItem[]`, `activeId`, `onChange`).
- **`Badge`** (`Badge.tsx`, Server-safe): `tone="neutral" | "accent" | "dark"` sharp rectangular micro-label.
- **`Input`** (`Input.tsx`, Server-safe): Labeled sharp-bordered input with optional `hint`.

### Tilda Layout & Section Modules (`src/components/systems/tilda/`)
- **Server-safe**: `TildaLogo` (`TildaMark`, `TildaNotFoundMark`), `TildaFooter`, `TildaWorkspaceBar`, `TildaHero`, `TildaFeatureGrid`, `TildaProjects`, `TildaMediaKit`, `TildaLegal`, `TildaColors`, `TildaNotFound`.
- **Client (`"use client"`)**: `TildaNavbar`, `TildaPricing`, `TildaDashboard`, `TildaContacts`, `TildaBlog`, `TildaAccount`, `TildaSetup`, `TildaSettings`, `TildaHelp`, `TildaAuthCard`, `TildaComponentsShowcase`.

---

## 5. SEO & Route Checklist (`/design-systems/tilda/*`)

- `src/app/design-systems/tilda/layout.tsx` wraps children in `<div data-design-system="tilda">` with `<TildaNavbar />` and `<TildaFooter />`.
- Every `page.tsx` exports colocated `export const metadata: Metadata` (`title`, `description`, `alternates: { canonical }`) and renders `<Breadcrumbs items={[...]} />`.
- All **18** routes are registered in `src/app/sitemap.ts`, `src/components/directory/directory-data.ts`, `src/app/page.tsx`, and `src/app/design-systems/page.tsx`:
  - `/design-systems/tilda` (`Home Page`, `Product Page & Landing`)
  - `/design-systems/tilda/components` (Interactive Component & Token Specimen)
  - `/design-systems/tilda/colors` (`Product Page & Landing` — Colors & Gradients)
  - `/design-systems/tilda/pricing` (`Paywall & Subscription` — Pricing + Compare Plans)
  - `/design-systems/tilda/dashboard` (`Dashboard` — Analytics, KPI cards & Dual-Month Calendar)
  - `/design-systems/tilda/projects` (`Dashboard` — Workspace Projects & Recent Leads)
  - `/design-systems/tilda/contacts` (`Contacts` — CRM Table & Contact Card Modal)
  - `/design-systems/tilda/blog` (`Blog` — Newsletter Subscribe & Article Feed)
  - `/design-systems/tilda/media-kit` (`Media Kit` — Anchor Index, Logo & Type Specimens)
  - `/design-systems/tilda/account` (`Profile & Account` — Profile Form & 3-Step Referrals)
  - `/design-systems/tilda/setup` (`Account Setup` — 3-Step Workspace Onboarding)
  - `/design-systems/tilda/settings` (`Settings` — Multi-Tab Site Settings)
  - `/design-systems/tilda/help` (`Support & Help` — FAQ Search, Accordion & New Ticket)
  - `/design-systems/tilda/login` (`Log In`)
  - `/design-systems/tilda/signup` (`Sign Up`)
  - `/design-systems/tilda/recover` (`Reset Password`)
  - `/design-systems/tilda/privacy` (`Privacy Policy`)
  - `/design-systems/tilda/terms` (`Terms & Conditions`)
  - `src/app/design-systems/tilda/not-found.tsx` (`404 Page`)

---

## 6. Refero Screen Catalog (`design-references/tilda/`)

86 `tilda.cc` screens are archived in `design-references/tilda/manifest.json` and `design-references/tilda/images/`.

| Page / Pattern | Source URL | Local Image (`design-references/tilda/images/`) |
| :--- | :--- | :--- |
| Home / Split Hero | `https://tilda.cc/?lang=en` | `product-page-landing-home-page-53070151.jpg` |
| Pricing & Compare Plans | `tilda.cc/pricing/`, `/pricing-compare/` | `paywall-subscription-407e4fb2.jpg`, `paywall-subscription-b0913949.jpg` |
| Analytics Dashboard | `stats.tilda.cc/projects/statistics/`, `crm.tilda.cc/stats/` | `dashboard-5aaadb8b.jpg`, `dashboard-96e40dd5.jpg` |
| CRM Contacts & Modal | `https://crm.tilda.cc/contacts/` | `contacts-de9d1f32.jpg`, `contacts-51a1673a.jpg` |
| Blog & Newsletter | `https://blog-en.tilda.cc/` | `blog-329c4d80.jpg` |
| Colors & Gradients | `https://tilda.cc/colors/#gradients` | `product-page-landing-12ab7c27.jpg` |
| Profile & Referrals | `tilda.cc/identity/`, `/identity/referrals/` | `profile-account-account-setup-8b7d3f26.jpg`, `profile-account-3c06db6d.jpg` |
| Projects & Settings | `tilda.cc/projects/`, `/projects/settings/` | `support-help-b726904c.jpg`, `settings-7a6d829d.jpg` |
| Help & Support Tickets | `help.tilda.cc/#developers`, `tilda.cc/tickets/` | `support-help-5262cf26.jpg`, `support-help-9f6a0dd0.jpg` |
| Log In / Sign Up / Recover | `tilda.cc/login/`, `/registration/`, `/login/recover/` | `log-in-6eca3b68.jpg`, `sign-up-7f8475dd.jpg`, `reset-password-5a591188.jpg` |
| Media Kit / Legal / 404 | `tilda.cc/mediakit/`, `/privacy/`, `/terms/`, `/pric` | `contacts-media-kit-09c4823c.jpg`, `privacy-policy-95696428.jpg`, `terms-conditions-f58a36da.jpg`, `404-page-96ad2c22.jpg` |

---

## 7. Verification

```bash
bunx next typegen && bunx tsc --noEmit && bun run lint && bun run build
```
