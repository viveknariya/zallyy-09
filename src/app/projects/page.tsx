import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectsDashboard } from "@/components/sections/ProjectsDashboard";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-surface">
        <ProjectsDashboard />
      </main>
      <Footer />
    </>
  );
}
