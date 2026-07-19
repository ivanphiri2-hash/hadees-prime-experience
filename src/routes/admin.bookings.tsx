import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Shield, Download, LogOut, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { bookingsToCSV, downloadCSV, listBookings, updateBookingStatus, type BookingRow } from "@/lib/bookings";

export const Route = createFileRoute("/admin/bookings")({
  head: () => ({
    meta: [
      { title: "Demo bookings — HADEES admin" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminBookings,
});

function AdminBookings() {
  const [session, setSession] = useState<any>(null);
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [rows, setRows] = useState<BookingRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<string>("all");

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setChecking(false); });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session?.user) { setIsAdmin(false); return; }
    supabase.rpc("is_admin", { _user_id: session.user.id }).then(({ data }) => setIsAdmin(!!data));
  }, [session]);

  const refresh = async () => {
    setLoading(true);
    try { setRows(await listBookings()); }
    catch (e: any) { toast.error(e.message); }
    finally { setLoading(false); }
  };

  useEffect(() => { if (isAdmin) void refresh(); }, [isAdmin]);

  if (checking) return <Shell><p className="text-muted-foreground">Loading…</p></Shell>;
  if (!session) return (
    <Shell>
      <p className="text-muted-foreground">You need to sign in to view bookings.</p>
      <Link to="/auth" className="mt-4 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm text-background">Sign in</Link>
    </Shell>
  );
  if (!isAdmin) return <Shell><p className="text-muted-foreground">This account does not have booking access.</p></Shell>;

  const filtered = rows.filter(r => {
    if (status !== "all" && r.status !== status) return false;
    if (!q) return true;
    const s = q.toLowerCase();
    return [r.name, r.email, r.company, r.use_case].some(v => (v || "").toLowerCase().includes(s));
  });

  return (
    <Shell>
      <div className="flex flex-wrap items-center gap-3">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, email, company…"
          className="flex-1 min-w-56 rounded-full border border-border bg-background px-5 py-2.5 text-sm" />
        <select value={status} onChange={(e) => setStatus(e.target.value)}
          className="rounded-full border border-border bg-background px-4 py-2.5 text-sm">
          {["all","new","contacted","scheduled","won","lost"].map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <button onClick={refresh} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm"><RefreshCw className="size-4" />{loading ? "Loading" : "Refresh"}</button>
        <button onClick={() => downloadCSV(`bookings-${new Date().toISOString().slice(0,10)}.csv`, bookingsToCSV(filtered))}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm text-background"><Download className="size-4" /> Export CSV</button>
        <button onClick={() => supabase.auth.signOut()} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm"><LogOut className="size-4" /> Sign out</button>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-[var(--elevated)] text-left font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <tr>
              {["When","Contact","Company","Focus","Date","Status",""].map(h => <th key={h} className="px-4 py-3">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <tr key={r.id} className="border-t border-border">
                <td className="px-4 py-3 text-muted-foreground">{new Date(r.created_at).toLocaleString()}</td>
                <td className="px-4 py-3"><div className="font-medium">{r.name}</div><div className="text-xs text-muted-foreground">{r.email}</div></td>
                <td className="px-4 py-3">{r.company}<div className="text-xs text-muted-foreground">{r.role || "—"}</div></td>
                <td className="px-4 py-3">{r.use_case}</td>
                <td className="px-4 py-3">{r.preferred_date}</td>
                <td className="px-4 py-3">
                  <select value={r.status} onChange={async (e) => {
                    const next = e.target.value;
                    try { await updateBookingStatus(r.id, next); setRows(rs => rs.map(x => x.id === r.id ? { ...x, status: next } : x)); toast.success("Updated"); }
                    catch (err: any) { toast.error(err.message); }
                  }} className="rounded-md border border-border bg-background px-2 py-1 text-xs">
                    {["new","contacted","scheduled","won","lost"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground">{r.source || "—"}</td>
              </tr>
            ))}
            {filtered.length === 0 && <tr><td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">No bookings yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground flex items-center gap-2"><Shield className="size-3.5" /> HADEES admin</p>
        <h1 className="mt-2 font-display text-4xl">Demo bookings</h1>
        <p className="mt-2 text-sm text-muted-foreground">Live pipeline from every IVAN OS demo request across the site.</p>
        <div className="mt-6">{children}</div>
      </div>
    </main>
  );
}
