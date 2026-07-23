import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="404 — Page Not Found | Hadees Trading" description="The page you are looking for could not be found." />
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center">
          <h1 className="font-display text-7xl font-bold gold-text">404</h1>
          <p className="mt-4 text-lg text-white/60">The page you are looking for could not be found.</p>
          <Link to="/" className="gold-btn mt-8 inline-block">Back to Home</Link>
        </div>
      </section>
    </>
  )
}
