import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Shield, Save, RotateCcw, Lock } from "lucide-react";
import { DEFAULT_CONTACT, saveContact, useSiteContact, type SiteContact } from "@/lib/site-config";

const ADMIN_EMAIL = "admin@hadeestrading.co.za";
const AUTH_KEY = "hadees-admin-authed-v1";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({
    meta: [
      { title: "Admin settings — Hadees Trading" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminSettings,
});

function AdminSettings() {
  const current = useSiteContact();
  const [authed, setAuthed] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [form, setForm] = useState<SiteContact>(current);

  useEffect(() => {
    if (typeof window !== "undefined") setAuthed(window.localStorage.getItem(AUTH_KEY) === "1");
  }, []);
  useEffect(() => { setForm(current); }, [current]);

  if (!authed) {
    return (
      <main className="pt-32 pb-32">
        <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8">
          <Lock className="size-5 text-[color:var(--gold)]" />
          <h1 className="mt-3 font-display text-2xl">Admin sign-in</h1>
          <p className="mt-2 text-sm text-muted-foreground">Enter the admin email to manage site settings. For production, wire this to Lovable Cloud auth with a proper role check.</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (emailInput.trim().toLowerCase() === ADMIN_EMAIL) {
              window.localStorage.setItem(AUTH_KEY, "1");
              setAuthed(true);
              toast.success("Signed in as admin");
            } else {
              toast.error("Not an authorised admin email");
            }
          }} className="mt-6 space-y-3">
            <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder={ADMIN_EMAIL}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground/60" />
            <button className="w-full rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background">Continue</button>
          </form>
        </div>
      </main>
    );
  }

  const update = <K extends keyof SiteContact>(k: K, v: SiteContact[K]) => setForm((s) => ({ ...s, [k]: v }));

  return (
    <main className="pt-32 pb-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground flex items-center gap-2"><Shield className="size-3.5" /> Admin</p>
            <h1 className="mt-2 font-display text-4xl">Site settings</h1>
            <p className="mt-2 text-sm text-muted-foreground">Update once — the address, email, phone and WhatsApp propagate across every page.</p>
          </div>
          <button onClick={() => { window.localStorage.removeItem(AUTH_KEY); setAuthed(false); }} className="text-xs text-muted-foreground hover:text-foreground">Sign out</button>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); saveContact(form); toast.success("Site settings updated across the site"); }}
          className="mt-8 grid gap-4 sm:grid-cols-2 rounded-2xl border border-border bg-card p-6">
          <F label="Email" v={form.email} on={(v) => update("email", v)} />
          <F label="Phone (display)" v={form.phone} on={(v) => update("phone", v)} />
          <F label="Phone (tel: href)" v={form.phoneHref} on={(v) => update("phoneHref", v)} />
          <F label="WhatsApp (digits only)" v={form.whatsapp} on={(v) => update("whatsapp", v)} />
          <F label="Address line 1" v={form.addressLine1} on={(v) => update("addressLine1", v)} />
          <F label="Address line 2" v={form.addressLine2} on={(v) => update("addressLine2", v)} />
          <F label="City" v={form.city} on={(v) => update("city", v)} />
          <F label="Postal code" v={form.postalCode} on={(v) => update("postalCode", v)} />
          <F label="Country" v={form.country} on={(v) => update("country", v)} />
          <F label="Maps query" v={form.mapsQuery} on={(v) => update("mapsQuery", v)} full />

          <div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-2">
            <button className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"><Save className="size-4" /> Save changes</button>
            <button type="button" onClick={() => { setForm(DEFAULT_CONTACT); saveContact(DEFAULT_CONTACT); toast.info("Reset to defaults"); }}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm"><RotateCcw className="size-4" /> Reset</button>
          </div>
        </form>
      </div>
    </main>
  );
}

function F({ label, v, on, full }: { label: string; v: string; on: (v: string) => void; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input value={v} onChange={(e) => on(e.target.value)}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground/60" />
    </div>
  );
}
