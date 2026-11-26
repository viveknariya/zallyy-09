import Link from "next/link";
import { BrilliantMark } from "./BrilliantLogo";

const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Courses", href: "/design-systems/brilliant/courses" },
      { label: "Pricing & Premium", href: "/design-systems/brilliant/subscribe" },
      { label: "Interactive Lesson", href: "/design-systems/brilliant/lesson" },
      { label: "Onboarding", href: "/design-systems/brilliant/onboarding" },
      { label: "Help Center", href: "/design-systems/brilliant/help" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/design-systems/brilliant/about" },
      { label: "Careers", href: "/design-systems/brilliant/careers" },
      { label: "Educators", href: "/design-systems/brilliant/educators" },
      { label: "Blog", href: "/design-systems/brilliant/blog" },
      { label: "Featured Article", href: "/design-systems/brilliant/blog/post" },
    ],
  },
  {
    heading: "Account & Flows",
    links: [
      { label: "Learner Home", href: "/design-systems/brilliant/home" },
      { label: "Settings & Data", href: "/design-systems/brilliant/settings" },
      { label: "Checkout", href: "/design-systems/brilliant/checkout" },
      { label: "Cancel Trial", href: "/design-systems/brilliant/cancel" },
      { label: "Components", href: "/design-systems/brilliant/components" },
    ],
  },
  {
    heading: "Auth & Legal",
    links: [
      { label: "Log in", href: "/design-systems/brilliant/login" },
      { label: "Sign up", href: "/design-systems/brilliant/signup" },
      { label: "Reset password", href: "/design-systems/brilliant/reset-password" },
      { label: "Privacy Policy", href: "/design-systems/brilliant/privacy" },
      { label: "Terms of Service", href: "/design-systems/brilliant/terms" },
    ],
  },
];

/**
 * Pure black (#000000) Brilliant footer linking all learning, company, and account routes.
 */
export function BrilliantFooter() {
  return (
    <footer className="bg-[#000000] text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-6">
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/design-systems/brilliant"
              className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-white"
            >
              <BrilliantMark className="h-7 w-7" />
              <span>Brilliant</span>
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-zinc-400">
              Interactive problem solving for math, data analysis, computer
              science, and science. Learn by doing in 15 minutes a day.
            </p>
            <Link
              href="/design-systems"
              className="inline-block text-xs font-medium text-zinc-400 hover:text-white underline underline-offset-4"
            >
              ← Back to Design Systems Directory
            </Link>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading} className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-xs text-zinc-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-800 pt-6 text-[11px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/design-systems/brilliant/terms" className="hover:text-zinc-300">
              Terms of service
            </Link>
            <Link href="/design-systems/brilliant/privacy" className="hover:text-zinc-300">
              Privacy policy
            </Link>
            <Link href="/design-systems/brilliant/unknown-route" className="hover:text-zinc-300">
              404 Specimen
            </Link>
          </div>
          <p>Brilliant Design System — Scoped Next.js App Router UI Kit</p>
        </div>
      </div>
    </footer>
  );
}
