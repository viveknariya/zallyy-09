import { ArrowRight, Code2, GraduationCap, Terminal, Users } from "lucide-react";
import Link from "next/link";

const quickCategories = [
  {
    icon: Terminal,
    title: "Developer Tools",
    copy: "The complete developer toolkit",
    cta: "Choose your tool",
    href: "/design-systems/jetbrains/tools",
  },
  {
    icon: Users,
    title: "Team Tools",
    copy: "A wide range of tools and integrations for any team",
    cta: "See all tools",
    href: "/design-systems/jetbrains/tools",
  },
  {
    icon: GraduationCap,
    title: "Learning Tools",
    copy: "Solutions and opportunities for teachers and students",
    cta: "Find your solution",
    href: "/design-systems/jetbrains/support",
  },
  {
    icon: Code2,
    title: "JetBrains Mono",
    copy: "A free and open-source typeface for developers",
    cta: "Explore tokens",
    href: "/design-systems/jetbrains/components",
  },
];

/**
 * JetBrains.com dark hero section with 4-column blue-link quick categories and gradient spotlight cards.
 */
export function JetBrainsHero() {
  return (
    <section className="border-b border-border bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl leading-[1.12]">
            Essential tools for software developers and teams
          </h1>
          <p className="mt-5 text-xl text-muted">
            We build our software so you can enjoy building yours
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {quickCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Icon className="h-4 w-4 text-accent" />
                  <span>{cat.title}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted">{cat.copy}</p>
                <Link
                  href={cat.href}
                  className="inline-block text-sm font-medium text-accent hover:underline"
                >
                  {cat.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div
            className="lg:col-span-2 rounded-lg border border-border p-8 md:p-10 flex flex-col justify-between min-h-[260px]"
            style={{
              background:
                "linear-gradient(135deg, #0D1117 0%, #102A43 60%, #167DFF 100%)",
            }}
          >
            <div>
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                All Products Pack
              </span>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl max-w-xl">
                A complete software development platform integrated with IntelliJ-based IDEs
              </h2>
            </div>
            <div className="mt-8">
              <Link
                href="/design-systems/jetbrains/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors"
              >
                View Pricing <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div
            className="rounded-lg border border-border p-8 flex flex-col justify-between min-h-[260px]"
            style={{
              background:
                "linear-gradient(135deg, #6B57FF 0%, #FF318C 100%)",
            }}
          >
            <div>
              <span className="inline-block rounded-full bg-black/25 px-3 py-1 text-xs font-semibold text-white">
                Design System
              </span>
              <h2 className="mt-4 text-2xl font-bold text-white">
                JetBrains Mono & Dark UI Kit
              </h2>
              <p className="mt-2 text-sm text-white/85">
                Explore the dark-first tokens, pill buttons, and IDE cards.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/design-systems/jetbrains/components"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors"
              >
                Explore Components
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
