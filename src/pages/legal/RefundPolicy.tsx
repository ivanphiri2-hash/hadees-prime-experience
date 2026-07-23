import SEO from '../../components/SEO'
import LegalLayout, { LegalSectionBlock } from '../../components/LegalLayout'

const sections = [
  { id: 'website-dev', label: 'Website Development' },
  { id: 'crm-projects', label: 'CRM Projects' },
  { id: 'ai-automation', label: 'AI Automation' },
  { id: 'branding', label: 'Branding' },
  { id: 'business-reg', label: 'Business Registration' },
  { id: 'deposits', label: 'Deposits' },
  { id: 'milestones', label: 'Milestone Payments' },
  { id: 'completed-work', label: 'Completed Work' },
  { id: 'partial-refunds', label: 'Partial Refunds' },
  { id: 'non-refundable', label: 'Non-refundable Services' },
  { id: 'cancellation', label: 'Project Cancellation' },
  { id: 'late-responses', label: 'Late Client Responses' },
  { id: 'custom-software', label: 'Custom Software' },
  { id: 'subscriptions', label: 'Subscription Services' },
  { id: 'disputes', label: 'Payment Disputes' },
]

export default function RefundPolicy() {
  return (
    <>
      <SEO
        title="Refund Policy | Hadees Trading"
        description="Refund Policy for Hadees Trading (Pty) Ltd. Understand our refund terms for website development, CRM, AI automation, and other services."
        canonical="https://hadeestrading.co.za/refund-policy"
      />
      <LegalLayout
        title="Refund Policy"
        lastUpdated="23 July 2025"
        sections={sections}
        breadcrumb="Home / Legal / Refund Policy"
      >
        <p className="text-white/60">
          This Refund Policy outlines the terms under which refunds are issued for services provided by Hadees Trading (Pty) Ltd. All services are delivered digitally; no physical products are shipped.
        </p>

        <LegalSectionBlock id="website-dev" title="1. Website Development">
          <p>If work has not commenced, a full refund is available within 48 hours of payment. Once design work has begun, the deposit is non-refundable. If the project is cancelled mid-development, a partial refund may be issued based on the percentage of work completed.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="crm-projects" title="2. CRM Projects">
          <p>CRM development deposits are non-refundable once development has started. Partial refunds may be issued for incomplete milestones based on work completed.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="ai-automation" title="3. AI Automation">
          <p>AI automation services are non-refundable once implementation has begun. Setup fees are non-refundable.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="branding" title="4. Branding">
          <p>Branding projects are non-refundable once initial concepts have been delivered. If the client is unsatisfied with initial concepts, up to 2 rounds of revisions are included before additional fees apply.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="business-reg" title="5. Business Registration">
          <p>Business registration fees are non-refundable once submitted to CIPC, as government fees are non-recoverable. If the application has not yet been submitted, a refund may be available minus administrative fees.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="deposits" title="6. Deposits">
          <p>Deposits are required to commence work and are non-refundable once work has begun. The deposit secures your project slot and covers initial planning and setup.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="milestones" title="7. Milestone Payments">
          <p>For projects with milestone-based payments, each milestone payment is due upon completion and approval of that milestone. Completed milestone payments are non-refundable.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="completed-work" title="8. Completed Work">
          <p>Services that have been fully completed and delivered are non-refundable. This includes delivered websites, documents, branding assets, and completed CRM systems.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="partial-refunds" title="9. Partial Refunds">
          <p>Partial refunds may be issued at the Company's discretion for projects cancelled mid-way through development. The refund amount is based on the percentage of work remaining incomplete.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="non-refundable" title="10. Non-refundable Services">
          <p>The following services are non-refundable once work has commenced:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Business registration (after CIPC submission)</li>
            <li>Compliance filings</li>
            <li>Hosting and domain registrations</li>
            <li>Completed document drafting</li>
            <li>AI automation setup</li>
          </ul>
        </LegalSectionBlock>

        <LegalSectionBlock id="cancellation" title="11. Project Cancellation">
          <p>If you wish to cancel a project, please notify us in writing. Cancellation before work commences may qualify for a full refund minus administrative fees. Cancellation after work has begun is subject to the partial refund terms above.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="late-responses" title="12. Late Client Responses">
          <p>If a project is delayed due to lack of client response for more than 30 days, the project may be considered abandoned. Deposits and completed milestone payments are non-refundable in such cases. The project may be reactivated upon request, subject to current pricing.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="custom-software" title="13. Custom Software">
          <p>Custom software development is non-refundable once development has begun. Bug fixes and support are provided for 30 days after delivery at no additional cost.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="subscriptions" title="14. Subscription Services">
          <p>Subscription services (e.g., hosting, CRM maintenance) can be cancelled at any time. Refunds for unused subscription periods are issued on a pro-rata basis. Cancellation takes effect at the end of the current billing cycle.</p>
        </LegalSectionBlock>

        <LegalSectionBlock id="disputes" title="15. Payment Disputes">
          <p>If you have a dispute regarding a payment, please contact us at admin@hadeestrading.co.za before initiating a chargeback. We are committed to resolving disputes amicably and promptly.</p>
        </LegalSectionBlock>
      </LegalLayout>
    </>
  )
}
