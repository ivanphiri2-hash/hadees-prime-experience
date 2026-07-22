import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import { createContact, listCompanies, listContacts, type Company, type Contact } from "@/lib/crm";

export const Route = createFileRoute("/crm/contacts")({ component: Contacts });

function Contacts() {
  const [rows, setRows] = useState<Contact[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ first_name: "", last_name: "", title: "", email: "", phone: "", company_id: "" });
  const [saving, setSaving] = useState(false);

  const refresh = async () => {
    setLoading(true);
    try {
      const [c, co] = await Promise.all([listContacts(), listCompanies()]);
      setRows(c); setCompanies(co);
    } catch (e: any) { toast.error(e.message); } finally { setLoading(false); }
  };
  useEffect(() => { void refresh(); }, []);

  const companyMap = useMemo(() => Object.fromEntries(companies.map((c) => [c.id, c.name])), [companies]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.first_name.trim()) return toast.error("First name is required");
    setSaving(true);
    try {
      await createContact({ ...form, company_id: form.company_id || null });
      setForm({ first_name: "", last_name: "", title: "", email: "", phone: "", company_id: "" });
      await refresh();
      toast.success("Contact added");
    } catch (e: any) { toast.error(e.message); } finally { setSaving(false); }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <section className="rounded-3xl border border-border bg-[var(--elevated)]">
        <header className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="font-display text-lg">Contacts</h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{rows.length} records</span>
        </header>
        {loading ? <p className="px-6 py-8 text-sm text-muted-foreground">Loading…</p> : rows.length === 0 ? (
          <p className="px-6 py-8 text-sm text-muted-foreground">No contacts yet.</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="text-left font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <tr><th className="px-6 py-3">Name</th><th className="px-6 py-3">Title</th><th className="px-6 py-3">Company</th><th className="px-6 py-3">Email</th></tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((r) => (
                <tr key={r.id}>
                  <td className="px-6 py-3 font-medium">{r.first_name} {r.last_name ?? ""}</td>
                  <td className="px-6 py-3 text-muted-foreground">{r.title ?? "—"}</td>
                  <td className="px-6 py-3 text-muted-foreground">{r.company_id ? companyMap[r.company_id] ?? "—" : "—"}</td>
                  <td className="px-6 py-3 text-muted-foreground">{r.email ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <form onSubmit={submit} className="h-fit space-y-3 rounded-3xl border border-border bg-[var(--elevated)] p-6">
        <h3 className="font-display text-base">Add contact</h3>
        {(["first_name","last_name","title","email","phone"] as const).map((k) => (
          <label key={k} className="block">
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{k.replace("_"," ")}</span>
            <input value={(form as any)[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })}
              className="mt-1 w-full rounded-full border border-border bg-background px-4 py-2 text-sm" />
          </label>
        ))}
        <label className="block">
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">company</span>
          <select value={form.company_id} onChange={(e) => setForm({ ...form, company_id: e.target.value })}
            className="mt-1 w-full rounded-full border border-border bg-background px-4 py-2 text-sm">
            <option value="">— none —</option>
            {companies.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </label>
        <button disabled={saving} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm text-background disabled:opacity-50">
          <Plus className="size-4" />{saving ? "Saving…" : "Add"}
        </button>
      </form>
    </div>
  );
}
