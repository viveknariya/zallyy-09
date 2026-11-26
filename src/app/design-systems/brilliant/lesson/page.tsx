import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantInteractiveLesson } from "@/components/systems/brilliant/BrilliantInteractiveLesson";

export const metadata: Metadata = {
  title: "Interactive Lesson & Quiz — Brilliant Design System",
  description:
    "Interactive STEM puzzle workspace featuring balance-scale diagrams, progress bar, and instant answer verification.",
  alternates: { canonical: "/design-systems/brilliant/lesson" },
};

export default function BrilliantLessonPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Interactive Lesson", href: "/design-systems/brilliant/lesson" },
        ]}
      />
      <BrilliantInteractiveLesson />
    </>
  );
}
