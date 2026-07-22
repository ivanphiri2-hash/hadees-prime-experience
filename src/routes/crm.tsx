import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Building2, Users, Kanban, LayoutDashboard, LogOut, ShieldAlert } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { isCrmUser } from "@/lib/crm";

export const Route = createFileRoute("/crm")({
  head: () => ({
    meta: [
      { title: "IVAN OS CRM — HADEES Trading" },
      { name: "description", content: "The IVAN OS Enterprise CRM workspace: companies, contacts, and pipeline for HADEES Trading teams." },
      { name: "robots", content: "noindex,nofollow" },
      { property: "og:title", content: "IVAN OS CRM — HADEES Trading" },
      { property: "og:description", content: "Manage companies, contacts and the sales pipeline inside IVAN OS." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CRMShell,
});

const tabs = [
  { to: "/crm", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/crm/companies", label: "Companies", icon: Building2 },
  { to: "/crm/contacts", label: "Contacts", icon: Users },
  { to: "/crm/leads", label: "Pipeline", icon: Kanban },
] as const;

function CRMShell() {
  const [session, setSession] = useState<any>(null);
  const [checking, setChecking] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setChecking(false); });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session?.user) { setAllowed(false); return; }
    isCrmUser(session.user.id).then(setAllowed);
  }, [session]);

  if (checking) return <Shell><p className="text-muted-foreground">Loading workspace…</p></Shell>;

  if (!session) return (
    <Shell>
      <div className="rounded-3xl border border-border bg-[var(--elevated)] p-8">
        <ShieldAlert className="size-6 text-muted-foreground" />
        <h2 className="mt-3 font-display text-2xl">Sign in required</h2>
        <p className="mt-2 text-muted-foreground">The IVAN OS CRM is restricted to HADEES Trading team members.</p>
        <Link to="/auth" className="mt-6 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm text-background">Sign in</Link>
      </div>
    </Shell>
  );

  if (!allowed) return (
    <Shell>
      <div className="rounded-3xl border border-border bg-[var(--elevated)] p-8">
        <ShieldAlert className="size-6 text-muted-foreground" />
        <h2 className="mt-3 font-display text-2xl">No CRM access</h2>
        <p className="mt-2 text-muted-foreground">This account is signed in but has not been granted a CRM role. Please contact an administrator.</p>
        <button onClick={() => supabase.auth.signOut()} className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm"><LogOut className="size-4" /> Sign out</button>
      </div>
    </Shell>
  );

  return (
    <Shell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">IVAN OS</p>
          <h1 className="mt-1 font-display text-3xl tracking-tight">Enterprise CRM</h1>
        </div>
        <button onClick={() => supabase.auth.signOut()} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm">
          <LogOut className="size-4" /> Sign out
        </button>
      </div>

      <nav className="mt-6 flex flex-wrap gap-1 rounded-full border border-border bg-[var(--elevated)] p-1">
        {tabs.map((t) => {
          const active = t.exact ? path === t.to : path.startsWith(t.to);
          return (
            <Link
              key={t.to}
              to={t.to}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${active ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
            >
              <t.icon className="size-4" /> {t.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8"><Outlet /></div>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background pb-24 pt-28">
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </main>
  );
}
