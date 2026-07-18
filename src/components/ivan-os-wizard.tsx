import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { Activity, Bot, ShieldCheck, TrendingUp, Workflow, Bell, CheckCircle2, ArrowRight } from "lucide-react";

type WizardUseCase = {
  id: string;
  label: string;
  headline: string;
  metrics: { k: string; v: string; delta: string }[];
  automations: string[];
  agents: string[];
  alerts: { icon: React.ComponentType<{ className?: string }>; label: string; tone: "info" | "warn" | "ok" }[];
};

const CASES: WizardUseCase[] = [
  {
    id: "ops",
    label: "Operations",
    headline: "Route work, chase blockers, keep every SLA green.",
    metrics: [
      { k: "Tickets auto-triaged", v: "1,284", delta: "+42% this week" },
      { k: "SLA adherence", v: "99.2%", delta: "▲ 4.1 pts" },
      { k: "Mean resolution", v: "3h 12m", delta: "▼ 38%" },
    ],
    automations: ["Priority scoring on inbound tickets", "Auto-assign by workload + skill", "Escalate stalled items after 2h"],
    agents: ["Triage Agent", "Handover Agent", "Escalation Agent"],
    alerts: [
      { icon: Activity, label: "Backlog trending down 18%", tone: "ok" },
      { icon: Bell, label: "3 tickets nearing SLA breach — reassigned", tone: "warn" },
    ],
  },
  {
    id: "sales",
    label: "Sales & CRM",
    headline: "Score leads, draft replies, never miss a warm signal.",
    metrics: [
      { k: "Qualified pipeline", v: "R 4.8M", delta: "+27% MoM" },
      { k: "Reply latency", v: "6m", delta: "▼ 71%" },
      { k: "Win-rate uplift", v: "+14%", delta: "vs. last quarter" },
    ],
    automations: ["Lead scoring from firmographics + intent", "Auto-draft first-touch email", "Sync closed-won to finance"],
    agents: ["Prospect Agent", "Drafting Agent", "Handoff Agent"],
    alerts: [
      { icon: TrendingUp, label: "3 accounts moved to hot", tone: "ok" },
      { icon: Bell, label: "Enterprise deal idle 5 days — nudged", tone: "warn" },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    headline: "Reconcile faster and surface anomalies before month-end.",
    metrics: [
      { k: "Invoices reconciled", v: "9,431", delta: "97% straight-through" },
      { k: "Anomalies flagged", v: "17", delta: "▲ 4 vs. avg" },
      { k: "Close cycle", v: "3.1 days", delta: "▼ 44%" },
    ],
    automations: ["Match payments to invoices", "Flag duplicate vendor codes", "Auto-post recurring journals"],
    agents: ["Recon Agent", "Anomaly Agent", "Approvals Agent"],
    alerts: [
      { icon: ShieldCheck, label: "All approvals within policy", tone: "ok" },
      { icon: Bell, label: "Vendor duplicate detected — held", tone: "warn" },
    ],
  },
  {
    id: "compliance",
    label: "Compliance",
    headline: "Stay tender-ready with live BBBEE, tax and NHBRC signals.",
    metrics: [
      { k: "Docs current", v: "100%", delta: "0 expiring in 30d" },
      { k: "Tenders eligible", v: "23", delta: "▲ 6 this month" },
      { k: "Audit findings", v: "0", delta: "clean" },
    ],
    automations: ["Auto-renew tax clearance reminders", "BBBEE scorecard refresh weekly", "Bundle tender document packs"],
    agents: ["Docs Agent", "Registry Agent", "Bid-Prep Agent"],
    alerts: [
      { icon: ShieldCheck, label: "BBBEE Level 2 verified", tone: "ok" },
      { icon: Bell, label: "NHBRC renewal due in 42 days", tone: "info" },
    ],
  },
];

export function IvanOsWizard({ onSchedule }: { onSchedule?: (useCase: string) => void }) {
  const [activeId, setActiveId] = useState(CASES[0].id);
  const active = useMemo(() => CASES.find((c) => c.id === activeId)!, [activeId]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0A2540] via-[#0B1220] to-[#060912] p-6 sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F59E0B]">Try the demo</p>
          <h3 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">Pick a workflow. Watch the dashboard adapt.</h3>
          <p className="mt-3 text-sm text-white/60">Every module you select rewires the mock IVAN OS console in real time — metrics, agents, automations and alerts.</p>
          <ul className="mt-6 space-y-1.5">
            {CASES.map((c) => (
              <li key={c.id}>
                <button onClick={() => setActiveId(c.id)}
                  className={`group flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition ${activeId === c.id ? "border-[#F59E0B] bg-[#F59E0B]/10 text-white" : "border-white/10 text-white/70 hover:border-white/25 hover:text-white"}`}>
                  <span className="font-medium">{c.label}</span>
                  <ArrowRight className={`size-4 transition ${activeId === c.id ? "text-[#F59E0B]" : "opacity-40 group-hover:opacity-100"}`} />
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => onSchedule?.(active.id)} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90">
            Schedule live walkthrough
          </button>
        </div>

        <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <AnimatePresence mode="wait">
            <motion.div key={active.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">IVAN OS console · {active.label}</p>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-mono text-emerald-300">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
                </span>
              </div>
              <p className="mt-3 font-display text-xl">{active.headline}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {active.metrics.map((m) => (
                  <motion.div key={m.k} layout className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">{m.k}</p>
                    <p className="mt-1.5 font-display text-2xl">{m.v}</p>
                    <p className="mt-0.5 text-[11px] text-emerald-300">{m.delta}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <Panel title="Active agents" icon={Bot}>
                  <ul className="space-y-1.5">
                    {active.agents.map((a) => (
                      <li key={a} className="flex items-center gap-2 text-sm text-white/80">
                        <span className="size-1.5 rounded-full bg-[#2563EB]" /> {a}
                      </li>
                    ))}
                  </ul>
                </Panel>
                <Panel title="Automations" icon={Workflow}>
                  <ul className="space-y-1.5">
                    {active.automations.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-white/80">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-300" /> {a}
                      </li>
                    ))}
                  </ul>
                </Panel>
              </div>

              <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">Live signals</p>
                <ul className="space-y-2">
                  {active.alerts.map((a, i) => (
                    <li key={i} className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs ${
                      a.tone === "ok" ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-200" :
                      a.tone === "warn" ? "border-amber-500/20 bg-amber-500/5 text-amber-200" :
                      "border-sky-500/20 bg-sky-500/5 text-sky-200"
                    }`}>
                      <a.icon className="size-3.5" /> {a.label}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Panel({ title, icon: Icon, children }: { title: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
      <p className="mb-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
        <Icon className="size-3" /> {title}
      </p>
      {children}
    </div>
  );
}
