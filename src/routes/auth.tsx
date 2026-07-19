import { createFileRoute, useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, LogIn } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const searchSchema = z.object({ redirect: z.string().optional() });

export const Route = createFileRoute("/auth")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Sign in — HADEES admin" },
      { name: "description", content: "Sign in to manage HADEES demo bookings, staff and settings." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const nav = useNavigate();
  const { redirect } = useSearch({ from: "/auth" });
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) nav({ to: (redirect as any) || "/admin/bookings" });
    });
  }, [nav, redirect]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email, password, options: { emailRedirectTo: `${window.location.origin}/auth` },
        });
        if (error) throw error;
        toast.success("Check your inbox to confirm your email.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        nav({ to: (redirect as any) || "/admin/bookings" });
      }
    } catch (err: any) {
      toast.error(err.message ?? "Auth failed");
    } finally { setBusy(false); }
  };

  return (
    <main className="min-h-[70vh] pt-32 pb-24">
      <div className="mx-auto max-w-md px-6">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">HADEES admin</p>
        <h1 className="mt-2 font-display text-4xl">{mode === "signin" ? "Sign in" : "Create account"}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Access is restricted to HADEES staff.</p>

        <form onSubmit={submit} className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-6">
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground/60" />
          </div>
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Password</label>
            <input type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground/60" />
          </div>
          <button disabled={busy} className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background disabled:opacity-60">
            {busy ? <Loader2 className="size-4 animate-spin" /> : <LogIn className="size-4" />}
            {mode === "signin" ? "Sign in" : "Create account"}
          </button>
          <button type="button" onClick={() => setMode(m => m === "signin" ? "signup" : "signin")} className="w-full text-xs text-muted-foreground hover:text-foreground">
            {mode === "signin" ? "No account? Create one" : "Have an account? Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
