# Component Usage by Class (Component → Classes, Colors & Do/Don't)

Exact Tailwind classes, tokens, and Do/Don't rules for **23 standard UI components** so any new element matches the Tilda design system with zero guesswork.

---

## 1. Button (`src/components/ui/Button.tsx`)
- **Classes**: `inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition-colors`
  - `primary`: `bg-foreground text-background border border-foreground hover:bg-neutral-800`
  - `accent`: `bg-accent text-foreground border border-accent hover:bg-accent-strong hover:text-white`
  - `outline`: `bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-background`
  - `ghost`: `bg-transparent text-foreground border border-transparent hover:bg-surface`
- **Do**: Keep `0px` corners and uppercase tracked text. **Don't**: Add `rounded-md` or `shadow-*`.

## 2. Card (`src/components/ui/Card.tsx`)
- **Classes**: `p-8` (override with `p-0 overflow-hidden` for media headers)
  - `bordered`: `bg-background border-2 border-foreground`
  - `subtle`: `bg-background border border-border`
  - `surface`: `bg-surface border border-border`
- **Do**: Use `bg-background` when placing cards inside a `bg-surface` section. **Don't**: Use `shadow-md` or `rounded-lg`.

## 3. Input & Textarea (`src/components/ui/Input.tsx`)
- **Classes**: Label `text-xs font-semibold uppercase tracking-[0.1em] text-foreground`; Field `w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-foreground focus:outline-none`; Hint `text-xs text-muted`
- **Do**: Always pair `id` with `label`. **Don't**: Use `rounded-*` or `ring-*` glow outlines.

## 4. Select / Dropdown
- **Classes**: Trigger `w-full border border-border bg-background px-4 py-3 text-sm text-foreground flex items-center justify-between focus:border-foreground`; Menu `border-2 border-foreground bg-background divide-y divide-border`; Option `px-4 py-2.5 text-sm hover:bg-surface-muted`
- **Do**: Frame the open menu with `border-2 border-foreground` (no shadow). **Don't**: Use `shadow-lg` or `rounded-md`.

## 5. Checkbox & Radio
- **Classes**: Box `h-4 w-4 border border-foreground bg-background checked:bg-accent checked:border-foreground` (Checkbox: sharp `0px`; Radio: `rounded-full`); Label `text-sm text-foreground`
- **Do**: Use `bg-accent` or `bg-foreground` for checked fill. **Don't**: Round Checkbox corners.

## 6. Toggle / Switch
- **Classes**: Track `h-6 w-11 rounded-full border border-foreground transition-colors` (`bg-accent` when on, `bg-surface-muted` when off); Thumb `h-4 w-4 rounded-full bg-foreground`
- **Do**: One of the few elements where `rounded-full` is required. **Don't**: Use soft gray borders without `border-foreground`.

## 7. Badge (`src/components/ui/Badge.tsx`)
- **Classes**: `inline-flex items-center px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]`
  - `neutral`: `bg-surface-muted text-foreground border border-border`
  - `accent`: `bg-accent-soft/40 text-foreground border border-accent`
  - `dark`: `bg-foreground text-background border border-foreground`
- **Do**: Keep rectangular (`0px` radius). **Don't**: Make Badges `rounded-full` pills.

## 8. Tabs (`src/components/ui/Tabs.tsx`)
- **Classes**: List `inline-flex border-b border-border`; Active `px-6 py-3 text-sm font-medium border-b-2 border-foreground text-foreground -mb-px`; Inactive `border-transparent text-muted hover:text-foreground`
- **Do**: Wrap in a `"use client"` parent. **Don't**: Use pill-style `bg-surface` tab backgrounds.

## 9. Navbar (`src/components/layout/Navbar.tsx`)
- **Classes**: `sticky top-0 z-40 h-16 border-b border-border bg-background/95 backdrop-blur`; Brand `font-display text-lg font-semibold`; Links `text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/80 hover:text-foreground`
- **Do**: Keep primary CTA as `Button variant="outline" size="sm"`. **Don't**: Add search bars or heavy shadows to the navbar.

## 10. Sidebar (Dashboard / Docs Navigation)
- **Classes**: Container `w-64 shrink-0 border-r border-border bg-background p-6`; Group Title `text-[11px] font-semibold uppercase tracking-[0.14em] text-muted mb-3`; Item `flex items-center gap-3 px-3 py-2 text-sm` (Active: `bg-surface font-semibold text-foreground border-l-2 border-accent-strong`; Inactive: `text-muted hover:text-foreground hover:bg-surface/60`)
- **Do**: Use `border-l-2 border-accent-strong` for active state. **Don't**: Use `rounded-md` pill highlights.

## 11. Footer (`src/components/layout/Footer.tsx`)
- **Classes**: `mt-auto border-t border-border bg-surface py-14`; Column Title `text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground`; Link `text-sm text-muted hover:text-foreground`
- **Do**: Use `bg-surface` to ground the bottom of every page. **Don't**: Use dark-mode black footers.

## 12. Modal / Dialog
- **Classes**: Backdrop `fixed inset-0 z-50 bg-foreground/40 flex items-center justify-center p-6`; Panel `w-full max-w-lg bg-background border-2 border-foreground p-8`; Header `font-display text-2xl font-normal text-foreground`; Close `text-muted hover:text-foreground`
- **Do**: Use `border-2 border-foreground` instead of `shadow-xl`. **Don't**: Round modal corners.

## 13. Drawer / Slide-over
- **Classes**: Backdrop `fixed inset-0 z-50 bg-foreground/40`; Panel `fixed inset-y-0 right-0 w-full max-w-md bg-background border-l-2 border-foreground p-8 flex flex-col justify-between`
- **Do**: Use `border-l-2 border-foreground`. **Don't**: Add `shadow-2xl`.

## 14. Table (`src/components/sections/ProjectsDashboard.tsx`)
- **Classes**: Wrapper `overflow-x-auto border border-border bg-background`; `thead` `border-b border-border bg-surface text-[11px] font-semibold uppercase tracking-[0.12em] text-muted`; `tbody` `divide-y divide-border`; Row `hover:bg-surface/60`; Cell `px-6 py-4 text-sm` (`font-mono text-xs text-muted` for emails/IDs)
- **Do**: Keep `thead` in `bg-surface` and rows in `bg-background`. **Don't**: Use zebra-striping (`even:bg-surface`).

## 15. Calendar / DatePicker
- **Classes**:
  - Container: `w-80 border-2 border-foreground bg-background p-5`
  - Header (Month/Year + Prev/Next): `flex items-center justify-between pb-4 border-b border-border`; Title `font-display text-base font-medium text-foreground`; Nav buttons `h-8 w-8 border border-border flex items-center justify-center hover:border-foreground`
  - Weekday row (`MON`–`SUN`): `grid grid-cols-7 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-muted`
  - Day cell: `h-9 w-9 mx-auto flex items-center justify-center text-sm font-sans transition-colors`
    - Default: `text-foreground hover:bg-surface-muted`
    - Outside month: `text-muted/40`
    - Today: `border border-foreground font-semibold`
    - Selected: `rounded-full bg-accent text-foreground font-semibold`
    - Range middle: `bg-accent-soft/30 text-foreground`
- **Do**: Use `rounded-full bg-accent` for the selected day circle and sharp `border-2 border-foreground` for the calendar frame. **Don't**: Use `shadow-lg` or `rounded-lg` on the popover.

## 16. Pagination
- **Classes**: Container `inline-flex items-center border border-border bg-background divide-x divide-border`; Page item `px-3.5 py-2 text-xs font-semibold`; Active `bg-foreground text-background`; Inactive `text-foreground hover:bg-surface-muted`
- **Do**: Use `divide-x divide-border` for a crisp segmented bar. **Don't**: Use `rounded-full` circles for page numbers.

## 17. Breadcrumb
- **Classes**: `flex items-center gap-2 text-xs text-muted`; Link `hover:text-foreground transition-colors`; Current `font-semibold text-foreground`; Separator `/` or `ChevronRight h-3.5 w-3.5`
- **Do**: Keep compact and single-line. **Don't**: Wrap in a `bg-surface` pill.

## 18. Toast / Alert Banner
- **Classes**: `border border-border bg-background p-4 flex items-start gap-3 border-l-4`
  - Info / Accent: `border-l-accent bg-accent-soft/20`
  - Error / Warning: `border-l-accent-strong bg-accent-soft/25`
  - Neutral / Success: `border-l-foreground bg-surface`
- **Do**: Use a crisp `border-l-4` accent stripe. **Don't**: Use `rounded-lg` or `shadow-md`.

## 19. Tooltip
- **Classes**: `bg-foreground text-background px-3 py-1.5 text-xs font-sans tracking-normal`
- **Do**: Keep sharp (`0px`), high-contrast `#111111` on `#FFFFFF`. **Don't**: Add `rounded-md` or `shadow`.

## 20. Avatar & Icon Circle
- **Classes**:
  - Feature Icon Circle: `h-12 w-12 rounded-full bg-accent text-foreground flex items-center justify-center` (`h-5 w-5` icon)
  - Pricing Icon Circle: `h-20 w-20 rounded-full bg-accent text-foreground flex items-center justify-center` (`h-8 w-8 stroke-[1.5]` icon)
  - User Avatar: `h-9 w-9 rounded-full bg-surface-muted border border-border flex items-center justify-center text-xs font-semibold text-foreground`
- **Do**: Always use `rounded-full`. **Don't**: Use `rounded-md` squircles.

## 21. Accordion / FAQ
- **Classes**: Container `border-t border-border divide-y divide-border`; Trigger `w-full py-5 flex items-center justify-between text-left font-display text-lg font-medium text-foreground`; Body `pb-5 text-sm leading-relaxed text-muted`
- **Do**: Use `divide-y divide-border` hairlines. **Don't**: Wrap each FAQ item in a separate `shadow` box.

## 22. Empty State
- **Classes**: `border border-border bg-background py-16 px-6 text-center flex flex-col items-center`; Icon `h-14 w-14 rounded-full bg-accent/20 text-accent-strong flex items-center justify-center`; Title `mt-5 font-display text-xl font-medium text-foreground`; Copy `mt-2 max-w-sm text-sm text-muted`; CTA `mt-6` (`Button variant="accent"`)
- **Do**: Center with generous `py-16` whitespace. **Don't**: Leave unframed without `border-border`.

## 23. Skeleton Loader
- **Classes**: `animate-pulse bg-surface-muted` (matching exact sharp `0px` dimensions of the target Card, Table row, or Text line; use `rounded-full` only for Avatar/Icon-circle skeletons)
- **Do**: Match the target component's sharp geometry. **Don't**: Use `rounded-md` on card/text skeletons.
