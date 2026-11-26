# Class Usage by Component (Token / Class → Components)

Look up any design-system token or utility class to see **which components use it** and **which components must NOT use it**.

---

## 1. Shape & Border Radius

| Class | Allowed Components | Forbidden Components (Do NOT Use) |
| :--- | :--- | :--- |
| *(sharp / `rounded-none`)* | Button, Card, Input, Textarea, Select, Badge, Tabs, Navbar, Sidebar, Footer, Modal, Drawer, Table, Calendar container, Pagination, Toast/Alert, Tooltip, Accordion | Icon circles, Avatars, Toggle thumb, Status dots |
| `rounded-full` | Circular icon badges (`bg-accent`), Avatars, Status dots, Toggle switch track/thumb, Calendar selected-day / today indicator | Buttons, Cards, Inputs, Badges, Modals, Tables, Dropdowns |
| `rounded-sm` / `md` / `lg` / `xl` | **None** (never used in Tilda's geometric system) | All components |

---

## 2. Background & Surface Tokens

| Token Class | Allowed Components | Forbidden Components (Do NOT Use) |
| :--- | :--- | :--- |
| `bg-background` (`#FFFFFF`) | Page canvas, Cards inside `bg-surface` sections, Navbar, Sidebar, Input, Textarea, Select, Modal, Drawer, Calendar popover, Table `<tbody>`, Tooltip (light) | Adjacent `bg-background` sections without `border-b border-border` |
| `bg-surface` (`#F7F7F7`) | Alternating sections (`FeatureGrid`), Auth/Dashboard page backdrops, Footer, Table `<thead>`, Calendar weekday header row, Accordion expanded body, Skeleton blocks | Cards inside a `bg-surface` section (use `bg-background` on those cards) |
| `bg-surface-muted` (`#EFEFEF`) | Neutral `Badge`, hovered Table/Dropdown/Calendar-day rows, disabled Input, Pagination hover | Primary CTA Buttons, full-page backgrounds |
| `bg-accent` (`#FA8A64`) | `Button variant="accent"`, circular icon badges (`h-10`/`h-12`/`h-20`), active Toggle track, Calendar selected date circle | Large section backgrounds, body text, Modal backdrops |
| `bg-accent-strong` (`#FB5E1D`) | Hover state of `Button variant="accent"`, 404 display numeral, urgent Toast/Alert left bar, active Calendar range endpoint | Default resting button background |
| `bg-accent-soft` (`#F5B39C`) | `Badge tone="accent"` (`bg-accent-soft/40`), info Toast/Alert (`bg-accent-soft/20`), Calendar in-range highlight (`bg-accent-soft/30`) | Primary CTA Buttons |
| `bg-foreground` (`#111111`) | `Button variant="primary"`, `Badge tone="dark"`, dark Tooltip, active Pagination page | Page backgrounds, large Cards |
| `bg-foreground/40` | Modal & Drawer backdrop overlay | Inline alerts or cards |

---

## 3. Border Tokens

| Class | Allowed Components | Forbidden Components |
| :--- | :--- | :--- |
| `border border-border` (`#E5E5E5`) | Section dividers (`border-b`), `Card variant="subtle"`, `Input`/`Textarea`/`Select` resting state, Sidebar/Navbar dividers, Table outer frame & `divide-y`, Accordion item dividers, Calendar grid border | Featured pricing cards, primary outlined CTAs |
| `border-2 border-foreground` (`#111111`) | `Card variant="bordered"` (pricing tiers, auth cards, project cards), Modal & Drawer outer frame, active Calendar popover | Dense list items, table cells, nested sub-cards |
| `border border-foreground` | `Button variant="outline"`, `Input:focus`, `Select:focus`, active Pagination button, Checkbox/Radio checked box | Subtle section dividers |
| `border-b-2 border-foreground` | Active `Tabs` item, active Sidebar sub-nav tab | Inactive tabs (`border-transparent`) |

---

## 4. Typography & Shadow Rules

| Class | Allowed Components | Forbidden Components |
| :--- | :--- | :--- |
| `font-display` (`Jost`) | `h1`–`h3` headings, Pricing numbers, Calendar month/year header, `404` numeral, `Navbar`/`Footer` brand mark | Body paragraphs, table cells, form hints, tooltips |
| `font-sans` (`Plus Jakarta Sans`) | Body copy, Button labels, Input values, Table cells, Dropdown items, Calendar day numbers, Toast messages | Display numerals |
| `font-mono` (`JetBrains Mono`) | Domains, hex codes, emails, API keys, timestamps, code blocks | Marketing headings or descriptions |
| `text-[11px] font-semibold uppercase tracking-[0.14em]` | Navbar links, Sidebar section headers, `Button size="sm"`, `Badge`, `Input` labels, `Footer` titles, Table `<th>`, Calendar weekday headers (`MON`–`SUN`) | Multi-line descriptions or body copy |
| `shadow-*` | **None** (use `border` + `bg-background`/`bg-surface` contrast instead) | Cards, Modals, Dropdowns, Calendar popovers, Buttons |
