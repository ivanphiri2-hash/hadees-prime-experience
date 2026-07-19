import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Mail, Calendar } from "lucide-react";
import { useSiteContact } from "@/lib/site-config";

export const Route = createFileRoute("/schedule-demo/success")({
  head: () => ({
    meta: [
      { title: "Demo confirmed — Hadees Trading" },
      { name: "description", content: "Your IVAN OS demo request has been received. A senior engineer will confirm your session within one business day." },
      { name: "robots", content: "noindex,nofollow" },
      { property: "og:title", content: "Demo confirmed — Hadees Trading" },
      { property: "og:url", content: "/schedule-demo/success" },
    ],
    links: [{ rel: "canonical", href: "/schedule-demo/success" }],
  }),
  component: Success,
});

function Success() {
  const c = useSiteContact();
  return (
    <main className="min-h-[70vh] pt-32 pb-24">
      <section className="mx-auto max-w-3xl px-6 text-center">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
          <CheckCircle2 className="size-8" />
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--gold)]">Request received</p>
        <h1 className="mt-3 font-display text-4xl sm:text-6xl leading-[1.05] text-balance">
          Your IVAN OS demo is <span className="italic text-[color:var(--gold)]">confirmed</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          A senior HADEES engineer will map IVAN OS to a real workflow from your business. Expect a calendar invite within one business day.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-3 text-left">
          <Card icon={Calendar} k="Next step" v="Calendar invite" />
          <Card icon={Mail} k="Confirmations" v={c.email} />
          <Card icon={CheckCircle2} k="SLA" v="≤ 1 business day" />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/ivan-os" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">Explore IVAN OS <ArrowRight className="size-4" /></Link>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium">Back home</Link>
        </div>
      </section>
    </main>
  );
}

function Card({ icon: Icon, k, v }: { icon: any; k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <Icon className="size-4 text-[color:var(--gold)]" />
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{k}</p>
      <p className="mt-1 font-display text-lg">{v}</p>
    </div>
  );
}
