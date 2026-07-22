import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import {
  createLead, formatZAR, LEAD_SOURCES, LEAD_STAGES, listCompanies, listLeads, updateLeadStage,
  type Company, type Lead, type LeadSource, type LeadStage,
} from "@/lib/crm";

export const Route = createFileRoute("/crm/leads")({ component: Pipeline });

const stageLabel: Record<LeadStage, string> = {
  new: "New", qualified: "Qualified", proposal: "Proposal", negotiation: "Negotiation", won: "Won", lost: "Lost",
};

function Pipeline() {
  const [rows, setRows] = useState<Lead[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<{ title: string; company_id: string; stage: LeadStage; source: LeadSource; value_zar: string; probability: string; expected_close: string; }>({
    title: "", company_id: "", stage: "new", source: "website", value_zar: "", probability: "20", expected_close: "",
  });

  const refresh = async () => {
    setLoading(true);
    try {
      const [l, c] = await Promise.all([listLeads(), listCompanies()]);
      setRows(l); setCompanies(c);
    } catch (e: any) { toast.error(e.message); } finally { setLoading(false); }
  };
  useEffect(() => { void refresh(); }, []);

  const byStage = useMemo(() => {
    const acc: Record<LeadStage, Lead[]> = { new: [], qualified: [], proposal: [], negotiation: [], won: [], lost: [] };
    for (const l of rows) acc[l.stage].push(l);
    return acc;
  }, [rows]);

  const companyName = (id: string | null) => (id ? companies.find((c) => c.id === id)?.name : null) ?? "—";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return toast.error("Title is required");
    setSaving(true);
    try {
      await createLead({
        title: form.title,
        company_id: form.company_id || null,
        stage: form.stage,
        source: form.source,
        value_zar: form.value_zar ? Number(form.value_zar) : 0,
        probability: form.probability ? Number(form.probability) : 20,
        expected_close: form.expected_close || null,
      });
      setForm({ title: "", company_id: "", stage: "new", source: "website", value_zar: "", probability: "20", expected_close: "" });
      setShowForm(false);
      await refresh();
      toast.success("Lead created");
    } catch (e: any) { toast.error(e.message); } finally { setSaving(false); }
  };

  const move = async (id: string, stage: LeadStage) => {
    const prev = rows;
    setRows((r) => r.map((l) => (l.id === id ? { ...l, stage } : l)));
    try { await updateLeadStage(id, stage); } catch (e: any) { toast.error(e.message); setRows(prev); }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl">Pipeline</h2>
          <p className="text-sm text-muted-foreground">Move deals through the stages. Changes save automatically.</p>
        </div>
        <button onClick={() => setShowForm((v) => !v)} className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm text-background">
          <Plus className="size-4" /> {showForm ? "Close" : "New lead"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={submit} className="grid gap-3 rounded-3xl border border-border bg-[var(--elevated)] p-6 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Title"><input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className={inputCls} /></Field>
          <Field label="Company">
            <select value={form.company_id} onChange={(e) => setForm({ ...form, company_id: e.target.value })} className={inputCls}>
              <option value="">— none —</option>
              {companies.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </Field>
          <Field label="Stage">
            <select value={form.stage} onChange={(e) => setForm({ ...form, stage: e.target.value as LeadStage })} className={inputCls}>
              {LEAD_STAGES.map((s) => <option key={s} value={s}>{stageLabel[s]}</option>)}
            </select>
          </Field>
          <Field label="Source">
            <select value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value as LeadSource })} className={inputCls}>
              {LEAD_SOURCES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </Field>
          <Field label="Value (ZAR)"><input type="number" min="0" value={form.value_zar} onChange={(e) => setForm({ ...form, value_zar: e.target.value })} className={inputCls} /></Field>
          <Field label="Probability %"><input type="number" min="0" max="100" value={form.probability} onChange={(e) => setForm({ ...form, probability: e.target.value })} className={inputCls} /></Field>
          <Field label="Expected close"><input type="date" value={form.expected_close} onChange={(e) => setForm({ ...form, expected_close: e.target.value })} className={inputCls} /></Field>
          <div className="flex items-end">
            <button disabled={saving} className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-4 py-2.5 text-sm text-background disabled:opacity-50">{saving ? "Saving…" : "Create lead"}</button>
          </div>
        </form>
      )}

      {loading ? (
        <p className="text-sm text-muted-foreground">Loading pipeline…</p>
      ) : (
        <div className="overflow-x-auto">
          <div className="grid min-w-[1100px] grid-cols-6 gap-4">
            {LEAD_STAGES.map((stage) => {
              const list = byStage[stage];
              const total = list.reduce((s, l) => s + Number(l.value_zar ?? 0), 0);
              return (
                <div key={stage} className="rounded-3xl border border-border bg-[var(--elevated)] p-4">
                  <header className="mb-3 flex items-center justify-between">
                    <p className="font-display text-sm">{stageLabel[stage]}</p>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{list.length}</span>
                  </header>
                  <p className="mb-3 font-mono text-[10px] text-muted-foreground">{formatZAR(total)}</p>
                  <div className="space-y-2">
                    {list.map((l) => (
                      <article key={l.id} className="rounded-2xl border border-border bg-background p-3">
                        <p className="text-sm font-medium">{l.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{companyName(l.company_id)}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="font-mono text-xs">{formatZAR(l.value_zar)}</span>
                          <select value={l.stage} onChange={(e) => move(l.id, e.target.value as LeadStage)}
                            className="rounded-full border border-border bg-background px-2 py-1 text-[11px]">
                            {LEAD_STAGES.map((s) => <option key={s} value={s}>{stageLabel[s]}</option>)}
                          </select>
                        </div>
                      </article>
                    ))}
                    {list.length === 0 && <p className="text-xs text-muted-foreground">Empty</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const inputCls = "mt-1 w-full rounded-full border border-border bg-background px-4 py-2 text-sm";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>{children}</label>;
}
