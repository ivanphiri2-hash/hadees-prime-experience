import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Building2, CheckCircle2, Clock, Download, FileText, ShieldCheck } from "lucide-react";
import { COMPLIANCE, buildComplianceDoc, findCompliance, type ComplianceItem } from "@/lib/compliance";
import { ScheduleDemoModal } from "@/components/schedule-demo-modal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/compliance/$slug")({
  loader: ({ params }) => {
    const item = findCompliance(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Compliance programme not found — Hadees Trading" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const c = loaderData.item;
    const title = `${c.title} — Compliance Hub | Hadees Trading`;
    const description = `${c.short} Authority: ${c.authority}. Turnaround: ${c.turnaround}. Download the readiness pack or get expert help.`;
    const canonical = `/compliance/${c.slug}`;
    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    const articleLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: c.title,
      description: c.short,
      about: c.category,
      author: { "@type": "Organization", name: "Hadees Trading Pty Ltd" },
      publisher: { "@type": "Organization", name: "Hadees Trading Pty Ltd" },
      mainEntityOfPage: canonical,
    };
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonical },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(faqLd) },
        { type: "application/ld+json", children: JSON.stringify(articleLd) },
      ],
    };
  },
  notFoundComponent: ComplianceNotFound,
  errorComponent: ({ error, reset }) => (
    <main className="mx-auto max-w-3xl px-6 pt-40">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Error</p>
      <h1 className="mt-4 font-display text-4xl">This programme couldn't load.</h1>
      <p className="mt-3 text-muted-foreground">{error?.message ?? "Unexpected error."}</p>
      <button onClick={() => reset()} className="mt-6 rounded-full border border-border px-4 py-2 text-sm">Try again</button>
    </main>
  ),
  component: ComplianceDetail,
});

function ComplianceDetail() {
  const { item } = Route.useLoaderData() as { item: ComplianceItem };
  const [scheduleOpen, setScheduleOpen] = useState(false);

  const download = (assetName: string) => {
    const blob = new Blob([buildComplianceDoc(item, assetName)], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${item.slug}__${assetName.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const related = COMPLIANCE.filter((c) => c.slug !== item.slug && c.category === item.category).slice(0, 3);

  return (
    <main className="pt-32">
      <section className="hero-bg grain">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <Link to="/compliance" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-3.5" /> All compliance programmes
          </Link>
          <div className="mt-6 flex items-center gap-2 text-xs">
            <span className="rounded-full border border-border bg-card px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{item.code}</span>
            <span className="text-muted-foreground">· {item.category}</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mt-4 font-display text-4xl leading-[1.05] sm:text-6xl text-balance"
          >
            {item.title}
          </motion.h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{item.short}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Meta k="Authority" v={item.authority} icon={<Building2 className="size-3.5" />} />
            <Meta k="Validity" v={item.validity} icon={<ShieldCheck className="size-3.5" />} />
            <Meta k="Turnaround" v={item.turnaround} icon={<Clock className="size-3.5" />} />
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-6 py-14">
        <p className="text-lg leading-relaxed text-foreground/90">{item.summary}</p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Panel title="What you need to submit">
            <ul className="mt-4 space-y-2.5">
              {item.requirements.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[color:var(--gold)]" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel title="Why it matters">
            <ul className="mt-4 space-y-2.5">
              {item.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-2xl">Downloadable readiness pack</h2>
          <p className="mt-2 text-sm text-muted-foreground">Client-generated summaries. Always verify against the authority's latest guidance before submission.</p>
          <ul className="mt-4 divide-y divide-border rounded-2xl border border-border">
            {item.assets.map((a) => (
              <li key={a.name} className="flex items-center justify-between gap-4 px-4 py-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-card">
                    <FileText className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{a.name}</p>
                    <p className="text-xs text-muted-foreground">{a.kind} · {a.size}</p>
                  </div>
                </div>
                <button
                  onClick={() => download(a.name)}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs hover:bg-accent"
                >
                  <Download className="size-3.5" /> Download
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-2xl">Frequently asked</h2>
          <Accordion type="single" collapsible className="mt-4 w-full">
            {item.faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-lg hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border p-8 sm:p-12" style={{ background: "var(--gradient-ink)" }}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">Hand this to our team</p>
          <h3 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
            Compliant, current, and audit-ready — <span className="italic text-[color:var(--gold)]">without the paper chase.</span>
          </h3>
          <p className="mt-4 max-w-xl text-white/70">
            Book a 30-minute working session. We'll scope the {item.code} workflow for your business and quote a fixed price envelope.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setScheduleOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
            >
              Schedule compliance session <ArrowRight className="size-4" />
            </button>
            <Link to="/compliance" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">
              See other programmes
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Related programmes</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to="/compliance/$slug" params={{ slug: r.slug }} className="rounded-2xl border border-border bg-card p-4 hover:border-foreground/30">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{r.code}</p>
                  <p className="mt-2 font-display text-lg leading-tight">{r.title}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <ScheduleDemoModal
        open={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
        defaultUseCase="compliance"
        source={`compliance:${item.code}`}
      />
    </main>
  );
}

function Meta({ k, v, icon }: { k: string; v: string; icon?: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-4 backdrop-blur">
      <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{icon}{k}</p>
      <p className="mt-2 text-sm">{v}</p>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6">
      <h2 className="font-display text-2xl">{title}</h2>
      {children}
    </section>
  );
}

function ComplianceNotFound() {
  const params = Route.useParams();
  return (
    <main className="mx-auto max-w-3xl px-6 pt-40">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">404</p>
      <h1 className="mt-4 font-display text-4xl">No compliance programme at "{params.slug}".</h1>
      <p className="mt-3 text-muted-foreground">It may have moved or been renamed.</p>
      <Link to="/compliance" className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm">
        <ArrowLeft className="size-3.5" /> Back to Compliance Hub
      </Link>
    </main>
  );
}
