import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantCoursesCatalog } from "@/components/systems/brilliant/BrilliantCoursesCatalog";

export const metadata: Metadata = {
  title: "Learning Paths & Courses — Brilliant Design System",
  description:
    "Browse Math, CS, Data Analysis, and Science learning paths with interactive course level roadmaps.",
  alternates: { canonical: "/design-systems/brilliant/courses" },
};

export default function BrilliantCoursesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Courses", href: "/design-systems/brilliant/courses" },
        ]}
      />
      <BrilliantCoursesCatalog />
    </>
  );
}
