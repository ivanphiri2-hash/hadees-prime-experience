import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustBadges from '../components/TrustBadges'

const plans = [
  {
    name: 'Starter',
    price: 'R2,499',
    period: 'once',
    description: 'Perfect for small businesses getting started online.',
    features: ['3-Page Website', 'Mobile Responsive', 'Basic SEO', 'Contact Form', '2–4 Day Delivery'],
    highlighted: false,
  },
  {
    name: 'Business',
    price: 'R5,999',
    period: 'once',
    description: 'For growing businesses that need more functionality.',
    features: ['8-Page Website', 'Premium Design', 'Advanced SEO', 'CRM Integration', 'Analytics Setup', '4–7 Day Delivery'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'quote',
    description: 'Full-scale enterprise solutions with custom features.',
    features: ['Unlimited Pages', 'Custom CRM', 'AI Automation', 'API Integration', 'Dedicated Support', '7–14 Day Delivery'],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing | Hadees Trading"
        description="Transparent pricing for website design, CRM development, and business services. Starter, Business, and Enterprise plans."
        canonical="https://hadeestrading.co.za/pricing"
        schema={{
          "@context": "https://schema.org",
          "@type": "PriceSpecification",
          "name": "Hadees Trading Pricing",
        }}
      />
      <PageHero
        title="Pricing"
        subtitle="Transparent, competitive pricing for every business size. No hidden fees."
        breadcrumb="Home / Pricing"
      />

      <section className="section-padding pt-4">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <div
                key={p.name}
                className={`card-glass relative animate-fade-in-up ${p.highlighted ? 'border-gold-500/40 shadow-[0_0_40px_rgba(245,158,11,0.1)]' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {p.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 gold-btn-sm text-xs px-3 py-1">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-white/50">{p.description}</p>
                <div className="mt-4">
                  <span className="font-display text-3xl font-bold gold-text">{p.price}</span>
                  {p.period !== 'quote' && <span className="text-sm text-white/40 ml-1">/{p.period}</span>}
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <Check size={16} className="text-gold-400 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-6 ${p.highlighted ? 'gold-btn' : 'outline-btn'} w-full inline-flex items-center justify-center gap-2`}>
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <TrustBadges variant="grid" />
          </div>
        </div>
      </section>
    </>
  )
}
