import { motion, useMotionValue, useSpring, useTransform, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Building2, ShieldCheck, FileSearch, Globe2, Bot, Palette,
  ArrowRight, Sparkles, Check, X, Zap, Clock, Award, Users, Lock, MapPin,
  MessageCircle,
} from "lucide-react";
import { useSiteContact, whatsappHref } from "@/lib/site-config";


/* ============================================================
   BUSINESS SOLUTIONS — Layout 2
   Premium replacement for the Services section on the homepage.
   Palette (scoped, does not alter global tokens):
     Navy #0A2540 · Royal #2563EB · Gold #F59E0B
   ============================================================ */

const EASE = [0.16, 1, 0.3, 1] as const;

const SERVICES = [
  {
    icon: Building2,
    title: "Business Registration",
    desc: "From company name reservation to fully compliant CIPC-registered entity.",
    items: ["Company Registration", "MOI", "Tax Number", "Annual Returns"],
    accent: "from-[#2563EB] to-[#0A2540]",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    desc: "Regulatory readiness that unlocks contracts, credit and public-sector work.",
    items: ["COIDA", "CIDB", "NHBRC", "CSD", "BEE", "Tax Clearance"],
    accent: "from-[#F59E0B] to-[#B45309]",
  },
  {
    icon: Globe2,
    title: "Website Development",
    desc: "High-performance sites and stores engineered for conversion and scale.",
    items: ["Business Websites", "Corporate Websites", "E-Commerce", "Automation", "Hosting"],
    accent: "from-[#2563EB] to-[#1E40AF]",
  },
  {
    icon: FileSearch,
    title: "Tender Support",
    desc: "Bid-ready documentation and end-to-end submission management.",
    items: ["Documentation", "Compliance Review", "Submission Assistance", "Tender Monitoring"],
    accent: "from-[#0A2540] to-[#2563EB]",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    desc: "Operational AI that answers, sells and coordinates around the clock.",
    items: ["IVAN OS", "Business Automation", "AI Assistants", "WhatsApp Automation", "CRM Systems"],
    accent: "from-[#F59E0B] to-[#D97706]",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "A credible, coherent brand system across every client touchpoint.",
    items: ["Logo Design", "Company Profiles", "Letterheads", "Invoices", "Email Setup"],
    accent: "from-[#2563EB] to-[#0A2540]",
  },
] as const;

export function BusinessSolutions() {
  return (
    <section id="services" className="relative overflow-hidden py-28">
      {/* subtle grid + mesh, scoped */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(700px 400px at 12% 10%, rgba(37,99,235,0.14), transparent 60%), radial-gradient(600px 380px at 92% 30%, rgba(245,158,11,0.10), transparent 60%)",
          }}
        />
        <div className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ---------- SPLIT HERO ---------- */}
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(15,23,42,0.08)] bg-white/70 dark:bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#2563EB]">
              <span className="size-1.5 rounded-full bg-[#F59E0B]" /> Business Solutions
            </span>
            <h2 className="mt-5 font-display text-5xl leading-[1.02] sm:text-6xl md:text-[76px] text-balance">
              Business solutions built{" "}
              <span className="italic text-[#2563EB]">for growth.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
              Helping entrepreneurs, contractors and businesses register, comply, grow and automate through premium business solutions.
            </p>

            <div className="mt-8 grid max-w-md grid-cols-3 gap-4">
              {[
                { v: "1000+", k: "Businesses" },
                { v: "24h", k: "Response" },
                { v: "98%", k: "Satisfaction" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-[rgba(15,23,42,0.08)] bg-white/60 dark:bg-white/[0.03] p-4 backdrop-blur">
                  <p className="font-display text-3xl leading-none text-[#0A2540] dark:text-white">{s.v}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{s.k}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton to="/contact" variant="primary">
                Get started <ArrowRight className="size-4" />
              </MagneticButton>
              <MagneticButton to="/services" variant="ghost">
                Explore capabilities
              </MagneticButton>
            </div>
          </motion.div>

          {/* ---------- ECOSYSTEM ILLUSTRATION ---------- */}
          <Ecosystem />
        </div>

        {/* ---------- SERVICES GRID ---------- */}
        <div className="mt-28">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Six practices</p>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl">A stack for every stage of business.</h3>
            </div>
            <Link to="/services" className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              All services <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} s={s} i={i} />
            ))}
          </div>
        </div>

        {/* ---------- METRICS STRIP ---------- */}
        <MetricsStrip />

        {/* ---------- PROCESS TIMELINE ---------- */}
        <ProcessTimeline />

        {/* ---------- WHY HADEES ---------- */}
        <WhyHadees />

        {/* ---------- TRUST CARDS ---------- */}
        <TrustGrid />

        {/* ---------- IMMERSIVE CTA ---------- */}
        <ImmersiveCTA />
      </div>
    </section>
  );
}

/* ---------------- Ecosystem ---------------- */

function Ecosystem() {
  const nodes = [
    { icon: Building2, label: "Registration", x: 50, y: 12 },
    { icon: ShieldCheck, label: "Compliance", x: 88, y: 34 },
    { icon: FileSearch, label: "Tender Support", x: 82, y: 78 },
    { icon: Globe2, label: "Web Development", x: 18, y: 78 },
    { icon: Bot, label: "AI Automation", x: 12, y: 34 },
    { icon: Palette, label: "Brand Identity", x: 50, y: 92 },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative mx-auto aspect-square w-full max-w-[520px]"
    >
      {/* rings */}
      <div className="absolute inset-0 rounded-full border border-[rgba(37,99,235,0.15)]" />
      <div className="absolute inset-[10%] rounded-full border border-[rgba(37,99,235,0.12)]" />
      <div className="absolute inset-[22%] rounded-full border border-[rgba(37,99,235,0.10)]" />

      {/* glow core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid size-28 place-items-center rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#2563EB] text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)]">
          <span className="font-display text-3xl leading-none">H</span>
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[#F59E0B] px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-[#0A2540]">Hadees</span>
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/20" />
        </div>
      </div>

      {/* connecting lines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        {nodes.map((n, i) => (
          <line key={i} x1="50" y1="50" x2={n.x} y2={n.y}
            stroke="url(#hg)" strokeWidth="0.25" strokeDasharray="1.2 1.2"
            className="[stroke-dashoffset:0] [animation:dash_6s_linear_infinite]" />
        ))}
        <defs>
          <linearGradient id="hg" x1="0" x2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
      <style>{`@keyframes dash { to { stroke-dashoffset: -24 } }`}</style>

      {/* floating nodes */}
      {nodes.map((n, i) => (
        <motion.div
          key={n.label}
          initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: EASE }}
          animate={{ y: [0, -6, 0] }}
          style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${i * 0.3}s` }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex items-center gap-2 rounded-full border border-[rgba(15,23,42,0.08)] bg-white/85 dark:bg-white/[0.08] px-3 py-1.5 backdrop-blur-md shadow-[0_10px_30px_rgba(10,37,64,0.12)]">
            <n.icon className="size-3.5 text-[#2563EB]" />
            <span className="text-xs font-medium text-[#0A2540] dark:text-white">{n.label}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ---------------- Service card w/ mouse parallax ---------------- */

function ServiceCard({ s, i }: { s: typeof SERVICES[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 180, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 180, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref} onMouseMove={onMove} onMouseLeave={reset}
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative overflow-hidden rounded-[24px] border border-[rgba(15,23,42,0.08)] bg-white/70 dark:bg-white/[0.03] p-7 backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_30px_80px_-20px_rgba(10,37,64,0.35)]"
    >
      {/* animated border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "linear-gradient(120deg, transparent 30%, rgba(37,99,235,0.14), transparent 70%)",
        }}
      />
      {/* gradient highlight */}
      <div className={`absolute -right-16 -top-16 size-48 rounded-full bg-gradient-to-br ${s.accent} opacity-[0.14] blur-2xl transition-opacity duration-500 group-hover:opacity-30`} />

      <div className="relative flex items-start justify-between">
        <motion.div
          whileHover={{ rotate: -6, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${s.accent} text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)]`}
        >
          <s.icon className="size-6" />
        </motion.div>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">0{i + 1}</span>
      </div>

      <h3 className="relative mt-7 font-display text-2xl text-[#0A2540] dark:text-white">{s.title}</h3>
      <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {s.items.map((it) => (
          <span key={it} className="inline-flex items-center gap-1 rounded-full border border-[rgba(15,23,42,0.08)] bg-white/60 dark:bg-white/[0.04] px-2.5 py-1 text-[11px] text-foreground/80">
            <Check className="size-3 text-[#F59E0B]" />{it}
          </span>
        ))}
      </div>

      <Link to="/services" className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-[#2563EB]">
        Learn more
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>
    </motion.div>
  );
}

/* ---------------- Metrics strip w/ counters ---------------- */

function MetricsStrip() {
  const stats = [
    { v: 1000, suffix: "+", k: "Businesses Assisted" },
    { v: 500, suffix: "+", k: "Registrations" },
    { v: 24, suffix: "hr", k: "Average Response" },
    { v: 98, suffix: "%", k: "Client Satisfaction" },
  ];
  return (
    <div className="mt-28 overflow-hidden rounded-3xl border border-[rgba(15,23,42,0.08)] bg-gradient-to-br from-[#0A2540] to-[#0B1220] p-8 sm:p-12">
      <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <Counter key={s.k} to={s.v} suffix={s.suffix} label={s.k} delay={i * 0.08} />
        ))}
      </div>
    </div>
  );
}

function Counter({ to, suffix, label, delay }: { to: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now() + delay * 1000;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, Math.max(0, (t - start) / 1400));
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, delay]);
  return (
    <div ref={ref} className="text-white">
      <p className="font-display text-5xl md:text-6xl tracking-tight">
        {v}<span className="text-[#F59E0B]">{suffix}</span>
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">{label}</p>
    </div>
  );
}

/* ---------------- Process timeline ---------------- */

function ProcessTimeline() {
  const steps = ["Consultation", "Documentation", "Processing", "Submission", "Completion"];
  return (
    <div className="mt-28">
      <div className="mb-10 max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Process</p>
        <h3 className="mt-2 font-display text-3xl sm:text-4xl">A predictable path from brief to done.</h3>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent md:block" />
        <ol className="grid gap-6 md:grid-cols-5">
          {steps.map((t, i) => (
            <motion.li key={t}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
              className="relative"
            >
              <div className="grid size-12 place-items-center rounded-full border border-[rgba(15,23,42,0.08)] bg-white dark:bg-white/[0.05] font-mono text-sm text-[#2563EB] shadow-[0_10px_30px_rgba(10,37,64,0.10)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="mt-4 font-display text-lg text-[#0A2540] dark:text-white">{t}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {["Scope & goals aligned.", "Evidence pack drafted.", "Filings & builds executed.", "Owner-signed submission.", "Handover & sustain."][i]}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ---------------- Why Hadees comparison ---------------- */

function WhyHadees() {
  const rows: { k: string; trad: string; had: string }[] = [
    { k: "Speed", trad: "Weeks of back-and-forth", had: "24-hour response, weekly cycles" },
    { k: "Professionalism", trad: "Ad-hoc, single-consultant risk", had: "Senior team, partner-led" },
    { k: "Technology", trad: "Word docs & spreadsheets", had: "Client portal & live dashboards" },
    { k: "Automation", trad: "Manual reminders", had: "AI workflows & alerting" },
    { k: "Support", trad: "Chased for updates", had: "One shared workspace, no silence" },
    { k: "Expertise", trad: "Generalists", had: "Specialists per practice" },
  ];
  return (
    <div className="mt-28">
      <div className="mb-10 max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Why Hadees</p>
        <h3 className="mt-2 font-display text-3xl sm:text-4xl">The gap between good enough and grown.</h3>
      </div>
      <div className="overflow-hidden rounded-3xl border border-[rgba(15,23,42,0.08)] bg-white/60 dark:bg-white/[0.03] backdrop-blur">
        <div className="grid grid-cols-[1.1fr_1fr_1fr] items-center border-b border-[rgba(15,23,42,0.08)] px-6 py-4 text-xs">
          <span className="font-mono uppercase tracking-[0.2em] text-muted-foreground">Dimension</span>
          <span className="font-mono uppercase tracking-[0.2em] text-muted-foreground">Traditional consultant</span>
          <span className="font-mono uppercase tracking-[0.2em] text-[#2563EB]">Hadees Trading</span>
        </div>
        {rows.map((r, i) => (
          <motion.div key={r.k}
            initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.04, ease: EASE }}
            className="grid grid-cols-[1.1fr_1fr_1fr] items-center border-b border-[rgba(15,23,42,0.06)] px-6 py-5 last:border-0"
          >
            <span className="font-display text-lg text-[#0A2540] dark:text-white">{r.k}</span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <X className="size-4 text-rose-500/80 shrink-0" />{r.trad}
            </span>
            <span className="flex items-center gap-2 text-sm text-foreground">
              <Check className="size-4 text-[#F59E0B] shrink-0" />{r.had}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Trust grid ---------------- */

function TrustGrid() {
  const trust = [
    { icon: MapPin, t: "South African Compliance", d: "CIPC, SARS, B-BBEE, POPIA — the acronyms your buyers care about." },
    { icon: Lock, t: "Secure Documentation", d: "Encrypted vault. Evidence pack audit-ready on demand." },
    { icon: Zap, t: "Fast Turnaround", d: "Named owners, weekly delivery, published price envelope." },
    { icon: Users, t: "Professional Support", d: "Direct WhatsApp line to your engagement partner." },
    { icon: Award, t: "Business Experts", d: "Six years of compounding public and private-sector wins." },
    { icon: Clock, t: "Registration Specialists", d: "Government filings handled correctly the first time." },
  ];
  return (
    <div className="mt-28 grid gap-4 md:grid-cols-3">
      {trust.map((x, i) => (
        <motion.div key={x.t}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: i * 0.05, ease: EASE }}
          className="rounded-2xl border border-[rgba(15,23,42,0.08)] bg-white/70 dark:bg-white/[0.03] p-6 backdrop-blur"
        >
          <div className="grid size-10 place-items-center rounded-xl bg-[#0A2540] text-[#F59E0B]">
            <x.icon className="size-5" />
          </div>
          <p className="mt-4 font-display text-lg text-[#0A2540] dark:text-white">{x.t}</p>
          <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ---------------- Immersive CTA ---------------- */

function ImmersiveCTA() {
  const contact = useSiteContact();
  return (

    <div className="mt-28 relative overflow-hidden rounded-[32px] border border-[rgba(15,23,42,0.08)] p-10 sm:p-16"
      style={{ background: "radial-gradient(1000px 500px at 20% 20%, rgba(37,99,235,0.35), transparent 60%), radial-gradient(800px 400px at 80% 80%, rgba(245,158,11,0.25), transparent 60%), linear-gradient(180deg, #0A2540, #0B1220)" }}
    >
      {/* particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {Array.from({ length: 22 }).map((_, i) => (
          <span key={i}
            className="absolute size-1 rounded-full bg-white/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animation: `floaty ${5 + (i % 5)}s ease-in-out ${i * 0.2}s infinite`,
              opacity: 0.35 + ((i % 5) * 0.1),
            }}
          />
        ))}
      </div>
      {/* grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">
          <Sparkles className="size-3 text-[#F59E0B]" /> Start today
        </span>
        <h3 className="mt-5 font-display text-4xl leading-[1.05] text-white sm:text-6xl text-balance">
          Ready to build <span className="italic text-[#F59E0B]">your business?</span>
        </h3>
        <p className="mt-5 max-w-xl text-white/70">
          Whether you're starting a company, preparing for tenders, building a website or automating your business, HADEES TRADING PTY LTD is your trusted growth partner.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <MagneticButton to="/contact" variant="gold">Get started <ArrowRight className="size-4" /></MagneticButton>
          <a href={`mailto:${contact.email}?subject=Project%20enquiry`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/10">
            Email us
          </a>
          <a href={whatsappHref(contact, "Hi Hadees Trading, I'd like a quote.")} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/10">
            <MessageCircle className="size-4" /> WhatsApp us
          </a>
          <Link to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/5">
            Request quote
          </Link>
        </div>

      </div>
    </div>
  );
}

/* ---------------- Magnetic button ---------------- */

function MagneticButton({
  to, children, variant = "primary",
}: { to: string; children: React.ReactNode; variant?: "primary" | "ghost" | "gold" }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 20 });
  const sy = useSpring(y, { stiffness: 250, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * 0.2);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.2);
  };
  const reset = () => { x.set(0); y.set(0); };

  const cls =
    variant === "primary"
      ? "bg-[#0A2540] text-white hover:bg-[#0B1220]"
      : variant === "gold"
      ? "bg-[#F59E0B] text-[#0A2540] hover:bg-[#FBBF24]"
      : "border border-[rgba(15,23,42,0.12)] bg-white/60 dark:bg-white/5 text-foreground hover:bg-white";

  return (
    <motion.a
      ref={ref as any} href={to}
      onMouseMove={onMove} onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${cls}`}
    >
      {children}
    </motion.a>
  );
}
