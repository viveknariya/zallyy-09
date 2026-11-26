---
name: jetbrains-design-system
description: >-
  Design system guidelines, tokens, Refero visual references, and component
  composition rules for the JetBrains.com-inspired section (/design-systems/jetbrains)
  of this Next.js App Router starter template. Use whenever creating, editing,
  or reviewing JetBrains UI components, sections, or pages.
---

# JetBrains Design System Skill

This skill governs all UI work under `/design-systems/jetbrains` (`data-design-system="jetbrains"`), grounded in 20 `jetbrains.com` design references archived in `design-references/jetbrains/`.

## 1. Core Design Principles

1. **Dark-First Developer Canvas**: Primary dark surfaces (`#19191C` canvas, `#27282C` header/hero, `#303136` elevated cards) paired with crisp white `#FFFFFF` store/pricing sections.
2. **Electric Blue & IDE Gradients**: Use `#167DFF` (`bg-accent`) / `#087CFA` (`bg-accent-strong`) for primary pill CTAs, links, and active tabs, and multi-stop gradients (`#6B57FF → #FF318C`, `#FE2857 → #087CFA`, `#21D789 → #FCF84A`) for IDE badges and spotlight cards.
3. **Pill CTAs + Rounded Cards**: Primary/outline buttons and billing toggles use `rounded-full`; cards and panels use `rounded-lg`; IDE icon badges use `rounded-md`.
4. **JetBrains Mono + Clean Sans**: Pair `font-sans` (`Plus Jakarta Sans` / `Inter`) for headings and UI copy with `font-mono` (`JetBrains Mono`) for code specimens, version badges, and category tags.

---

## 2. Semantic Tokens (`[data-design-system="jetbrains"]` in `src/app/globals.css`)

| CSS Variable | Tailwind Class | Hex | Role |
| :--- | :--- | :--- | :--- |
| `--background` | `bg-background` | `#19191C` | Primary dark canvas & footer |
| `--foreground` | `text-foreground` | `#FFFFFF` | Primary white ink |
| `--surface` | `bg-surface` | `#27282C` | Sticky navbar & hero surface |
| `--surface-muted` | `bg-surface-muted` | `#303136` | Elevated IDE & feature cards |
| `--border` | `border-border` | `#3C3F41` | Subtle dark hairline borders |
| `--border-strong` | `border-border-strong` | `#6B7280` | Hover card borders & outline pills |
| `--accent` | `bg-accent` | `#167DFF` | Primary pill CTA, active tab, text links |
| `--accent-strong` | `bg-accent-strong` | `#087CFA` | Hover state for primary blue CTA |
| `--accent-soft` | `bg-accent-soft` | `#6B57FF` | Violet spotlight accent |
| `--muted` | `text-muted` | `#A8ADBD` | Secondary descriptions & nav links |

---

## 3. Bidirectional Lookup Guides

- **Token/Class → Components**: [By Class](./references/by-class.md)
- **Component → Classes (23 Components)**: [By Component](./references/by-component.md)

---

## 4. Component Inventory (`src/components/systems/jetbrains/`)

- **Layout**: `JetBrainsNavbar` (`"use client"`), `JetBrainsFooter` (Server-safe)
- **Sections**: `JetBrainsHero` (Server-safe), `JetBrainsProductGrid` (Server-safe), `JetBrainsNewsGrid` (Server-safe), `JetBrainsContacts` (Server-safe), `JetBrainsPricing` (`"use client"`), `JetBrainsFaq` (`"use client"`), `JetBrainsComponentsShowcase` (`"use client"`)

---

## 5. Refero Screen Catalog (`design-references/jetbrains/`)

39 screens indexed in `design-references/jetbrains/manifest.json` with local images in `design-references/jetbrains/images/`:

| Page / Pattern | Source URL | Local Image (`design-references/jetbrains/images/`) |
| :--- | :--- | :--- |
| Home / Landing | `https://www.jetbrains.com/` | `home-page-1d38bea3.jpg` |
| Store & Pricing | `https://www.jetbrains.com/store/#commercial` | `store-pricing-a3591fb1.jpg` |
| JetBrains Mono LP | `https://www.jetbrains.com/lp/mono/` | `mono-lp-d1703e01.jpg` |
| Product Support | `https://www.jetbrains.com/support/` | `support-ebe07db3.jpg` |
| All Tools | `https://www.jetbrains.com/all/` | `all-tools-9d852813.jpg` |
| Contacts | `https://www.jetbrains.com/company/contacts/#headquarters-international-sales` | `contacts-7f6baad2.jpg` |
| Newsroom | `https://www.jetbrains.com/company/news/` | `newsroom-ea3f288d.jpg` |
| Checkout | `https://www.jetbrains.com/shop/checkout` | `checkout-77a85b97.jpg` |
| About / People | `https://www.jetbrains.com/company/people/` | `about-people-f5714bf4.jpg` |

---

## 6. Verification

```bash
bunx tsc --noEmit && bun run lint && bun run build
```
