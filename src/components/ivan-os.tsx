import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Bot, Workflow, Users, ShieldCheck, FileText, BarChart3, ArrowUpRight, ArrowRight,
  Sparkles, Activity, Lock, Cloud, KeyRound, DatabaseBackup, UserRoundCheck,
  MessageCircle, CheckCircle2, Cpu, Building2, Boxes, Store, GraduationCap,
  Stethoscope, Factory, Briefcase, HardHat, Zap, Bell, TrendingUp, CircleDot,
} from "lucide-react";
import { useSiteContact, whatsappHref, mailto } from "@/lib/site-config";
import { ScheduleDemoModal } from "@/components/schedule-demo-modal";

const EASE = [0.16, 1, 0.3, 1] as const;


export function IvanOS() {
  return (
    <section
      id="ivan-os"
      className="relative overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(1200px 700px at 20% 0%, oklch(0.35 0.14 255 / 0.35), transparent 60%), radial-gradient(900px 600px at 90% 20%, oklch(0.55 0.18 240 / 0.28), transparent 60%), linear-gradient(180deg, #0B1220 0%, #060912 100%)",
      }}
    >
      <AnimatedGrid />
      <Particles />

      <div className="relative">
        <Intro />
        <HeroDashboard />
        <FeatureGrid />
        <Ecosystem />
        <EverythingConnected />
        <AutomationTimeline />
        <FloatingMetrics />
        <Industries />
        <Security />
        <Modules />
        <Roadmap />
        <FinalCTA />
      </div>
    </section>
  );
}

/* ---------------- Background layers ---------------- */

function AnimatedGrid() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 20%, black 40%, transparent 80%)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/3 size-[720px] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, #2563EB55, transparent 60%)" }}
        animate={{ x: [0, 60, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-40 size-[640px] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, #0A254088, transparent 60%)" }}
        animate={{ x: [0, -50, 40, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

function Particles() {
  const dots = Array.from({ length: 28 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const left = (i * 37) % 100;
        const delay = (i % 8) * 0.6;
        const size = 2 + (i % 4);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/60"
            style={{ left: `${left}%`, top: "110%", width: size, height: size, boxShadow: "0 0 12px rgba(255,255,255,0.6)" }}
            animate={{ y: ["-0vh", "-120vh"], opacity: [0, 1, 0] }}
            transition={{ duration: 18 + (i % 6), repeat: Infinity, delay, ease: "linear" }}
          />
        );
      })}
    </div>
  );
}

/* ---------------- Intro ---------------- */

function Intro() {
  const lines = [
    "Meet IVAN OS",
    "The Intelligence Behind",
    "Every Successful Business.",
  ];
  return (
    <div className="mx-auto max-w-7xl px-6 pt-28 pb-10 sm:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1 text-xs"
      >
        <span className="font-mono uppercase tracking-[0.22em] text-[#F59E0B]">[03]</span>
        <span className="font-mono uppercase tracking-[0.22em] text-white/70">The future of business</span>
      </motion.div>

      <h2 className="mt-8 font-display text-5xl leading-[1.02] sm:text-7xl md:text-[92px] text-balance">
        {lines.map((line, i) => (
          <motion.span
            key={i}
            className="block"
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: EASE, delay: i * 0.15 }}
          >
            {i === 0 ? (
              <>Meet <span className="bg-gradient-to-r from-[#60A5FA] via-[#2563EB] to-[#F59E0B] bg-clip-text text-transparent italic">IVAN OS</span></>
            ) : line}
          </motion.span>
        ))}
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
        className="mt-8 max-w-[700px] text-lg text-white/70 text-pretty"
      >
        IVAN OS is an intelligent business operating system designed to automate, organise and accelerate modern businesses. From registrations and compliance to AI automation, customer management and analytics — everything works together inside one intelligent platform.
      </motion.p>
    </div>
  );
}

/* ---------------- Hero floating dashboard ---------------- */

function HeroDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-40, 40], [6, -6]);
  const ry = useTransform(mx, [-40, 40], [-6, 6]);
  const srx = useSpring(rx, { stiffness: 80, damping: 14 });
  const sry = useSpring(ry, { stiffness: 80, damping: 14 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 80);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 80);
  };

  const modules = [
    { icon: Bot, label: "AI Assistant", tone: "from-[#60A5FA] to-[#2563EB]" },
    { icon: Users, label: "Client Portal", tone: "from-[#F59E0B] to-[#EA580C]" },
    { icon: Briefcase, label: "CRM", tone: "from-[#22D3EE] to-[#0EA5E9]" },
    { icon: BarChart3, label: "Analytics", tone: "from-[#A78BFA] to-[#2563EB]" },
    { icon: FileText, label: "Documents", tone: "from-[#34D399] to-[#059669]" },
    { icon: Workflow, label: "Automation", tone: "from-[#F472B6] to-[#DB2777]" },
    { icon: DatabaseBackup, label: "Invoices", tone: "from-[#FBBF24] to-[#D97706]" },
    { icon: Boxes, label: "Projects", tone: "from-[#38BDF8] to-[#2563EB]" },
  ];

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="mx-auto max-w-7xl px-6 pb-24"
      style={{ perspective: 1400 }}
    >
      <motion.div
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: EASE }}
        className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_40px_120px_rgba(37,99,235,0.25)]"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#EF4444]/80" />
            <span className="size-2.5 rounded-full bg-[#F59E0B]/80" />
            <span className="size-2.5 rounded-full bg-[#22C55E]/80" />
          </div>
          <div className="mx-auto flex items-center gap-2 font-mono text-xs text-white/60">
            <Sparkles className="size-3 text-[#F59E0B]" /> ivan.os / workspace
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-mono text-white/70">
            <motion.span className="size-1.5 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }} /> Live
          </div>
        </div>

        <div className="grid gap-4 p-5 md:grid-cols-12">
          {/* Left rail: AI Assistant */}
          <div className="md:col-span-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center gap-2">
              <div className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-[#60A5FA] to-[#2563EB]">
                <Bot className="size-4" />
              </div>
              <div>
                <p className="text-sm font-medium">IVAN</p>
                <p className="text-[10px] text-white/50">AI Business Assistant</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {[
                "Draft the Q4 tender response",
                "Renew CSD before 22 Jan",
                "Follow up 3 warm leads",
              ].map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.15, ease: EASE }}
                  className="flex items-start gap-2 rounded-lg bg-white/[0.04] p-2.5 text-xs"
                >
                  <CircleDot className="mt-0.5 size-3 text-[#F59E0B]" />
                  <span className="text-white/80">{t}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-white/10 bg-black/40 p-2.5">
              <div className="flex items-center gap-2 text-[10px] text-white/50">
                <span className="font-mono">ask ivan</span>
                <motion.span className="inline-block h-3 w-px bg-white/60" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} />
              </div>
            </div>
          </div>

          {/* Center: chart + modules */}
          <div className="md:col-span-5 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/50">Business Intelligence</p>
                  <p className="mt-1 font-display text-2xl">R 4.82M <span className="text-xs font-sans text-emerald-400">+18.4%</span></p>
                </div>
                <TrendingUp className="size-4 text-emerald-400" />
              </div>
              <MiniChart />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {modules.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06, ease: EASE }}
                  className="group flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] p-2.5 hover:bg-white/[0.07] transition-colors"
                >
                  <div className={`grid size-8 place-items-center rounded-lg bg-gradient-to-br ${m.tone}`}>
                    <m.icon className="size-4" />
                  </div>
                  <span className="text-[9px] text-white/70 text-center leading-tight">{m.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: notifications + progress */}
          <div className="md:col-span-3 space-y-3">
            {[
              { i: Bell, t: "New tender match", s: "Dept of Health · R 4.2M", tone: "text-[#60A5FA]" },
              { i: CheckCircle2, t: "Invoice paid", s: "Nexlink · R 128,000", tone: "text-emerald-400" },
              { i: ShieldCheck, t: "POPIA audit passed", s: "98.4% compliance", tone: "text-[#F59E0B]" },
            ].map((n, i) => (
              <motion.div
                key={n.t}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.2, ease: EASE }}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
              >
                <div className="flex items-center gap-2">
                  <n.i className={`size-3.5 ${n.tone}`} />
                  <p className="text-xs font-medium">{n.t}</p>
                </div>
                <p className="mt-1 text-[10px] text-white/50">{n.s}</p>
              </motion.div>
            ))}
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <div className="flex justify-between text-[10px] text-white/60"><span>Automation health</span><span className="font-mono">97%</span></div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "97%" }} viewport={{ once: true }} transition={{ duration: 1.4, ease: EASE }} className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#F59E0B]" />
              </div>
            </div>
          </div>
        </div>

        {/* floating notification */}
        <motion.div
          initial={{ opacity: 0, y: 20, x: 20 }} whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }} transition={{ delay: 1.2, ease: EASE }}
          className="absolute -right-4 -bottom-6 hidden md:flex items-center gap-2 rounded-xl border border-white/10 bg-[#0B1220]/90 backdrop-blur px-3 py-2 shadow-2xl"
        >
          <div className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-[#F59E0B] to-[#EA580C]">
            <Zap className="size-3.5" />
          </div>
          <div>
            <p className="text-xs font-medium">IVAN automated 12 tasks</p>
            <p className="text-[10px] text-white/50">Saved 3h 42m today</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function MiniChart() {
  const points = [12, 18, 15, 22, 19, 28, 26, 34, 30, 42, 38, 48];
  const max = Math.max(...points);
  const w = 100, h = 40;
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (points.length - 1)) * w} ${h - (p / max) * h}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 h-20 w-full">
      <defs>
        <linearGradient id="miniFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path d={`${path} L ${w} ${h} L 0 ${h} Z`} fill="url(#miniFill)"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
      <motion.path d={path} fill="none" stroke="#60A5FA" strokeWidth="1.2"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: EASE }} />
    </svg>
  );
}

/* ---------------- Feature Grid ---------------- */

const FEATURES = [
  { icon: Bot, title: "AI Assistant", body: "A natural language business assistant that answers, drafts and executes across every module." },
  { icon: Workflow, title: "Business Automation", body: "Automate repetitive workflows — from lead intake to invoice reconciliation — in minutes." },
  { icon: Users, title: "Client Portal", body: "A secure white-labelled dashboard where clients approve, pay and collaborate." },
  { icon: ShieldCheck, title: "Compliance Center", body: "Track CSD, POPIA, B-BBEE and tax renewals with automatic alerts and evidence." },
  { icon: FileText, title: "Smart Documents", body: "Generate quotes, invoices, contracts and tenders from templates powered by your data." },
  { icon: BarChart3, title: "Analytics", body: "Real-time business intelligence with dashboards, forecasts and anomaly detection." },
];

function FeatureGrid() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionEyebrow label="Capabilities" title={<>The <span className="italic text-[#F59E0B]">operating system</span> for modern businesses.</>} />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.06, duration: 0.6, ease: EASE }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "radial-gradient(400px 200px at 30% 0%, rgba(37,99,235,0.18), transparent 70%)" }} />
            <div className="relative">
              <div className="grid size-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-[#2563EB]/30 to-[#0A2540]/40">
                <f.icon className="size-5 text-[#60A5FA]" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{f.title}</h3>
              <p className="mt-2 text-sm text-white/60">{f.body}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-white/80">
                Learn more
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Ecosystem network ---------------- */

const NODES = [
  "Business Registration", "Compliance", "CRM", "Website Studio", "AI Automation",
  "Tender Hub", "MSNR", "Accounting", "Marketing", "Documents", "Client Portal",
];

function Ecosystem() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionEyebrow label="Ecosystem" title={<>One brain. <span className="italic text-[#60A5FA]">Every business system.</span></>} />

      <div className="relative mx-auto mt-16 aspect-square max-w-3xl">
        <svg className="absolute inset-0 size-full" viewBox="0 0 400 400">
          {NODES.map((_, i) => {
            const a = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
            const x = 200 + Math.cos(a) * 170;
            const y = 200 + Math.sin(a) * 170;
            const active = hover === i;
            return (
              <motion.line
                key={i} x1={200} y1={200} x2={x} y2={y}
                stroke={active ? "#F59E0B" : "#2563EB"}
                strokeOpacity={active ? 0.9 : 0.3}
                strokeWidth={active ? 1.4 : 0.8}
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.05, ease: EASE }}
              />
            );
          })}
          <motion.circle cx={200} cy={200} r={70} fill="url(#coreGrad)"
            animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "200px 200px" }} />
          <defs>
            <radialGradient id="coreGrad">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0A2540" stopOpacity="0.2" />
            </radialGradient>
          </defs>
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="mx-auto grid size-24 place-items-center rounded-2xl border border-white/20 bg-[#0B1220]/80 backdrop-blur">
            <Cpu className="size-8 text-[#F59E0B]" />
          </div>
          <p className="mt-3 font-display text-lg">IVAN OS</p>
        </div>

        {NODES.map((n, i) => {
          const a = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + (Math.cos(a) * 0.5 + 0.5) * 85;
          const y = 50 + (Math.sin(a) * 0.5 + 0.5) * 85;
          return (
            <motion.button
              key={n}
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
              style={{ left: `${x}%`, top: `${y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur px-3 py-1.5 text-xs whitespace-nowrap hover:border-[#F59E0B] hover:bg-white/[0.12] transition-colors"
              initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.05, ease: EASE }}
            >
              {n}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- Everything Connected ---------------- */

function EverythingConnected() {
  return (
    <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#F59E0B]">Unified</p>
        <h3 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl text-balance">Everything <span className="italic">Connected.</span></h3>
        <p className="mt-6 max-w-lg text-white/70">
          Registrations, compliance, sales, delivery, invoicing and analytics stop being separate tools. Inside IVAN OS they share one data layer, one automation engine and one AI brain — so decisions in one place update everything else.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#ivan-os" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90">Explore IVAN OS <ArrowRight className="size-4" /></a>
          <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">Schedule demo</a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 shadow-[0_30px_80px_rgba(37,99,235,0.2)]"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">Business score</p>
            <p className="font-display text-4xl">A+</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">Revenue</p>
            <p className="font-display text-2xl">R 4.82M</p>
          </div>
        </div>
        <MiniChart />

        <div className="mt-4 grid grid-cols-2 gap-2">
          {[
            { i: Activity, t: "12 tasks completed today" },
            { i: Bell, t: "3 renewals in 30 days" },
            { i: FileText, t: "5 documents awaiting approval" },
            { i: Sparkles, t: "IVAN: 4 new recommendations" },
          ].map((r) => (
            <div key={r.t} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-[11px] text-white/80">
              <r.i className="size-3.5 text-[#60A5FA]" /> {r.t}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ---------------- Automation Timeline ---------------- */

const TIMELINE = [
  "Lead Received", "AI Qualification", "Quotation Generated", "Client Approval",
  "Invoice Created", "Project Started", "Completion", "Customer Follow-up",
];

function AutomationTimeline() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionEyebrow label="Automation" title={<>From lead to loyalty — <span className="italic">automatically.</span></>} />
      <div className="relative mt-14 overflow-x-auto pb-4">
        <div className="relative flex min-w-max items-stretch gap-4">
          {TIMELINE.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, ease: EASE }}
              className="flex items-center gap-4"
            >
              <div className="w-52 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Step {String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-display text-lg">{step}</p>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }} className="h-full bg-gradient-to-r from-[#2563EB] to-[#F59E0B]" />
                </div>
              </div>
              {i < TIMELINE.length - 1 && <ArrowRight className="size-4 text-white/40" />}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Floating Metrics ---------------- */

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease: EASE, onUpdate: (v) => setVal(v) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{Math.round(val)}{suffix}</span>;
}

function FloatingMetrics() {
  const stats = [
    { v: 99, s: "%", k: "Automation Accuracy" },
    { v: 24, s: "/7", k: "AI Availability" },
    { v: 1000, s: "+", k: "Businesses Supported" },
    { v: 10, s: "x", k: "Faster Workflows" },
  ];
  return (
    <div className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-20 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div key={s.k} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, ease: EASE }}>
            <p className="font-display text-5xl md:text-6xl bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
              <Counter to={s.v} suffix={s.s} />
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-white/50">{s.k}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Industries ---------------- */

const INDUSTRIES = [
  { i: HardHat, n: "Construction" }, { i: Store, n: "Retail" },
  { i: Briefcase, n: "Professional Services" }, { i: GraduationCap, n: "Education" },
  { i: Stethoscope, n: "Healthcare" }, { i: Factory, n: "Manufacturing" },
  { i: Cpu, n: "Technology" }, { i: Building2, n: "Consulting" },
];

function Industries() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionEyebrow label="Industries" title={<>Built for <span className="italic text-[#F59E0B]">every sector.</span></>} />
      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {INDUSTRIES.map((x, i) => (
          <motion.div
            key={x.n}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.05, ease: EASE }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-[#F59E0B]/40"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "radial-gradient(300px 150px at 50% 0%, rgba(245,158,11,0.15), transparent 70%)" }} />
            <x.i className="relative size-6 text-[#60A5FA] group-hover:text-[#F59E0B] transition-colors" />
            <p className="relative mt-4 font-display text-lg">{x.n}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Security ---------------- */

const SECURITY = [
  { i: ShieldCheck, t: "Enterprise Security" },
  { i: Lock, t: "Encrypted Data" },
  { i: UserRoundCheck, t: "Role-Based Access" },
  { i: Cloud, t: "Cloud Infrastructure" },
  { i: KeyRound, t: "Secure Client Portal" },
  { i: DatabaseBackup, t: "Automatic Backups" },
];

function Security() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#F59E0B]">Security</p>
            <h3 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">Secure by <span className="italic">architecture.</span></h3>
            <p className="mt-5 text-white/70 max-w-md">Every module ships with encryption, granular access controls, audit trails and continuous backups. Your data is treated like it belongs on a bank's balance sheet.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {SECURITY.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.06, ease: EASE }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
              >
                <div className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-[#2563EB]/40 to-[#0A2540]/60">
                  <s.i className="size-4 text-[#60A5FA]" />
                </div>
                <p className="text-sm">{s.t}</p>
                <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.06, type: "spring", stiffness: 260 }} className="ml-auto">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Modules ---------------- */

const MODULES = [
  { n: "CRM", d: "Contacts, deals, pipelines." },
  { n: "Projects", d: "Delivery, milestones, resourcing." },
  { n: "Invoices", d: "Quotes, invoices, payments." },
  { n: "Compliance", d: "POPIA, B-BBEE, tax, ISO." },
  { n: "Business Registration", d: "CIPC, CSD, tax numbers." },
  { n: "Automation", d: "Triggers, workflows, agents." },
  { n: "AI Assistant", d: "Answer, draft, execute." },
  { n: "Client Portal", d: "Approvals, files, chat." },
  { n: "Knowledge Base", d: "SOPs, playbooks, policies." },
  { n: "Reporting", d: "Dashboards, exports, alerts." },
];

function Modules() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionEyebrow label="Modules" title={<>Ten modules. <span className="italic">One workspace.</span></>} />
      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
        {MODULES.map((m, i) => (
          <motion.div
            key={m.n}
            initial={{ opacity: 0, x: i % 2 ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }} transition={{ delay: (i % 4) * 0.06, ease: EASE }}
            whileHover={{ scale: 1.01 }}
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-[#60A5FA]/40 hover:bg-white/[0.06]"
          >
            <div>
              <p className="font-display text-2xl">{m.n}</p>
              <p className="text-sm text-white/60">{m.d}</p>
            </div>
            <ArrowUpRight className="size-4 text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F59E0B]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Roadmap ---------------- */

const ROADMAP = [
  { p: "Phase 1", t: "Business Services", s: "Completed", v: 100 },
  { p: "Phase 2", t: "AI Automation", s: "In Progress", v: 62 },
  { p: "Phase 3", t: "Client Portal", s: "Coming Soon", v: 20 },
  { p: "Phase 4", t: "Mobile App", s: "Future", v: 8 },
  { p: "Phase 5", t: "Enterprise AI", s: "Future", v: 3 },
];

function Roadmap() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionEyebrow label="Roadmap" title={<>The path to <span className="italic text-[#60A5FA]">enterprise AI.</span></>} />
      <div className="mt-14 space-y-3">
        {ROADMAP.map((r, i) => (
          <motion.div
            key={r.p}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.08, ease: EASE }}
            className="grid items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-[120px_1fr_140px]"
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/50">{r.p}</p>
            <div>
              <p className="font-display text-xl">{r.t}</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${r.v}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.08, ease: EASE }} className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#F59E0B]" />
              </div>
            </div>
            <span className={`justify-self-start sm:justify-self-end rounded-full px-3 py-1 text-xs font-mono uppercase tracking-widest ${
              r.s === "Completed" ? "bg-emerald-500/15 text-emerald-300" :
              r.s === "In Progress" ? "bg-[#F59E0B]/15 text-[#F59E0B]" :
              "bg-white/10 text-white/60"
            }`}>{r.s}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  const contact = useSiteContact();
  const [open, setOpen] = useState(false);
  return (
    <div className="relative px-6 py-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 p-10 sm:p-20 text-center"
        style={{ background: "radial-gradient(800px 400px at 20% 0%, rgba(37,99,235,0.35), transparent 60%), radial-gradient(700px 400px at 80% 100%, rgba(245,158,11,0.25), transparent 60%), linear-gradient(180deg, #0A2540, #060912)" }}
      >
        <Particles />
        <p className="relative font-mono text-xs uppercase tracking-[0.22em] text-white/60">The next chapter</p>
        <h3 className="relative mt-6 font-display text-5xl sm:text-7xl leading-[1.02] text-balance">
          <motion.span initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }} className="block">Build Smarter.</motion.span>
          <motion.span initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15, ease: EASE }} className="block italic text-[#F59E0B]">Grow Faster.</motion.span>
          <motion.span initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: EASE }} className="block">Automate Everything.</motion.span>
        </h3>
        <p className="relative mx-auto mt-8 max-w-xl text-white/70">Book a live IVAN OS demo tailored to your workflows — hosted by a HADEES engineer.</p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-3">
          <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90">Schedule demo <ArrowRight className="size-4" /></button>
          <a href="/ivan-os" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">Explore IVAN OS</a>
          <a href={mailto(contact, "IVAN OS enquiry")} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">Email us</a>
          <a href={whatsappHref(contact, "Hi, I'd like to know more about IVAN OS.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.62_0.16_150)] px-6 py-3 text-sm font-medium text-white hover:opacity-90"><MessageCircle className="size-4" /> WhatsApp</a>
        </div>
      </div>
      <ScheduleDemoModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}


/* ---------------- helpers ---------------- */

function SectionEyebrow({ label, title }: { label: string; title: React.ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#F59E0B]">{label}</p>
      <h3 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl text-balance">{title}</h3>
    </div>
  );
}
