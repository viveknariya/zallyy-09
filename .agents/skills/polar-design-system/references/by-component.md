# Polar Component Usage by Class (23 Standard UI Components)

## 1. Button
- **Primary Pill**: `rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-neutral-800`
- **Secondary Pill**: `rounded-full bg-surface-muted px-5 py-2.5 text-sm font-medium text-foreground hover:bg-border`
- **Outline Pill**: `rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface`

## 2. Card
- **Classes**: `rounded-2xl border border-border bg-background p-6` (or `p-7` for pillar cards)

## 3. Input & Textarea
- **Classes**: `w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-foreground focus:outline-none`

## 4. Select / Dropdown
- **Classes**: Trigger `rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm`; Menu `rounded-2xl border border-border bg-background p-1.5`

## 5. Checkbox & Radio
- **Classes**: `h-4 w-4 border border-border bg-background checked:bg-foreground checked:border-foreground` (`rounded` for Checkbox, `rounded-full` for Radio)

## 6. Toggle / Switch
- **Classes**: Track `h-6 w-11 rounded-full bg-surface-muted border border-border` (`bg-foreground` when on); Thumb `h-4 w-4 rounded-full bg-background`

## 7. Badge
- **Classes**: `rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-foreground`

## 8. Segmented Control / Tabs
- **Classes**: Track `inline-flex rounded-full border border-border bg-surface p-0.5`; Active `rounded-full bg-background text-foreground border border-border px-3 py-1 text-xs font-medium`; Inactive `px-3 py-1 text-xs font-medium text-muted`

## 9. Navbar
- **Classes**: `sticky top-0 z-40 h-16 border-b border-border bg-background/95 backdrop-blur`; Concentric circle logo + `rounded-full bg-foreground` CTA

## 10. Sidebar
- **Classes**: `border-r border-border bg-surface p-4`; Active `rounded-lg bg-background font-medium text-foreground border border-border px-3 py-2 text-sm`; Inactive `px-3 py-2 text-sm text-muted`

## 11. Footer
- **Classes**: `mt-auto border-t border-border bg-surface py-14`

## 12. Modal / Dialog
- **Classes**: Backdrop `fixed inset-0 z-50 bg-black/50`; Panel `w-full max-w-lg rounded-2xl border border-border bg-background p-6`

## 13. Drawer / Slide-over
- **Classes**: `fixed inset-y-0 right-0 w-full max-w-md border-l border-border bg-background p-6`

## 14. Table
- **Classes**: Wrapper `overflow-x-auto rounded-2xl border border-border bg-background`; `thead` `border-b border-border bg-surface text-xs font-medium text-muted`; `tbody` `divide-y divide-border`

## 15. Calendar / DatePicker
- **Classes**: `w-80 rounded-2xl border border-border bg-background p-5`; Selected day `rounded-full bg-foreground text-background font-medium`

## 16. Pagination
- **Classes**: `inline-flex items-center gap-1`; Item `rounded-full px-3 py-1 text-xs font-medium`; Active `bg-foreground text-background`

## 17. Breadcrumb
- **Classes**: `flex items-center gap-2 text-xs text-muted`; Current `font-semibold text-foreground`

## 18. Toast / Alert Banner
- **Classes**: `rounded-xl border border-border bg-surface p-4 text-sm text-foreground`

## 19. Tooltip
- **Classes**: `rounded-lg bg-foreground px-3 py-1.5 text-xs text-background`

## 20. Avatar & Brand Mark
- **Classes**: `h-8 w-8 rounded-full bg-surface-muted border border-border text-xs font-medium text-foreground`

## 21. Accordion / FAQ
- **Classes**: `divide-y divide-border border-t border-b border-border`

## 22. Empty State
- **Classes**: `rounded-2xl border border-border bg-background py-16 px-6 text-center`

## 23. Skeleton Loader
- **Classes**: `animate-pulse rounded-xl bg-surface-muted`
