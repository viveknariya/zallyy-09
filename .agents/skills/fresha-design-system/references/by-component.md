# Fresha Design System — Lookup by Component (23 Standard UI Components)

## 1. Button
- **Classes**:
  - Consumer Ink Pill: `inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-base font-semibold text-background hover:opacity-90 transition-opacity`
  - Partner Violet CTA: `inline-flex h-12 items-center justify-center rounded-xl bg-accent px-6 text-sm font-semibold text-white hover:bg-accent-strong transition-colors`
  - Hairline Outline Pill: `inline-flex h-10 items-center gap-2 rounded-full border border-border-strong bg-background px-4 text-sm font-semibold text-foreground hover:bg-surface transition-colors`
  - Auth / Checkout Full-Width Commit: `h-12 w-full rounded-xl bg-foreground text-sm font-semibold text-background hover:opacity-90`
- **Do**: Keep action labels sentence-case and concise (`Search`, `Get the app`, `Sign up for free`, `Confirm`).
- **Don't**: Use uppercase tracking or drop shadows on ordinary buttons.

## 2. Card
- **Classes**:
  - Venue Photo Window: `aspect-[3/2] w-full overflow-hidden rounded-2xl bg-surface` (caption metadata sits outside below the image)
  - Mist-Gray Review Card: `flex min-h-[320px] flex-col justify-between rounded-2xl bg-surface p-8`
  - Sticky Booking Summary / Settings Panel: `rounded-2xl border border-border bg-background p-6 space-y-5 shadow-sm`
  - Wallet Gradient Balance Card: `rounded-2xl bg-gradient-to-r from-[#5648f5] via-[#8b5cf6] to-[#e85cba] p-8 text-white shadow-md`
- **Do**: Keep venue metadata crisp outside the `3:2` image; align reviewer footers along the bottom of mist-gray cards.
- **Don't**: Add drop shadows to every standard white card.

## 3. Input & Textarea
- **Classes**:
  - Search Capsule Segment: `w-full bg-transparent text-base font-medium text-foreground focus:outline-none` inside `rounded-[100px] bg-background`
  - Auth / Checkout Input & Textarea: `w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none`
  - Help Search Bar: `h-12 w-full rounded-full border border-border bg-background pl-11 pr-4 text-sm shadow-sm focus:border-foreground focus:outline-none`
- **Do**: Group hero search fields inside one seamless capsule separated by `h-6 w-px bg-border` dividers.
- **Don't**: Draw three disconnected boxed inputs inside the hero search capsule.

## 4. Select / Dropdown
- **Classes**: `h-10 rounded-full border border-border-strong bg-background px-4 text-xs font-medium text-foreground` (Careers filters) or `bg-transparent text-base font-medium text-foreground cursor-pointer` (Search date selector).
- **Do**: Match pill heights (`h-10`) cleanly in filter headers.
- **Don't**: Show browser-default unpadded selects next to rounded pill controls.

## 5. Checkbox & Radio
- **Classes**:
  - Delete Account Acknowledgement: `flex items-start gap-3 text-sm text-foreground` with `mt-1 h-4 w-4 rounded border-border accent-[#6950f3]`
  - Payment Method Selection Row: `flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-medium` (`border-foreground bg-surface/50` when selected)
- **Do**: Pair checkout method rows with leading category icons and a trailing `#6950F3` checkmark.
- **Don't**: Allow destructive account deletion submission without explicit checked acknowledgement.

## 6. Toggle / Switch
- **Classes**:
  - Track: `relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors` (`bg-accent` when on, `bg-surface-muted border border-border` when off)
  - Thumb: `inline-block h-4 w-4 rounded-full bg-white transition-transform` (`translate-x-6` vs `translate-x-1`)
- **Do**: Use `role="switch"` and `aria-checked` in `FreshaSettingsView`.
- **Don't**: Use square switches or non-violet active fills in settings.

## 7. Badge
- **Classes**:
  - Frosted Photo Badge: `inline-flex h-6 items-center gap-1 rounded-full bg-white/75 backdrop-blur-md px-2.5 text-[13px] font-semibold text-foreground shadow-[0_8px_40px_rgba(13,13,13,0.12),0_0_0_0.5px_rgba(19,19,19,0.1)]`
  - Category Tag: `inline-flex items-center rounded-md border border-border bg-background px-2 py-0.5 text-xs font-medium text-foreground`
  - Appointment `Confirmed` Pill: `inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white`
- **Do**: Float `Featured` badges `12px` from the upper-left corner of venue cards.
- **Don't**: Turn gold rating stars (`#ffc00a`) into generic pill accents.

## 8. Tabs
- **Classes**:
  - Country / Category Filter Pill: `rounded-full px-4 py-2 text-sm font-medium` (`bg-foreground text-background` active, `shadow-[inset_0_0_0_1px_#e5e5e5]` inactive)
  - Legal Subnav Underline Tab: `relative py-3.5 text-sm font-medium whitespace-nowrap` with `after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-foreground` when active
- **Do**: Use black pill tabs for city/category/service switching and underline tabs inside the Legal subnav.
- **Don't**: Wrap directory filter rows across jagged uneven cards when horizontal pills scan cleanly.

## 9. Navbar
- **Classes**: `sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur` with `mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 lg:px-8`.
- **Do**: Include `FreshaWordmark`, compact search launcher pill, `For business` pill, `Log in`, profile badge, and `Menu` drawer toggle.
- **Don't**: Cram dozens of ungrouped links across the top bar.

## 10. Sidebar
- **Classes**:
  - Legal Anchor TOC: `lg:col-span-3 space-y-2 text-xs text-[#0284c7]`
  - Help Guide TOC: `lg:sticky lg:top-24 rounded-2xl border border-border bg-background p-5 space-y-3 text-xs`
  - Venue / Checkout Sticky Summary Rail: `lg:col-span-4 lg:sticky lg:top-24 rounded-2xl border border-border bg-background p-6 space-y-5 shadow-sm`
- **Do**: Keep booking summaries pinned on desktop (`lg:sticky lg:top-24`) beside multi-step menus.
- **Don't**: Trap long booking summaries in fixed scrollbars on small screens.

## 11. Footer
- **Classes**: Upper band `bg-surface text-foreground` (`#f2f2f2`) with `grid-cols-1 lg:grid-cols-5` + lower utility band `border-t border-border bg-background` with `text-accent` `English` locale indicator.
- **Do**: Keep the two-band separation between the mist-gray link directory and crisp white locale/copyright strip.
- **Don't**: Center footer columns or color the bottom utility strip gray/dark.

## 12. Modal / Dialog
- **Classes**: Inline gift-card redemption panel / split auth card (`max-w-md` centered form pane inside 50/50 grid) and delete-account stepped header (`grid-cols-3 gap-1.5` violet progress bars + `Close` / `Continue →`).
- **Do**: Provide explicit `← Back` and `Close` navigation exits in stepped flows.
- **Don't**: Omit progress indicators in 3-step deletion or booking flows.

## 13. Drawer / Slide-over
- **Classes**: `border-t border-border bg-background px-6 py-6 shadow-lg` expandable route & account drawer under `FreshaNavbar`.
- **Do**: Group all secondary consumer, partner, account, and editorial routes clearly inside `Menu`.
- **Don't**: Hide auth CTAs (`Log in`, `Sign up`) from mobile visitors inside the drawer.

## 14. Table
- **Classes**: `overflow-hidden rounded-2xl border border-border bg-background divide-y divide-border` with `md:col-span-3 bg-surface/40` left category labels and `text-accent` pricing rate column (seen on `/pricing` Optional paid features).
- **Do**: Align transaction rates cleanly in `#6950F3` violet with descriptive subtext on the left.
- **Don't**: Compress pricing comparisons into unbordered text walls.

## 15. Calendar / DatePicker
- **Classes**:
  - Horizontal Circular Date Strip: `flex h-12 w-12 items-center justify-center rounded-full border text-sm font-bold` (`border-accent bg-accent text-white` selected, `border-border bg-background` unselected)
  - B2B Staff Schedule Grid: `FreshaCalendarScene` with color-coded `border-l-[3px]` pastel appointment blocks.
- **Do**: Pair circular day numbers with compact weekday labels (`Wed`, `Thu`) directly beneath.
- **Don't**: Force users through bulky multi-month popup calendars when picking near-term appointment slots.

## 16. Pagination
- **Classes**:
  - Rail Next Arrow Circle: `inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong bg-background hover:bg-surface`
  - Interactive Slot Pills: `rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-accent hover:border-accent`
- **Do**: Use compact circular buttons on carousel headers and numbered links below blog grids.
- **Don't**: Render heavy full-width pager bars inside horizontal card rails.

## 17. Breadcrumb
- **Classes**: Shared `<Breadcrumbs />` bar (`border-b border-border bg-surface/60`) with `ChevronRight` separators and `BreadcrumbList` JSON-LD on every `/design-systems/fresha/*` page, plus inline step breadcrumbs (`Services › Time › Confirm`) inside checkout flows.
- **Do**: Preserve `<Breadcrumbs />` across all 25 static routes.
- **Don't**: Omit JSON-LD breadcrumbs on nested routes like `/blog/post` or `/help/article`.

## 18. Toast / Alert Banner
- **Classes**:
  - Help Note Callout: `rounded-xl bg-surface p-4 flex items-start gap-3 text-xs text-foreground`
  - Help Tip Callout: `rounded-xl bg-emerald-50 border border-emerald-200 p-4 flex items-start gap-3 text-xs text-emerald-950`
  - Legal Partner Callout: `rounded-lg bg-[#FFFCEB] border border-[#F5E6A8] p-5 text-xs text-foreground`
- **Do**: Use neutral gray for system behavior notes, emerald for workflow tips, and warm cream for legal partner controller notices.
- **Don't**: Style helpful onboarding tips with warning red borders.

## 19. Tooltip
- **Classes**: Inline status captions (`ICS reminder saved to device`) and frosted image overlays (`rounded-full bg-white/75 backdrop-blur-md px-2.5 text-[13px] font-semibold`).
- **Do**: Keep overlay labels concise (`Featured`, score `4.9`).
- **Don't**: Cover more than a corner of venue photography with opaque overlays.

## 20. Avatar & Icon Badge
- **Classes**:
  - Profile Monogram: `flex h-24 w-24 items-center justify-center rounded-full bg-accent-soft text-3xl font-bold text-accent`
  - Favorite Overlay Disc: `flex h-8 w-8 items-center justify-center rounded-full bg-[#131313]/35 text-white backdrop-blur-sm`
  - Add-on App Badge: `inline-flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-bold`
- **Do**: Pair soft lavender (`#eeebff`) avatars with `#6950F3` monogram initials.
- **Don't**: Place heavy saturated square borders around line icons inside category grids.

## 21. Accordion / FAQ
- **Classes**: `divide-y divide-border rounded-2xl border border-border` with `flex w-full items-center justify-between gap-4 text-left text-sm font-semibold` trigger and rotating `ChevronDown`.
- **Do**: Keep the first FAQ open on Help Center knowledge-base guides.
- **Don't**: Nest accordions inside narrow sidebars.

## 22. Empty State
- **Classes**: Centered canvas (`py-20 text-center space-y-3 rounded-2xl border border-border bg-background`) featuring `FreshaEmptyOrb` gradient icon, bold heading (`No product orders`, `No favorites`, `No forms`, `Fully booked on this date`), muted subtext, and single recovery button (`Go to next available date`, `Start searching`).
- **Do**: Always pair empty states with `FreshaEmptyOrb` and an actionable recovery step when applicable.
- **Don't**: Leave unstyled plain text error/empty screens.

## 23. Skeleton Loader
- **Classes**: `animate-pulse rounded-2xl bg-surface` matching `aspect-[3/2]` venue cards, `h-12 rounded-full` capsule bars, and `h-4 w-2/3 rounded` text placeholders.
- **Do**: Mirror the `rounded-2xl` / `rounded-full` geometry of Fresha cards and search bars.
- **Don't**: Use sharp `rounded-none` rectangular blocks inside rounded marketplace grids.
