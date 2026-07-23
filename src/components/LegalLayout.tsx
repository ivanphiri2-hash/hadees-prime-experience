import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export interface LegalSection {
  id: string
  label: string
}

interface Props {
  title: string
  lastUpdated: string
  sections: LegalSection[]
  children: ReactNode
  breadcrumb: string
}

export default function LegalLayout({ title, lastUpdated, sections, children, breadcrumb }: Props) {
  return (
    <>
      <section className="relative pt-32 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08),transparent_60%)]" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-medium text-white/40 mb-3">{breadcrumb}</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h1>
          <p className="mt-3 text-sm text-white/40">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 glass rounded-2xl p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">Contents</h3>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-1 text-sm text-white/60 hover:text-gold-400 transition-colors py-1.5"
                    >
                      <ChevronRight size={12} className="shrink-0" />
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8">{children}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function LegalSectionBlock({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="font-display text-xl font-bold mb-3 text-white">{title}</h2>
      <div className="text-white/60 leading-relaxed space-y-3 text-sm">{children}</div>
    </div>
  )
}

export function LegalLink({ to, children }: { to: string; children: string }) {
  return <Link to={to} className="text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-2">{children}</Link>
}
