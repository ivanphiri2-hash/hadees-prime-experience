import SEO from '../../components/SEO'
import LegalLayout, { LegalSectionBlock } from '../../components/LegalLayout'

const sections = [
  { id: 'general', label: 'General Disclaimer' },
  { id: 'no-warranty', label: 'No Warranty' },
  { id: 'third-party', label: 'Third-party Links' },
  { id: 'professional', label: 'Professional Advice' },
  { id: 'limitation', label: 'Limitation of Liability' },
  { id: 'accuracy', label: 'Information Accuracy' },
  { id: 'contact', label: 'Contact Information' },
]

export default function Disclaimer() {
  return (
    <>
      <SEO
        title="Disclaimer | Hadees Trading"
        description="Disclaimer for Hadees Trading (Pty) Ltd. Read our disclaimer regarding the use of our website and services."
        canonical="https://hadeestrading.co.za/disclaimer"
      />
      <LegalLayout
        title="Disclaimer"
        lastUpdated="23 July 2025"
        sections={sections}
        breadcrumb="Home / Legal / Disclaimer"
      >
        <LegalSectionBlock id="general" title="1. General Disclaimer">
          <p>The information provided by Hadees Trading (Pty) Ltd on our website and through our services is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="no-warranty" title="2. No Warranty">
          <p>Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will be error-free, uninterrupted, or meet your specific requirements.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="third-party" title="3. Third-party Links">
          <p>Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of third-party sites.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="professional" title="4. Professional Advice">
          <p>The information provided on our website does not constitute legal, financial, or professional advice. For specific advice tailored to your situation, please consult a qualified professional.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="limitation" title="5. Limitation of Liability">
          <p>Under no circumstances shall Hadees Trading (Pty) Ltd be liable for any loss or damage arising from the use of our website or services. Our liability is limited to the amount paid for the specific service.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="accuracy" title="6. Information Accuracy">
          <p>While we strive to keep information accurate and up to date, we make no warranties about completeness. Service descriptions, pricing, and delivery estimates are subject to change without notice.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="contact" title="7. Contact Information">
          <p>For questions about this disclaimer: admin@hadeestrading.co.za</p>
        </LegalSectionBlock>
      </LegalLayout>
    </>
  )
}
