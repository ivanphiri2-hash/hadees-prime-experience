import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";
import {
  Search, SlidersHorizontal, Download, FileText, MapPin, Building2,
  Clock, ArrowRight, X, CheckCircle2, ArrowUpRight, Send,
} from "lucide-react";
import {
  TENDERS, CATEGORIES, PROVINCES, STATUSES, daysUntil, buildTenderDoc,
  type Tender, type TenderCategory, type TenderStatus,
} from "@/lib/tenders";
import { ScheduleDemoModal } from "@/components/schedule-demo-modal";

export const Route = createFileRoute("/tenders")({
  head: () => ({
    meta: [
      { title: "Tender Hub — Live public-sector opportunities | Hadees Trading" },
      { name: "description", content: "Search live South African public and parastatal tenders. Download brief packs, monitor closing dates, and prepare a compliant response with Hadees Trading." },
      { property: "og:title", content: "Tender Hub — Hadees Trading" },
      { property: "og:description", content: "A curated feed of live public-sector tenders with downloadable brief packs and compliance guidance." },
      { property: "og:url", content: "/tenders" },
    ],
    links: [{ rel: "canonical", href: "/tenders" }],
  }),
  component: TendersPage,
});

const EASE = [0.16, 1, 0.3, 1] as const;

function TendersPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<TenderCategory | "All">("All");
  const [prov, setProv] = useState<string>("All");
  const [status, setStatus] = useState<TenderStatus | "All">("All");
  const [sort, setSort] = useState<"closing" | "published" | "budget">("closing");
  const [selected, setSelected] = useState<Tender | null>(null);
  const [respondTo, setRespondTo] = useState<Tender | null>(null);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    let r = TENDERS.filter((t) => {
      if (cat !== "All" && t.category !== cat) return false;
      if (prov !== "All" && t.province !== prov) return false;
      if (status !== "All" && t.status !== status) return false;
      if (!s) return true;
      return (
        t.title.toLowerCase().includes(s) ||
        t.organ.toLowerCase().includes(s) ||
        t.reference.toLowerCase().includes(s) ||
        t.summary.toLowerCase().includes(s)
      );
    });
    r = [...r].sort((a, b) => {
      if (sort === "closing") return +new Date(a.closingAt) - +new Date(b.closingAt);
      if (sort === "published") return +new Date(b.publishedAt) - +new Date(a.publishedAt);
      return b.budget.length - a.budget.length;
    });
    return r;
  }, [q, cat, prov, status, sort]);

  const stats = {
    open: TENDERS.filter((t) => t.status === "Open").length,
    closing: TENDERS.filter((t) => t.status === "Closing soon").length,
    total: TENDERS.length,
  };

  const download = (t: Tender, docName: string) => {
    const blob = new Blob([buildTenderDoc(t, docName)], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${t.reference.replace(/[^\w-]+/g, "_")}__${docName.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="pt-32">
      {/* HEADER */}
      <section className="hero-bg grain">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-[var(--gold)]" /> Tender Hub · Live
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl text-balance">
              Public-sector opportunity, <span className="italic text-[color:var(--gold)]">without the noise.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              A curated feed of live South African tenders across national, provincial and municipal buyers. Search, filter, and download a brief pack you can act on today.
            </p>
          </motion.div>

          {/* stat cards */}
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { k: "Open tenders", v: stats.open, s: "Actively receiving bids" },
              { k: "Closing this week", v: stats.closing, s: "Priority attention" },
              { k: "In monitored feed", v: stats.total, s: "Refreshed daily" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.k}</p>
                <p className="mt-2 font-display text-4xl">{s.v}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH & FILTERS */}
      <section className="sticky top-20 z-20 border-y border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by title, reference, organ or keyword…"
                className="w-full rounded-full border border-border bg-background pl-11 pr-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground/40"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Select value={cat} onChange={setCat as any} label="Category" options={["All", ...CATEGORIES]} />
              <Select value={prov} onChange={setProv} label="Province" options={["All", ...PROVINCES]} />
              <Select value={status} onChange={setStatus as any} label="Status" options={["All", ...STATUSES]} />
              <Select value={sort} onChange={setSort as any} label="Sort" options={["closing", "published", "budget"]} icon={<SlidersHorizontal className="size-3.5" />} />
            </div>
          </div>

          {(q || cat !== "All" || prov !== "All" || status !== "All") && (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-muted-foreground">Active:</span>
              {q && <Chip onClear={() => setQ("")}>“{q}”</Chip>}
              {cat !== "All" && <Chip onClear={() => setCat("All")}>{cat}</Chip>}
              {prov !== "All" && <Chip onClear={() => setProv("All")}>{prov}</Chip>}
              {status !== "All" && <Chip onClear={() => setStatus("All")}>{status}</Chip>}
              <button onClick={() => { setQ(""); setCat("All"); setProv("All"); setStatus("All"); }} className="ml-2 text-muted-foreground underline underline-offset-4 hover:text-foreground">
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-6 flex items-baseline justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {results.length} {results.length === 1 ? "result" : "results"}
            </p>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Need a bid response? <span className="underline underline-offset-4">Talk to us →</span>
            </Link>
          </div>

          {results.length === 0 ? (
            <div className="grid place-items-center rounded-2xl border border-dashed border-border py-24 text-center">
              <p className="font-display text-2xl">No tenders match those filters.</p>
              <p className="mt-2 text-sm text-muted-foreground">Try widening your category or clearing the search.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {results.map((t, i) => (
                <TenderRow key={t.id} t={t} i={i} onOpen={() => setSelected(t)} onDownload={(name) => download(t, name)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* HELP CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border p-10 sm:p-14" style={{ background: "var(--gradient-ink)" }}>
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">Tender support</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
                We don't just find tenders. <span className="italic text-[color:var(--gold)]">We help you win them.</span>
              </h2>
              <p className="mt-5 max-w-lg text-white/70">
                Documentation, compliance review, response drafting and submission — one team, one price envelope, one owner on your side.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90">
                  Book a bid review <ArrowRight className="size-4" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">
                  See tender services
                </Link>
              </div>
            </div>
            <ul className="grid gap-2 text-sm text-white/80">
              {["CSD & compliance readiness in 48h", "Response drafting & pricing strategy", "Submission checklist and dry-run", "Post-award contracting support"].map((x) => (
                <li key={x} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[color:var(--gold)]" />{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DRAWER */}
      <AnimatePresence>
        {selected && (
          <TenderDrawer
            t={selected}
            onClose={() => setSelected(null)}
            onDownload={(name) => download(selected, name)}
            onRespond={() => { const t = selected; setSelected(null); setRespondTo(t); }}
          />
        )}
      </AnimatePresence>

      <ScheduleDemoModal
        open={!!respondTo}
        onClose={() => setRespondTo(null)}
        defaultUseCase="compliance"
        source={respondTo ? `tender:${respondTo.reference}` : "tenders"}
      />
    </main>
  );
}

/* ---------------- pieces ---------------- */

function TenderRow({ t, i, onOpen, onDownload }: { t: Tender; i: number; onOpen: () => void; onDownload: (n: string) => void }) {
  const days = daysUntil(t.closingAt);
  const urgency = t.status === "Awarded" ? "muted" : days <= 3 ? "danger" : days <= 10 ? "warn" : "ok";
  const badgeCls =
    urgency === "danger" ? "bg-rose-500/12 text-rose-500 border-rose-500/20" :
    urgency === "warn"   ? "bg-[color:var(--gold)]/15 text-[color:var(--gold)] border-[color:var(--gold)]/25" :
    urgency === "ok"     ? "bg-emerald-500/12 text-emerald-500 border-emerald-500/20" :
                           "bg-muted text-muted-foreground border-border";

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.4, ease: EASE, delay: Math.min(i * 0.03, 0.2) }}
      className="group grid gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/30 md:grid-cols-[1fr_auto] md:items-center"
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            {t.reference}
          </span>
          <span className={`rounded-full border px-2 py-0.5 text-[11px] ${badgeCls}`}>
            {t.status === "Awarded" ? "Awarded" : days <= 0 ? "Closed" : `Closes in ${days}d`}
          </span>
          <span className="text-muted-foreground">· {t.category}</span>
        </div>
        <h3 className="mt-3 font-display text-2xl leading-tight text-balance">
          <button onClick={onOpen} className="text-left hover:underline underline-offset-4 decoration-[color:var(--gold)]">
            {t.title}
          </button>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{t.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Building2 className="size-3.5" />{t.organ}</span>
          <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5" />{t.province}</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" />Closes {new Date(t.closingAt).toDateString()}</span>
          <span className="font-mono">{t.budget}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 md:flex-col md:items-end">
        <button
          onClick={() => onDownload(t.documents[0].name)}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background hover:opacity-90"
        >
          <Download className="size-3.5" /> Download brief
        </button>
        <button onClick={onOpen} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground">
          View pack <ArrowUpRight className="size-3.5" />
        </button>
      </div>
    </motion.article>
  );
}

function TenderDrawer({ t, onClose, onDownload }: { t: Tender; onClose: () => void; onDownload: (n: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.aside
        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 240, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="ml-auto flex h-full w-full max-w-xl flex-col overflow-y-auto bg-background shadow-2xl"
      >
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/90 px-6 py-4 backdrop-blur">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.reference}</span>
          <button onClick={onClose} aria-label="Close" className="grid size-9 place-items-center rounded-full border border-border">
            <X className="size-4" />
          </button>
        </header>

        <div className="px-6 py-8">
          <h2 className="font-display text-3xl leading-tight text-balance">{t.title}</h2>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Building2 className="size-3.5" />{t.organ}</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5" />{t.province}</span>
            <span>· {t.category}</span>
            <span className="font-mono">{t.budget}</span>
          </div>

          <p className="mt-6 text-sm text-foreground/90">{t.summary}</p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <Meta k="Published" v={new Date(t.publishedAt).toDateString()} />
            <Meta k="Closing" v={new Date(t.closingAt).toDateString()} />
            <Meta k="Status" v={t.status} />
            <Meta k="Budget" v={t.budget} />
          </div>

          <div className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Downloadable documents</p>
            <ul className="mt-3 divide-y divide-border rounded-2xl border border-border">
              {t.documents.map((d) => (
                <li key={d.name} className="flex items-center justify-between gap-4 px-4 py-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-card">
                      <FileText className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{d.name}</p>
                      <p className="text-xs text-muted-foreground">{d.kind} · {d.size}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onDownload(d.name)}
                    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs hover:bg-accent"
                  >
                    <Download className="size-3.5" /> Download
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] text-muted-foreground">
              Sample brief packs generated by Hadees Trading for evaluation. Always confirm against the buyer's official RFP.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-5">
            <p className="font-display text-lg">Want us to draft the full response?</p>
            <p className="mt-1 text-sm text-muted-foreground">We'll produce a compliant submission with pricing strategy and a signed evidence pack.</p>
            <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background">
              Request bid support <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </motion.aside>
    </motion.div>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{k}</p>
      <p className="mt-1 text-sm">{v}</p>
    </div>
  );
}

function Chip({ children, onClear }: { children: React.ReactNode; onClear: () => void }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1">
      {children}
      <button onClick={onClear} aria-label="Remove" className="ml-1 text-muted-foreground hover:text-foreground">
        <X className="size-3" />
      </button>
    </span>
  );
}

function Select<T extends string>({ value, onChange, label, options, icon }:
  { value: T; onChange: (v: T) => void; label: string; options: readonly T[] | T[]; icon?: React.ReactNode }) {
  return (
    <label className="relative inline-flex items-center gap-2 rounded-full border border-border bg-background pl-3 pr-2 py-1.5 text-xs">
      {icon}
      <span className="text-muted-foreground">{label}:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="bg-transparent pr-6 outline-none capitalize"
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
