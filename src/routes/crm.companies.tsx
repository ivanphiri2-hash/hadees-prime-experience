import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import { createCompany, listCompanies, type Company } from "@/lib/crm";

export const Route = createFileRoute("/crm/companies")({ component: Companies });

function Companies() {
  const [rows, setRows] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", industry: "", province: "", email: "", phone: "" });
  const [saving, setSaving] = useState(false);

  const refresh = async () => {
    setLoading(true);
    try { setRows(await listCompanies()); } catch (e: any) { toast.error(e.message); } finally { setLoading(false); }
  };
  useEffect(() => { void refresh(); }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return toast.error("Company name is required");
    setSaving(true);
    try {
      await createCompany(form);
      setForm({ name: "", industry: "", province: "", email: "", phone: "" });
      await refresh();
      toast.success("Company added");
    } catch (e: any) { toast.error(e.message); } finally { setSaving(false); }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <section className="rounded-3xl border border-border bg-[var(--elevated)]">
        <header className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="font-display text-lg">Companies</h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{rows.length} records</span>
        </header>
        {loading ? <p className="px-6 py-8 text-sm text-muted-foreground">Loading…</p> : rows.length === 0 ? (
          <p className="px-6 py-8 text-sm text-muted-foreground">No companies yet.</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="text-left font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <tr><th className="px-6 py-3">Name</th><th className="px-6 py-3">Industry</th><th className="px-6 py-3">Province</th><th className="px-6 py-3">Contact</th></tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((r) => (
                <tr key={r.id}>
                  <td className="px-6 py-3 font-medium">{r.name}</td>
                  <td className="px-6 py-3 text-muted-foreground">{r.industry ?? "—"}</td>
                  <td className="px-6 py-3 text-muted-foreground">{r.province ?? "—"}</td>
                  <td className="px-6 py-3 text-muted-foreground">{r.email ?? r.phone ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <form onSubmit={submit} className="h-fit space-y-3 rounded-3xl border border-border bg-[var(--elevated)] p-6">
        <h3 className="font-display text-base">Add company</h3>
        {(["name","industry","province","email","phone"] as const).map((k) => (
          <label key={k} className="block">
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{k}</span>
            <input value={(form as any)[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })}
              className="mt-1 w-full rounded-full border border-border bg-background px-4 py-2 text-sm" />
          </label>
        ))}
        <button disabled={saving} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm text-background disabled:opacity-50">
          <Plus className="size-4" />{saving ? "Saving…" : "Add"}
        </button>
      </form>
    </div>
  );
}
