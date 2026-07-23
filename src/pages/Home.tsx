import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Zap, ShieldCheck, Rocket } from 'lucide-react'
import SEO from '../components/SEO'
import ServiceIcon from '../components/ServiceIcon'
import TrustBadges from '../components/TrustBadges'
import PlaceholderImage from '../components/PlaceholderImage'
import { services, solutions, companyInfo } from '../data/siteData'

export default function Home() {
  return (
    <>
      <SEO
        title="Hadees Trading | Enterprise Business Solutions & Digital Services"
        description="Enterprise website design, CRM development, AI automation, business registration, compliance, and branding services in Mahikeng, South Africa."
        keywords="website design, CRM development, AI automation, business registration, compliance, branding, South Africa, Mahikeng, IVAN OS"
        canonical="https://hadeestrading.co.za/"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Hadees Trading (Pty) Ltd",
          "image": "https://hadeestrading.co.za/favicon.svg",
          "telephone": "+27 83 753 5798",
          "email": "admin@hadeestrading.co.za",
          "address": { "@type": "PostalAddress", "addressLocality": "Mahikeng", "addressCountry": "ZA" },
          "priceRange": "$$",
        }}
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.12),transparent_60%)]" />
        <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(10,10,10,0.5))] pointer-events-none" />

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 animate-fade-in">
              <Sparkles size={14} className="text-gold-400" />
              <span className="text-xs font-medium text-white/70">Enterprise-Grade Business Solutions</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance animate-fade-in-up">
              Build your business with <span className="gold-text">enterprise-grade</span> digital solutions
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              From website design to CRM development, AI automation to business registration — Hadees Trading delivers premium, production-ready solutions for South African businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/contact" className="gold-btn inline-flex items-center gap-2">
                Book Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/services/website-design" className="outline-btn inline-flex items-center gap-2">
                Explore Services
              </Link>
            </div>
            <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <TrustBadges />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-2">Our Services</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Premium solutions for every business need</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="card-glass group animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <ServiceIcon icon={s.icon} gradient={s.gradient} size={24} />
                <h3 className="mt-4 font-semibold text-white group-hover:text-gold-400 transition-colors">{s.title}</h3>
                <p className="mt-1 text-sm text-white/50">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-2">Solutions</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Integrated platforms for enterprise operations</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {solutions.map((s, i) => (
              <Link
                key={s.slug}
                to={`/solutions/${s.slug}`}
                className="card-glass group animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <ServiceIcon icon={s.icon} gradient={s.gradient} size={24} />
                <h3 className="mt-4 font-semibold text-white group-hover:text-gold-400 transition-colors">{s.title}</h3>
                <p className="mt-1 text-sm text-white/50">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for speed and performance with modern frameworks.' },
              { icon: ShieldCheck, title: 'POPIA Compliant', desc: 'Full compliance with South African data protection regulations.' },
              { icon: Rocket, title: 'Production Ready', desc: 'Enterprise-grade solutions built to scale with your business.' },
            ].map((f, i) => (
              <div key={i} className="card-glass animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600">
                  <f.icon size={24} className="text-black" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-white/50">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder Showcase */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-2">Showcase</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Enterprise-grade solutions in action</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {[
              { icon: services[0].icon, gradient: services[0].gradient, label: 'Website Development' },
              { icon: services[7].icon, gradient: services[7].gradient, label: 'AI Automation' },
              { icon: services[1].icon, gradient: services[1].gradient, label: 'Business Registration' },
              { icon: services[3].icon, gradient: services[3].gradient, label: 'Compliance' },
              { icon: solutions[0].icon, gradient: solutions[0].gradient, label: 'CRM' },
              { icon: solutions[1].icon, gradient: solutions[1].gradient, label: 'IVAN OS' },
              { icon: services[2].icon, gradient: services[2].gradient, label: 'Tender Services' },
              { icon: services[5].icon, gradient: services[5].gradient, label: 'Business Consulting' },
              { icon: solutions[3].icon, gradient: solutions[3].gradient, label: 'Client Portal' },
              { icon: solutions[0].icon, gradient: 'from-indigo-500 to-blue-600', label: 'Enterprise Dashboard' },
            ].map((p, i) => (
              <PlaceholderImage key={i} icon={p.icon} gradient={p.gradient} label={p.label} className="animate-fade-in-up" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden glass rounded-3xl p-12 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.1),transparent_70%)]" />
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Ready to elevate your business?</h2>
              <p className="mt-4 text-white/60 max-w-xl mx-auto">
                Book a consultation with our team and discover how Hadees Trading can transform your business with enterprise-grade solutions.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="gold-btn inline-flex items-center gap-2">
                  Book Consultation <ArrowRight size={18} />
                </Link>
                <Link to="/pricing" className="outline-btn">View Pricing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
