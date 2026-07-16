import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { FileCheck2, ShieldCheck, Globe2, Cpu, Building2, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Hadees Trading" },
      { name: "description", content: "Tender management, compliance advisory, web & product engineering and AI solutions — delivered by a senior South African team." },
      { property: "og:title", content: "Services — Hadees Trading" },
      { property: "og:description", content: "Four practices, one senior team, delivered end-to-end." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const practices = [
  {
    icon: FileCheck2, title: "Tender & Procurement Hub", tag: "Practice 01",
    desc: "From CSD registration and bid discovery to response engineering, pricing strategy and post-award compliance.",
    includes: ["Opportunity radar", "Response drafting", "Pricing & BOQ modelling", "Sworn affidavits", "Award handover"],
  },
  {
    icon: ShieldCheck, title: "Compliance Advisory", tag: "Practice 02",
    desc: "POPIA, B-BBEE, SARS and ISO-aligned processes with auditable evidence trails your board can defend.",
    includes: ["POPIA data mapping", "DPIA workshops", "B-BBEE strategy", "Tax & CSD upkeep", "ISO 27001 alignment"],
  },
  {
    icon: Globe2, title: "Web & Product Engineering", tag: "Practice 03",
    desc: "High-conversion marketing sites and internal platforms on modern React, edge-rendered and instrumented.",
    includes: ["Design systems", "Marketing sites", "Client portals", "CMS & headless", "Analytics + A/B"],
  },
  {
    icon: Cpu, title: "AI Solutions", tag: "Practice 04",
    desc: "Retrieval, agents and workflow automation tuned to your data, with governance you can put in a policy.",
    includes: ["RAG on private data", "Workflow automation", "Voice & doc AI", "Governance & evals", "Ops integration"],
  },
  {
    icon: Building2, title: "Government Liaison", tag: "Bench",
    desc: "Structured engagement with departments, SOEs and municipal supply chains.",
    includes: ["Stakeholder maps", "Briefing decks", "Site visits", "Partnership models"],
  },
  {
    icon: Sparkles, title: "Growth & Brand", tag: "Bench",
    desc: "Positioning, sales enablement and CRO for teams selling complex services.",
    includes: ["Positioning", "Narrative", "Sales collateral", "CRO experiments"],
  },
];

function ServicesPage() {
  return (
    <main className="pt-32">
      <section className="hero-bg grain pb-20 pt-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Services</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] sm:text-7xl text-balance">
            One team, priced <span className="italic text-[color:var(--gold)]">by outcome</span>, not by hour.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">Six capabilities that co-deliver so your evidence, product and go-to-market ship on the same clock.</p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-2">
          {practices.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-foreground/30"
            >
              <div className="flex items-center justify-between">
                <div className="grid size-11 place-items-center rounded-xl border border-border bg-background"><p.icon className="size-5" /></div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.tag}</span>
              </div>
              <h2 className="mt-6 font-display text-3xl">{p.title}</h2>
              <p className="mt-3 text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 grid grid-cols-2 gap-2">
                {p.includes.map((f) => (
                  <li key={f} className="inline-flex items-center gap-2 text-sm">
                    <CheckCircle2 className="size-3.5 text-[color:var(--gold)]" />{f}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">
            Scope an engagement <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
