---
name: fresha-design-system
description: Design system guidelines, tokens, visual references, and component composition rules for the Fresha.com-inspired section (/design-systems/fresha) of this Next.js App Router starter template. Use whenever creating, editing, or reviewing Fresha UI components, sections, or pages.
---

# Fresha Design System

This skill defines the visual grammar, scoped tokens, component boundaries, and SEO conventions for `/design-systems/fresha/*`, inspired by Fresha (`fresha.com`).

---

## Core Design Principles

1. **White Canvas + Soft Atmospheric Light Fields**: Almost every page rests on crisp white (`#ffffff` / `bg-background`), punctuated by mist-gray (`#f2f2f2` / `bg-surface`) review tiles and footer bands. Atmospheric color concentrates behind the opening hero (`#d5d3ff` lavender + `#f9b6f8` pink blurred radial lobes), the B2B business calendar scene (`#c5ff00` acid lime bloom), and the dark partner stage (`#14151a`).
2. **Capsule-First Actions & Clear Accent Discipline**:
   - **Near-Black Ink Pill** (`#0d0d0d` / `bg-foreground text-background rounded-full` or `rounded-xl`) drives consumer search, checkout confirmations, and auth commits.
   - **Locale & Utility Violet** (`#6950f3` / `bg-accent`) highlights partner signup CTAs, active calendar dates, notification switches, Wallet balance cards, and active `Confirmed` badges.
   - **Proof Rose → Orchid → Violet** (`#ef6997 → #e85cba → #b84cdc`) is reserved strictly for the centerpiece `1 billion+` proof figure and gradient wallet surfaces.
   - **Rating Gold** (`#ffc00a`) is reserved exclusively for 5-star review icons and venue ratings.
3. **Sentence-Case Grotesk Hierarchy**: All headings, buttons, and labels run in rounded geometric grotesk (`Plus Jakarta Sans` mapped via `--font-tilda-sans`, substituting `Roobert Pro`). Hierarchy relies on crisp scale (`64px/68px` hero, `96px` proof numeral, `28px` rail heading, `16px` control, `14px` caption) and tight negative tracking rather than uppercase eyebrows.
4. **3:2 Photo Windows & Glass Overlays**: Venue cards crop at `aspect-[3/2]` with `rounded-2xl` corners, frosted `Featured` pills (`bg-white/75 backdrop-blur-md`), translucent favorite heart discs (`bg-[#131313]/35`), and single-baseline name + tabular star score captions underneath.
5. **Component-First Rule**: Reuse primitives in `src/components/systems/fresha/` (`FreshaVenueCard`, `FreshaArt`, `FreshaNavbar`, `FreshaFooter`) rather than duplicating card or scene markup.

---

## Scoped Tokens, Palette & Typography

Tokens are scoped to `[data-design-system="fresha"]` in `src/app/globals.css` and applied in `src/app/design-systems/fresha/layout.tsx`:

| Token | Value | Role |
|---|---|---|
| `--background` | `#ffffff` | Main canvas, pill interiors, venue/settings cards |
| `--foreground` | `#0d0d0d` | Primary headlines, copy, consumer CTA pills, active city chips |
| `--surface` | `#f2f2f2` | Mist-gray review cards, upper footer band, capability tiles |
| `--surface-muted` | `#e5e5e5` | Inactive toggle tracks, progress bar tracks |
| `--border` | `#e5e5e5` | Card edges, search capsule dividers, legal table hairlines |
| `--border-strong` | `#d3d3d3` | White outline pills, category chips, secondary buttons |
| `--accent` | `#6950f3` | Partner signup CTAs, switches, selected calendar dates, locale link |
| `--accent-strong` | `#533ad4` | Violet hover/active state |
| `--accent-soft` | `#eeebff` | Profile avatar circle, active card tint, badge wash |
| `--muted` | `#767676` | Venue addresses, durations, footer captions |

Fonts in `src/app/layout.tsx`:
- `font-sans` & `font-display`: `Plus Jakarta Sans` (`--font-tilda-sans`, with `--font-tilda-display` aliased to `--font-tilda-sans` inside `[data-design-system="fresha"]`)
- `font-mono`: `JetBrains Mono` (`--font-tilda-mono`) for hex codes and token specimens

---

## SEO & Route Checklist

- Root wrapper: `src/app/design-systems/fresha/layout.tsx` sets `data-design-system="fresha"` with `FreshaNavbar` and `FreshaFooter`.
- Every `page.tsx` under `src/app/design-systems/fresha/` exports `export const metadata: Metadata` (`title`, `description`, `alternates: { canonical }`) and renders `<Breadcrumbs items={[...]} />`.
- All 25 static routes are registered in `src/app/sitemap.ts`, featured on `src/app/page.tsx`, and cataloged on `src/app/design-systems/page.tsx`.
- **No-Refero-in-UI Rule**: Never place the word `"Refero"` in any user-facing UI, metadata, or `src/` file.

---

## Bidirectional Lookup Guides

- Token/Class → Components: [references/by-class.md](./references/by-class.md)
- Component → Classes & Do/Don't: [references/by-component.md](./references/by-component.md)

---

## Component Inventory (`src/components/systems/fresha/`)

### Server-Safe Components
- `fresha-data.ts`: Typed venues, service menu, reviews, city directories, pricing tiers, blog posts, help topics, careers, and sitemap data.
- `FreshaArt.tsx`: `FreshaWordmark`, `FreshaEmptyOrb`, `FreshaQrTile`, `VenueInteriorArtwork`, `FreshaCalendarScene`, and `FreshaMapCanvas` (Note: `FreshaMapCanvas` attaches interactive pin click callbacks passed from client wrappers).
- `FreshaFooter.tsx`: Two-band mist-gray (`#f2f2f2`) 5-column footer + crisp white bottom locale strip.

### Client Components (`"use client"`)
- `FreshaNavbar.tsx`: Sticky `72px` masthead with `FreshaWordmark`, quick search pill launcher, `For business` pill, `Log in`, profile badge, and expandable drawer.
- `FreshaVenueCard.tsx`: Reusable `3:2` venue photo card with frosted `Featured` badge and stateful heart button.
- `FreshaLanding.tsx`: Consumer marketplace landing with lavender/pink light field, search capsule, Recommended/New/Trending rails, app download split, Reviews rail, gradient `1 billion+` figure, acid-lime business split, and city directory tabs.
- `FreshaSearchCatalog.tsx`: Split-pane search results, category filter chips, bookable time slots, empty-state toggle, and map pins.
- `FreshaVenueProfile.tsx`: Salon storefront (`/venue`) with `2+1` mosaic, tabbed services, sticky booking sidebar, reviews, and opening hours.
- `FreshaBookingCheckout.tsx`: Multi-mode checkout (`Appointment Checkout`, `Gift Cards`, `Paid Plans`) with date circle picker, payment selector, and confirmation state.
- `FreshaBusinessPricing.tsx`: `FreshaForBusinessView`, `FreshaPricingView`, and `FreshaDownloadAppView`.
- `FreshaAccountPortal.tsx`: `FreshaAppointmentsView`, `FreshaWalletView`, `FreshaOrdersView`, `FreshaProfileView`, `FreshaSettingsView`, and `FreshaDeleteAccountView`.
- `FreshaAuthCard.tsx`: Split-screen `Log In`, `Sign Up`, and `Reset Password` cards.
- `FreshaEditorial.tsx`: `FreshaHelpCenterView`, `FreshaHelpArticleView`, `FreshaBlogGrid`, `FreshaBlogArticle`, `FreshaCareersView`, `FreshaSitemapView`, and `FreshaLegalView`.
- `FreshaComponentsShowcase.tsx`: Interactive token, typography, button, card, switch, and slot showcase.

---

## Refero Screen Catalog (`design-references/fresha/`)

| Page Type | Route | Local Reference Image(s) |
|---|---|---|
| Home Page | `/design-systems/fresha` | `design-references/fresha/images/home-page-6357302e.jpg` |
| Discover | `/design-systems/fresha/search`, `/sitemap` | `design-references/fresha/images/discover-47cada42.jpg`, `discover-2cdd8081.jpg`, `screen-de405cf0.jpg` |
| Product Page & Landing | `/for-business`, `/download-app`, `/venue` | `design-references/fresha/images/product-page-landing-31034551.jpg`, `product-page-landing-f639fdce.jpg`, `screen-200b58f4.jpg` |
| Paywall & Subscription | `/design-systems/fresha/pricing` | `design-references/fresha/images/paywall-subscription-f119e9f6.jpg`, `screen-f506d2d7.jpg` |
| Checkout | `/design-systems/fresha/checkout` | `design-references/fresha/images/checkout-51a54bc9.jpg`, `screen-34f42e32.jpg`, `screen-c20a5d16.jpg`, `screen-3bbd69c5.jpg` |
| Wallet & Balance | `/design-systems/fresha/wallet` | `design-references/fresha/images/wallet-balance-5e75b6d0.jpg` |
| Order History | `/design-systems/fresha/orders` | `design-references/fresha/images/order-history-df7eca2f.jpg` |
| Profile & Account | `/design-systems/fresha/profile`, `/appointments` | `design-references/fresha/images/profile-account-6596dc39.jpg`, `screen-528568e3.jpg`, `screen-dbbecddc.jpg`, `screen-0f32053e.jpg` |
| Settings & Delete Account | `/settings`, `/delete-account` | `design-references/fresha/images/settings-9b6bba92.jpg`, `delete-account-61cf3061.jpg` |
| Log In / Sign Up / Reset | `/login`, `/signup`, `/reset-password` | `design-references/fresha/images/log-in-40efb542.jpg`, `sign-up-9848aa21.jpg`, `reset-password-0cccc060.jpg` |
| Support & Help | `/help`, `/help/article` | `design-references/fresha/images/support-help-e034a0e3.jpg`, `support-help-30417d5f.jpg` |
| Blog & Blog Post Page | `/blog`, `/blog/post` | `design-references/fresha/images/blog-83139af8.jpg`, `blog-post-page-7650c919.jpg` |
| Careers | `/design-systems/fresha/careers` | `design-references/fresha/images/careers-87b86eee.jpg` |
| Privacy & Terms | `/privacy`, `/terms` | `design-references/fresha/images/privacy-policy-127ce809.jpg`, `terms-conditions-62e6fbeb.jpg`, `terms-conditions-privacy-policy-b7a9c38e.jpg` |
| 404 Page | `/design-systems/fresha/not-found.tsx` | `design-references/fresha/images/404-page-d007a8c5.jpg` |

---

## Verification

```bash
bunx next typegen && bunx tsc --noEmit && bun run lint && bun run build
```
