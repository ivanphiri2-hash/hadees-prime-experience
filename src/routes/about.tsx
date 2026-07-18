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
  const principles = [
    {
      label: "Innovation First",
      description:
        "We embrace modern technology, Artificial Intelligence, and automation to help businesses work smarter and stay ahead.",
    },
    {
      label: "Client Success",
      description:
        "Every project is built around delivering measurable business value, long-term growth, and exceptional customer experience.",
    },
    {
      label: "Quality Without Compromise",
      description:
        "Every website, system, and business solution is designed with precision, security, performance, and scalability in mind.",
    },
    {
      label: "Integrity & Trust",
      description:
        "We build lasting relationships through honesty, transparency, professionalism, and reliable service.",
    },
  ];

  const services = [
    "Business Registration",
    "Professional Website Development",
    "AI Automation",
    "IVAN OS Enterprise Platform",
    "Business Compliance",
    "Tender Support",
    "Brand Identity",
    "CRM Systems",
    "Digital Transformation",
    "Business Consulting",
    "Client Portal Solutions",
    "Enterprise Software",
  ];

  const stats = [
    { label: "Established", value: "2025" },
    { label: "Location", value: "Mahikeng · North West · South Africa" },
    { label: "Services", value: "12+" },
    { label: "Business Solutions", value: "Enterprise Platform · IVAN OS" },
    { label: "Support", value: "Nationwide" },
    { label: "Technology", value: "AI Powered" },
  ];

  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden pb-24 pt-20 sm:pt-28">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-slate-950 via-slate-950/30 to-transparent opacity-80" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_25%)] pointer-events-none" />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-6">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">About</p>
                <h1 className="font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
                  Building businesses with intelligence, innovation, and trust.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  HADEES TRADING (PTY) LTD is a South African business solutions and technology company proudly based in Mahikeng, North West. Established in 2025, we help entrepreneurs, startups, SMEs, contractors, and established businesses build, grow, automate, and manage their operations through professional digital solutions.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-background/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Mission</p>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                  Empowering African businesses through innovation, automation, compliance, and world-class digital solutions.
                </h2>
                <div className="mt-8 border-t border-border/60 pt-8">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Vision</p>
                  <p className="mt-4 text-lg leading-8 text-muted-foreground">
                    To become Africa's leading intelligent business technology company by creating enterprise-grade solutions that help businesses launch, scale, automate, and succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">Our Principles</p>
            <h2 className="font-display text-4xl sm:text-5xl">Strategic values that shape every solution.</h2>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground">
              These principles are the foundation for enterprise-quality systems, seamless customer experiences, and long-term business resilience.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_70px_rgba(15,23,42,0.1)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">0{index + 1}</p>
                  <h3 className="mt-4 font-display text-2xl leading-tight">{principle.label}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-[var(--elevated)]/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">What We Do</p>
              <h2 className="font-display text-4xl sm:text-5xl">A modern suite of business technology services.</h2>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                We combine business registration, compliance services, premium website development, AI automation, enterprise software, and digital transformation into one integrated ecosystem.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-sm text-muted-foreground shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl hover:border-foreground/20 hover:bg-white/10"
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">Why Choose Hadees Trading</p>
            <h2 className="font-display text-4xl sm:text-5xl">A premium partner for intelligent business transformation.</h2>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground">
              Instead of simply offering services, we create complete business ecosystems. Our integrated approach combines compliance, digital transformation, Artificial Intelligence, enterprise software, automation, and business growth into one seamless experience.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl"
              >
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</p>
                <p className="mt-4 font-display text-3xl leading-tight text-foreground">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-[var(--elevated)]/50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">Our Difference</p>
              <h2 className="font-display text-4xl sm:text-5xl">
                Intelligent business systems, not one-off services.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                Every solution is designed to grow alongside your business. We combine compliance, digital transformation, Artificial Intelligence, enterprise software, automation, and business growth into one seamless experience.
              </p>
            </div>
            <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_130px_rgba(15,23,42,0.14)] backdrop-blur-xl">
              <div className="space-y-6">
                <p className="font-display text-3xl leading-tight">We don't just build websites.</p>
                <p className="text-lg leading-8 text-muted-foreground">
                  We build intelligent business systems that help teams launch, scale, automate, and remain compliant with the highest standards of enterprise performance.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Integrated compliance and digital operations",
                    "AI-enabled workflows and enterprise automation",
                    "Customer portals and CRM-driven experiences",
                    "Secure, scalable platforms built for growth",
                  ].map((item) => (
                    <div key={item} className="rounded-3xl border border-border/60 bg-background/70 p-4 text-sm text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32 pt-2">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.3)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.16),_transparent_18%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300/80">Ready to build your business with confidence?</p>
              <h2 className="font-display text-4xl sm:text-5xl text-white">Let's create something exceptional together.</h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                Partner with a team that combines enterprise-grade technology, compliance expertise, and AI-enabled growth strategy for every stage of your business.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Book a Consultation
              </Link>
              <a
                href="https://wa.me/27830000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
