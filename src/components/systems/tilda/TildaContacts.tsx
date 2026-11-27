"use client";

import { Plus, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Tabs } from "@/components/ui/Tabs";
import { TildaWorkspaceBar } from "./TildaWorkspaceBar";

interface ContactRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  created: string;
  stage: "New" | "Qualified" | "Contacted";
  notes: string;
}

const contactsData: ContactRecord[] = [
  {
    id: "c1",
    name: "Alex Rivera",
    email: "alex@studio.io",
    phone: "+1 415 555 0142",
    created: "2026-10-20 14:22:06",
    stage: "Qualified",
    notes: "Requested Business plan quote for 5 marketing microsites.",
  },
  {
    id: "c2",
    name: "Maya Lin",
    email: "maya@acme.co",
    phone: "+1 212 555 0198",
    created: "2026-10-19 09:15:30",
    stage: "Contacted",
    notes: "Asked about Zero Block animation and custom domain SSL.",
  },
  {
    id: "c3",
    name: "Liam Patel",
    email: "liam@north.io",
    phone: "+44 20 7946 0921",
    created: "2026-10-18 17:40:12",
    stage: "New",
    notes: "Submitted Hero CTA form from product launch landing page.",
  },
  {
    id: "c4",
    name: "Sofia Chen",
    email: "sofia@atelier.design",
    phone: "+1 646 555 0114",
    created: "2026-10-17 11:05:49",
    stage: "Qualified",
    notes: "Migrating editorial portfolio and newsletter signup blocks.",
  },
];

const stageTabs = [
  { id: "all", label: "All Contacts" },
  { id: "New", label: "New" },
  { id: "Contacted", label: "Contacted" },
  { id: "Qualified", label: "Qualified" },
];

/**
 * CRM Contacts directory and interactive Contact Card modal modeled after crm.tilda.cc/contacts.
 */
export function TildaContacts() {
  const [stage, setStage] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<ContactRecord | null>(null);

  useEffect(() => {
    if (!selected) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  const filtered = contactsData.filter((c) => {
    const matchesStage = stage === "all" || c.stage === stage;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q);
    return matchesStage && matchesQuery;
  });

  return (
    <div className="flex-1 bg-surface">
      <TildaWorkspaceBar active="contacts" />

      <div className="mx-auto max-w-6xl px-6 py-12 space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-display text-3xl font-normal text-foreground">
              Contacts
            </h1>
            <p className="mt-1 text-sm text-muted">
              Click any row to inspect the Contact Card modal pattern.
            </p>
          </div>
          <Button
            variant="accent"
            size="md"
            onClick={() => setSelected(contactsData[0])}
          >
            <Plus className="h-4 w-4" /> Open Contact Card
          </Button>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Tabs items={stageTabs} activeId={stage} onChange={setStage} />

          <div className="relative w-full md:w-72">
            <Search className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name or email..."
              aria-label="Search contacts"
              className="w-full border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted focus:border-foreground focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto border border-border bg-background">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-surface text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              <tr>
                <th className="px-6 py-3.5">Name</th>
                <th className="px-6 py-3.5">Email</th>
                <th className="px-6 py-3.5">Phone</th>
                <th className="px-6 py-3.5">Stage</th>
                <th className="px-6 py-3.5">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((contact) => (
                <tr
                  key={contact.id}
                  tabIndex={0}
                  onClick={() => setSelected(contact)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(contact);
                    }
                  }}
                  className="hover:bg-surface/60 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground"
                >
                  <td className="px-6 py-4 font-medium text-foreground">
                    {contact.name}
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-muted">
                    {contact.email}
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-muted">
                    {contact.phone}
                  </td>
                  <td className="px-6 py-4">
                    <Badge tone={contact.stage === "Qualified" ? "accent" : "neutral"}>
                      {contact.stage}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-muted">
                    {contact.created}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact Card Modal */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg border-2 border-foreground bg-background"
          >
            <div className="flex items-center justify-between border-b border-border px-8 py-5">
              <h2
                id="contact-modal-title"
                className="font-display text-2xl font-normal text-foreground"
              >
                Contact Card
              </h2>
              <button
                type="button"
                aria-label="Close contact card"
                onClick={() => setSelected(null)}
                className="-mr-2 flex h-11 w-11 items-center justify-center text-muted hover:text-foreground cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="inline-flex min-h-10 items-center text-xs font-semibold text-accent-strong hover:underline cursor-pointer"
              >
                ← Go back to contacts
              </button>

              <div>
                <h3 className="font-display text-lg font-medium text-foreground">
                  Current contact data:
                </h3>
                <div className="mt-3 border border-border bg-background p-5 space-y-2 text-sm">
                  <p>
                    <span className="text-muted">Name:</span>{" "}
                    <span className="font-medium text-foreground">{selected.name}</span>
                  </p>
                  <p>
                    <span className="text-muted">Email:</span>{" "}
                    <a
                      href={`mailto:${selected.email}`}
                      className="font-mono text-xs text-foreground underline decoration-accent underline-offset-4 hover:text-accent-strong"
                    >
                      {selected.email}
                    </a>
                  </p>
                  <p>
                    <span className="text-muted">Phone:</span>{" "}
                    <a
                      href={`tel:${selected.phone.replace(/\s+/g, "")}`}
                      className="font-mono text-xs text-foreground underline decoration-accent underline-offset-4 hover:text-accent-strong"
                    >
                      {selected.phone}
                    </a>
                  </p>
                  <p>
                    <span className="text-muted">Created:</span>{" "}
                    <span className="font-mono text-xs text-foreground">{selected.created}</span>
                  </p>
                </div>
              </div>

              <p className="border-t border-border pt-4 text-sm text-muted">
                {selected.notes}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
