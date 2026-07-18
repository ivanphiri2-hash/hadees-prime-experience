import { motion } from "motion/react";
import { ArrowRight, Bot, CalendarDays, CheckCircle2, ClipboardList, FileText, Folder, Globe2, Inbox, Layers, LifeBuoy, Lock, MapPin, MessageCircle, Monitor, ShieldCheck, ShoppingBag, Sparkles, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const connectors = [
  { title: "Enterprise AI", description: "Shared reasoning and model orchestration across every workflow.", icon: Bot },
  { title: "Supabase-ready", description: "Modular tables, auth, storage and live sync designed for a future backend rollout.", icon: DatabaseIcon },
  { title: "Google Workspace", description: "Shared contacts, calendars and email signals feed CRM intelligence.", icon: Inbox },
  { title: "WhatsApp & Email", description: "Two-way communication tracked as conversation histories and activity signals.", icon: MessageCircle },
  { title: "Payments", description: "Quote-to-invoice-to-receipt flows with digital collection readiness.", icon: ShoppingBag },
  { title: "Documents", description: "Versioned contracts, tender packs and certificates inside one searchable vault.", icon: Folder },
];

const enterpriseModules = [
  { title: "Lead-to-contract CRM", description: "Capture every source, score every opportunity, and move deals with AI-guided next actions.", icon: ClipboardList },
  { title: "Pipeline intelligence", description: "Track movement, forecast revenue, and spot risk with live stage analytics.", icon: Layers },
  { title: "Quote engine", description: "Build quotes, approve digitally and publish to email or WhatsApp from one workflow.", icon: FileText },
  { title: "Invoice automation", description: "Generate invoices, schedule reminders and reconcile payments with audit trails.", icon: ShoppingBag },
  { title: "Compliance hub", description: "Manage registrations, document renewals and expiring certifications in one observability layer.", icon: ShieldCheck },
  { title: "Client portal", description: "Every customer receives a secure workspace for invoices, docs, messages and project status.", icon: Globe2 },
];

const workflowSteps = [
  "Website form or WhatsApp lead added",
  "AI qualification and company scoring",
  "Opportunity created and owner assigned",
  "Quote generated and shared via email/WhatsApp",
  "Approval, payment link and invoice issuance",
  "Project activation, documents and compliance tracking",
];

const complianceItems = [
  "Company registration and CSD maintenance",
  "COIDA, CIDB, NHBRC and Tax Clearance tracking",
  "B-BBEE scorecard monitoring and evidence bundles",
  "Automated expiry alerts and audit-ready dossiers",
];

const dataFlows = [
  { title: "Customer record", description: "Contacts, companies, addresses and lifetime activity are unified across CRM, portal and AI." },
  { title: "Document intelligence", description: "OCR, semantic search and version control make every contract, quote and certificate discoverable." },
  { title: "Signal engine", description: "Behavioural signals, workflow status and financial events feed the intelligent operating system." },
];

function SectionHeader({ eyebrow, title, description, align = "center" }: { eyebrow: string; title: ReactNode; description?: string; align?: "center" | "left" }) {
  return (
    <div className={`mx-auto max-w-5xl ${align === "left" ? "text-left" : "text-center"}`}>
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl tracking-tight text-white sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-7 text-white/70">{description}</p> : null}
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/10">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-6 font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
    </motion.div>
  );
}

function FlowStep({ step, index }: { step: string; index: number }) {
  return (
    <div className="group relative rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm text-white/80 transition hover:bg-white/10">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-400/15">{index + 1}</span>
      <p className="mt-4 leading-6">{step}</p>
    </div>
  );
}

export function EnterpriseCRM() {
  return (
    <div className="overflow-hidden bg-[#060912] text-white">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0d1724]/90 to-transparent" aria-hidden />
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                <Sparkles className="size-3 text-cyan-200" /> IVAN OS Enterprise CRM
              </span>
              <h1 className="mt-8 max-w-3xl font-display text-5xl leading-tight sm:text-6xl">The intelligent operating system that connects every business process.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Not a simple CRM — a unified platform built for sales, finance, compliance, documents, automation and AI, ready to connect website leads, client portals, mobile apps and enterprise workflows through one shared architecture.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300">
                  Book an IVAN OS briefing <ArrowRight className="size-4" />
                </Link>
                <Link to="/crm-workspace" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400/20">
                  Open CRM Workspace
                </Link>
                <Link to="/ivan-os" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Explore IVAN OS
                </Link>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  "AI-first workflows",
                  "Supabase-ready architecture",
                  "Client portal sync",
                  "Real-time compliance signals",
                ].map((label) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-[#0a172a]/80 p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/40">Live operations</p>
                    <p className="mt-3 text-3xl font-semibold text-white">Connected CRM canvas</p>
                    <p className="mt-4 text-sm leading-6 text-white/70">Every workflow, document and customer interaction updates the same enterprise graph. AI recommendations are visible where decisions are made.</p>
                  </div>
                  <div className="grid gap-3">
                    {[
                      "Customer 360",
                      "Quote tracking",
                      "Invoice reconciliation",
                      "Compliance scorecard",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3">
                        <CheckCircle2 className="size-5 text-cyan-300" />
                        <span className="text-sm text-white/75">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {enterpriseModules.slice(0, 2).map((module) => (
                    <div key={module.title} className="rounded-3xl border border-white/10 bg-[#031020]/80 p-4">
                      <div className="flex items-center gap-3 text-white/80">
                        <module.icon className="size-4 text-cyan-300" />
                        <div>
                          <p className="font-semibold">{module.title}</p>
                          <p className="text-sm text-white/60">{module.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="CRM workspace"
            title="A premium workspace for pipeline, quotes and customer operations."
            description="A single screen where sales, finance, and delivery teams see their next actions, live quotes, documents, compliance risks and IVAN OS recommendations." 
            align="left"
          />

          <div className="mt-14 grid gap-8 xl:grid-cols-[0.75fr_0.45fr]">
            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.18)]">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">Live workspace</span>
                  <span className="text-sm text-white/70">1,245 active records · 8 users online · 4 pending approvals</span>
                </div>
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-[#03101f]/80 p-6">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">Pipeline forecast</p>
                    <p className="mt-4 text-4xl font-semibold text-white">R 12.4M</p>
                    <p className="mt-2 text-sm text-white/60">Projected revenue from active opportunities this quarter.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-[#03101f]/80 p-6">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">CRM signal</p>
                    <p className="mt-4 text-4xl font-semibold text-white">+18%</p>
                    <p className="mt-2 text-sm text-white/60">Acceleration from AI lead scoring and automated follow-ups.</p>
                  </div>
                </div>
                <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#06131f]/90 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-white/70">Work items</p>
                      <p className="mt-1 text-2xl font-semibold text-white">23 priority actions</p>
                    </div>
                    <button className="rounded-full bg-cyan-400/15 px-4 py-2 text-sm text-cyan-200">View all</button>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      { label: "Quote review", value: "5 pending", tone: "text-emerald-300" },
                      { label: "Compliance expiring", value: "3 due in 14d", tone: "text-amber-300" },
                      { label: "Payment follow-up", value: "4 open invoices", tone: "text-sky-300" },
                      { label: "Client messages", value: "7 unread", tone: "text-violet-300" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm text-white/70">{item.label}</p>
                        <p className={`mt-3 text-xl font-semibold ${item.tone}`}>{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-white/40">AI workspace</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">IVAN suggests the next action.</h3>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-emerald-200">Auto-suggest</span>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    "Send revised quote for media supply to client via WhatsApp.",
                    "Request COIDA renewal from operations for project approval.",
                    "Schedule delivery check-in with procurement and finance.",
                  ].map((item) => (
                    <div key={item} className="rounded-3xl border border-white/10 bg-[#031020]/80 p-4 text-sm text-white/70">{item}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-3xl bg-cyan-400/10 text-cyan-200">
                    <Monitor className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-white/40">CRM dashboard</p>
                    <p className="mt-1 text-lg font-semibold text-white">Pipeline board</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    { stage: "Qualified", count: 6, value: "R 3.2M" },
                    { stage: "Proposal", count: 4, value: "R 2.1M" },
                    { stage: "Negotiation", count: 3, value: "R 1.1M" },
                  ].map((item) => (
                    <div key={item.stage} className="rounded-3xl border border-white/10 bg-[#02101c]/90 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm text-white/70">{item.stage}</p>
                          <p className="mt-1 text-lg font-semibold text-white">{item.count} deals</p>
                        </div>
                        <p className="text-sm text-cyan-200">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-3xl bg-gold/10 text-gold">
                    <FileText className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-white/40">Quote activity</p>
                    <p className="mt-1 text-lg font-semibold text-white">3 quotes in approval</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {[
                    "R 580k digital signage package — pending signature.",
                    "R 192k annual maintenance agreement — approval requested.",
                    "R 76k desktop deployment pack — waiting on finance.",
                  ].map((item, index) => (
                    <div key={index} className="rounded-3xl border border-white/10 bg-[#02101c]/90 p-4 text-sm text-white/70">{item}</div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-3xl bg-emerald-400/10 text-emerald-200">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-white/40">Compliance checks</p>
                    <p className="mt-1 text-lg font-semibold text-white">2 items flagged</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  <li className="rounded-3xl border border-white/10 bg-[#02101c]/90 p-4">COIDA certificate expires in 18 days.</li>
                  <li className="rounded-3xl border border-white/10 bg-[#02101c]/90 p-4">NHBRC tender pack needs evidence update.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Enterprise architecture"
            title="One system, built for every department."
            description="Every module communicates through shared data models and orchestration patterns so the CRM, portal, mobile app and AI layer stay aligned from day one."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {enterpriseModules.map((module) => (
              <FeatureCard key={module.title} icon={module.icon} title={module.title} description={module.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Workflow orchestration"
            title="From lead capture to compliant execution."
            description="A visual automation fabric routes triggers through AI decisions, approvals and notifications so nothing slips between teams."
            align="left"
          />

          <div className="mt-12 grid gap-5 xl:grid-cols-[0.65fr_0.35fr]">
            <div className="grid gap-4">
              {workflowSteps.map((step, index) => (
                <FlowStep key={step} step={step} index={index} />
              ))}
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-white/40">Trigger, condition, action</p>
              <div className="mt-6 space-y-4">
                {[
                  { label: "Website form submitted", badge: "Trigger" },
                  { label: "Lead quality >= high", badge: "Condition" },
                  { label: "Create opportunity + assign advisor", badge: "Action" },
                  { label: "Send quote by WhatsApp + email", badge: "Action" },
                  { label: "Notify finance and client portal", badge: "Notification" },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-[#031020]/80 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-medium text-white">{item.label}</p>
                      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">{item.badge}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/60">AI decisions and approvals are recorded with timestamps, comments and compliance metadata.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Compliance & registration"
            title="Live readiness for tenders, tax and supplier approval."
            description="A specialised registry workspace tracks COIDA, CIDB, NHBRC, CSD, Tax Clearance and B-BBEE requirements with expiry alerts and evidence dossiers."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <div className="grid gap-6">
                {complianceItems.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-[#031020]/80 p-5">
                    <p className="text-sm text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-white/40">Regulatory graph</p>
              <div className="mt-6 grid gap-5">
                {dataFlows.map((flow) => (
                  <div key={flow.title} className="rounded-3xl border border-white/10 bg-[#031020]/80 p-5">
                    <p className="font-semibold text-white">{flow.title}</p>
                    <p className="mt-3 text-sm leading-6 text-white/60">{flow.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Connected ecosystem"
            title="Every connector for a future-ready business stack."
            description="Build with the platform that is prepared to connect Supabase, Gemini, Google, WhatsApp Cloud API, email, payments and document services without breaking the workflow."
            align="left"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {connectors.map((connector) => (
              <div key={connector.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                  <connector.icon className="size-4" />
                </div>
                <h3 className="mt-6 font-semibold text-white">{connector.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{connector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Client portal"
                title="Secure access that extends the CRM to clients, finance and operations."
                description="Every client receives a portal with invoices, documents, compliance status, messages and support tickets, keeping all stakeholders aligned through a consistent experience."
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "Secure login and company workspace",
                  "Invoice history and payment status",
                  "Documents, contracts and tender packs",
                  "Messages, appointments and support tickets",
                ].map((text) => (
                  <div key={text} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">{text}</div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[#031020]/80 p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-white/40">Portal sync</p>
              <div className="mt-6 space-y-4">
                {[
                  "Publish invoices and documents automatically.",
                  "Show compliance and approvals in real time.",
                  "Collect client feedback and signature approvals.",
                ].map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#07111f] via-[#081628] to-[#061114] px-6 py-20">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-cyan-400/20 to-transparent" aria-hidden />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200/80">Supabase readiness</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">Prepared for a connected backend launch.</h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/70">
                The platform is architected so the next phase can be a single Supabase backend with tables for users, leads, quotes, invoices, documents, workflows, notifications and audit logs. Frontend and automation models are already aligned to that future payload.
              </p>
              <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-100">
                Enterprise-ready, AI-connected, future-proof.
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "roles & permissions",
                "lead scoring model",
                "quote and invoice flows",
                "document version control",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200/80">Next step</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Scale every business process with IVAN OS Enterprise CRM.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">Connect your website, client portal, automation engine and AI models through one intelligent system that supports sales, finance, compliance and delivery.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300">
                Start enterprise discovery <ArrowRight className="size-4" />
              </Link>
              <Link to="/ivan-os" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                View IVAN OS capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DatabaseIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M4 6C4 4.34315 7.58172 3 12 3C16.4183 3 20 4.34315 20 6C20 7.65685 16.4183 9 12 9C7.58172 9 4 7.65685 4 6Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 6V18C4 19.6569 7.58172 21 12 21C16.4183 21 20 19.6569 20 18V6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 12C4 10.3431 7.58172 9 12 9C16.4183 9 20 10.3431 20 12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 15C4 13.3431 7.58172 12 12 12C16.4183 12 20 13.3431 20 15" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
