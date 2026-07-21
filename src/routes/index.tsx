import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  ArrowUpRight, ArrowRight, ShieldCheck, FileCheck2, Sparkles, Globe2, Cpu, Building2,
  CheckCircle2, Star, Quote,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BusinessSolutions } from "@/components/business-solutions";
import { IvanOS } from "@/components/ivan-os";
import { ScheduleDemoModal } from "@/components/schedule-demo-modal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hadees Trading — Procurement, compliance & digital growth partner" },
      { name: "description", content: "Public-sector tender management, compliance advisory, custom web platforms and AI solutions for South African enterprises and government suppliers." },
      { property: "og:title", content: "Hadees Trading — Enterprise procurement & digital partner" },
      { property: "og:description", content: "From tender wins to AI-powered platforms — one senior team, four practices, measurable outcomes." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <BusinessSolutions />
      <IvanOS />
      <Metrics />
      <Compliance />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden hero-bg grain pt-36 pb-28 sm:pt-44 sm:pb-36">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-[var(--gold)]" />
            <span className="font-mono uppercase tracking-[0.18em]">Est. 2025 · Mahikeng</span>
          </div>

          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-balance sm:text-7xl md:text-[88px]">
            Enterprise capability,{" "}
            <span className="italic text-[color:var(--gold)]">without the enterprise</span> friction.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
            Hadees Trading is a South African partner for tender management, compliance advisory, custom web platforms and AI solutions — engineered by a senior team obsessed with measurable outcomes.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5">
              Book a discovery call <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-medium backdrop-blur hover:bg-background">
              Explore capabilities
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {["CSD registered", "B-BBEE Level 1 contributor", "POPIA compliant", "ISO-aligned processes"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-[color:var(--gold)]" />{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Preview card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="relative rounded-2xl border border-border/60 bg-[var(--elevated)] shadow-[var(--shadow-elevated)] overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-[oklch(0.7_0.18_25)]" />
                <div className="size-2.5 rounded-full bg-[oklch(0.82_0.14_85)]" />
                <div className="size-2.5 rounded-full bg-[oklch(0.7_0.15_150)]" />
              </div>
              <div className="mx-auto font-mono text-xs text-muted-foreground">hadees.trading / portfolio</div>
            </div>
            <div className="grid grid-cols-3 gap-px bg-border/50 p-px">
              {[
                { k: "Active tenders", v: "12", s: "R248M pipeline" },
                { k: "Compliance score", v: "98.4%", s: "Across 34 audits" },
                { k: "Platforms shipped", v: "47", s: "Since inception" },
              ].map((m) => (
                <div key={m.k} className="bg-[var(--elevated)] p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{m.k}</p>
                  <p className="mt-2 font-display text-4xl">{m.v}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{m.s}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-40 bg-gradient-to-t from-background to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- TRUST BAR ---------------- */

function TrustBar() {
  const logos = ["Metro Council", "Treasury SA", "Ubuntu Health", "Nexlink Group", "Ithemba Bank", "GreenCorp", "SanDune Logistics", "Sasol Ventures"];
  return (
    <section className="border-y border-border/50 bg-[var(--elevated)]/50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Trusted by public and private sector clients</p>
        <div className="mt-6 overflow-hidden">
          <div className="flex gap-14 marquee whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="font-display text-2xl text-muted-foreground/70">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES (BENTO) ---------------- */

const services = [
  {
    icon: FileCheck2, title: "Tender & Procurement Hub",
    body: "Bid discovery, response engineering, and post-award compliance — from CSD registration to award.",
    tag: "Practice 01", featured: true,
  },
  { icon: ShieldCheck, title: "Compliance Advisory", body: "POPIA, B-BBEE, SARS and ISO-aligned processes with auditable evidence trails.", tag: "Practice 02" },
  { icon: Globe2, title: "Web & Product Engineering", body: "High-conversion sites and internal platforms built on modern React, edge-rendered.", tag: "Practice 03" },
  { icon: Cpu, title: "AI Solutions", body: "Retrieval, agents and workflow automation tuned to your data and governance model.", tag: "Practice 04" },
  { icon: Building2, title: "Government Liaison", body: "Structured engagement with departments, SOEs and municipal supply chains.", tag: "Bench" },
  { icon: Sparkles, title: "Growth & Brand", body: "Positioning, sales enablement and CRO for teams selling complex services.", tag: "Bench" },
];

function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Capabilities" title={<>Four practices,<br /> one senior team.</>} lede="No agency layers, no offshore hand-offs. Every engagement is led by a practice partner from day one." />

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-colors hover:border-foreground/30 ${s.featured ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <div className="flex items-start justify-between">
                <div className="grid size-11 place-items-center rounded-xl border border-border bg-background">
                  <s.icon className="size-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.tag}</span>
              </div>
              <h3 className={`mt-6 font-display ${s.featured ? "text-4xl md:text-5xl" : "text-2xl"} tracking-tight`}>{s.title}</h3>
              <p className={`mt-3 text-muted-foreground ${s.featured ? "max-w-md text-base" : "text-sm"}`}>{s.body}</p>

              {s.featured && (
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {["CSD & tax clearance", "Bid drafting", "Pricing strategy", "Award compliance"].map((f) => (
                    <div key={f} className="flex items-center gap-2 rounded-lg border border-border bg-background/50 px-3 py-2 text-xs">
                      <CheckCircle2 className="size-3.5 text-[color:var(--gold)]" />{f}
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8 inline-flex items-center gap-1.5 text-sm text-foreground/80 group-hover:text-foreground">
                Learn more <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- METRICS ---------------- */

function Metrics() {
  const stats = [
    { v: "R1.2B+", k: "Tender value managed" },
    { v: "97%", k: "Client retention rate" },
    { v: "24h", k: "Average response time" },
    { v: "6yrs", k: "Compounding expertise" },
  ];
  return (
    <section className="border-y border-border/60 bg-[var(--elevated)]/40 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.k}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <p className="font-display text-5xl md:text-6xl tracking-tight">{s.v}</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.k}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- COMPLIANCE ---------------- */

function Compliance() {
  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader eyebrow="Compliance-first" title={<>Boring on paper. <span className="italic text-[color:var(--gold)]">Ruthless</span> in execution.</>} align="left" />
          <p className="mt-6 max-w-lg text-muted-foreground text-pretty">
            Regulatory rigour is not a checkbox — it's how we protect deal velocity. Every engagement ships with an evidence pack your auditors will actually enjoy reading.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Automated POPIA data-mapping and DPIA templates",
              "B-BBEE verification support with sworn affidavit workflow",
              "SARS tax clearance and central supplier database maintenance",
              "ISO 27001-aligned information security controls",
            ].map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 text-[color:var(--gold)]" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Client dashboard</p>
                <p className="font-display text-xl">Q4 Compliance Posture</p>
              </div>
              <span className="rounded-full bg-[color:var(--gold)]/15 px-3 py-1 text-xs text-[color:var(--gold)]">Healthy</span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { l: "POPIA readiness", v: 98 },
                { l: "B-BBEE evidence", v: 94 },
                { l: "SARS filings", v: 100 },
                { l: "ISO controls", v: 87 },
              ].map((r) => (
                <div key={r.l}>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">{r.l}</span><span className="font-mono">{r.v}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${r.v}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full rounded-full bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--cyan)]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -right-6 -top-6 -z-10 size-64 rounded-full bg-[color:var(--gold)]/10 blur-3xl" />
          <div className="absolute -left-6 -bottom-6 -z-10 size-56 rounded-full bg-[color:var(--cyan)]/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */

function Process() {
  const steps = [
    { n: "01", t: "Diagnose", b: "A working session to map opportunity, constraints and evidence gaps." },
    { n: "02", t: "Architect", b: "A written plan with named owners, milestones and a fixed price envelope." },
    { n: "03", t: "Execute", b: "Weekly delivery cycles, one shared workspace, no silent slippage." },
    { n: "04", t: "Sustain", b: "Handover with training, runbooks and an optional retainer for continuity." },
  ];
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="How we work" title={<>A method built for <span className="italic">boards, not backlogs.</span></>} />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-card p-7">
              <p className="font-display text-5xl text-muted-foreground/60">{s.n}</p>
              <p className="mt-6 font-display text-2xl">{s.t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

function Testimonials() {
  const t = [
    { q: "They shipped a tender response that beat firms three times their size — twice in one quarter.", a: "Nomvula K.", r: "Chief Procurement Officer, public healthcare" },
    { q: "The compliance evidence pack replaced two consultants and a spreadsheet nobody trusted.", a: "David M.", r: "COO, industrial services" },
    { q: "Our platform ships faster than anything we had before. And it actually looks like our brand.", a: "Ayesha P.", r: "Head of Digital, financial services" },
  ];
  return (
    <section className="border-y border-border/60 bg-[var(--elevated)]/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Signal" title={<>What operators say when the <span className="italic">press release is over.</span></>} />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {t.map((x, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <Quote className="size-6 text-[color:var(--gold)]" />
              <blockquote className="mt-5 font-display text-xl leading-snug text-pretty">"{x.q}"</blockquote>
              <figcaption className="mt-8 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{x.a}</p>
                  <p className="text-xs text-muted-foreground">{x.r}</p>
                </div>
                <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-[color:var(--gold)] text-[color:var(--gold)]" />)}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function FAQ() {
  const faqs = [
    { q: "Do you only work with government suppliers?", a: "No. Roughly half our engagements are private-sector — but our team is fluent in public procurement, which makes us useful when your customer is." },
    { q: "How are engagements priced?", a: "Fixed-price for defined scopes and retained monthly for ongoing advisory. We always publish the price envelope before you commit." },
    { q: "Can you rescue a tender we've already started?", a: "Yes — as long as the submission deadline is at least 5 working days away. We've turned around bids with 72 hours on the clock, but comfort is better." },
    { q: "Do you handle the tech and the compliance in one engagement?", a: "That's the point. The four practices are built to co-deliver so evidence, product and go-to-market ship together." },
    { q: "Are you B-BBEE compliant?", a: "Level 1 contributor with 51%+ Black-owned equity. Full sworn affidavit available on request." },
  ];
  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.3fr]">
        <div>
          <SectionHeader eyebrow="FAQ" title={<>Things you were about to ask.</>} align="left" />
          <p className="mt-6 text-muted-foreground">Not here? <Link to="/contact" className="underline underline-offset-4">Ask directly</Link>.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`f-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-lg hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CTA() {
  const [open, setOpen] = useState(false);
  return (
    <section className="px-6 py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border p-10 sm:p-16"
        style={{ background: "var(--gradient-ink)" }}>
        <div className="absolute -right-16 -top-24 size-80 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
        <div className="absolute -left-16 -bottom-24 size-80 rounded-full bg-[color:var(--cyan)]/25 blur-3xl" />
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">Ready when you are</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-white sm:text-6xl text-balance">
            The next tender, platform, or audit doesn't have to be a fire drill.
          </h2>
          <p className="mt-5 max-w-xl text-white/70">Book a 30-minute working session. If we can't help, we'll tell you within the call and point you to someone who can.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
            >
              Schedule a discovery call <ArrowRight className="size-4" />
            </button>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">See our services</Link>
          </div>
        </div>
      </div>
      <ScheduleDemoModal open={open} onClose={() => setOpen(false)} defaultUseCase="ops" source="home-final-cta" />
    </section>
  );
}

/* ---------------- helpers ---------------- */

function SectionHeader({ eyebrow, title, lede, align = "center" }: { eyebrow: string; title: React.ReactNode; lede?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl text-balance">{title}</h2>
      {lede && <p className="mt-5 text-muted-foreground">{lede}</p>}
    </div>
  );
}
