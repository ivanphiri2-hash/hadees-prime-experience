import { useParams, Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import ServiceIcon from '../components/ServiceIcon'
import PlaceholderImage from '../components/PlaceholderImage'
import TrustBadges from '../components/TrustBadges'
import { services } from '../data/siteData'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="pt-32 text-center">
        <p className="text-white/60">Service not found.</p>
        <Link to="/" className="gold-btn-sm mt-4 inline-block">Back Home</Link>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <>
      <SEO
        title={`${service.title} | Hadees Trading`}
        description={service.description}
        keywords={`${service.title}, ${service.short}, Hadees Trading, South Africa`}
        canonical={`https://hadeestrading.co.za/services/${service.slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": { "@type": "Organization", "name": "Hadees Trading (Pty) Ltd" },
        }}
      />
      <PageHero
        title={service.title}
        subtitle={service.description}
        breadcrumb={<><Link to="/" className="hover:text-gold-400">Home</Link> / <Link to="/#services" className="hover:text-gold-400">Services</Link> / {service.title}</>}
      />

      <section className="section-padding pt-4">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <ServiceIcon icon={Icon} gradient={service.gradient} size={32} />
                <h2 className="font-display text-2xl font-bold">{service.title}</h2>
              </div>
              <p className="text-white/60 leading-relaxed">{service.description}</p>
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <div key={f} className="glass rounded-xl px-4 py-3 flex items-center gap-2">
                    <Check size={16} className="text-gold-400 shrink-0" />
                    <span className="text-sm text-white/80">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="gold-btn inline-flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
            <PlaceholderImage icon={Icon} gradient={service.gradient} label={service.title} className="min-h-[300px]" />
          </div>

          <div className="mt-12">
            <TrustBadges variant="grid" />
          </div>
        </div>
      </section>
    </>
  )
}
