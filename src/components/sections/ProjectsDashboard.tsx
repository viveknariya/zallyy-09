import { ExternalLink, FolderKanban, Plus } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const sampleProjects = [
  {
    name: "Editorial Studio",
    domain: "studio.example.com",
    pages: 12,
    status: "Published",
  },
  {
    name: "Product Launch LP",
    domain: "launch.example.com",
    pages: 4,
    status: "Draft",
  },
  {
    name: "Help & Knowledge Base",
    domain: "docs.example.com",
    pages: 28,
    status: "Published",
  },
];

const sampleLeads = [
  { name: "Maya Lin", email: "maya@acme.co", source: "Pricing Page", stage: "Qualified" },
  { name: "Liam Patel", email: "liam@north.io", source: "Hero CTA", stage: "New" },
  { name: "Sofia Chen", email: "sofia@atelier.design", source: "Contact Form", stage: "Contacted" },
];

/**
 * Workspace projects grid and CRM leads table inspired by tilda.cc/projects and crm.tilda.cc.
 */
export function ProjectsDashboard() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 space-y-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-3xl font-normal text-foreground">
            My Projects
          </h1>
          <p className="mt-1 text-sm text-muted">
            Manage your sites, pages, and incoming leads from one workspace.
          </p>
        </div>
        <Button variant="accent" size="md">
          <Plus className="h-4 w-4" /> Create New Site
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {sampleProjects.map((project) => (
          <Card key={project.name} variant="bordered" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <FolderKanban className="h-5 w-5 text-accent-strong" />
                <Badge tone={project.status === "Published" ? "accent" : "neutral"}>
                  {project.status}
                </Badge>
              </div>
              <h2 className="mt-5 font-display text-xl font-medium text-foreground">
                {project.name}
              </h2>
              <p className="mt-1 text-xs font-mono text-muted">
                {project.domain}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
              <span>{project.pages} pages</span>
              <span className="inline-flex items-center gap-1 font-semibold text-foreground">
                Open <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </div>
          </Card>
        ))}
      </div>

      <div>
        <h2 className="font-display text-2xl font-normal text-foreground">
          Recent CRM Leads
        </h2>
        <div className="mt-4 overflow-x-auto border border-border bg-background">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-surface text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              <tr>
                <th className="px-6 py-3.5">Contact</th>
                <th className="px-6 py-3.5">Email</th>
                <th className="px-6 py-3.5">Source</th>
                <th className="px-6 py-3.5">Stage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sampleLeads.map((lead) => (
                <tr key={lead.email} className="hover:bg-surface/60">
                  <td className="px-6 py-4 font-medium text-foreground">
                    {lead.name}
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-muted">
                    {lead.email}
                  </td>
                  <td className="px-6 py-4 text-muted">{lead.source}</td>
                  <td className="px-6 py-4">
                    <Badge tone="neutral">{lead.stage}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
