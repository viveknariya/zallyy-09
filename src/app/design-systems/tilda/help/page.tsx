import { BookOpen, Code2, Globe, HelpCircle } from "lucide-react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Tilda Help & Documentation Pattern",
  description:
    "Support and documentation hub layout inspired by help.tilda.cc and answers.tilda.cc.",
  alternates: { canonical: "/design-systems/tilda/help" },
};

const topics = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Project structure, App Router conventions, and customizing tokens.",
  },
  {
    icon: Globe,
    title: "Domains & Publishing",
    description: "Deploy with Vercel, Bun, or Docker and connect custom domains.",
  },
  {
    icon: Code2,
    title: "Component API",
    description: "How to extend Button, Card, Tabs, Input, and section blocks.",
  },
  {
    icon: HelpCircle,
    title: "FAQ & Troubleshooting",
    description: "Common questions on fonts, Tailwind v4 tokens, and routing.",
  },
];

export default function TildaHelpPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Help", href: "/design-systems/tilda/help" },
        ]}
      />
      <div className="flex-1 bg-background py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="font-display text-4xl font-light text-foreground">
            Help & Documentation
          </h1>
          <p className="mt-3 text-base text-muted">
            Guides and answers inspired by help.tilda.cc and answers.tilda.cc.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Card key={topic.title} variant="subtle" className="hover:border-foreground">
                  <Icon className="h-6 w-6 text-accent-strong" />
                  <h2 className="mt-4 font-display text-xl font-medium text-foreground">
                    {topic.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{topic.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
