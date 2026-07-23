import { useParams, Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import ServiceIcon from '../components/ServiceIcon'
import PlaceholderImage from '../components/PlaceholderImage'
import { solutions } from '../data/siteData'

export default function SolutionDetail() {
  const { slug } = useParams()
  const solution = solutions.find((s) => s.slug === slug)

  if (!solution) {
    return (
      <div className="pt-32 text-center">
        <p className="text-white/60">Solution not found.</p>
        <Link to="/" className="gold-btn-sm mt-4 inline-block">Back Home</Link>
      </div>
    )
  }

  const Icon = solution.icon

  return (
    <>
      <SEO
        title={`${solution.title} | Hadees Trading`}
        description={solution.description}
        canonical={`https://hadeestrading.co.za/solutions/${solution.slug}`}
      />
      <PageHero
        title={solution.title}
        subtitle={solution.description}
        breadcrumb={`Home / Solutions / ${solution.title}`}
      />

      <section className="section-padding pt-4">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <ServiceIcon icon={Icon} gradient={solution.gradient} size={32} />
                <h2 className="font-display text-2xl font-bold">{solution.title}</h2>
              </div>
              <p className="text-white/60 leading-relaxed">{solution.description}</p>
              <p className="text-white/50 text-sm">
                {solution.title} is part of the Hadees Trading enterprise solution suite, designed to integrate seamlessly with IVAN OS and our other business platforms.
              </p>
              <Link to="/contact" className="gold-btn inline-flex items-center gap-2">
                Request Demo <ArrowRight size={18} />
              </Link>
            </div>
            <PlaceholderImage icon={Icon} gradient={solution.gradient} label={solution.title} className="min-h-[300px]" />
          </div>
        </div>
      </section>
    </>
  )
}
