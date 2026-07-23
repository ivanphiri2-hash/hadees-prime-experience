import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Menu, X, Moon, Sun, Calendar } from 'lucide-react'
import { services, solutions } from '../data/siteData'
import { useTheme } from '../context/ThemeContext'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openServices = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setServicesOpen(true)
    setSolutionsOpen(false)
  }
  const openSolutions = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setSolutionsOpen(true)
    setServicesOpen(false)
  }
  const closeDropdown = () => {
    closeTimeout.current = setTimeout(() => {
      setServicesOpen(false)
      setSolutionsOpen(false)
    }, 150)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-black font-extrabold text-lg transition-transform group-hover:scale-105">
              H
            </div>
            <span className="font-display text-lg font-bold tracking-tight">
              HADEES <span className="gold-text">TRADING</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/" className={({ isActive }) => `nav-link px-3 py-2 ${isActive ? 'nav-link-active' : ''}`}>
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div onMouseEnter={openServices} onMouseLeave={closeDropdown} className="relative">
              <button className="nav-link flex items-center gap-1 px-3 py-2">
                Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-[640px] animate-slide-down">
                  <div className="glass rounded-2xl p-4 grid grid-cols-2 gap-1 shadow-2xl">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="flex items-start gap-3 rounded-xl p-3 hover:bg-white/5 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${s.gradient}`}>
                          <s.icon size={16} className="text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{s.title}</div>
                          <div className="text-xs text-white/50">{s.short}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div onMouseEnter={openSolutions} onMouseLeave={closeDropdown} className="relative">
              <button className="nav-link flex items-center gap-1 px-3 py-2">
                Solutions <ChevronDown size={14} className={`transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div className="absolute left-0 top-full pt-2 w-[640px] animate-slide-down">
                  <div className="glass rounded-2xl p-4 grid grid-cols-2 gap-1 shadow-2xl">
                    {solutions.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/solutions/${s.slug}`}
                        className="flex items-start gap-3 rounded-xl p-3 hover:bg-white/5 transition-colors"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        <div className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${s.gradient}`}>
                          <s.icon size={16} className="text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{s.title}</div>
                          <div className="text-xs text-white/50">{s.short}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/workspace" className={({ isActive }) => `nav-link px-3 py-2 ${isActive ? 'nav-link-active' : ''}`}>
              Workspace
            </NavLink>
            <NavLink to="/pricing" className={({ isActive }) => `nav-link px-3 py-2 ${isActive ? 'nav-link-active' : ''}`}>
              Pricing
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link px-3 py-2 ${isActive ? 'nav-link-active' : ''}`}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link px-3 py-2 ${isActive ? 'nav-link-active' : ''}`}>
              Contact
            </NavLink>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden sm:inline-flex gold-btn items-center gap-2 text-sm">
              <Calendar size={16} /> Book Consultation
            </Link>
            <button
              onClick={toggle}
              className="flex h-9 w-9 items-center justify-center rounded-lg glass-hover glass"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg glass"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 animate-slide-down">
            <div className="flex flex-col gap-1">
              <NavLink to="/" onClick={() => setMobileOpen(false)} className="nav-link px-3 py-2">Home</NavLink>
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/40">Services</div>
              {services.map((s) => (
                <NavLink key={s.slug} to={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="nav-link pl-6 py-1.5 text-sm">
                  {s.title}
                </NavLink>
              ))}
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/40">Solutions</div>
              {solutions.map((s) => (
                <NavLink key={s.slug} to={`/solutions/${s.slug}`} onClick={() => setMobileOpen(false)} className="nav-link pl-6 py-1.5 text-sm">
                  {s.title}
                </NavLink>
              ))}
              <NavLink to="/workspace" onClick={() => setMobileOpen(false)} className="nav-link px-3 py-2">Workspace</NavLink>
              <NavLink to="/pricing" onClick={() => setMobileOpen(false)} className="nav-link px-3 py-2">Pricing</NavLink>
              <NavLink to="/about" onClick={() => setMobileOpen(false)} className="nav-link px-3 py-2">About</NavLink>
              <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="nav-link px-3 py-2">Contact</NavLink>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="gold-btn mt-3 text-center text-sm">
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
