export type ServiceSlug =
  | "website-development"
  | "software-development"
  | "automation-development";

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDefinition {
  slug: ServiceSlug;
  href: string;
  eyebrow: string;
  name: string;
  shortTitle: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  idealFor: string;
  startingModel: string;
  timeline: string;
  iconKey: "globe" | "code" | "workflow";
  deliverables: ServiceDeliverable[];
  useCases: string[];
  proofLinks: {
    label: string;
    href: string;
    note: string;
  }[];
  faqs: ServiceFaq[];
}

export const AGENCY_SERVICES: ServiceDefinition[] = [
  {
    slug: "website-development",
    href: "/services/website-development",
    eyebrow: "Website Development · USA SMBs",
    name: "Small & Medium Business Website Development",
    shortTitle: "Website Development",
    headline:
      "Fast, conversion-focused websites built for US small & medium businesses.",
    metaTitle: "Small Business Website Development Services (USA)",
    metaDescription:
      "Affordable custom website development for US small and medium businesses. Built on Next.js with transparent custom pricing starting low and live staging before you pay.",
    summary:
      "Replace slow, templated sites with custom Next.js websites engineered for Google rankings, Core Web Vitals, and inbound leads—without massive agency retainers.",
    idealFor: "US small businesses, local service firms, B2B teams, and growing brands",
    startingModel: "Custom pricing · Low starter entry",
    timeline: "1 – 3 weeks to live staging",
    iconKey: "globe",
    deliverables: [
      {
        title: "Custom Design & Conversion Copy Structure",
        description:
          "Clean editorial layouts tailored to US buyers—clear service hierarchy, trust proof, and fast lead capture forms rather than bloated templates.",
      },
      {
        title: "Technical SEO & Schema Built In",
        description:
          "Route-level canonical tags, Open Graph previews, semantic headings, XML sitemaps, and Organization/Service JSON-LD configured from day one.",
      },
      {
        title: "Production Next.js Performance",
        description:
          "Responsive mobile-first builds using TypeScript and Tailwind CSS so pages load fast on US mobile networks and score cleanly on Core Web Vitals.",
      },
      {
        title: "Live Staging Preview Before Launch",
        description:
          "Review your working website on a real staging URL before final production handoff—aligned with our zero-upfront, pay-when-live engineering model.",
      },
    ],
    useCases: [
      "Service business lead-generation websites (HVAC, legal, accounting, logistics, consulting)",
      "High-converting B2B landing pages and multi-page product sites",
      "Slow WordPress or Wix website redesigns migrated to modern Next.js",
      "SEO-structured regional or national US service hubs",
    ],
    proofLinks: [
      {
        label: "Tilda Editorial Web System",
        href: "/design-systems/tilda",
        note: "18-route marketing, pricing, blog & lead-capture architecture",
      },
      {
        label: "Brilliant Interactive Landing System",
        href: "/design-systems/brilliant",
        note: "21-route interactive onboarding, checkout & content showcase",
      },
    ],
    faqs: [
      {
        question: "How does your low-starting-price website model work?",
        answer:
          "We scope your site based on the exact pages, integrations, and features you need instead of forcing a bloated $15,000 agency package. Starter small-business builds begin at an accessible entry tier and scale transparently as you add custom pages or portals.",
      },
      {
        question: "Do I pay everything upfront before seeing the website?",
        answer:
          "No. We build a working architectural blueprint and live staging preview first so you can click through real pages, test mobile responsiveness, and verify quality before going live.",
      },
      {
        question: "Can you migrate our existing WordPress or Wix site without losing SEO?",
        answer:
          "Yes. We map all existing URLs with permanent 301 redirects, preserve or improve metadata, clean up broken links, and add structured schema so rankings carry forward cleanly.",
      },
    ],
  },
  {
    slug: "software-development",
    href: "/services/software-development",
    eyebrow: "Custom Software · SMB & Mid-Market",
    name: "Custom Software & Client Portal Development",
    shortTitle: "Software Development",
    headline:
      "Custom web apps, client portals, and internal tools without enterprise bloat.",
    metaTitle: "Custom Software Development for Small & Medium Businesses",
    metaDescription:
      "Affordable custom software development for US small and medium businesses: client portals, internal dashboards, SaaS MVPs, and database apps built on Next.js and PostgreSQL.",
    summary:
      "When off-the-shelf SaaS or sprawling spreadsheets hold your operations back, we build focused custom software—client portals, dashboards, and MVPs—priced fairly for SMB budgets.",
    idealFor: "Medium businesses (10–200 staff), B2B service firms, and funded or bootstrapped founders",
    startingModel: "Custom scope pricing · Modular milestones",
    timeline: "2 – 6 weeks to live staging",
    iconKey: "code",
    deliverables: [
      {
        title: "Client & Vendor Portals",
        description:
          "Secure login portals where customers view project status, download invoices, upload documents, and submit requests without endless email threads.",
      },
      {
        title: "Internal Ops Dashboards & Admin Tools",
        description:
          "Role-based dashboards unifying inventory, scheduling, CRM records, and financial reporting in one clean interface tailored to your team.",
      },
      {
        title: "SaaS MVP & Billing Platforms",
        description:
          "Full-stack Next.js, TypeScript, Node.js, and PostgreSQL applications with authentication, Stripe billing, and multi-tenant data isolation.",
      },
      {
        title: "Clean Source Ownership & Maintainable Code",
        description:
          "Documented TypeScript repositories with clear component boundaries—so your team is never locked into proprietary black-box builders.",
      },
    ],
    useCases: [
      "Replacing fragile multi-tab Excel/Airtable trackers with a real web application",
      "Customer self-service portals for accounting, legal, staffing, or field-service SMBs",
      "Custom inventory, quoting, or dispatch management software",
      "Low-cost MVP builds for US startups validating product-market fit",
    ],
    proofLinks: [
      {
        label: "Polar SaaS & Billing System",
        href: "/design-systems/polar",
        note: "11-route billing, finance wallet, analytics & onboarding UI",
      },
      {
        label: "Cron Scheduling & Calendar UI",
        href: "/design-systems/cron",
        note: "Keyboard-first workspace and time-blocking application UI",
      },
    ],
    faqs: [
      {
        question: "How is custom software affordable for a small or medium business?",
        answer:
          "We avoid reinventing boilerplate from scratch. By building on our pre-hardened Next.js UI systems, auth patterns, and automated verification workflows, we cut months of overhead and pass those savings into a lower custom entry price.",
      },
      {
        question: "What tech stack do you use for custom software?",
        answer:
          "We build primarily with Next.js, React, TypeScript, Node.js, Tailwind CSS, and PostgreSQL—battle-tested tools with massive US engineering support and low cloud hosting costs.",
      },
      {
        question: "Can we start with one core module and expand later?",
        answer:
          "Yes. Most SMB clients launch a focused Version 1 (for example, a client portal or quoting tool) at a low starter cost, validate ROI with their team, and add modules over time.",
      },
    ],
  },
  {
    slug: "automation-development",
    href: "/services/automation-development",
    eyebrow: "Automation Development · Workflow & AI",
    name: "Business Process & AI Automation Development",
    shortTitle: "Automation Development",
    headline:
      "Eliminate manual data entry, fragile zaps, and repetitive back-office busywork.",
    metaTitle: "Business Process & Workflow Automation Agency (USA)",
    metaDescription:
      "Custom workflow automation development for US small and medium businesses. Connect CRMs, invoicing, email, and practical AI agents—or replace expensive Zapier tasks starting low.",
    summary:
      "Stop paying high SaaS task fees or burning 15+ hours a week copying data between tools. We engineer reliable API integrations, webhook pipelines, and practical AI workflows built around how your business operates.",
    idealFor: "Operations-heavy US small businesses, agencies, e-commerce, and mid-market teams",
    startingModel: "Per-workflow custom pricing · Low starter entry",
    timeline: "5 – 14 days per workflow",
    iconKey: "workflow",
    deliverables: [
      {
        title: "CRM, Billing & Accounting Sync",
        description:
          "Connect HubSpot, Pipedrive, Stripe, QuickBooks, Slack, and custom databases so leads, invoices, and status updates flow automatically with error handling.",
      },
      {
        title: "Zapier / Make Migration to Custom Code",
        description:
          "Replace brittle, expensive no-code chains with deterministic TypeScript webhooks and background workers that run reliably at a fraction of monthly task costs.",
      },
      {
        title: "Practical AI Workflow Assistants",
        description:
          "Automate inbox triage, lead qualification, document/PDF extraction, quote drafting, and support routing with human-in-the-loop review gates.",
      },
      {
        title: "Automated Reporting & Alerts",
        description:
          "Scheduled daily or weekly executive digests, anomaly alerts, and automated SEO/ops audit scripts delivered right to Slack or email.",
      },
    ],
    useCases: [
      "Automatic client onboarding: signed quote → Stripe invoice → portal account → Slack alert",
      "Eliminating manual copy-paste between web forms, spreadsheets, and CRM",
      "Automated PDF/email invoice parsing and data validation",
      "Replacing $300–$1,500/month Zapier bills with self-owned API automations",
    ],
    proofLinks: [
      {
        label: "JetBrains Developer & Tooling UI",
        href: "/design-systems/jetbrains",
        note: "Technical tooling, monitoring & dark-mode operator surfaces",
      },
      {
        label: "Agentic Coding & Audit Skills",
        href: "/design-skills",
        note: "Structured SKILL.md automation specs used in our own pipelines",
      },
    ],
    faqs: [
      {
        question: "Should we use Zapier/Make or custom automation development?",
        answer:
          "No-code tools are great for quick 2-step tests, but once workflows need branching logic, error retries, database lookups, or high task volume, custom code becomes faster, more reliable, and cheaper every month.",
      },
      {
        question: "Can you automate workflows inside tools we already use?",
        answer:
          "Yes. As long as your software has an API, webhook, or database (Stripe, QuickBooks, HubSpot, Google Workspace, Slack, Shopify, PostgreSQL, or legacy tools), we connect them cleanly.",
      },
      {
        question: "How quickly can an SMB see ROI from automation?",
        answer:
          "Most starter automations deploy within 1–2 weeks and immediately reclaim 5 to 20 hours of weekly manual work—often paying for themselves within the first month.",
      },
    ],
  },
];

export const PRICING_TIERS = [
  {
    name: "Starter Launch",
    badge: "Low Entry Price",
    audience: "Small Businesses & Solo Founders",
    summary:
      "Ideal for a high-converting business website, landing redesign, or single high-impact workflow automation.",
    highlights: [
      "Custom scoped pricing starting at a low entry point",
      "Blueprint & MVP scope delivered within 48 hours",
      "Live staging preview before full production launch",
      "Built-in technical SEO, responsive UI & lead capture",
    ],
    ctaLabel: "Scope Starter Build",
  },
  {
    name: "Growth Platform",
    badge: "Most Popular",
    audience: "Growing SMBs & Service Teams",
    summary:
      "Multi-page web platforms, custom client portals, CRM integrations, or multi-step business process automation.",
    highlights: [
      "Modular milestone pricing tailored to your exact scope",
      "Zero upfront deposit — verify working software in staging",
      "Custom Next.js frontend + PostgreSQL / API integrations",
      "Analytics, role-based access & automated workflows",
    ],
    ctaLabel: "Scope Growth Platform",
  },
  {
    name: "Scale & Custom Ops",
    badge: "Mid-Market",
    audience: "Medium Businesses (20–200 Staff)",
    summary:
      "End-to-end internal software, multi-system ERP/CRM synchronization, AI ops workflows, and ongoing maintenance.",
    highlights: [
      "Custom fixed-scope or transparent monthly retainer",
      "Replace costly SaaS seats & Zapier task overages",
      "Dedicated staging environments & CI verification",
      "Optional white-label design system & skill specs",
    ],
    ctaLabel: "Request Custom Proposal",
  },
];

export const HOME_FAQS: ServiceFaq[] = [
  {
    question: "What services does zallyy provide for US small and medium businesses?",
    answer:
      "zallyy provides three core engineering services: custom website development, custom software development (client portals, dashboards, MVPs), and business workflow & AI automation development—plus open Next.js design systems and AI skills for developers.",
  },
  {
    question: "How does your custom pricing work if we have a small business budget?",
    answer:
      "Instead of flat $20,000+ agency retainers, we price strictly around the scope you actually need and start at a low entry point. You can start with one focused website, portal, or automation workflow and scale only as it proves ROI.",
  },
  {
    question: "What does zero-upfront / pay-when-live development mean?",
    answer:
      "We review your goals, produce an architectural blueprint within 48 hours, and deploy a working build to a live staging sandbox so you can test real flows before committing capital to go live.",
  },
  {
    question: "Why do you also publish free Design Systems and Design Skills for developers?",
    answer:
      "Our /design-systems and /design-skills library serves two purposes: developers and AI builders can use our open-source Next.js UI systems and SKILL.md specs freely, and business clients can click through live interactive interfaces to verify our engineering quality before hiring us.",
  },
];
