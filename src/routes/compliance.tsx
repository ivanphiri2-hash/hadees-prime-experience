import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { ArrowRight, ShieldCheck, Clock, Building2, Search } from "lucide-react";
import { COMPLIANCE, COMPLIANCE_CATEGORIES, type ComplianceCategory } from "@/lib/compliance";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Compliance Hub — CSD, B-BBEE, CIDB, POPIA & more | Hadees Trading" },
      { name: "description", content: "Practical readiness packs for every South African compliance programme — CSD, SARS, B-BBEE, CIDB, NHBRC, COIDA, POPIA and CIPC. Download checklists and get expert help." },
      { property: "og:title", content: "Compliance Hub — Hadees Trading" },
      { property: "og:description", content: "SEO-friendly compliance guides with downloadable readiness packs and expert follow-through." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/compliance" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/compliance" }],
  }),
  component: CompliancePage,
});

const EASE = [0.16, 1, 0.3, 1] as const;

function CompliancePage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<ComplianceCategory | "All">("All");

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    return COMPLIANCE.filter((c) => {
      if (cat !== "All" && c.category !== cat) return false;
      if (!s) return true;
      return (
        c.title.toLowerCase().includes(s) ||
        c.code.toLowerCase().includes(s) ||
        c.short.toLowerCase().includes(s) ||
        c.authority.toLowerCase().includes(s)
      );
    });
  }, [q, cat]);

  return (
    <main className="pt-32">
      <section className="hero-bg grain">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
              <ShieldCheck className="size-3.5 text-[color:var(--gold)]" /> Compliance Hub · Ready-to-use
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl text-balance">
              Every South African compliance programme, <span className="italic text-[color:var(--gold)]">one shelf.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Download the readiness pack, follow the checklist, or hand the whole workflow to our team. Built for founders who bid, sell and hire in regulated markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* filters */}
      <section className="sticky top-20 z-20 border-y border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <label htmlFor="compliance-search" className="sr-only">Search compliance programmes</label>
              <input
                id="compliance-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search a programme, authority or code…"
                className="w-full rounded-full border border-border bg-background pl-11 pr-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground/40"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {(["All", ...COMPLIANCE_CATEGORIES] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${cat === c ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:text-foreground"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {results.length} {results.length === 1 ? "programme" : "programmes"}
          </p>
          {results.length === 0 ? (
            <div className="grid place-items-center rounded-2xl border border-dashed border-border py-24 text-center">
              <p className="font-display text-2xl">Nothing matches those filters.</p>
              <p className="mt-2 text-sm text-muted-foreground">Try clearing the search or picking another category.</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {results.map((c, i) => (
                <motion.article
                  key={c.slug}
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: EASE, delay: Math.min(i * 0.04, 0.24) }}
                  className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/30"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{c.code}</span>
                    <span className="text-muted-foreground">· {c.category}</span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl leading-tight text-balance">
                    <Link to="/compliance/$slug" params={{ slug: c.slug }} className="hover:underline underline-offset-4 decoration-[color:var(--gold)]">
                      {c.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{c.short}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><Building2 className="size-3.5" />{c.authority}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" />{c.turnaround}</span>
                  </div>
                  <div className="mt-5">
                    <Link
                      to="/compliance/$slug"
                      params={{ slug: c.slug }}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium hover:bg-accent"
                    >
                      Open readiness pack <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
