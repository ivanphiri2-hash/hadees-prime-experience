import SEO from '../../components/SEO'
import LegalLayout, { LegalSectionBlock } from '../../components/LegalLayout'

const sections = [
  { id: 'definitions', label: 'Definitions' },
  { id: 'acceptance', label: 'Acceptance of Terms' },
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'payments', label: 'Payments' },
  { id: 'website-projects', label: 'Website Projects' },
  { id: 'ai-services', label: 'AI Services' },
  { id: 'crm-development', label: 'CRM Development' },
  { id: 'support', label: 'Support' },
  { id: 'delivery', label: 'Delivery' },
  { id: 'refunds', label: 'Refunds' },
  { id: 'ip', label: 'Intellectual Property' },
  { id: 'user-responsibilities', label: 'User Responsibilities' },
  { id: 'confidentiality', label: 'Confidentiality' },
  { id: 'liability', label: 'Limitation of Liability' },
  { id: 'termination', label: 'Termination' },
  { id: 'disputes', label: 'Dispute Resolution' },
  { id: 'governing-law', label: 'South African Law' },
  { id: 'contact', label: 'Contact Information' },
]

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions | Hadees Trading"
        description="Terms and Conditions for Hadees Trading (Pty) Ltd. Read our terms governing the use of our services and website."
        canonical="https://hadeestrading.co.za/terms"
      />
      <LegalLayout
        title="Terms & Conditions"
        lastUpdated="23 July 2025"
        sections={sections}
        breadcrumb="Home / Legal / Terms & Conditions"
      >
        <LegalSectionBlock id="definitions" title="1. Definitions">
          <p><strong>"Company"</strong> refers to Hadees Trading (Pty) Ltd, established in 2025, located in Mahikeng, South Africa.</p>
          <p><strong>"Client"</strong> refers to any individual or entity engaging the Company's services.</p>
          <p><strong>"Services"</strong> refers to all digital and business services provided by the Company.</p>
          <p><strong>"Agreement"</strong> refers to these Terms & Conditions and any project-specific proposal or contract.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="acceptance" title="2. Acceptance of Terms">
          <p>By engaging with our services, using our website, or making a payment, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="services" title="3. Services">
          <p>The Company provides the following services:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Website Design and Development</li>
            <li>Business Registration</li>
            <li>Tender Assistance</li>
            <li>Compliance Services (POPIA, SARS, BBBEE)</li>
            <li>Business Document Drafting</li>
            <li>Branding and Identity Design</li>
            <li>Business Consulting</li>
            <li>AI Automation</li>
            <li>CRM Development</li>
            <li>Hosting & Domain Management</li>
          </ul>
        </LegalSectionBlock>

        <LegalSectionBlock id="pricing" title="4. Pricing">
          <p>All pricing is quoted in South African Rand (ZAR) and includes VAT where applicable. Prices are subject to change without prior notice. Quoted prices are valid for 30 days from the date of the proposal.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="payments" title="5. Payments">
          <p>Payments are processed securely through PayFast. We accept Visa, Mastercard, Instant EFT, Capitec Pay, and Scan to Pay. For project-based work, a deposit may be required before work commences. Milestone payments may apply for larger projects.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="website-projects" title="6. Website Projects">
          <p>Website projects follow a structured delivery timeline:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Starter Website: 2–4 Days</li>
            <li>Business Website: 4–7 Days</li>
            <li>Premium Website: 7–14 Days</li>
          </ul>
          <p>Delivery times are estimates and may vary based on project complexity and client responsiveness.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="ai-services" title="7. AI Services">
          <p>AI automation services are provided based on current technology capabilities. The Company does not guarantee specific outcomes from AI-generated content or automated processes. Clients are responsible for reviewing AI-generated outputs.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="crm-development" title="8. CRM Development">
          <p>Custom CRM development is tailored to client specifications. Requirements must be agreed upon in writing before development begins. Changes to requirements after development starts may incur additional costs.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="support" title="9. Support">
          <p>Support is available via WhatsApp, email, and our client portal. Response times are typically within 24 hours during business hours (Monday–Friday, 8am–5pm).</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="delivery" title="10. Delivery">
          <p>All services are delivered digitally. No physical products are shipped. Delivery is communicated via WhatsApp, email, client portal, or our contact page.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="refunds" title="11. Refunds">
          <p>Refund eligibility is determined by our Refund Policy. Deposits are generally non-refundable once work has commenced. Please review our Refund Policy for detailed information.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="ip" title="12. Intellectual Property">
          <p>Upon full payment, all intellectual property rights for completed work are transferred to the Client. The Company retains the right to showcase completed work in its portfolio unless otherwise agreed.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="user-responsibilities" title="13. User Responsibilities">
          <p>Clients are responsible for providing accurate information, timely feedback, and necessary access to systems required for project completion. Delays caused by client inaction may affect delivery timelines.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="confidentiality" title="14. Confidentiality">
          <p>The Company respects the confidentiality of all client information and will not disclose sensitive information to third parties without consent, except as required by law.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="liability" title="15. Limitation of Liability">
          <p>The Company's liability is limited to the amount paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="termination" title="16. Termination">
          <p>Either party may terminate the agreement with written notice. Fees for work completed up to the termination date are payable. Deposits for uncommenced work may be refunded at the Company's discretion.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="disputes" title="17. Dispute Resolution">
          <p>Disputes will first be addressed through good-faith negotiation. If unresolved, disputes will be referred to mediation in accordance with South African law.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="governing-law" title="18. South African Law">
          <p>These Terms & Conditions are governed by the laws of the Republic of South Africa. All legal proceedings shall be conducted in South African courts.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="contact" title="19. Contact Information">
          <p>Hadees Trading (Pty) Ltd</p>
          <p>Email: admin@hadeestrading.co.za</p>
          <p>Phone: 083 753 5798</p>
          <p>Location: Mahikeng, South Africa</p>
        </LegalSectionBlock>
      </LegalLayout>
    </>
  )
}
