import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Bot, Workflow, ShieldCheck, Cpu, Sparkles, Zap, Building2 } from "lucide-react";
import { IvanOsWizard } from "@/components/ivan-os-wizard";
import { ScheduleDemoModal } from "@/components/schedule-demo-modal";

export const Route = createFileRoute("/ivan-os")({
  head: () => ({
    meta: [
      { title: "IVAN OS — AI-native business operating system by Hadees Trading" },
      { name: "description", content: "IVAN OS unifies operations, sales, finance and compliance into one AI-native workspace. Try the interactive demo and book a live walkthrough." },
      { property: "og:title", content: "IVAN OS — AI Business Operating System" },
      { property: "og:description", content: "Autonomous agents, live signals and end-to-end automation for South African enterprises." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/ivan-os" }],
  }),
  component: IvanOsPage,
});

function IvanOsPage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [useCase, setUseCase] = useState<string | undefined>();
  const open = (u?: string) => { setUseCase(u); setDemoOpen(true); };

  return (
    <main className="pt-32 text-white bg-[#060912] min-h-screen">
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white/80">
          <Sparkles className="size-3 text-[#F59E0B]" /> Flagship platform
        </span>
        <h1 className="mt-6 font-display text-5xl leading-[1.02] sm:text-7xl text-balance">
          IVAN OS — the <span className="italic text-[#F59E0B]">operating system</span> for AI-native businesses.
        </h1>
        <p className="mt-6 max-w-2xl text-white/70">
          One workspace where autonomous agents run operations, sales, finance and compliance side-by-side. Build faster, decide sharper, and stay tender-ready without adding headcount.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => open()} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90">
            Schedule a live demo <ArrowRight className="size-4" />
          </button>
          <a href="#try" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">Try the interactive demo</a>
        </div>
      </section>

      <section id="try" className="mx-auto max-w-6xl px-6 pb-24">
        <IvanOsWizard onSchedule={open} />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F59E0B]">What ships with IVAN OS</p>
        <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">A modular platform, not a bolted-on chatbot.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <motion.div key={p.title} whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/5"><p.icon className="size-4" /></div>
              <p className="mt-4 font-display text-xl">{p.title}</p>
              <p className="mt-2 text-sm text-white/60">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0A2540] to-[#060912] p-10 sm:p-16 text-center">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Ready to see it against your workflow?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">A HADEES engineer will map IVAN OS to a real process from your business in the first session.</p>
          <button onClick={() => open()} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-7 py-3.5 text-sm font-medium text-[#0A2540] hover:bg-[#FBBF24]">
            Book my walkthrough <ArrowRight className="size-4" />
          </button>
        </div>
      </section>

      <ScheduleDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} defaultUseCase={useCase as any} />
    </main>
  );
}

const PILLARS = [
  { icon: Bot, title: "Agent framework", body: "Compose specialised agents that reason, act and hand off across your stack." },
  { icon: Workflow, title: "Workflow orchestration", body: "Visual pipelines with human checkpoints, retries and full audit trail." },
  { icon: Cpu, title: "Realtime intelligence", body: "Streaming signals from your data — surfaced where the decision happens." },
  { icon: ShieldCheck, title: "Compliance-first", body: "POPIA, ISO 27001 and BBBEE evidence captured as work moves through the system." },
  { icon: Zap, title: "Integrations", body: "Pre-built adapters for Xero, Sage, HubSpot, Microsoft 365 and government portals." },
  { icon: Building2, title: "Multi-entity", body: "Run several subsidiaries, brands or projects from one console with segregated data." },
];
