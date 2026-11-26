import Link from "next/link";
import { TildaMark } from "./TildaLogo";

const workspaceLinks = [
  { href: "/design-systems/tilda/projects", label: "Dashboard", key: "projects" },
  { href: "/design-systems/tilda/dashboard", label: "Statistics", key: "dashboard" },
  { href: "/design-systems/tilda/contacts", label: "CRM", key: "contacts" },
  { href: "/design-systems/tilda/account", label: "Profile & Plans", key: "account" },
  { href: "/design-systems/tilda/setup", label: "Account Setup", key: "setup" },
  { href: "/design-systems/tilda/settings", label: "Settings", key: "settings" },
];

/**
 * High-contrast black workspace bar modeled after stats.tilda.cc, crm.tilda.cc, and tilda.cc/identity.
 */
export function TildaWorkspaceBar({
  active,
}: {
  active: "projects" | "dashboard" | "contacts" | "account" | "setup" | "settings";
}) {
  return (
    <div className="border-b border-foreground bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-3">
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/design-systems/tilda/projects"
            className="inline-flex items-center gap-2 text-background"
          >
            <TildaMark className="h-6 w-6" />
            <span className="text-xs font-semibold uppercase tracking-[0.12em]">
              Studio
            </span>
          </Link>

          <nav className="flex flex-wrap items-center gap-5" aria-label="Workspace navigation">
            {workspaceLinks.map((item) => {
              const isActive = item.key === active;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`border-b-2 py-1 text-xs font-medium transition-colors ${
                    isActive
                      ? "border-accent text-background"
                      : "border-transparent text-background/70 hover:text-background"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4 text-xs text-background/75">
          <Link href="/design-systems/tilda/help" className="hover:text-background">
            Help Center
          </Link>
          <span className="font-mono text-background/50">studio.tilda.ws</span>
        </div>
      </div>
    </div>
  );
}
