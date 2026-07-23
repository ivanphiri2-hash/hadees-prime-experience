import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import ServiceIcon from '../components/ServiceIcon'
import { workspaceLinks } from '../data/siteData'

export default function Workspace() {
  return (
    <>
      <SEO
        title="Workspace | Hadees Trading"
        description="Access your Hadees Trading workspace — CRM, Enterprise CRM, Admin, Client Portal, Mobile App, and Knowledge Center."
        canonical="https://hadeestrading.co.za/workspace"
      />
      <PageHero
        title="Workspace"
        subtitle="Access all your business tools in one place. Choose a workspace to continue."
        breadcrumb="Home / Workspace"
      />

      <section className="section-padding pt-4">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workspaceLinks.map((w, i) => (
              <Link
                key={w.title}
                to={w.href}
                className="card-glass group animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-start justify-between">
                  <ServiceIcon icon={w.icon} gradient={w.gradient} size={28} />
                  <ArrowRight size={20} className="text-white/30 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="mt-4 font-semibold text-white group-hover:text-gold-400 transition-colors">{w.title}</h3>
                <p className="mt-1 text-sm text-white/50">{w.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
