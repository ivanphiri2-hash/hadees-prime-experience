import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { formatAddress, mailto, useSiteContact, whatsappHref } from "@/lib/site-config";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hadees Trading" },
      { name: "description", content: "Book a 30-minute working session with Hadees Trading. We reply within one business day." },
      { property: "og:title", content: "Contact — Hadees Trading" },
      { property: "og:description", content: "Reach us by email, phone or WhatsApp." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const c = useSiteContact();

  const [sending, setSending] = useState(false);
  return (
    <main className="pt-32">
      <section className="hero-bg grain pb-16 pt-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] sm:text-7xl text-balance">
            Tell us about the <span className="italic text-[color:var(--gold)]">deadline</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">We reply within one business day. Urgent tender? Ping us on WhatsApp — a partner is on-call.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-16 md:grid-cols-3">
        {[
          { icon: Mail, k: "Email", v: c.email, href: mailto(c) },
          { icon: Phone, k: "Phone", v: c.phone, href: c.phoneHref },
          { icon: MessageCircle, k: "WhatsApp", v: "Chat now", href: whatsappHref(c) },
        ].map((card) => (
          <a key={card.k} href={card.href} className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/30">
            <div className="grid size-10 place-items-center rounded-lg border border-border bg-background"><card.icon className="size-4" /></div>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{card.k}</p>
            <p className="mt-1 font-display text-2xl">{card.v}</p>
            <p className="mt-4 inline-flex items-center gap-1 text-sm text-foreground/80">Open <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" /></p>
          </a>
        ))}
      </section>


      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-32 lg:grid-cols-[1.1fr_1fr]">
        <motion.form
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            setTimeout(() => { setSending(false); toast.success("Thanks — we'll be in touch within one business day."); (e.target as HTMLFormElement).reset(); }, 800);
          }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          <h2 className="font-display text-3xl">Start a project</h2>
          <p className="mt-2 text-sm text-muted-foreground">Share a couple of lines — we'll come back with the right person.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Work email" name="email" type="email" required />
            <Field label="Company" name="company" />
            <Field label="Practice" name="practice" as="select" options={["Tender & Procurement", "Compliance advisory", "Web & product", "AI solutions", "Not sure"]} />
          </div>
          <div className="mt-4">
            <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Project brief</label>
            <textarea name="brief" rows={5} required className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground/60" placeholder="What are we solving? Any deadlines?" />
          </div>
          <button disabled={sending} className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background disabled:opacity-70">
            {sending ? "Sending…" : "Send enquiry"} <Send className="size-4" />
          </button>
        </motion.form>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-[var(--elevated)] p-8">
            <MapPin className="size-5 text-[color:var(--gold)]" />
            <p className="mt-4 font-display text-2xl">Johannesburg HQ</p>
            <p className="mt-2 text-sm text-muted-foreground">Rosebank, GP · By appointment only.<br />Remote-first across all nine provinces.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Response times</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex justify-between border-b border-border/60 pb-2"><span>Email</span><span className="font-mono">≤ 24h</span></li>
              <li className="flex justify-between border-b border-border/60 pb-2"><span>WhatsApp</span><span className="font-mono">≤ 2h · biz hours</span></li>
              <li className="flex justify-between"><span>Urgent tender</span><span className="font-mono">On-call partner</span></li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}

function Field({ label, name, type = "text", required, as, options }: { label: string; name: string; type?: string; required?: boolean; as?: "select"; options?: string[] }) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      {as === "select" ? (
        <select name={name} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground/60">
          {options?.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input name={name} type={type} required={required} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground/60" />
      )}
    </div>
  );
}
