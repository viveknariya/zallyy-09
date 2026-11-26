# Cron Component Usage by Class (23 Standard UI Components)

## 1. Button
- **Primary Pill (Download)**: `rounded-full bg-accent px-5 py-2 text-xs font-semibold text-white hover:bg-accent-strong`
- **Outline Pill**: `rounded-full border border-accent px-5 py-2 text-xs font-semibold text-accent hover:bg-accent/10`
- **Compact Action**: `rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-white`

## 2. Card & Event Block
- **Workspace / Modal**: `rounded-xl border border-border bg-surface`
- **Event Block**: `rounded-md border border-border border-l-2 p-3.5`

## 3. Input & Textarea
- **Classes**: `w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none`

## 4. Select / Dropdown
- **Classes**: `rounded-md border border-border bg-background px-3 py-2 text-xs text-foreground`

## 5. Checkbox & Radio
- **Classes**: `h-4 w-4 border border-border-strong bg-background checked:bg-accent checked:border-accent`

## 6. Toggle / Switch
- **Classes**: `h-5 w-9 rounded-full bg-surface-muted border border-border` (`bg-accent` when on)

## 7. Badge & Keycap (`<kbd>`)
- **Keycap**: `rounded border border-border bg-surface-muted px-1.5 py-0.5 font-mono text-[10px] text-foreground`

## 8. Segmented Control / Tabs
- **Classes**: Track `inline-flex rounded-md border border-border bg-surface-muted p-0.5`; Active `rounded bg-background text-foreground px-3 py-1 text-xs font-medium`

## 9. Navbar
- **Classes**: `sticky top-0 z-40 h-14 border-b border-border bg-surface/95 backdrop-blur`

## 10. Sidebar
- **Classes**: `border-r border-border p-4` (active item `rounded-md bg-surface-muted text-foreground`)

## 11. Footer
- **Classes**: `mt-auto border-t border-border bg-surface py-12 text-muted`

## 12. Modal / Dialog
- **Classes**: Backdrop `fixed inset-0 z-50 bg-black/60`; Panel `rounded-xl border border-border bg-surface p-6`

## 13. Drawer / Slide-over
- **Classes**: `fixed inset-y-0 right-0 w-full max-w-md border-l border-border bg-surface p-6`

## 14. Table
- **Classes**: `overflow-x-auto rounded-xl border border-border bg-surface`; `divide-y divide-border`

## 15. Mini Calendar / DatePicker
- **Classes**: Grid `grid-cols-7 gap-1 text-center text-xs`; Selected day `rounded bg-accent text-white font-semibold`

## 16. Pagination
- **Classes**: `inline-flex items-center gap-1`; Active `rounded-md bg-accent px-3 py-1 text-xs font-semibold text-white`

## 17. Breadcrumb
- **Classes**: `flex items-center gap-2 text-xs text-muted`; Current `font-semibold text-foreground`

## 18. Toast / Alert Banner
- **Classes**: `rounded-lg border border-border bg-surface p-4 border-l-2 border-l-accent`

## 19. Tooltip
- **Classes**: `rounded-md border border-border bg-surface-muted px-2.5 py-1 text-xs text-foreground`

## 20. Avatar & App Icon
- **Classes**: App Icon `h-7 w-7 rounded-md bg-accent text-white`; Avatar `h-7 w-7 rounded-full border border-border`

## 21. Accordion / FAQ
- **Classes**: `divide-y divide-border border-t border-b border-border`

## 22. Empty State
- **Classes**: `rounded-lg border border-border bg-surface p-8 text-center text-sm text-muted`

## 23. Skeleton Loader
- **Classes**: `animate-pulse rounded-md bg-surface-muted`
