import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hadees Trading" },
      { name: "description", content: "Hadees Trading is a South African enterprise partner engineering procurement, compliance and digital infrastructure since 2018." },
      { property: "og:title", content: "About — Hadees Trading" },
      { property: "og:description", content: "A senior team, four practices, measurable outcomes." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <main className="pt-32">
      <section className="hero-bg grain pb-24 pt-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] sm:text-7xl text-balance">
            We build the <span className="italic text-[color:var(--gold)]">boring parts</span> the market rewards.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground text-pretty">
            Hadees Trading (Pty) Ltd is a Johannesburg-based partner for organisations that treat procurement, compliance and product as one operating system. We were founded in 2018 by a small team of ex-consulting operators who were tired of watching good businesses lose winnable tenders to paperwork.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Principles</p>
            <h2 className="mt-3 font-display text-4xl">How we choose to work.</h2>
          </div>
          <div className="grid gap-4">
            {[
              { t: "Small, senior, accountable.", b: "The person who wrote the proposal is the person who ships the work. No junior swap-outs." },
              { t: "Price the outcome, not the hour.", b: "Fixed envelopes for defined scopes. If we're wrong on estimate, that's our problem, not yours." },
              { t: "Evidence over adjectives.", b: "Everything we ship is audit-ready — because in our world, someone always audits." },
              { t: "Say no when we should.", b: "We turn away roughly a third of enquiries. It's how the rest of the work stays good." },
            ].map((p, i) => (
              <motion.div key={p.t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-2xl">{p.t}</p>
                <p className="mt-2 text-muted-foreground">{p.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-[var(--elevated)]/40 py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 md:grid-cols-4">
          {[
            { v: "2018", k: "Founded" }, { v: "24", k: "People" },
            { v: "9", k: "Provinces served" }, { v: "L1", k: "B-BBEE contributor" },
          ].map((s) => (
            <div key={s.k}>
              <p className="font-display text-5xl md:text-6xl">{s.v}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.k}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-balance">Want to see if we're a fit?</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">Book a discovery call <ArrowRight className="size-4" /></Link>
        </div>
      </section>
    </main>
  );
}
