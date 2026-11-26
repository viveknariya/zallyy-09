---
name: cron-design-system
description: >-
  Design system guidelines, tokens, visual references, and component
  composition rules for the Cron.com-inspired section (/design-systems/cron)
  of this Next.js App Router starter template. Use whenever creating, editing,
  or reviewing Cron UI components, sections, or pages.
---

# Cron Design System Skill

This skill governs all UI work under `/design-systems/cron` (`data-design-system="cron"`), grounded in 30 `cron.com` design references archived in `design-references/cron/`.

## 1. Core Design Principles

1. **Neutral Dark Calendar Grid**: `#18181A` canvas, `#1E1E21` sidebars & panels, `#26262A` muted surfaces, and `#2E2E32` crisp 1px gridlines.
2. **Signature Vermilion Accent (`#FF5416`)**: Reserve `#FF5416` (`bg-accent`) for the active mini-calendar date square, current-time `NOW` indicator line, download pill CTAs, and changelog links.
3. **Keyboard-First Controls**: Pair actions with `<kbd>` keycap badges (`⌘ K`, `S`, `F`, `?`) in `bg-surface-muted border border-border`.
4. **Compact `rounded-md` / `rounded-xl` Framing**: Workspace containers & modals use `rounded-xl`; event blocks, inputs, and segmented buttons use `rounded-md`; download CTAs use `rounded-full`.

---

## 2. Semantic Tokens (`[data-design-system="cron"]` in `src/app/globals.css`)

| CSS Variable | Tailwind Class | Hex | Role |
| :--- | :--- | :--- | :--- |
| `--background` | `bg-background` | `#18181A` | Primary dark calendar canvas |
| `--foreground` | `text-foreground` | `#F4F4F5` | Crisp off-white ink |
| `--surface` | `bg-surface` | `#1E1E21` | Sticky navbar, sidebars, modals |
| `--surface-muted` | `bg-surface-muted` | `#26262A` | Keycap badges, segmented tracks, cards |
| `--border` | `border-border` | `#2E2E32` | 1px gridlines & panel dividers |
| `--accent` | `bg-accent` | `#FF5416` | Vermilion pill CTA, `NOW` line, selected day |
| `--accent-strong` | `bg-accent-strong` | `#E0440C` | Hover state for vermilion CTAs |
| `--muted` | `text-muted` | `#A1A1AA` | Secondary labels & timestamps |

---

## 3. Bidirectional Lookup Guides

- **Token/Class → Components**: [By Class](./references/by-class.md)
- **Component → Classes (23 Components)**: [By Component](./references/by-component.md)

---

## 4. Component Inventory (`src/components/systems/cron/`)

- **Layout**: `CronNavbar` (`"use client"`), `CronFooter` (Server-safe)
- **Sections**: `CronDownload` (Server-safe), `CronChangelog` (Server-safe), `CronCalendarWorkspace` (`"use client"`), `CronSettingsModal` (`"use client"`), `CronComponentsShowcase` (`"use client"`)

---

## 5. Screen Catalog (`design-references/cron/`)

30 screens indexed in `design-references/cron/manifest.json` with local images in `design-references/cron/images/`:

| Page / Pattern | Source URL | Local Image (`design-references/cron/images/`) |
| :--- | :--- | :--- |
| Calendar Week Grid | `https://calendar.cron.com/week` | `calendar-week-1eecd48e.jpg` |
| Settings Modal | `https://calendar.cron.com/settings/calendars` | `settings-calendars-9df755a4.jpg` |
| Event Create | `https://calendar.cron.com/event/create` | `event-create-c7c3fed4.jpg` |
| Download macOS | `https://cron.com/download/macos` | `download-macos-fa7026db.jpg` |
| Changelog | `https://cron.com/changelog` | `changelog-5d30fb11.jpg` |
| Search | `https://calendar.cron.com/search` | `search-405abcbd.jpg` |
| Splash / Home | `https://calendar.cron.com/` | `calendar-splash-59dbd528.jpg` |

---

## 6. Verification

```bash
bunx next typegen && bunx tsc --noEmit && bun run lint && bun run build
```
