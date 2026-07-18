import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Globe2, Layers, CircleDollarSign } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  websitePackages,
  businessServices,
  complianceServices,
  documentServices,
  digitalServices,
  addons,
  comparisonRows,
  faqItems,
  whyChooseItems,
} from "@/lib/pricing";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Hadees Trading" },
      { name: "description", content: "Professional business solutions and enterprise pricing for South African companies, including website packages, compliance, digital systems, and automation." },
      { property: "og:title", content: "Services — Hadees Trading" },
      { property: "og:description", content: "Luxury enterprise pricing for website, compliance, branding and digital transformation services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden pb-24 pt-20 sm:pt-28">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-slate-950/60 via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[rgba(15,23,42,0.75)] p-10 shadow-[0_40px_120px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.14),_transparent_24%)] pointer-events-none" />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-6">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">HADEES TRADING PTY LTD</p>
                <h1 className="font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">Professional Business Solutions</h1>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Helping South African businesses launch, grow, automate, and succeed through professional digital solutions.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                    Book Consultation
                  </Link>
                  <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold/40 hover:bg-white/10">
                    Request Quote
                  </Link>
                  <a href="https://wa.me/27830000000" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold/10">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Company</p>
                <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">
                  <p>HADEES TRADING PTY LTD</p>
                  <p>Based in Mahikeng · North West · South Africa</p>
                  <p>Established 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="space-y-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Website Design Packages</p>
          <h2 className="font-display text-4xl sm:text-5xl">Luxury website packages for every stage of growth.</h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground">
            Choose a package that matches your ambition. Every plan is built for performance, design, and long-term business impact.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {websitePackages.map((pack, index) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 ${pack.featured ? "lg:scale-105" : ""}`}
            >
              {pack.badge ? (
                <div className="mb-5 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                  {pack.badge}
                </div>
              ) : null}
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">{pack.tagline}</p>
              <h3 className="mt-4 font-display text-3xl text-white">{pack.name}</h3>
              <p className="mt-6 text-5xl font-semibold leading-none text-gold">{pack.priceLabel}</p>
              <div className="mt-8 space-y-3 text-sm leading-7 text-muted-foreground">
                {pack.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <CheckCircle2 className="size-4" />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-muted-foreground">
                <span>{pack.delivery}</span>
                <Link to="/contact" className="inline-flex items-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gold/90">
                  {pack.buttonLabel}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/70 bg-[var(--elevated)]/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Business Registration & Compliance Services</p>
              <h2 className="font-display text-4xl sm:text-5xl">Launch with certainty. Stay compliant with every step.</h2>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl">
              <p className="text-base leading-7 text-muted-foreground">
                These services are designed for South African businesses that need fast registration, compliance approvals, and audit-grade governance.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[...businessServices, ...complianceServices].map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.1)] backdrop-blur-xl transition hover:border-gold/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-xl text-white">{service.name}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{service.quoteType === "custom" ? "Custom Quote" : service.priceLabel}</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                    {service.quoteType === "custom" ? "Custom" : "Fixed"}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <Link to="/contact" className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-gold transition hover:bg-gold/15">
                    View Details
                  </Link>
                  <a href="https://wa.me/27830000000" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
                    Request Quote
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="space-y-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Business Documents & Corporate Branding</p>
          <h2 className="font-display text-4xl sm:text-5xl">Premium brand assets for professional companies.</h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground">
            Build a corporate identity that matches the quality of your digital experience and business operations.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documentServices.map((document, index) => (
            <motion.div
              key={document.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-display text-xl text-white">{document.name}</p>
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">{document.priceLabel}</p>
              </div>
              {document.note ? <p className="mt-4 text-sm leading-7 text-muted-foreground">{document.note}</p> : null}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
                  View Details
                </Link>
                <a href="https://wa.me/27830000000" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm text-gold transition hover:bg-gold/15">
                  Request Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/70 bg-[var(--elevated)]/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-6 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Digital Solutions</p>
            <h2 className="font-display text-4xl sm:text-5xl">Enterprise technology services that power growth.</h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground">
              A complete set of digital products and systems designed to scale with your business.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {digitalServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl hover:border-gold/30"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-3xl bg-gold/10 text-gold">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <p className="font-display text-lg text-white">{service.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="space-y-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Optional Add-ons</p>
          <h2 className="font-display text-4xl sm:text-5xl">Extend your package with premium extras.</h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground">
            Add flexible services that support growth, presence and long-term digital operations.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {addons.map((addon, index) => (
            <motion.div
              key={addon.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-display text-lg text-white">{addon.name}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{addon.subtitle}</p>
                </div>
                <p className="font-semibold text-gold">{addon.priceLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/70 bg-[var(--elevated)]/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(15,23,42,0.12)] backdrop-blur-xl">
            <div className="grid gap-6 border-b border-white/10 bg-slate-950/80 p-8 text-white sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-white/60">Feature</p>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-white/60">Starter</p>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-white/60">Business</p>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-white/60">Premium</p>
            </div>
            <div className="grid divide-y divide-white/10">
              {comparisonRows.map((row) => (
                <div key={row.id} className="grid gap-4 p-6 text-sm sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
                  <div className="font-medium text-white">{row.feature}</div>
                  <div className="text-muted-foreground">{row.starter}</div>
                  <div className="text-muted-foreground">{row.business}</div>
                  <div className="text-muted-foreground">{row.premium}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="space-y-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Why Choose HADEES TRADING</p>
          <h2 className="font-display text-4xl sm:text-5xl">The difference is integrated technology, compliance and growth.</h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-sm text-muted-foreground shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            >
              <p className="font-display text-lg text-white">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/70 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Frequently Asked Questions</p>
              <h2 className="font-display text-4xl sm:text-5xl">Questions every business leader asks.</h2>
            </div>
            <Accordion type="single" collapsible className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl">
              {faqItems.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`} className="border-b border-white/10 last:border-b-0">
                  <AccordionTrigger className="text-left font-display text-lg text-white hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-slate-950/95 via-slate-900/95 to-slate-950/95 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.24)]">
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
          <div className="absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-gold/80">Ready to Build Your Business?</p>
              <h2 className="font-display text-4xl sm:text-5xl text-white">Whether you're starting a company, registering for compliance, building a professional website, or implementing AI automation, HADEES TRADING PTY LTD is your trusted technology and business partner.</h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gold/90">
                Book Consultation
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Request Quote
              </Link>
              <a href="https://wa.me/27830000000" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold/10">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
