# JetBrains Component Usage by Class (23 Standard UI Components)

## 1. Button
- **Primary Pill**: `rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-strong transition-colors`
- **Outline Pill**: `rounded-full border border-border-strong px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-white hover:text-black`
- **Do**: Use `rounded-full` pills. **Don't**: Use sharp `0px` rectangular buttons.

## 2. Card
- **Dark Elevated**: `rounded-lg border border-border bg-surface-muted p-6 hover:border-border-strong`
- **Light Store Card**: `rounded-lg border border-[#E5E7EB] bg-white p-8 text-[#19191C]`
- **Do**: Use `rounded-lg` with `border-border`. **Don't**: Use `border-2 border-black`.

## 3. Input & Textarea
- **Classes**: `w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none`
- **Do**: Use `rounded-md` and `focus:border-accent`. **Don't**: Use `rounded-full` on text inputs.

## 4. Select / Dropdown
- **Classes**: Trigger `rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground`; Menu `rounded-lg border border-border bg-surface-muted divide-y divide-border`
- **Do**: Keep `bg-surface-muted` for open menus. **Don't**: Use pure black `#000` menus.

## 5. Checkbox & Radio
- **Classes**: `h-4 w-4 border border-border-strong bg-background checked:bg-accent checked:border-accent` (`rounded` for Checkbox, `rounded-full` for Radio)
- **Do**: Use `bg-accent` (`#167DFF`) checked state.

## 6. Toggle / Switch
- **Classes**: Track `h-6 w-11 rounded-full bg-surface border border-border` (`bg-accent` when active); Thumb `h-4 w-4 rounded-full bg-white`

## 7. Badge
- **Urgent Promo**: `rounded bg-[#EA3829] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white` (`BEST OFFER`)
- **Category / Version Pill**: `rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted`

## 8. Tabs
- **Classes**: `flex gap-6 border-b border-border`; Active `pb-2.5 text-sm font-medium border-b-2 border-accent text-accent -mb-px`; Inactive `border-transparent text-muted hover:text-foreground`

## 9. Navbar
- **Classes**: `sticky top-0 z-40 h-16 border-b border-border bg-surface/95 backdrop-blur`; Brand square `bg-black p-1.5 text-white`; Primary CTA `rounded-full bg-accent`

## 10. Sidebar
- **Classes**: `w-64 shrink-0 border-r border-border bg-surface p-6`; Active item `rounded-md bg-accent/15 text-accent font-medium px-3 py-2`; Inactive `text-muted hover:text-foreground`

## 11. Footer
- **Classes**: `mt-auto border-t border-border bg-background py-14 text-muted`

## 12. Modal / Dialog
- **Classes**: Backdrop `fixed inset-0 z-50 bg-black/70`; Panel `rounded-lg border border-border bg-surface-muted p-8 text-foreground`

## 13. Drawer / Slide-over
- **Classes**: `fixed inset-y-0 right-0 w-full max-w-md border-l border-border bg-surface p-8`

## 14. Table
- **Classes**: `overflow-x-auto rounded-lg border border-border bg-surface-muted`; `thead` `bg-surface text-xs font-semibold uppercase tracking-wider text-muted border-b border-border`; `tbody` `divide-y divide-border`

## 15. Calendar / DatePicker
- **Classes**: Container `w-80 rounded-lg border border-border bg-surface-muted p-5`; Selected day `rounded-full bg-accent text-white font-semibold`; Today `border border-accent text-accent`

## 16. Pagination
- **Classes**: `inline-flex items-center gap-1`; Item `rounded-md px-3 py-1.5 text-xs font-medium`; Active `bg-accent text-white`; Inactive `bg-surface-muted text-muted hover:text-foreground`

## 17. Breadcrumb
- **Classes**: `flex items-center gap-2 text-xs text-muted`; Current `font-semibold text-foreground`

## 18. Toast / Alert Banner
- **Classes**: `rounded-lg border border-border bg-surface-muted p-4 border-l-4 border-l-accent` (use `border-l-[#EA3829]` for errors)

## 19. Tooltip
- **Classes**: `rounded-md bg-black border border-border px-3 py-1.5 text-xs text-white`

## 20. Avatar & IDE Icon Square
- **IDE Icon**: `h-11 w-11 rounded-md text-sm font-bold text-white` with multi-stop IDE gradient
- **User Avatar**: `h-9 w-9 rounded-full bg-surface-muted border border-border text-xs font-semibold text-foreground`

## 21. Accordion / FAQ
- **Classes**: `divide-y divide-border border-t border-border`; Trigger `py-5 text-base font-semibold text-foreground`; Body `pb-5 text-sm text-muted`

## 22. Empty State
- **Classes**: `rounded-lg border border-border bg-surface-muted py-16 px-6 text-center` with `rounded-full bg-accent` primary CTA

## 23. Skeleton Loader
- **Classes**: `animate-pulse rounded-md bg-surface` (or `rounded-full` for avatars/pill buttons)
