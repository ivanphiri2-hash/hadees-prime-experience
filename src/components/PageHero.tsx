import { type ReactNode } from 'react'

interface Props {
  title: string
  subtitle?: string
  breadcrumb?: ReactNode
}

export default function PageHero({ title, subtitle, breadcrumb }: Props) {
  return (
    <section className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08),transparent_60%)]" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-gold-500/5 blur-3xl" />
      <div className="container-max px-4 sm:px-6 lg:px-8 relative">
        {breadcrumb && (
          <p className="text-xs font-medium text-white/40 mb-3 animate-fade-in">{breadcrumb}</p>
        )}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/60 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
