import SEO from '../../components/SEO'
import LegalLayout, { LegalSectionBlock } from '../../components/LegalLayout'
import { deliveryEstimates } from '../../data/siteData'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'delivery-estimates', label: 'Delivery Estimates' },
  { id: 'communication', label: 'Communication' },
  { id: 'contact', label: 'Contact Information' },
]

export default function ShippingPolicy() {
  return (
    <>
      <SEO
        title="Shipping & Delivery Policy | Hadees Trading"
        description="Shipping and delivery policy for Hadees Trading. All services are delivered digitally — no physical products are shipped."
        canonical="https://hadeestrading.co.za/shipping-policy"
      />
      <LegalLayout
        title="Shipping & Delivery Policy"
        lastUpdated="23 July 2025"
        sections={sections}
        breadcrumb="Home / Legal / Shipping & Delivery Policy"
      >
        <LegalSectionBlock id="overview" title="1. Overview">
          <p>Hadees Trading (Pty) Ltd provides digital services exclusively. No physical products are shipped. All services are delivered electronically via email, WhatsApp, client portal, or download links.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="delivery-estimates" title="2. Delivery Estimates">
          <p>The following delivery estimates apply to our services:</p>
          <div className="glass rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-3 font-semibold text-white/70">Service</th>
                  <th className="text-left p-3 font-semibold text-white/70">Estimated Delivery</th>
                </tr>
              </thead>
              <tbody>
                {deliveryEstimates.map((d) => (
                  <tr key={d.service} className="border-b border-white/5 last:border-0">
                    <td className="p-3 text-white/60">{d.service}</td>
                    <td className="p-3 text-white/80">{d.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Delivery times are estimates and may vary based on project complexity, scope, and client responsiveness.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="communication" title="3. Communication">
          <p>Service delivery is communicated through the following channels:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>WhatsApp — direct communication with our team</li>
            <li>Email — formal delivery of documents and project files</li>
            <li>Client Portal — secure access to project deliverables</li>
            <li>Contact Page — for inquiries and support requests</li>
          </ul>
        </LegalSectionBlock>

        <LegalSectionBlock id="contact" title="4. Contact Information">
          <p>For delivery-related inquiries, contact us:</p>
          <p>Hadees Trading (Pty) Ltd</p>
          <p>Email: admin@hadeestrading.co.za</p>
          <p>Phone: 083 753 5798</p>
          <p>Location: Mahikeng, South Africa</p>
        </LegalSectionBlock>
      </LegalLayout>
    </>
  )
}
