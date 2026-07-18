import { motion } from "motion/react";
import { Bell, CheckCircle2, Clock3, FileText, ShieldCheck, Users, CalendarDays, MessageCircle } from "lucide-react";

export function AuthWorkspace() {
  return (
    <main className="bg-[#060912] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 xl:grid-cols-[0.9fr_0.6fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.22)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-1 text-xs uppercase tracking-[0.24em] text-emerald-200">
              Secure workspace
            </span>
            <h1 className="mt-6 font-display text-4xl tracking-tight sm:text-5xl">Authenticated workspace for teams and clients.</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">
              A single authenticated environment where admin, sales, finance, support and clients see the same live data, approvals, documents and AI guidance — without exposing any marketing site content.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Role-based access", icon: ShieldCheck, copy: "Admin, sales, finance, operations and client views with permissions." },
                { label: "Secure documents", icon: FileText, copy: "Versioned contract and compliance files with audit trails." },
                { label: "Live approvals", icon: Clock3, copy: "Pending actions routed to the right approver with due-date signals." },
                { label: "Communications", icon: MessageCircle, copy: "Messages, notifications and task notes synced in one place." },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-[#03101f]/80 p-5">
                  <div className="flex items-center gap-3 text-emerald-300">
                    <item.icon className="size-5" />
                    <p className="font-semibold text-white">{item.label}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/70">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-white/40">Workspace snapshot</p>
              <div className="mt-6 space-y-4">
                {[
                  { label: "Active users", value: "12" },
                  { label: "Open approvals", value: "5" },
                  { label: "Recently updated docs", value: "8" },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-[#02101c]/90 p-4">
                    <p className="text-sm text-white/60">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#03101f]/80 p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-3xl bg-cyan-400/10 text-cyan-200">
                  <Users className="size-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/40">Team roles</p>
                  <p className="mt-1 text-xl font-semibold text-white">Admin, sales, finance, operations</p>
                </div>
              </div>
              <div className="mt-6 space-y-3 text-sm text-white/70">
                <p>Each role sees a tailored workspace with priority actions, customer signals and compliance health.</p>
                <p>Sales gets lead scoring and quote workflows, finance sees invoices and receipts, while operations sees project delivery and compliance milestones.</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#03101f]/80 p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-3xl bg-gold/10 text-gold">
                  <CalendarDays className="size-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/40">Delivery pulse</p>
                  <p className="mt-1 text-xl font-semibold text-white">3 deadlines today</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-white/70">
                Notifications, approvals and client updates are collated so teams can act without switching context.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">Built for every business team</p>
              <h2 className="mt-4 font-display text-4xl text-white">One authenticated entry for everyone who works on the deal.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                A workspace designed to support a true enterprise lifecycle: from a warm lead and quote approval to invoice collection, compliance renewal and client handoff.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <div className="flex items-center gap-3 text-white/80">
                <span className="grid h-11 w-11 place-items-center rounded-3xl bg-cyan-400/10 text-cyan-200">
                  <Bell className="size-5" />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/40">Notification engine</p>
                  <p className="mt-2 text-base text-white">Email, WhatsApp and in-app signals keep the right people aligned.</p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 rounded-[1.75rem] border border-white/10 bg-[#02101c]/90 p-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/60">10 new alerts</span>
                  <span className="text-sm text-emerald-300">Live</span>
                </div>
                <p className="text-sm text-white/70">Approvals and compliance alerts appear in the authenticated workspace for fast resolution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
