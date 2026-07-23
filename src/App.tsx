import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
import SolutionDetail from './pages/SolutionDetail'
import Workspace from './pages/Workspace'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import Payments from './pages/Payments'
import Terms from './pages/legal/Terms'
import Privacy from './pages/legal/Privacy'
import RefundPolicy from './pages/legal/RefundPolicy'
import ShippingPolicy from './pages/legal/ShippingPolicy'
import CookiePolicy from './pages/legal/CookiePolicy'
import Disclaimer from './pages/legal/Disclaimer'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/workspace/*" element={<Workspace />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  )
}
