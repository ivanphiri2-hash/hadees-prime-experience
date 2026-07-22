import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Building2, Users, Kanban, TrendingUp } from "lucide-react";
import { formatZAR, listCompanies, listContacts, listLeads, type Lead } from "@/lib/crm";

export const Route = createFileRoute("/crm/")({
  component: Overview,
});

function Overview() {
  const [stats, setStats] = useState({ companies: 0, contacts: 0, leads: 0, pipeline: 0 });
  const [recent, setRecent] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [companies, contacts, leads] = await Promise.all([listCompanies(), listContacts(), listLeads()]);
        const open = leads.filter((l) => l.stage !== "won" && l.stage !== "lost");
        const pipeline = open.reduce((s, l) => s + Number(l.value_zar ?? 0), 0);
        setStats({ companies: companies.length, contacts: contacts.length, leads: leads.length, pipeline });
        setRecent(leads.slice(0, 5));
      } finally { setLoading(false); }
    })();
  }, []);

  const cards = [
    { label: "Companies", value: stats.companies, icon: Building2 },
    { label: "Contacts", value: stats.contacts, icon: Users },
    { label: "Leads", value: stats.leads, icon: Kanban },
    { label: "Open pipeline", value: formatZAR(stats.pipeline), icon: TrendingUp },
  ];

  return (
    <div className="space-y-8">
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="rounded-3xl border border-border bg-[var(--elevated)] p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{c.label}</p>
              <c.icon className="size-4 text-muted-foreground" />
            </div>
            <p className="mt-3 font-display text-3xl tracking-tight">{loading ? "…" : c.value}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-border bg-[var(--elevated)]">
        <header className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="font-display text-lg">Recent leads</h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">latest 5</span>
        </header>
        {loading ? (
          <p className="px-6 py-8 text-sm text-muted-foreground">Loading…</p>
        ) : recent.length === 0 ? (
          <p className="px-6 py-8 text-sm text-muted-foreground">No leads yet. Create your first from the Pipeline tab.</p>
        ) : (
          <ul className="divide-y divide-border">
            {recent.map((l) => (
              <li key={l.id} className="flex items-center justify-between gap-4 px-6 py-4">
                <div>
                  <p className="font-medium">{l.title}</p>
                  <p className="text-xs text-muted-foreground">{l.stage} · {l.source}</p>
                </div>
                <span className="font-mono text-sm">{formatZAR(l.value_zar)}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
