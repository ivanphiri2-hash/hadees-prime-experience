import { Link } from 'react-router-dom'
import { Target, Eye, Heart, Award } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustBadges from '../components/TrustBadges'
import { companyInfo } from '../data/siteData'

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Hadees Trading"
        description="Hadees Trading (Pty) Ltd — established 2025 in Mahikeng, South Africa. Enterprise business solutions, digital services, and technology consulting."
        canonical="https://hadeestrading.co.za/about"
      />
      <PageHero
        title="About Hadees Trading"
        subtitle="Building enterprise-grade digital solutions for South African businesses since 2025."
        breadcrumb="Home / About"
      />

      <section className="section-padding pt-4">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold">Our Story</h2>
              <p className="text-white/60 leading-relaxed">
                Hadees Trading (Pty) Ltd was established in 2025 in Mahikeng, South Africa, with a mission to deliver enterprise-grade digital solutions to businesses across the country. We specialize in website design, CRM development, AI automation, business registration, compliance, and branding.
              </p>
              <p className="text-white/60 leading-relaxed">
                Our team combines technical expertise with deep understanding of the South African business landscape to deliver solutions that are not only beautiful but functional, compliant, and scalable.
              </p>
              <div className="glass rounded-2xl p-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">Established</p>
                  <p className="text-lg font-semibold gold-text">{companyInfo.established}</p>
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">Location</p>
                  <p className="text-lg font-semibold">{companyInfo.location}</p>
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-semibold">{companyInfo.email}</p>
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-semibold">{companyInfo.phone}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, title: 'Mission', desc: 'Empower South African businesses with enterprise-grade technology.' },
                { icon: Eye, title: 'Vision', desc: 'To be the leading digital solutions provider in South Africa.' },
                { icon: Heart, title: 'Values', desc: 'Integrity, excellence, and client-first approach in everything we do.' },
                { icon: Award, title: 'Quality', desc: 'Production-ready, POPIA-compliant solutions built to last.' },
              ].map((v, i) => (
                <div key={i} className="card-glass">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600">
                    <v.icon size={20} className="text-black" />
                  </div>
                  <h3 className="mt-3 font-semibold">{v.title}</h3>
                  <p className="mt-1 text-sm text-white/50">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <TrustBadges variant="grid" />
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="gold-btn inline-flex items-center gap-2">
              Work With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
