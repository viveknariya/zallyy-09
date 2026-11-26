export const REPO_URL = "https://github.com/viveknariya/zallyy-09";
export const SKILLS_REPO_BASE = `${REPO_URL}/tree/main/.agents/skills`;

export interface DirectorySystem {
  slug: string;
  name: string;
  catalogTitle: string;
  domain: string;
  href: string;
  screensCount: number;
  routesCount: number;
  description: string;
  iconKey: "palette" | "code" | "credit-card" | "calendar" | "zap";
  badgeTone: "accent" | "dark" | "neutral";
  iconStyle: { background: string; colorClass: string };
}

export interface DirectorySkill {
  id: string;
  name: string;
  systemSlug: string;
  detailHref: string;
  systemHref: string;
  componentsHref: string;
  repoUrl: string;
  skillFileUrl: string;
  localPath: string;
  summary: string;
  highlights: string;
  iconKey: DirectorySystem["iconKey"];
  badgeTone: DirectorySystem["badgeTone"];
  iconStyle: DirectorySystem["iconStyle"];
}

export const DIRECTORY_SYSTEMS: DirectorySystem[] = [
  {
    slug: "tilda",
    name: "Tilda Publishing",
    catalogTitle: "Tilda Design System",
    domain: "tilda.cc",
    href: "/design-systems/tilda",
    screensCount: 86,
    routesCount: 18,
    description:
      "High-contrast editorial minimalism with warm coral accents (#FA8A64), sharp 2px ink borders, and Jost display type.",
    iconKey: "palette",
    badgeTone: "accent",
    iconStyle: { background: "#FA8A64", colorClass: "text-foreground" },
  },
  {
    slug: "jetbrains",
    name: "JetBrains",
    catalogTitle: "JetBrains Design System",
    domain: "jetbrains.com",
    href: "/design-systems/jetbrains",
    screensCount: 39,
    routesCount: 8,
    description:
      "Dark-first developer UI (#19191C), electric blue pill CTAs (#167DFF), IDE gradient badges, and JetBrains Mono.",
    iconKey: "code",
    badgeTone: "dark",
    iconStyle: {
      background: "linear-gradient(135deg, #6B57FF 0%, #167DFF 100%)",
      colorClass: "text-white",
    },
  },
  {
    slug: "polar",
    name: "Polar",
    catalogTitle: "Polar Design System",
    domain: "polar.sh",
    href: "/design-systems/polar",
    screensCount: 39,
    routesCount: 11,
    description:
      "SaaS billing & analytics UI with rounded-2xl cards, obsidian auth modals, and pill controls.",
    iconKey: "credit-card",
    badgeTone: "neutral",
    iconStyle: { background: "#111111", colorClass: "text-white" },
  },
  {
    slug: "cron",
    name: "Cron",
    catalogTitle: "Cron Design System",
    domain: "cron.com",
    href: "/design-systems/cron",
    screensCount: 30,
    routesCount: 6,
    description:
      "Keyboard-first calendar grid (#18181A), vermilion #FF5416 accents, keycap shortcuts, and event blocks.",
    iconKey: "calendar",
    badgeTone: "neutral",
    iconStyle: { background: "#FF5416", colorClass: "text-white" },
  },
  {
    slug: "brilliant",
    name: "Brilliant",
    catalogTitle: "Brilliant Design System",
    domain: "brilliant.org",
    href: "/design-systems/brilliant",
    screensCount: 40,
    routesCount: 21,
    description:
      "Interactive STEM UI with Newsreader serif headings, #2AB54B tactile pills, midnight navy bands, and puzzle cards.",
    iconKey: "zap",
    badgeTone: "neutral",
    iconStyle: { background: "#2AB54B", colorClass: "text-white" },
  },
];

export const DIRECTORY_SKILLS: DirectorySkill[] = [
  {
    id: "tilda-design-system",
    name: "Tilda Design Skill",
    systemSlug: "tilda",
    detailHref: "/design-skills/tilda-design-system",
    systemHref: "/design-systems/tilda",
    componentsHref: "/design-systems/tilda/components",
    repoUrl: `${SKILLS_REPO_BASE}/tilda-design-system`,
    skillFileUrl: `${REPO_URL}/blob/main/.agents/skills/tilda-design-system/SKILL.md`,
    localPath: ".agents/skills/tilda-design-system",
    summary:
      "Editorial minimalism rules: 0px sharp frames, circular coral icon badges, Jost + Plus Jakarta Sans scale, and 23 component specs.",
    highlights: "SKILL.md · by-class · by-component",
    iconKey: "palette",
    badgeTone: "accent",
    iconStyle: { background: "#FA8A64", colorClass: "text-foreground" },
  },
  {
    id: "jetbrains-design-system",
    name: "JetBrains Design Skill",
    systemSlug: "jetbrains",
    detailHref: "/design-skills/jetbrains-design-system",
    systemHref: "/design-systems/jetbrains",
    componentsHref: "/design-systems/jetbrains/components",
    repoUrl: `${SKILLS_REPO_BASE}/jetbrains-design-system`,
    skillFileUrl: `${REPO_URL}/blob/main/.agents/skills/jetbrains-design-system/SKILL.md`,
    localPath: ".agents/skills/jetbrains-design-system",
    summary:
      "Dark-first IDE surface guidelines (#19191C), electric blue pills, gradient badges, and JetBrains Mono hierarchy.",
    highlights: "SKILL.md · by-class · by-component",
    iconKey: "code",
    badgeTone: "dark",
    iconStyle: {
      background: "linear-gradient(135deg, #6B57FF 0%, #167DFF 100%)",
      colorClass: "text-white",
    },
  },
  {
    id: "polar-design-system",
    name: "Polar Design Skill",
    systemSlug: "polar",
    detailHref: "/design-skills/polar-design-system",
    systemHref: "/design-systems/polar",
    componentsHref: "/design-systems/polar/components",
    repoUrl: `${SKILLS_REPO_BASE}/polar-design-system`,
    skillFileUrl: `${REPO_URL}/blob/main/.agents/skills/polar-design-system/SKILL.md`,
    localPath: ".agents/skills/polar-design-system",
    summary:
      "SaaS billing & dashboard patterns, rounded-2xl card surfaces, zinc hairlines, and Server vs. Client boundaries.",
    highlights: "SKILL.md · by-class · by-component",
    iconKey: "credit-card",
    badgeTone: "neutral",
    iconStyle: { background: "#111111", colorClass: "text-white" },
  },
  {
    id: "cron-design-system",
    name: "Cron Design Skill",
    systemSlug: "cron",
    detailHref: "/design-skills/cron-design-system",
    systemHref: "/design-systems/cron",
    componentsHref: "/design-systems/cron/components",
    repoUrl: `${SKILLS_REPO_BASE}/cron-design-system`,
    skillFileUrl: `${REPO_URL}/blob/main/.agents/skills/cron-design-system/SKILL.md`,
    localPath: ".agents/skills/cron-design-system",
    summary:
      "Keyboard-first dark grid rules (#18181A), vermilion #FF5416 focus states, keycap badges, and schedule block tokens.",
    highlights: "SKILL.md · by-class · by-component",
    iconKey: "calendar",
    badgeTone: "neutral",
    iconStyle: { background: "#FF5416", colorClass: "text-white" },
  },
  {
    id: "brilliant-design-system",
    name: "Brilliant Design Skill",
    systemSlug: "brilliant",
    detailHref: "/design-skills/brilliant-design-system",
    systemHref: "/design-systems/brilliant",
    componentsHref: "/design-systems/brilliant/components",
    repoUrl: `${SKILLS_REPO_BASE}/brilliant-design-system`,
    skillFileUrl: `${REPO_URL}/blob/main/.agents/skills/brilliant-design-system/SKILL.md`,
    localPath: ".agents/skills/brilliant-design-system",
    summary:
      "Interactive STEM UI guidelines: Newsreader serif + sans pairing, #2AB54B tactile pills, midnight navy bands, and quiz cards.",
    highlights: "SKILL.md · by-class · by-component",
    iconKey: "zap",
    badgeTone: "neutral",
    iconStyle: { background: "#2AB54B", colorClass: "text-white" },
  },
];
