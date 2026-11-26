# JetBrains Class Usage by Component (Token / Class → Components)

| Class / Token | Allowed Components | Forbidden Components (Do NOT Use) |
| :--- | :--- | :--- |
| `rounded-full` | Primary/Outline Buttons, Billing Toggle, Version/Category Pills, Avatars, Toggle Track/Thumb | Cards, Modals, Tables, Inputs, IDE Square Badges |
| `rounded-lg` | Cards (`bg-surface-muted`), Spotlight Gradient Banners, Modals, Pricing Cards | Primary Buttons, Inputs, Badges |
| `rounded-md` | IDE Icon Squares (`h-11 w-11`), Inputs, Select, Code Blocks (`pre`) | Primary CTA Buttons |
| `bg-background` (`#19191C`) | Main dark page canvas, Footer, Code Blocks | Elevated Cards inside dark sections |
| `bg-surface` (`#27282C`) | Sticky Navbar, Hero Section, Table `<thead>` | Elevated Cards (`use bg-surface-muted`) |
| `bg-surface-muted` (`#303136`) | IDE/Product Cards, Feature Cards, Showcase Containers | Full-page backgrounds |
| `bg-white text-[#19191C]` | Store / Pricing light-mode section & Pricing Cards | Dark Hero or Support pages |
| `bg-accent` (`#167DFF`) | Primary Pill CTAs, Active Tab underline (`border-accent`), Text Links (`text-accent`) | Full-card backgrounds |
| `font-mono` (`JetBrains Mono`) | Code blocks, IDE category pills, hex codes, version tags, emails | Hero headlines or body paragraphs |
