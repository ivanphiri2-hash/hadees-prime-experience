import { motion } from "motion/react";
import { ArrowRight, BarChart3, Bell, CheckCircle2, Clock3, FileText, MessageCircle, ShieldCheck, Sparkles, UserPlus } from "lucide-react";
import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "New Lead",
    description: "Inbound website and WhatsApp requests ready for qualification.",
    cards: [
      { title: "Municipal tender enquiry", account: "North West Logistics", value: "R 420k", status: "Warm" },
      { title: "Service agreement request", account: "Platinum Infrastructure", value: "R 310k", status: "Cold" },
    ],
  },
  {
    title: "Proposal Sent",
    description: "Quotes delivered and follow-up reminders scheduled.",
    cards: [
      { title: "Compliance portal package", account: "Urban Health Trust", value: "R 190k", status: "Follow-up" },
      { title: "Tender document bundle", account: "Apex Civil Works", value: "R 98k", status: "Review" },
    ],
  },
  {
    title: "Negotiation",
    description: "High-value opportunities with active contract review.",
    cards: [
      { title: "Yearly maintenance retainer", account: "Siyathemba Services", value: "R 560k", status: "Negotiation" },
    ],
  },
  {
    title: "Won",
    description: "Board-approved deals ready for delivery and onboarding.",
    cards: [
      { title: "Logistics software deployment", account: "Tshwane Freight", value: "R 1.2M", status: "Onboarding" },
    ],
  },
];

const activity = [
  { label: "Email sent", detail: "Quote follow-up to Urban Health Trust", time: "5m ago" },
  { label: "Document uploaded", detail: "COIDA certificate for Apex Civil Works", time: "12m ago" },
  { label: "AI review", detail: "IVAN scored new lead as 82% fit", time: "27m ago" },
];

export function CRMWorkspace() {
  return (
    <main className="bg-[#060912] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_0.65fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.22)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">
              <Sparkles className="size-4" /> CRM workspace
            </span>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="font-display text-4xl tracking-tight sm:text-5xl">CRM workspace for sales, documents and delivery.</h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                  A single command center for IVAN OS-driven pipeline motion, live document status, client communication and compliance readiness.
                </p>
              </div>
              <Link to="/enterprise-crm" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Back to enterprise CRM <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#03101f]/80 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-white/40">Active pipeline</p>
              <p className="mt-3 text-3xl font-semibold text-white">R 3.9M</p>
              <p className="mt-2 text-sm text-white/70">Deal value currently in active negotiation and proposal stages.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-[#03101f]/80 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-white/40">IVAN insights</p>
              <p className="mt-3 text-3xl font-semibold text-white">82%</p>
              <p className="mt-2 text-sm text-white/70">Average lead-fit score across open opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/40">Kanban board</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">Pipeline in motion</h2>
                </div>
                <div className="inline-flex flex-wrap gap-3">
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-emerald-200">Live sync</span>
                  <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-sky-200">Auto scoring</span>
                </div>
              </div>

              <div className="mt-8 overflow-x-auto">
                <div className="min-w-[900px] space-y-4">
                  {columns.map((column) => (
                    <div key={column.title} className="rounded-[1.75rem] border border-white/10 bg-[#02101c]/90 p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-white">{column.title}</p>
                          <p className="mt-1 text-sm text-white/50">{column.description}</p>
                        </div>
                        <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/60">{column.cards.length} cards</span>
                      </div>
                      <div className="mt-6 grid gap-4">
                        {column.cards.map((card) => (
                          <motion.div key={card.title} whileHover={{ y: -2 }} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                            <div className="flex items-center justify-between gap-4">
                              <div>
                                <p className="font-semibold text-white">{card.title}</p>
                                <p className="mt-2 text-sm text-white/60">{card.account}</p>
                              </div>
                              <span className="text-sm text-white/70">{card.value}</span>
                            </div>
                            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/60">
                              <span className="rounded-full bg-white/5 px-2.5 py-1">{card.status}</span>
                              <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-cyan-200">IVAN scored</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/40">Workspace metrics</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Active workflows</h3>
                </div>
                <div className="rounded-full bg-sky-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-sky-200">Realtime</div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Follow-up tasks", value: "18" },
                  { label: "Quotes pending", value: "9" },
                  { label: "Compliance flags", value: "2" },
                  { label: "Client replies", value: "7" },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-[#02101c]/90 p-4">
                    <p className="text-sm text-white/60">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-3xl bg-emerald-400/10 text-emerald-200">
                  <CheckCircle2 className="size-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/40">Priority queue</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">Next approvals</h3>
                </div>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="rounded-3xl border border-white/10 bg-[#02101c]/90 p-4">
                  <p className="text-sm text-white/70">Quote approval required for Siyathemba Services</p>
                  <p className="mt-2 text-sm text-white/50">20 hours left before scheduled reminder.</p>
                </li>
                <li className="rounded-3xl border border-white/10 bg-[#02101c]/90 p-4">
                  <p className="text-sm text-white/70">Document bundle missing NHBRC evidence</p>
                  <p className="mt-2 text-sm text-white/50">IVAN has attached the recommended checklist.</p>
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-3xl bg-sky-400/10 text-sky-200">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/40">Live activity</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">Recent updates</h3>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {activity.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-[#02101c]/90 p-4">
                    <p className="font-medium text-white">{item.label}</p>
                    <p className="mt-1 text-sm text-white/60">{item.detail}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/40">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
