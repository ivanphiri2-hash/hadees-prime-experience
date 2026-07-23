import SEO from '../../components/SEO'
import LegalLayout, { LegalSectionBlock } from '../../components/LegalLayout'

const sections = [
  { id: 'what-are-cookies', label: 'What Are Cookies' },
  { id: 'how-we-use', label: 'How We Use Cookies' },
  { id: 'types', label: 'Types of Cookies' },
  { id: 'managing', label: 'Managing Cookies' },
  { id: 'third-party', label: 'Third-party Cookies' },
  { id: 'updates', label: 'Policy Updates' },
  { id: 'contact', label: 'Contact Information' },
]

export default function CookiePolicy() {
  return (
    <>
      <SEO
        title="Cookie Policy | Hadees Trading"
        description="Cookie Policy for Hadees Trading (Pty) Ltd. Learn how we use cookies to improve your browsing experience."
        canonical="https://hadeestrading.co.za/cookie-policy"
      />
      <LegalLayout
        title="Cookie Policy"
        lastUpdated="23 July 2025"
        sections={sections}
        breadcrumb="Home / Legal / Cookie Policy"
      >
        <LegalSectionBlock id="what-are-cookies" title="1. What Are Cookies">
          <p>Cookies are small text files stored on your device when you visit a website. They help improve your browsing experience by remembering preferences and analyzing usage patterns.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="how-we-use" title="2. How We Use Cookies">
          <p>We use cookies to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Remember your preferences (e.g., dark mode toggle)</li>
            <li>Analyze website traffic and user behavior</li>
            <li>Improve website performance and functionality</li>
          </ul>
        </LegalSectionBlock>

        <LegalSectionBlock id="types" title="3. Types of Cookies">
          <p><strong>Essential cookies:</strong> Required for the website to function properly.</p>
          <p><strong>Analytics cookies:</strong> Help us understand how visitors use our website.</p>
          <p><strong>Preference cookies:</strong> Remember your settings and preferences.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="managing" title="4. Managing Cookies">
          <p>You can control and delete cookies through your browser settings. Disabling cookies may affect website functionality.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="third-party" title="5. Third-party Cookies">
          <p>We use third-party services (Google Maps, PayFast, analytics tools) that may set their own cookies. These are governed by the respective third-party privacy policies.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="updates" title="6. Policy Updates">
          <p>We may update this Cookie Policy from time to time. Changes will be posted with an updated date.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="contact" title="7. Contact Information">
          <p>For cookie-related inquiries: admin@hadeestrading.co.za</p>
        </LegalSectionBlock>
      </LegalLayout>
    </>
  )
}
