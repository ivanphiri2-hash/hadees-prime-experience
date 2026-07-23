import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import { companyInfo } from '../data/siteData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-[#080808] mt-20">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-white/50 hover:text-gold-400 transition-colors">About</Link></li>
              <li><Link to="/services/website-design" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Pricing</Link></li>
              <li><Link to="/solutions/ivan-os" className="text-sm text-white/50 hover:text-gold-400 transition-colors">IVAN OS</Link></li>
              <li><Link to="/contact" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Solutions</h3>
            <ul className="space-y-2.5">
              <li><Link to="/solutions/enterprise-crm" className="text-sm text-white/50 hover:text-gold-400 transition-colors">CRM</Link></li>
              <li><Link to="/solutions/automation" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Automation</Link></li>
              <li><Link to="/solutions/compliance-portal" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Compliance</Link></li>
              <li><Link to="/services/business-registration" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Business Registration</Link></li>
              <li><Link to="/services/tender-assistance" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Tender Services</Link></li>
              <li><Link to="/services/website-design" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Website Design</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Legal</h3>
            <ul className="space-y-2.5">
              <li><Link to="/terms" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Terms</Link></li>
              <li><Link to="/privacy" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Refund Policy</Link></li>
              <li><Link to="/shipping-policy" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Shipping Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Resources</h3>
            <ul className="space-y-2.5">
              <li><Link to="/contact" className="text-sm text-white/50 hover:text-gold-400 transition-colors">FAQs</Link></li>
              <li><Link to="/solutions/knowledge-base" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Knowledge Base</Link></li>
              <li><Link to="/about" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-white/50 hover:text-gold-400 transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Get in Touch</h3>
            <ul className="space-y-2.5 mb-4">
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin size={14} className="mt-0.5 shrink-0" /> {companyInfo.location}
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="flex items-start gap-2 text-sm text-white/50 hover:text-gold-400 transition-colors">
                  <Mail size={14} className="mt-0.5 shrink-0" /> {companyInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${companyInfo.phoneIntl.replace(/\s/g, '')}`} className="flex items-start gap-2 text-sm text-white/50 hover:text-gold-400 transition-colors">
                  <Phone size={14} className="mt-0.5 shrink-0" /> {companyInfo.phone}
                </a>
              </li>
            </ul>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-lg glass glass-hover">
                <Facebook size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-lg glass glass-hover">
                <Linkedin size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-lg glass glass-hover">
                <Instagram size={16} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex h-9 w-9 items-center justify-center rounded-lg glass glass-hover">
                <span className="text-xs font-bold">TT</span>
              </a>
              <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-lg glass glass-hover">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* PayFast Required Links */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link to="/terms" className="text-xs text-white/40 hover:text-gold-400 transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="text-xs text-white/40 hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link to="/refund-policy" className="text-xs text-white/40 hover:text-gold-400 transition-colors">Refund Policy</Link>
            <Link to="/shipping-policy" className="text-xs text-white/40 hover:text-gold-400 transition-colors">Shipping Policy</Link>
            <Link to="/contact" className="text-xs text-white/40 hover:text-gold-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-black/50">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="text-xs text-white/40">
              &copy; {year} Hadees Trading (Pty) Ltd. All Rights Reserved.
            </p>
            <p className="text-xs text-white/40">
              Made in South Africa. Powered by <Link to="/solutions/ivan-os" className="gold-text font-semibold">IVAN OS</Link>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
