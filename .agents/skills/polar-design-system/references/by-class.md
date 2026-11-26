# Polar Class Usage by Component (Token / Class → Components)

| Class / Token | Allowed Components | Forbidden Components (Do NOT Use) |
| :--- | :--- | :--- |
| `rounded-full` | Primary/Secondary/Outline Buttons, Segmented Control Wrapper & Active Pill, Status Badges, Brand Mark, Toggle | Cards, Modals, Tables, Inputs |
| `rounded-2xl` | Cards, Dashboard Workspace Frame, Modals, Tables, KPI Boxes | Buttons, Inputs, Sidebar Nav Items |
| `rounded-xl` | Inputs, Textareas, Select Triggers, Inner Banner/Preview Boxes | Primary CTA Buttons, Large Outer Modals |
| `rounded-lg` | Sidebar Nav Items, Sidebar Search Input, Tooltip | Outer Dashboard Cards |
| `bg-background` (`#FFFFFF`) | Main Page Canvas, Cards, Dashboard Main Panel, Active Segmented Pill | Sidebar Background |
| `bg-surface` (`#F7F7F8`) | Sidebar, Test-Mode Banner, Table `<thead>`, Segmented Control Track, Footer | Primary CTA Buttons |
| `bg-surface-muted` (`#F4F4F5`) | Secondary Pill Buttons (`Why Polar`), Status Badges (`Paid`) | Active Primary CTAs |
| `bg-foreground` (`#09090B`) | Primary Pill CTAs (`Get Started`, `Go Live`, `Create Dashboard`) | Large Page Sections (except `#0A0A0B` Auth screen) |
| `shadow-*` | **None** (use `border border-border` instead) | Cards, Modals, Dropdowns, Buttons |
