import { Link } from "@tanstack/react-router";
import { ArrowRight, DeviceMobile, MessageCircle, ShieldCheck } from "lucide-react";

export function MobileEntry() {
  return (
    <main className="bg-[#060912] text-white">
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">
          <DeviceMobile className="size-4" /> Mobile entrypoint
        </div>
        <h1 className="mt-8 scroll-m-20 text-4xl font-semibold tracking-tight sm:text-5xl">A mobile-ready app entry for every customer and field team.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">
          A secure mobile touchpoint for clients, sales reps and operations to access quotes, approvals, documents, messages and workflows on the move.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300">
            Book a mobile walkthrough <ArrowRight className="size-4" />
          </Link>
          <Link to="/enterprise-crm" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Explore enterprise system
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Client mobile access</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">Client access to invoices, project status, documents, messages and payments in a secure branded app shell.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Field team tools</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">Field teams get work updates, approvals, document capture and task status directly in a mobile-friendly interface.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
