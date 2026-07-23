import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle, Clock, ChevronDown, Send, CheckCircle2 } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import { companyInfo } from '../data/siteData'

const faqs = [
  { q: 'What services does Hadees Trading offer?', a: 'We offer website design, CRM development, AI automation, business registration, compliance, branding, business consulting, hosting, and tender assistance.' },
  { q: 'How long does website development take?', a: 'Starter websites take 2–4 days, Business websites 4–7 days, and Premium websites 7–14 days depending on complexity.' },
  { q: 'Are you POPIA compliant?', a: 'Yes, all our services and solutions are fully POPIA compliant. We adhere to South African data protection regulations.' },
  { q: 'Do you offer support after project completion?', a: 'Yes, we provide ongoing support for all our solutions. Contact us via WhatsApp, email, or our client portal.' },
  { q: 'What payment methods do you accept?', a: 'We accept payments via PayFast, including Visa, Mastercard, Instant EFT, Capitec Pay, and Scan to Pay.' },
  { q: 'Can I get a refund?', a: 'Refund eligibility depends on the service and project stage. Please review our Refund Policy for detailed information.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (validate()) setSubmitted(true)
  }

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.location)}`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(companyInfo.location)}`
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}`

  return (
    <>
      <SEO
        title="Contact Us | Hadees Trading"
        description="Get in touch with Hadees Trading. Located in Mahikeng, South Africa. Email, phone, WhatsApp, and consultation booking available."
        canonical="https://hadeestrading.co.za/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Hadees Trading (Pty) Ltd",
          "telephone": "+27 83 753 5798",
          "email": "admin@hadeestrading.co.za",
          "address": { "@type": "PostalAddress", "addressLocality": "Mahikeng", "addressCountry": "ZA" },
        }}
      />
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team. We're here to help your business grow."
        breadcrumb="Home / Contact"
      />

      <section className="section-padding pt-4">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="card-glass group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
                <MessageCircle size={20} className="text-white" />
              </div>
              <h3 className="mt-3 font-semibold">WhatsApp</h3>
              <p className="mt-1 text-sm text-white/50">{companyInfo.phone}</p>
            </a>
            <a href={`mailto:${companyInfo.email}`} className="card-glass group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Mail size={20} className="text-white" />
              </div>
              <h3 className="mt-3 font-semibold">Email</h3>
              <p className="mt-1 text-sm text-white/50">{companyInfo.email}</p>
            </a>
            <a href={`tel:${companyInfo.phoneIntl.replace(/\s/g, '')}`} className="card-glass group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600">
                <Phone size={20} className="text-black" />
              </div>
              <h3 className="mt-3 font-semibold">Phone</h3>
              <p className="mt-1 text-sm text-white/50">{companyInfo.phone}</p>
            </a>
            <div className="card-glass">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-500">
                <Clock size={20} className="text-white" />
              </div>
              <h3 className="mt-3 font-semibold">Business Hours</h3>
              <p className="mt-1 text-sm text-white/50">Mon–Fri: 8am–5pm<br />Sat: 9am–1pm</p>
            </div>
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card-glass">
              <h2 className="font-display text-xl font-bold mb-4">Send us a message</h2>
              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-12 text-center">
                  <CheckCircle2 size={48} className="text-gold-400" />
                  <p className="text-lg font-semibold">Message sent successfully!</p>
                  <p className="text-sm text-white/50">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label className="text-sm font-medium text-white/70 block mb-1">Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full glass rounded-xl px-4 py-2.5 text-sm outline-none focus:border-gold-500/50"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white/70 block mb-1">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full glass rounded-xl px-4 py-2.5 text-sm outline-none focus:border-gold-500/50"
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white/70 block mb-1">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full glass rounded-xl px-4 py-2.5 text-sm outline-none focus:border-gold-500/50"
                      placeholder="083 000 0000"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white/70 block mb-1">Subject *</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full glass rounded-xl px-4 py-2.5 text-sm outline-none focus:border-gold-500/50"
                      placeholder="How can we help?"
                    />
                    {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white/70 block mb-1">Message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full glass rounded-xl px-4 py-2.5 text-sm outline-none focus:border-gold-500/50 resize-none"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" className="gold-btn w-full inline-flex items-center justify-center gap-2">
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-4">
              <div className="card-glass overflow-hidden p-0">
                <div className="aspect-video w-full">
                  <iframe
                    title="Hadees Trading Location"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(companyInfo.location)}&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-4 flex flex-wrap gap-3">
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="gold-btn-sm text-sm inline-flex items-center gap-2">
                    <MapPin size={14} /> View on Maps
                  </a>
                  <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="outline-btn text-sm inline-flex items-center gap-2 px-4 py-2">
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="glass rounded-2xl p-4 border-gold-500/20">
                <h3 className="font-semibold text-gold-400">Emergency Contact</h3>
                <p className="mt-1 text-sm text-white/50">
                  For urgent support, contact us via WhatsApp at {companyInfo.phone}. Available during business hours.
                </p>
              </div>

              {/* Consultation Booking */}
              <div className="glass rounded-2xl p-4">
                <h3 className="font-semibold">Book a Consultation</h3>
                <p className="mt-1 text-sm text-white/50">Schedule a 30-minute consultation with our team.</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gold-btn-sm mt-3 inline-flex items-center gap-2 text-sm">
                  <MessageCircle size={14} /> Book via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Google Reviews Placeholder */}
          <div className="card-glass text-center mb-12">
            <h3 className="font-display text-lg font-bold">Google Reviews</h3>
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="text-3xl font-bold gold-text">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold-400 text-xl">★</span>
                ))}
              </div>
            </div>
            <p className="mt-2 text-sm text-white/40">Google Reviews integration coming soon</p>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="glass rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="font-medium text-sm">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-white/40 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-sm text-white/50 animate-slide-down">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
