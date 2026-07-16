import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-[var(--elevated)]/40">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-md bg-foreground text-background font-display text-xl leading-none">H</span>
              <span className="font-display text-2xl">Hadees Trading</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground text-pretty">
              A South African enterprise partner engineering procurement, compliance and digital infrastructure for organisations that can't afford to guess.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href="mailto:hello@hadees.trading" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"><Mail className="size-4" /> hello@hadees.trading</a>
              <a href="tel:+27000000000" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"><Phone className="size-4" /> +27 00 000 0000</a>
              <span className="inline-flex items-center gap-2 text-muted-foreground"><MapPin className="size-4" /> Johannesburg, South Africa</span>
            </div>
          </div>

          <FooterCol title="Company" items={[["About", "/about"], ["Services", "/services"], ["Insights", "/insights"], ["Contact", "/contact"]]} />
          <FooterCol title="Practice" items={[["Tender management", "/services"], ["Compliance advisory", "/services"], ["Web development", "/services"], ["AI solutions", "/services"]]} />
          <FooterCol title="Legal" items={[["Terms", "/legal/terms"], ["Privacy", "/legal/privacy"], ["POPIA notice", "/legal/popia"], ["B-BBEE", "/about"]]} />
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-border/60 pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} Hadees Trading (Pty) Ltd. All rights reserved.
          </p>
          <a href="mailto:hello@hadees.trading" className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-accent">
            Start a conversation <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link to={href} className="text-foreground/80 hover:text-foreground">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
