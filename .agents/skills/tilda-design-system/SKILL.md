---
name: tilda-design-system
description: >-
  Design system guidelines, tokens, Refero visual references, and component
  composition rules for the Tilda.cc-inspired Next.js App Router starter
  template. Use whenever creating, editing, reviewing, or refactoring UI
  components, sections, or pages in this repository.
---

# Tilda Design System Skill

This skill governs all UI work in this Next.js App Router (`src/`) + Tailwind CSS v4 + Bun starter template, grounded in 50 `tilda.cc` design references archived in `design-references/tilda/`.

## 1. Core Design Principles

1. **High-Contrast Editorial Minimalism**: Crisp `#FFFFFF` canvases alternating with `#F7F7F7` surfaces, `#111111` ink, and `#E5E5E5` hairlines.
2. **Warm Coral Focal Accents**: Use `#FA8A64` (`bg-accent`) and `#FB5E1D` (`bg-accent-strong`) sparingly for primary CTAs, circular icon badges, and active highlights.
3. **Sharp Containers, Circular Badges**: Keep cards, buttons, inputs, modals, and tables strictly rectangular (`0px` radius). Reserve `rounded-full` exclusively for coral icon badges (`bg-accent`).
4. **Geometric Display + Clean Sans**: Pair `font-display` (`Jost`, echoing `Futura PT`) for headings and numerals with `font-sans` (`Plus Jakarta Sans`, echoing `Tilda Sans`) for body copy and `font-mono` (`JetBrains Mono`) for technical metadata.
5. **Component-First Composition**: Always compose new sections from `src/components/ui/` primitives before introducing custom styles.

---

## 2. Tokens, Palette & Typography (`src/app/globals.css` & `src/app/layout.tsx`)

### Semantic Color Tokens
| CSS Variable | Tailwind Class | Hex | Role |
| :--- | :--- | :--- | :--- |
| `--background` | `bg-background` | `#FFFFFF` | Primary page background |
| `--foreground` | `text-foreground` | `#111111` | Primary ink & strong borders |
| `--surface` | `bg-surface` | `#F7F7F7` | Alternating section & footer background |
| `--surface-muted` | `bg-surface-muted` | `#EFEFEF` | Neutral badge & subtle fill |
| `--border` | `border-border` | `#E5E5E5` | Hairline dividers & subtle card borders |
| `--border-strong` | `border-foreground` | `#111111` | Featured `2px` card & button borders |
| `--accent` | `bg-accent` | `#FA8A64` | Coral primary CTA & circular icon badges |
| `--accent-strong` | `bg-accent-strong` | `#FB5E1D` | Hover accent, checkmarks, 404 numeral |
| `--accent-soft` | `bg-accent-soft` | `#F5B39C` | Soft coral badge & callout tint |
| `--muted` | `text-muted` | `#6C6C6C` | Secondary copy, captions, table metadata |

### Gradient Recipes (from `tilda.cc/colors/#gradients`)
- **Tilda Coral Sunset**: `linear-gradient(135deg, #FA8A64 0%, #FB5E1D 100%)`
- **Warm Peach Editorial**: `linear-gradient(135deg, #F5B39C 0%, #EA977D 100%)`
- **Lavender Mist**: `linear-gradient(135deg, #DBCFEE 0%, #949BE1 100%)`
- **Sky & Mint**: `linear-gradient(135deg, #5DA6E9 0%, #6EE14D 100%)`

### Typography Scale
- **Hero H1**: `font-display text-4xl sm:text-6xl font-normal tracking-tight leading-[1.1]`
- **Page H1 (Editorial)**: `font-display text-4xl font-light tracking-tight`
- **Section H2**: `font-display text-3xl sm:text-4xl font-normal tracking-tight`
- **Card H3**: `font-display text-xl font-medium`
- **Body**: `text-sm` or `text-base leading-relaxed text-muted`
- **Micro-label / Nav / Table Header**: `text-[11px] font-semibold uppercase tracking-[0.12em]`–`0.14em`

---

## 3. Class & Token Usage Rules (Bidirectional Lookup)

For complete Do / Don't rules across all **23 standard UI components**, read the two reference guides:
- **Token/Class → Components**: [By Class](./references/by-class.md) (look up where `rounded-full`, `bg-surface`, `border-2`, `font-display`, etc. are allowed vs. forbidden).
- **Component → Classes**: [By Component](./references/by-component.md) (look up exact classes, colors, borders, and Do/Don't rules for Button, Card, Input, Select, Checkbox/Radio, Toggle, Badge, Tabs, Navbar, Sidebar, Footer, Modal, Drawer, Table, Calendar, Pagination, Breadcrumb, Toast, Tooltip, Avatar, Accordion, Empty State, and Skeleton).

### Border Radius (`rounded-*`)
| Class | Use For | Do NOT Use For |
| :--- | :--- | :--- |
| *(none / `rounded-none`)* | Cards, Buttons, Inputs, Badges, Modals, Tables, Dropdowns | Icon badges, avatars |
| `rounded-full` | Circular icon badges (`h-10 w-10` / `h-12 w-12` / `h-20 w-20` with `bg-accent`), avatars, status dots | Buttons, cards, inputs, badges, containers |
| `rounded-sm` / `md` / `lg` / `xl` | **Never** (breaks Tilda's sharp geometric aesthetic) | Any UI element |

### Backgrounds, Borders & Shadows
| Token / Class | Use For | Do NOT Use For |
| :--- | :--- | :--- |
| `bg-background` | Primary page canvas, cards sitting on `bg-surface`, inputs, table bodies | Adjacent `bg-background` sections without a `border-b` |
| `bg-surface` | Alternating sections (e.g. `FeatureGrid`), auth/dashboard backdrops, `Footer`, table `<thead>` | Cards inside a `bg-surface` section (use `bg-background` on those cards) |
| `bg-surface-muted` | Neutral `Badge` fills, subtle hover states | Full-page backgrounds or primary CTAs |
| `bg-accent` | Primary coral `Button` (`variant="accent"`), circular icon badges | Large section backgrounds or body text |
| `bg-accent-strong` | Hover state of `bg-accent` buttons, gradient end-stops | Default resting button background |
| `bg-accent-soft` | Callout banners (`bg-accent-soft/20`), `Badge tone="accent"` (`bg-accent-soft/40`) | Primary CTA buttons |
| `border border-border` | Section dividers (`border-b`), `Card variant="subtle"`, `Input`, table row dividers | Featured/pricing cards or primary outlined CTAs |
| `border-2 border-foreground` | `Card variant="bordered"` (pricing tiers, auth cards, project cards) | Standard list items or nested panels |
| `shadow-*` | **Never** | Any element (use `border` + surface contrast instead) |

### Icon Circles, Grids & Tables
- **Container**: `mx-auto max-w-6xl px-6` (`max-w-3xl` for settings/forms, `max-w-md` for auth cards); vertical rhythm `py-16` or `py-20` (`md:py-28` for hero).
- **Inline icons**: `h-4 w-4` (`ArrowRight`, `Check`).
- **Feature icon circle**: `h-12 w-12 rounded-full bg-accent text-foreground` with `h-5 w-5` icon.
- **Pricing / hero icon circle**: `h-20 w-20 rounded-full bg-accent text-foreground` with `h-8 w-8 stroke-[1.5]` icon.
- **Responsive grids**: `grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3` (`gap-8` for `border-2` pricing cards).
- **Tables**: `overflow-x-auto border border-border bg-background`, `thead` with `border-b border-border bg-surface text-[11px] font-semibold uppercase tracking-[0.12em] text-muted`, `tbody` with `divide-y divide-border`.

---

## 4. Component Inventory (`src/components/`)

### UI Primitives (`src/components/ui/`)
- **`Button`** (`Button.tsx`, Server-safe): `variant="primary" | "outline" | "accent" | "ghost"`, `size="sm" | "md" | "lg"`. Discriminated union: pass `href` to render Next.js `<Link>`, or omit `href` to use `<button>` props (`type`, `onClick`, `disabled`).
- **`Card`** (`Card.tsx`, Server-safe): `variant="bordered"` (`border-2 border-foreground`), `"subtle"` (`border border-border`), `"surface"` (`bg-surface border border-border`). Defaults to `p-8`; pass `className="p-0 overflow-hidden"` for full-bleed media/gradient headers.
- **`Tabs`** (`Tabs.tsx`, `"use client"`): Underline-tab switcher (`items: TabItem[]`, `activeId`, `onChange`). Must be rendered inside a `"use client"` parent.
- **`Badge`** (`Badge.tsx`, Server-safe): `tone="neutral" | "accent" | "dark"` uppercase tracked micro-label.
- **`Input`** (`Input.tsx`, Server-safe): Labeled bordered input with optional `hint`. Always pass `id` when passing `label` so `<label htmlFor={id}>` binds properly.

### Layout & Sections (`src/components/layout/`, `src/components/sections/`)
- **`Navbar`** (`"use client"`): Sticky header (`h-16`), tracked uppercase links, `LOG IN`, outlined `SIGN UP`, mobile menu.
- **`Footer`** (Server-safe): 4-column `bg-surface` footer.
- **Sections**: Server-safe (`HeroSection`, `FeatureGrid`, `ProjectsDashboard`) and Client (`PricingSection`, `AuthCard`).

---

## 5. Refero Screen Catalog (`design-references/tilda/`)

50 `tilda.cc` screens are archived in `design-references/tilda/manifest.json` and `design-references/tilda/images/`.

| Page / Pattern | Source URL | Local Image (`design-references/tilda/images/`) |
| :--- | :--- | :--- |
| Home / Landing | `https://tilda.cc/?lang=en` | `product-page-landing-home-page-53070151.jpg` |
| Pricing (Tabs + 3 Tiers) | `https://tilda.cc/pricing/#!/tab/186881131-1` | `paywall-subscription-407e4fb2.jpg` |
| Colors & Gradients | `https://tilda.cc/colors/#gradients` | `product-page-landing-12ab7c27.jpg` |
| Log In / Sign Up / Recover | `tilda.cc/login/`, `/registration/`, `/login/recover/` | `log-in-6eca3b68.jpg`, `sign-up-7f8475dd.jpg`, `reset-password-5a591188.jpg` |
| Projects & Settings | `tilda.cc/projects/`, `tilda.cc/page/?pageid=31142752` | `support-help-b726904c.jpg`, `settings-2e65a543.jpg` |
| CRM Contacts & Help | `crm.tilda.cc/contacts/`, `help.tilda.cc/#developers` | `contacts-de9d1f32.jpg`, `support-help-5262cf26.jpg` |
| Media Kit / Legal / 404 | `tilda.cc/mediakit/`, `/privacy/`, `/terms/`, `/pric` | `contacts-media-kit-09c4823c.jpg`, `privacy-policy-95696428.jpg`, `terms-conditions-f58a36da.jpg`, `404-page-96ad2c22.jpg` |

---

## 6. Section Component Template

```tsx
import { ArrowRight, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function ExampleSection() {
  return (
    <section className="border-b border-border bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Badge tone="accent">FAQ</Badge>
            <h2 className="mt-4 font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <Button href="/help" variant="outline" size="sm">
            Visit Help Center <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card variant="subtle" className="bg-background">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-foreground">
              <HelpCircle className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-xl font-medium text-foreground">
              Can I use my own custom domain?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Yes. Personal and Business plans support custom domains with automatic SSL.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
```

---

## 7. Workflow & Verification

1. **Check references**: Inspect the matching screenshot in `design-references/tilda/images/` before designing new patterns.
2. **Build component-first**: Add primitives to `src/components/ui/` and blocks to `src/components/sections/`.
3. **Wire into App Router**: Add routes under `src/app/` wrapping `<Navbar />`, `<main className="flex-1">`, and `<Footer />`.
4. **Preview**: Add a demo block in `src/app/design-system/page.tsx` (`/design-system`).
5. **Verify**:
   ```bash
   bunx tsc --noEmit && bun run lint && bun run build
   ```
