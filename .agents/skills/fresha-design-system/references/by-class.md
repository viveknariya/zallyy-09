# Fresha Design System — Lookup by Class / Token

## 1. Shape & Border Radius

| Class / Token | Allowed Components | Forbidden Components (Do NOT Use) |
|---|---|---|
| `rounded-none` | Full-bleed section borders, legal subnav underline indicator, table dividers | Buttons, venue cards, modals, search bar |
| `rounded-md` / `rounded-lg` | Category pills under venue cards, pricing add-on icon badges (`IN`, `TP`), time-slot chips (`09:00`), legal notice callouts | Primary hero search capsule, main CTA pills |
| `rounded-xl` | Partner violet CTAs (`Sign up for free`), auth form inputs & submit buttons, service menu rows, Careers role cards, booking summary `Book now` button | Venue photo windows (`rounded-2xl`), floating header search capsule |
| `rounded-2xl` / `rounded-3xl` | `3:2` venue photo frames, mist-gray review cards, wallet balance card, QR scan tiles, app download promo blocks, settings panels | Inline text badges, compact time-slot buttons |
| `rounded-full` / `rounded-[100px]` | Opening search capsule (`rounded-[100px]`), `Search` ink pill, `For business` / `Get the app` outline pills, frosted `Featured` photo badge, favorite disc, city filter pills, circular date buttons, toggle switches | Data comparison tables, multi-line review cards |

## 2. Background & Surface Tokens

| Class / Token | Allowed Components | Forbidden Components (Do NOT Use) |
|---|---|---|
| `bg-background` | Page canvas, sticky navbar, venue/service/settings cards, white bottom locale strip | Mist-gray review tiles, dark business hero |
| `bg-surface` | Mist-gray review cards (`Reviews`), upper 5-column footer band, 6-card `For Business` tool grid, Pricing table group column | Primary consumer hero wrapper, active wallet balance card |
| `bg-surface-muted` | Inactive toggle tracks, uncompleted delete-account progress steps | Cards, navigation bars, buttons |
| `bg-accent` | Partner signup CTAs (`Join for free`), active calendar date circles, active notification switches, `Confirmed` appointment pills, Add-on rates text | Consumer marketplace hero CTA (`bg-foreground`), full-page background fills |
| `bg-accent-strong` | Hover state for `#6950F3` partner CTA buttons (`hover:bg-accent-strong`) | Static surfaces, muted footer links |
| `bg-accent-soft` | Profile `EM` avatar circle, selected venue/service highlight wash, `Connected` social badge, empty-state orb glow | Destructive deletion banners, dark stage headers |
| `bg-[#14151a]` | Dark B2B hero (`For Business`), contactless card terminal showcase, partner testimonial card, Business App promo tile | Consumer white marketplace pages, Settings forms |
| `bg-[#FFFCEB]` | Highlighted partner data-controller callout inside Privacy Policy | Marketing banners, checkout alerts |

## 3. Border & Shadow Rules

| Class / Token | Allowed Components | Forbidden Components (Do NOT Use) |
|---|---|---|
| `border-border` | Standard cards (`1px #e5e5e5`), service rows, search capsule vertical dividers, pricing comparison matrix, footer bottom strip | Active selected appointments (`border-accent`) |
| `border-border-strong` | White outline pills (`For business`, `Get the app`, `See pricing`), circular carousel next arrows, filter buttons | Subtle inline category tags |
| `border-2` | Upright handheld device outlines, desktop calendar frame (`border-[#0d0d0d]`) | Standard list cards, small buttons |
| `shadow-[inset_0_0_0_6px_rgba(156,156,156,0.08)]` | Translucent 6px glass rim wrapping the opening hero search capsule | Regular cards, footer bands, table rows |
| `shadow-[0_8px_40px_rgba(13,13,13,0.12),0_0_0_0.5px_rgba(19,19,19,0.1)]` | Tiny frosted `Featured` photo badge floating over venue photos | Full venue cards, review cards, settings panels |

## 4. Typography

| Class / Token | Allowed Components | Forbidden Components (Do NOT Use) |
|---|---|---|
| `font-sans` (`Plus Jakarta Sans`) | All display headings (`64px` hero, `40px` stats), section headings (`28px`), card titles, buttons, body copy, and captions | Monospace token code snippets |
| `font-display` (aliased to `--font-tilda-sans`) | Display scale headings ensuring consistent grotesk rendering across wrappers | Serif editorial overrides |
| `font-mono` | Hex token labels on `/components` specimen cards | Marketing headlines, review prose, venue names |
| `tabular-nums` | Star ratings (`4.9`), review counts (`(393)`), live appointment count (`403,411`), wallet balances (`$0.00`), opening times | Long-form editorial paragraphs |
