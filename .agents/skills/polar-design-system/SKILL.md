---
name: polar-design-system
description: >-
  Design system guidelines, tokens, visual references, and component
  composition rules for the Polar.sh-inspired section (/design-systems/polar)
  of this Next.js App Router starter template. Use whenever creating, editing,
  or reviewing Polar UI components, sections, or pages.
---

# Polar Design System Skill

This skill governs all UI work under `/design-systems/polar` (`data-design-system="polar"`), grounded in 39 `polar.sh` design references archived in `design-references/polar/`.

## 1. Core Design Principles

1. **Crisp Light Workspace + Obsidian Auth**: Pure `#FFFFFF` marketing & dashboard cards paired with `#F7F7F8` sidebars, `#E4E4E7` zinc hairlines, and `#0A0A0B` / `#111113` obsidian dark auth modals.
2. **High-Contrast Pill CTAs**: Primary actions use `rounded-full bg-foreground text-background` (`#09090B` on light, `#FFFFFF` on dark auth), and secondary actions use `bg-surface-muted` (`#F4F4F5`).
3. **Generous `rounded-2xl` Card Framing**: Cards, modals, tables, and workspace containers use `rounded-2xl` (`16px`), inputs use `rounded-xl` (`12px`), and sidebar items use `rounded-lg` (`8px`).
4. **Restrained Electric Blue Data Accent**: Reserve `#0062FF` (`--accent`) for chart lines, active indicator dots, and subtle status highlights.

---

## 2. Semantic Tokens (`[data-design-system="polar"]` in `src/app/globals.css`)

| CSS Variable | Tailwind Class | Hex | Role |
| :--- | :--- | :--- | :--- |
| `--background` | `bg-background` | `#FFFFFF` | Primary marketing & dashboard canvas |
| `--foreground` | `text-foreground` | `#09090B` | Obsidian ink & primary pill CTA |
| `--surface` | `bg-surface` | `#F7F7F8` | Sidebar, test-mode banner, table `<thead>`, footer |
| `--surface-muted` | `bg-surface-muted` | `#F4F4F5` | Secondary pill button & status badge fill |
| `--border` | `border-border` | `#E4E4E7` | Crisp zinc `1px` card & table dividers |
| `--border-strong` | `border-border-strong` | `#09090B` | Active input focus border |
| `--accent` | `bg-accent` | `#0062FF` | Chart lines & indicator dots |
| `--muted` | `text-muted` | `#71717A` | Secondary copy, KPI labels, timestamps |

---

## 3. Bidirectional Lookup Guides

- **Token/Class → Components**: [By Class](./references/by-class.md)
- **Component → Classes (23 Components)**: [By Component](./references/by-component.md)

---

## 4. Component Inventory (`src/components/systems/polar/`)

- **Layout**: `PolarNavbar` (`"use client"`), `PolarFooter` (Server-safe)
- **Sections**: `PolarHero` (Server-safe), `PolarFinance` (Server-safe), `PolarIntegration` (Server-safe), `PolarDashboard` (`"use client"`), `PolarSettings` (`"use client"`), `PolarAuthModal` (`"use client"`, `mode="login" | "signup"`), `PolarComponentsShowcase` (`"use client"`)

---

## 5. Screen Catalog (`design-references/polar/`)

39 screens indexed in `design-references/polar/manifest.json` with local images in `design-references/polar/images/`:

| Page / Pattern | Source URL | Local Image (`design-references/polar/images/`) |
| :--- | :--- | :--- |
| Home / Landing | `https://polar.sh/` | `home-page-a16dc0ba.jpg` |
| Dashboard Overview | `https://polar.sh/dashboard/refero-design` | `dashboard-overview-d1c3cef6.jpg` |
| Analytics & Modal | `https://polar.sh/dashboard/refero-design/analytics/metrics/revenue` | `analytics-modal-c448fa60.jpg` |
| Finance & Wallet | `https://polar.sh/dashboard/refero-design/finance/income` | `finance-wallet-62645d65.jpg` |
| Integration | `https://polar.sh/dashboard/refero-design/onboarding/integrate` | `integration-a64f31af.jpg` |
| Sign In Modal | `https://polar.sh/` | `login-12880246.jpg` |

---

## 6. Verification

```bash
bunx next typegen && bunx tsc --noEmit && bun run lint && bun run build
```
