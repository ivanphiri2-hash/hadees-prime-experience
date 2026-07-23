import SEO from '../../components/SEO'
import LegalLayout, { LegalSectionBlock } from '../../components/LegalLayout'

const sections = [
  { id: 'info-collected', label: 'Information Collected' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'lead-forms', label: 'Lead Forms' },
  { id: 'whatsapp', label: 'WhatsApp Integration' },
  { id: 'google-maps', label: 'Google Maps' },
  { id: 'payfast', label: 'PayFast Payments' },
  { id: 'retention', label: 'Data Retention' },
  { id: 'third-party', label: 'Third-party Providers' },
  { id: 'security', label: 'Security' },
  { id: 'user-rights', label: 'User Rights' },
  { id: 'data-access', label: 'Data Access' },
  { id: 'data-deletion', label: 'Data Deletion' },
  { id: 'marketing', label: 'Marketing Consent' },
  { id: 'children', label: "Children's Privacy" },
  { id: 'changes', label: 'Policy Changes' },
  { id: 'contact', label: 'Contact Information' },
]

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Hadees Trading"
        description="Privacy Policy for Hadees Trading (Pty) Ltd. POPIA-compliant data protection and privacy practices."
        canonical="https://hadeestrading.co.za/privacy"
      />
      <LegalLayout
        title="Privacy Policy"
        lastUpdated="23 July 2025"
        sections={sections}
        breadcrumb="Home / Legal / Privacy Policy"
      >
        <p className="text-white/60">
          Hadees Trading (Pty) Ltd is committed to protecting your personal information in compliance with the Protection of Personal Information Act (POPIA). This Privacy Policy explains how we collect, use, and protect your data.
        </p>

        <LegalSectionBlock id="info-collected" title="1. Information Collected">
          <p>We collect the following types of personal information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Contact details: name, email, phone number</li>
            <li>Business information: company name, registration details</li>
            <li>Payment information: processed securely via PayFast</li>
            <li>Communication records: emails, WhatsApp messages, form submissions</li>
          </ul>
        </LegalSectionBlock>

        <LegalSectionBlock id="cookies" title="2. Cookies">
          <p>Our website uses cookies to improve user experience, remember preferences, and analyze traffic. You can disable cookies in your browser settings, but some features may not function properly.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="analytics" title="3. Analytics">
          <p>We use analytics tools to understand how visitors use our website. This data is aggregated and does not identify individual users.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="lead-forms" title="4. Lead Forms">
          <p>Information submitted through our contact and lead forms is used solely to respond to your inquiry and provide requested services. We do not sell or share your information with third parties for marketing purposes.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="whatsapp" title="5. WhatsApp Integration">
          <p>Our website integrates with WhatsApp for communication. Messages sent via WhatsApp are subject to WhatsApp's privacy policy in addition to ours.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="google-maps" title="6. Google Maps">
          <p>Our contact page embeds Google Maps to display our location. Google may collect usage data in accordance with its own privacy policy.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="payfast" title="7. PayFast Payments">
          <p>Payment information is processed by PayFast, our payment gateway provider. We do not store your credit card or banking details. PayFast's privacy policy applies to all payment transactions.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="retention" title="8. Data Retention">
          <p>We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. Client project data is retained for a minimum of 2 years after project completion.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="third-party" title="9. Third-party Providers">
          <p>We work with trusted third-party providers including PayFast, Google, and WhatsApp. Each provider has its own privacy policy governing the use of your data.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="security" title="10. Security">
          <p>We implement appropriate technical and organizational measures to protect your personal information, including SSL encryption, secure servers, and access controls.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="user-rights" title="11. User Rights">
          <p>Under POPIA, you have the right to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Withdraw consent for marketing</li>
          </ul>
        </LegalSectionBlock>

        <LegalSectionBlock id="data-access" title="12. Data Access">
          <p>To request access to your personal information, contact us at admin@hadeestrading.co.za. We will respond within 30 days.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="data-deletion" title="13. Data Deletion">
          <p>You may request deletion of your personal information at any time. We will process your request within 30 days, subject to legal retention requirements.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="marketing" title="14. Marketing Consent">
          <p>We only send marketing communications with your explicit consent. You can unsubscribe at any time by clicking the unsubscribe link in our emails or contacting us directly.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="children" title="15. Children's Privacy">
          <p>Our services are intended for businesses and individuals aged 18 and above. We do not knowingly collect personal information from children.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="changes" title="16. Policy Changes">
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="contact" title="17. Contact Information">
          <p>For privacy-related inquiries, contact us:</p>
          <p>Hadees Trading (Pty) Ltd</p>
          <p>Email: admin@hadeestrading.co.za</p>
          <p>Phone: 083 753 5798</p>
          <p>Location: Mahikeng, South Africa</p>
        </LegalSectionBlock>
      </LegalLayout>
    </>
  )
}
