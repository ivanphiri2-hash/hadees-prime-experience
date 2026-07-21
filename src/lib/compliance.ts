export type ComplianceCategory =
  | "Registration"
  | "Tax"
  | "Empowerment"
  | "Construction"
  | "Labour"
  | "Data";

export type ComplianceItem = {
  slug: string;
  code: string;
  title: string;
  short: string;
  category: ComplianceCategory;
  authority: string;
  validity: string;
  turnaround: string;
  summary: string;
  requirements: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  assets: { name: string; kind: "PDF" | "DOCX" | "XLSX"; size: string }[];
};

export const COMPLIANCE: ComplianceItem[] = [
  {
    slug: "csd-registration",
    code: "CSD",
    title: "Central Supplier Database (CSD) registration",
    short: "The gate every public buyer walks through before paying you.",
    category: "Registration",
    authority: "National Treasury",
    validity: "Annual verification",
    turnaround: "48–72 hours",
    summary:
      "The CSD is the single supplier register used by all national, provincial and municipal buyers in South Africa. Without an active, verified CSD profile — matched to your SARS, CIPC and B-BBEE records — you cannot be awarded, paid or shortlisted for public tenders.",
    requirements: [
      "CIPC registration (CoR 14.3 / MOI) and director IDs",
      "SARS tax reference and active tax compliance status",
      "Banking confirmation letter (dated within 3 months)",
      "B-BBEE affidavit or verification certificate",
      "Physical and postal address with proof",
    ],
    benefits: [
      "Eligible for every organ-of-state tender",
      "Verified status shortens buyer due-diligence",
      "Auto-syncs with SARS and CIPC for renewals",
    ],
    faqs: [
      { q: "How long does verification take?", a: "Most first-time profiles are verified within 48–72 hours once SARS and CIPC records match. Mismatches (address, director changes, VAT numbers) are the most common cause of delay." },
      { q: "Do I need CSD if I only sell to the private sector?", a: "No — CSD is the buyer register for government. If you plan to bid for a single public tender, however, you must be registered before submission closes." },
      { q: "Does Hadees maintain it after registration?", a: "Yes. Our retainer clients get quarterly reviews, expiry alerts, and automatic re-verification when SARS or B-BBEE evidence changes." },
    ],
    assets: [
      { name: "CSD readiness checklist.pdf", kind: "PDF", size: "220 KB" },
      { name: "Director & banking evidence template.docx", kind: "DOCX", size: "84 KB" },
    ],
  },
  {
    slug: "tax-clearance",
    code: "TCS",
    title: "SARS Tax Compliance Status (TCS PIN)",
    short: "The living proof your tax affairs are in order — checked on every award.",
    category: "Tax",
    authority: "SARS",
    validity: "12 months (revocable)",
    turnaround: "Same day for compliant taxpayers",
    summary:
      "TCS replaces the old paper tax clearance certificate. Buyers use your PIN to check your live compliance status with SARS at any moment during a bid or after award. A revoked or expired PIN can freeze payments.",
    requirements: [
      "Active SARS eFiling profile",
      "All returns filed (VAT, PAYE, income tax) up to current period",
      "No outstanding debt, or an approved payment arrangement",
      "Valid contact details on SARS record",
    ],
    benefits: [
      "Buyers verify compliance instantly",
      "Prevents payment holds after award",
      "Reduces admin during bid submission",
    ],
    faqs: [
      { q: "How often must I renew it?", a: "The PIN is valid for 12 months but can be revoked the moment SARS records a non-compliance. Practically, buyers re-check it before every payment run — treat it as live." },
      { q: "Can Hadees resolve outstanding returns?", a: "Yes. Our tax specialists file catch-up returns, negotiate payment plans and re-open eFiling profiles where needed." },
    ],
    assets: [
      { name: "Tax compliance readiness checklist.pdf", kind: "PDF", size: "180 KB" },
    ],
  },
  {
    slug: "bbbee-affidavit",
    code: "B-BBEE",
    title: "B-BBEE sworn affidavit & verification",
    short: "Turn your empowerment credentials into points on the scorecard.",
    category: "Empowerment",
    authority: "SANAS-accredited verification agencies / Commissioner of Oaths",
    validity: "12 months",
    turnaround: "Same day (affidavit) · 3–6 weeks (verification)",
    summary:
      "Exempt Micro Enterprises (turnover ≤ R10m) and Qualifying Small Enterprises with a single Black-owned status use a sworn affidavit. Generic entities require a verified B-BBEE certificate. Both must be current and correctly matched to your CSD profile.",
    requirements: [
      "Signed annual turnover declaration",
      "Shareholder register with race and gender breakdown",
      "Skills, procurement and enterprise-development evidence (generic)",
      "Commissioner of Oaths signature (affidavit) or SANAS verification (certificate)",
    ],
    benefits: [
      "Up to 20 preference points on public tenders",
      "Recognised by private-sector supply chains",
      "Legally binding proof of transformation status",
    ],
    faqs: [
      { q: "Do I need a certificate or an affidavit?", a: "EMEs and QSEs with only Black ownership rely on an affidavit. Generic entities and QSEs claiming scorecard points beyond ownership must be verified by a SANAS-accredited agency." },
      { q: "How does Hadees improve our level?", a: "We model your scorecard, identify the highest-leverage moves (ownership, skills development, ESD), and coordinate the verification so it lands with a defensible number." },
    ],
    assets: [
      { name: "B-BBEE affidavit template.docx", kind: "DOCX", size: "94 KB" },
      { name: "Scorecard modelling worksheet.xlsx", kind: "XLSX", size: "260 KB" },
    ],
  },
  {
    slug: "cidb-grading",
    code: "CIDB",
    title: "CIDB contractor grading",
    short: "Your entry ticket to public-sector construction.",
    category: "Construction",
    authority: "Construction Industry Development Board",
    validity: "3 years (annual fee)",
    turnaround: "21–60 days",
    summary:
      "The CIDB Register of Contractors grades construction firms from 1 (up to R200k) to 9 (unlimited). Public buyers state a minimum grade in every construction tender. The wrong grade — or a lapsed one — is an automatic disqualification.",
    requirements: [
      "Completed CIDB application with financial and works evidence",
      "Confirmation of largest single works completed",
      "Available capital (audited or bank-confirmed)",
      "CIDB registration fee",
    ],
    benefits: [
      "Eligible for public infrastructure tenders",
      "Higher grades unlock large-scale civil and building work",
      "Trusted signal to private-sector clients",
    ],
    faqs: [
      { q: "How is my grade decided?", a: "By the largest single works you have completed and your available capital — not turnover. This is why upgrade strategies focus on structured evidence of past work and clean capital position." },
      { q: "Can Hadees upgrade our grade?", a: "Yes. We assemble the evidence pack, model the capital requirement, and manage the CIDB submission end-to-end." },
    ],
    assets: [
      { name: "CIDB upgrade readiness pack.pdf", kind: "PDF", size: "310 KB" },
      { name: "Works evidence log.xlsx", kind: "XLSX", size: "180 KB" },
    ],
  },
  {
    slug: "nhbrc-enrolment",
    code: "NHBRC",
    title: "NHBRC home builder enrolment",
    short: "Mandatory for anyone constructing residential dwellings.",
    category: "Construction",
    authority: "National Home Builders Registration Council",
    validity: "Annual",
    turnaround: "14–30 days",
    summary:
      "Every builder of new residential units must be registered with the NHBRC and must enrol each project before construction. Non-enrolment is a criminal offence and disqualifies you from any government-funded housing programme.",
    requirements: [
      "Company registration and director IDs",
      "Technical competence declaration",
      "Registration fee",
      "Per-project enrolment fee and plans",
    ],
    benefits: [
      "Eligible to tender for state housing projects",
      "Consumer confidence and 5-year structural warranty",
      "Prerequisite for many bank-financed developments",
    ],
    faqs: [
      { q: "Is enrolment the same as registration?", a: "No. You register the company once (annually renewed) and then enrol each residential project separately before construction begins." },
      { q: "What does Hadees do?", a: "We handle registration, per-project enrolment, and ongoing renewal tracking so a lapsed status never blocks a site." },
    ],
    assets: [
      { name: "NHBRC readiness checklist.pdf", kind: "PDF", size: "150 KB" },
    ],
  },
  {
    slug: "coida-letter",
    code: "COIDA",
    title: "COIDA Letter of Good Standing",
    short: "Compensation for Occupational Injuries and Diseases — required on every site.",
    category: "Labour",
    authority: "Compensation Fund (Department of Employment & Labour)",
    validity: "Annual",
    turnaround: "3–10 days after ROE submission",
    summary:
      "Employers must register with the Compensation Fund, submit an annual Return of Earnings (ROE), pay the assessment, and hold a current Letter of Good Standing. Site managers, buyers and principal contractors will ask for it before letting you onto a project.",
    requirements: [
      "Registered employer number with the Compensation Fund",
      "Annual ROE submitted and assessment paid",
      "Payroll records reconciling to the ROE",
    ],
    benefits: [
      "Access to construction and industrial sites",
      "Legal indemnity for workplace injuries",
      "Required for CIDB and public infrastructure work",
    ],
    faqs: [
      { q: "What if we're behind on ROE?", a: "The Fund charges interest and issues a Letter only after you're up to date. Hadees can file catch-up returns, negotiate penalties, and secure the Letter in one workflow." },
    ],
    assets: [
      { name: "COIDA ROE preparation guide.pdf", kind: "PDF", size: "140 KB" },
    ],
  },
  {
    slug: "popia-compliance",
    code: "POPIA",
    title: "POPIA compliance & data protection",
    short: "Process personal information lawfully — and prove it.",
    category: "Data",
    authority: "Information Regulator (South Africa)",
    validity: "Ongoing",
    turnaround: "4–8 weeks (initial rollout)",
    summary:
      "The Protection of Personal Information Act sets the rules for how organisations collect, store, use and share personal data. Enforcement is active and fines can reach R10m. Compliance is a documented programme — not a single certificate.",
    requirements: [
      "Registered Information Officer with the Regulator",
      "Data-mapping across systems and third parties",
      "Privacy notice, retention schedule and internal policies",
      "PAIA manual and Data Subject request procedure",
      "Breach response and vendor DPA templates",
    ],
    benefits: [
      "Avoids enforcement fines and reputational damage",
      "Unlocks enterprise and cross-border contracts",
      "Reduces breach-response cost and liability",
    ],
    faqs: [
      { q: "Do small businesses need POPIA?", a: "Yes. The Act applies to anyone processing personal information in South Africa — the depth of the programme scales with your risk, not your size." },
      { q: "What does the Hadees engagement include?", a: "Information Officer registration, data map, policy pack, PAIA manual, staff training, and an annual review — with an evidence trail your auditors will accept." },
    ],
    assets: [
      { name: "POPIA readiness assessment.pdf", kind: "PDF", size: "290 KB" },
      { name: "Data mapping workbook.xlsx", kind: "XLSX", size: "410 KB" },
      { name: "Privacy notice template.docx", kind: "DOCX", size: "72 KB" },
    ],
  },
  {
    slug: "annual-returns",
    code: "CIPC",
    title: "CIPC annual returns & beneficial ownership",
    short: "Keep your company on the register — and out of deregistration.",
    category: "Registration",
    authority: "Companies and Intellectual Property Commission",
    validity: "Annual",
    turnaround: "Same day (once turnover and beneficial ownership are captured)",
    summary:
      "Every company must file an annual return with the CIPC within 30 business days of its incorporation anniversary, together with a beneficial ownership declaration. Missed filings lead to deregistration and loss of trading, banking and contracting rights.",
    requirements: [
      "Turnover figure for the reporting year",
      "Beneficial ownership register (25%+ holders and controllers)",
      "CIPC customer profile in good standing",
      "Filing fee (turnover based)",
    ],
    benefits: [
      "Keeps CIPC status active for CSD, banking and contracts",
      "Meets the FIC and beneficial ownership regulations",
      "Prevents costly re-instatement processes",
    ],
    faqs: [
      { q: "What happens if we miss a filing?", a: "The company moves to Deregistration Process, then Final Deregistration. Reinstatement is possible but slow and expensive — Hadees restores active status while you continue trading." },
    ],
    assets: [
      { name: "Annual return & BO readiness checklist.pdf", kind: "PDF", size: "160 KB" },
    ],
  },
];

export const COMPLIANCE_CATEGORIES: ComplianceCategory[] = [
  "Registration", "Tax", "Empowerment", "Construction", "Labour", "Data",
];

export function findCompliance(slug: string): ComplianceItem | undefined {
  return COMPLIANCE.find((c) => c.slug === slug);
}

export function buildComplianceDoc(item: ComplianceItem, assetName: string) {
  return `HADEES TRADING PTY LTD — Compliance Asset
==================================================
Code        : ${item.code}
Programme   : ${item.title}
Authority   : ${item.authority}
Category    : ${item.category}
Validity    : ${item.validity}
Turnaround  : ${item.turnaround}

Asset       : ${assetName}
--------------------------------------------------

Overview
--------
${item.summary}

Requirements
------------
${item.requirements.map((r) => `- ${r}`).join("\n")}

Business benefits
-----------------
${item.benefits.map((b) => `- ${b}`).join("\n")}

Frequently asked
----------------
${item.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}

Prepared by Hadees Trading — Compliance Hub
© ${new Date().getFullYear()} Hadees Trading Pty Ltd. Sample readiness pack.
`;
}
