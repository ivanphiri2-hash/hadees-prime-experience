import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Hadees Trading" },
      { name: "description", content: "Field notes on public procurement, compliance operations and building software that ships." },
      { property: "og:title", content: "Insights — Hadees Trading" },
      { property: "og:description", content: "Field notes from the Hadees team." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Insights,
});

const posts = [
  { t: "The tender you should not have submitted", d: "Nov 2026", c: "Procurement", r: "6 min" },
  { t: "POPIA in practice: three artifacts that satisfy auditors", d: "Oct 2026", c: "Compliance", r: "8 min" },
  { t: "Why we ship React on the edge — and when we don't", d: "Sep 2026", c: "Engineering", r: "5 min" },
  { t: "Retrieval-augmented generation, without the theatre", d: "Sep 2026", c: "AI", r: "7 min" },
  { t: "B-BBEE strategy for founder-led firms", d: "Aug 2026", c: "Compliance", r: "9 min" },
  { t: "The internal platform playbook for services businesses", d: "Jul 2026", c: "Engineering", r: "10 min" },
];

function Insights() {
  return (
    <main className="pt-32">
      <section className="hero-bg grain pb-20 pt-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Insights</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] sm:text-7xl text-balance">
            Field notes from the <span className="italic text-[color:var(--gold)]">practice</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">Short reads on procurement, compliance and building software that actually reaches production.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Link key={i} to="/insights" className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-foreground/30">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-mono uppercase tracking-[0.2em]">{p.c}</span>
                <span>{p.r}</span>
              </div>
              <h2 className="mt-6 font-display text-2xl leading-tight text-balance">{p.t}</h2>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{p.d}</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
