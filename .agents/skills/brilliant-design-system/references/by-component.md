# Brilliant Design System — Lookup by Component (23 Standard UI Components)

## 1. Button
- **Classes**:
  - Primary Green: `rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_0_#1e9d3d] hover:bg-accent-strong transition-colors`
  - Dark Pill: `rounded-full bg-[#222222] px-6 py-3 text-sm font-semibold text-white hover:bg-black transition-colors`
  - Green Outline: `rounded-full border border-accent px-4 py-1.5 text-xs font-semibold text-accent-strong hover:bg-accent-soft`
  - Neutral Outline: `rounded-full border border-border bg-background px-5 py-2 text-xs font-semibold text-foreground hover:bg-surface`
- **Do**: Use tactile bottom lip shadow on primary green CTAs; keep labels sentence-case and concise.
- **Don't**: Use sharp square corners (`rounded-none`) or drop blurs on action buttons.

## 2. Card
- **Classes**:
  - Standard: `rounded-2xl border border-border bg-background p-5`
  - Featured Active Lesson: `rounded-3xl border-2 border-[#EABC37] bg-gradient-to-b from-[#FFFDF2] to-[#FEF9DC] p-8 shadow-[0_5px_0_#EABC37]`
  - Tray Wrapper: `rounded-3xl bg-surface p-6 md:p-8`
- **Do**: Nest white `rounded-2xl` course cards inside `bg-surface` trays.
- **Don't**: Stack heavy dark drop shadows on standard white cards.

## 3. Input & Textarea
- **Classes**: `w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none`
- **Do**: Keep generous vertical padding (`py-3`) and clear focus border transitions.
- **Don't**: Use bottom-only underline inputs inside auth or checkout modals.

## 4. Select / Dropdown
- **Classes**: `w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none`
- **Do**: Match input height and `rounded-xl` radius identically in checkout and settings forms.
- **Don't**: Mix `rounded-full` selects next to `rounded-xl` inputs.

## 5. Checkbox & Radio
- **Classes**:
  - Quiz Option Card: `flex w-full items-center justify-between rounded-xl border-2 px-4 py-3.5 text-left transition-colors`
  - Checked Correct: `border-accent bg-accent-soft/80 text-accent-strong` with `h-6 w-6 rounded bg-accent text-white` checkmark square.
- **Do**: Represent multiple-choice puzzle options as full-width interactive cards rather than tiny radio dots.
- **Don't**: Rely on color alone without a visible checkmark badge.

## 6. Toggle / Switch
- **Classes**:
  - Track: `relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors` (`bg-accent` when on, `bg-surface-muted border border-border` when off)
  - Thumb: `inline-block h-4 w-4 rounded-full bg-white transition-transform` (`translate-x-6` vs `translate-x-1`)
- **Do**: Pair with `role="switch"` and `aria-checked` in notification settings.
- **Don't**: Use square switches.

## 7. Badge
- **Classes**:
  - `NEW`: `rounded-md bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white`
  - `TOP PICK` / `MOST POPULAR`: `rounded-md bg-[#FDE047] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground`
  - Streak Pill: `inline-flex items-center gap-1 rounded-full bg-[#FDE047] px-3 py-1 text-xs font-bold text-foreground`
- **Do**: Reserve yellow/gold badges exclusively for streaks, `TOP PICK`, and `MOST POPULAR`.
- **Don't**: Overuse colored badges on legal or editorial paragraphs.

## 8. Tabs
- **Classes**:
  - Nav Underline Tab: `relative flex h-16 items-center gap-1.5 text-sm font-medium` with `after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-foreground` when active.
  - Pill Filter Tab: `rounded-full px-3.5 py-1.5 text-xs font-semibold` (`bg-foreground text-background` when active).
- **Do**: Use underline tabs in top navigation and pill tabs for subject/category filters.
- **Don't**: Mix underline and pill tab styles in the same bar.

## 9. Navbar
- **Classes**: `sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur` with `mx-auto flex h-16 max-w-6xl items-center justify-between px-6`.
- **Do**: Include `BrilliantMark`, `Home` / `Courses` links, `Gift Premium`, streak pill, and mobile menu toggle.
- **Don't**: Use a dark navbar outside the Help Center (`#040404`).

## 10. Sidebar
- **Classes**: `border-t border-b border-border py-2 space-y-1` with items `block w-full rounded-lg px-3 py-2 text-left text-xs` (`font-bold text-foreground bg-surface` active).
- **Do**: Place the Settings rail on the right column (`md:col-span-4`) on desktop, matching `brilliant.org/settings/`.
- **Don't**: Crowd the settings rail with icons or nested accordions.

## 11. Footer
- **Classes**: `bg-[#000000] text-white` with `mx-auto max-w-6xl px-6 py-14` and `border-t border-zinc-800` legal row.
- **Do**: Use pure `#000000` background with `text-zinc-400` column headers and `text-zinc-300` links.
- **Don't**: Use light surfaces for the global marketing footer.

## 12. Modal / Dialog
- **Classes**: `rounded-3xl border border-border bg-background p-8 sm:p-10 shadow-sm` (and `shadow-xl` over `#0F1736` checkout backdrop).
- **Do**: Center auth, trial cancellation, and confirmation dialogs cleanly with clear escape links.
- **Don't**: Omit explicit close/cancel controls.

## 13. Drawer / Slide-over
- **Classes**: `md:hidden border-t border-border bg-background px-6 py-4 space-y-3` mobile navigation panel.
- **Do**: Keep mobile drawer links generous (`py-2`) with full-width Log in / Sign up pill actions.
- **Don't**: Hide primary auth CTAs inside unlabelled menus on mobile.

## 14. Table
- **Classes**: `overflow-x-auto rounded-2xl border-2 border-foreground/80 bg-background` (educator matrix) or `rounded-2xl border border-border bg-background` (Free vs Premium comparison).
- **Do**: Use `font-mono` for time/metrics and clear status circles for checkpoint cells.
- **Don't**: Let tables overflow horizontally without `overflow-x-auto`.

## 15. Calendar / DatePicker
- **Classes**: Weekly streak circles `flex h-10 w-10 items-center justify-center rounded-full border-2` (`border-[#EAB308] bg-[#FEF9C3]` completed, `border-border bg-surface` upcoming) with `Su M T W Th` labels.
- **Do**: Highlight active streak days with gold borders and lightning icons.
- **Don't**: Replace the compact 5–7 day streak ring row with heavy monthly grid calendars.

## 16. Pagination
- **Classes**: `rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold` or circular carousel arrow buttons `h-9 w-9 rounded-full bg-foreground text-background`.
- **Do**: Use clean circular/pill prev-next controls for course rails and multi-step lessons.
- **Don't**: Add dense numbered pagination tables to course carousels.

## 17. Breadcrumb
- **Classes**: Shared `<Breadcrumbs />` bar (`border-b border-border bg-surface/60`) with `ChevronRight` separators and `BreadcrumbList` JSON-LD.
- **Do**: Render `<Breadcrumbs />` at the top of every `/design-systems/brilliant/*` page.
- **Don't**: Remove breadcrumbs on nested routes like `/blog/post`.

## 18. Toast / Alert Banner
- **Classes**:
  - Mascot / Habit Banner: `rounded-2xl border-2 border-[#BEF264] bg-[#F7FEE7] px-6 py-3.5 text-sm font-semibold text-foreground`
  - Explanation Box: `rounded-xl border border-border bg-background p-4 text-xs`
  - Destructive Confirmation: `rounded-2xl border border-red-300 bg-red-50 p-5`
- **Do**: Use soft lime/mint banners for encouragement and crisp red callouts only for irreversible deletion.
- **Don't**: Flash red alerts on neutral hints or explanations.

## 19. Tooltip
- **Classes**: `rounded-lg bg-[#111111] px-3 py-1.5 text-xs font-medium text-white shadow-md` (seen on Educator checkpoint hover `"Student has completed this lesson"`).
- **Do**: Keep tooltip copy under one short sentence.
- **Don't**: Put interactive links inside hover tooltips.

## 20. Avatar & Icon Badge
- **Classes**:
  - Course Icon Badge: `inline-flex h-10 w-10 items-center justify-center rounded-xl border` with category tint (`#EEF2FF`, `#F5F3FF`, `#FFFBEB`, `#ECFDF5`)
  - League Trophy Badge: `flex h-12 w-12 items-center justify-center rounded-xl bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]`
- **Do**: Color-code STEM subjects distinctly across Math (indigo/blue), CS (violet), Data/Science (amber), and Logic (emerald).
- **Don't**: Render monochrome grey icons everywhere when subject identity matters.

## 21. Accordion / FAQ
- **Classes**: `divide-y divide-border rounded-2xl border border-border bg-background` with trigger `flex w-full items-center justify-between gap-4 text-left text-sm font-bold text-foreground` and rotating `ChevronDown`.
- **Do**: Keep the first FAQ expanded by default on the Educators landing page.
- **Don't**: Nest accordions inside narrow sidebars.

## 22. Empty State
- **Classes**: Centered card/canvas (`mx-auto max-w-4xl px-6 py-16`) with clear heading, concise explanation, SVG illustration (e.g. `UndefinedDerivativeSvg` on 404), and single recovery CTA (`Go home`).
- **Do**: Pair mathematical personality (`y'(0)` undefined) with a direct return link.
- **Don't**: Leave dead-end 404 or empty search states without an action.

## 23. Skeleton Loader
- **Classes**: `animate-pulse rounded-2xl bg-surface-muted` matching exact card (`h-36`), progress bar (`h-2.5 rounded-full`), and text line (`h-4 w-2/3 rounded`) dimensions.
- **Do**: Match the `rounded-2xl` / `rounded-full` geometry of the Brilliant component being loaded.
- **Don't**: Use sharp rectangular skeletons inside rounded card trays.
