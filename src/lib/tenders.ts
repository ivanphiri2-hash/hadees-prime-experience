export type TenderCategory =
  | "Construction"
  | "IT & Digital"
  | "Health"
  | "Consulting"
  | "Supply"
  | "Security";

export type TenderStatus = "Open" | "Closing soon" | "Awarded";

export type Tender = {
  id: string;
  reference: string;
  title: string;
  organ: string;
  province: string;
  category: TenderCategory;
  status: TenderStatus;
  budget: string;
  publishedAt: string; // ISO
  closingAt: string;   // ISO
  summary: string;
  documents: { name: string; size: string; kind: "PDF" | "DOCX" | "XLSX" }[];
};

const iso = (daysFromNow: number) => {
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  return d.toISOString();
};

export const TENDERS: Tender[] = [
  {
    id: "t-001",
    reference: "COJ-2026/IT-014",
    title: "Municipal client portal & digital services platform",
    organ: "City of Johannesburg",
    province: "Gauteng",
    category: "IT & Digital",
    status: "Open",
    budget: "R 18–24M",
    publishedAt: iso(-6),
    closingAt: iso(21),
    summary:
      "Design, build and maintain a citizen-facing services portal integrating billing, permits and complaints across five departments.",
    documents: [
      { name: "RFP Brief.pdf", size: "1.8 MB", kind: "PDF" },
      { name: "Bill of Quantities.xlsx", size: "220 KB", kind: "XLSX" },
      { name: "Response Template.docx", size: "180 KB", kind: "DOCX" },
    ],
  },
  {
    id: "t-002",
    reference: "DoH-EC-2026/031",
    title: "Community clinic construction — Alfred Nzo District",
    organ: "Department of Health (EC)",
    province: "Eastern Cape",
    category: "Construction",
    status: "Closing soon",
    budget: "R 42M",
    publishedAt: iso(-12),
    closingAt: iso(4),
    summary:
      "Turnkey construction of a 24-bed community clinic including civils, MEP and medical gas installations. CIDB 7GB or higher required.",
    documents: [
      { name: "Technical Brief.pdf", size: "3.4 MB", kind: "PDF" },
      { name: "Site Drawings.pdf", size: "6.1 MB", kind: "PDF" },
      { name: "Pricing Schedule.xlsx", size: "310 KB", kind: "XLSX" },
    ],
  },
  {
    id: "t-003",
    reference: "TSA-2026/CONS-08",
    title: "Public financial management advisory panel",
    organ: "National Treasury",
    province: "National",
    category: "Consulting",
    status: "Open",
    budget: "Panel — rate card",
    publishedAt: iso(-3),
    closingAt: iso(30),
    summary:
      "Appointment of a panel of PFM specialists for three-year advisory framework across national departments and SOEs.",
    documents: [
      { name: "Panel Terms.pdf", size: "980 KB", kind: "PDF" },
      { name: "CV Template.docx", size: "94 KB", kind: "DOCX" },
    ],
  },
  {
    id: "t-004",
    reference: "SAPS-2026/SUP-221",
    title: "Supply & delivery of body armour (Class III)",
    organ: "South African Police Service",
    province: "National",
    category: "Supply",
    status: "Open",
    budget: "R 9.6M",
    publishedAt: iso(-9),
    closingAt: iso(14),
    summary:
      "Three-year supply agreement for NIJ Level IIIA body armour with quarterly draw-downs and national distribution.",
    documents: [
      { name: "Specification.pdf", size: "1.2 MB", kind: "PDF" },
      { name: "Response Template.docx", size: "160 KB", kind: "DOCX" },
    ],
  },
  {
    id: "t-005",
    reference: "GPG-EDU-2026/SEC-12",
    title: "Security services — 42 schools, Ekurhuleni",
    organ: "Gauteng Dept. of Education",
    province: "Gauteng",
    category: "Security",
    status: "Closing soon",
    budget: "R 22M / year",
    publishedAt: iso(-15),
    closingAt: iso(2),
    summary:
      "Static and armed response services across 42 schools, 24/7 with monthly reporting and PSIRA-graded personnel.",
    documents: [
      { name: "SLA & Scope.pdf", size: "2.1 MB", kind: "PDF" },
      { name: "Pricing Schedule.xlsx", size: "260 KB", kind: "XLSX" },
    ],
  },
  {
    id: "t-006",
    reference: "SITA-2026/CLD-07",
    title: "Sovereign cloud landing zone & migration",
    organ: "SITA",
    province: "National",
    category: "IT & Digital",
    status: "Open",
    budget: "R 65M",
    publishedAt: iso(-2),
    closingAt: iso(45),
    summary:
      "Design and implementation of a sovereign cloud landing zone with migration of 120 workloads over 18 months.",
    documents: [
      { name: "Architecture Brief.pdf", size: "4.6 MB", kind: "PDF" },
      { name: "Migration Inventory.xlsx", size: "540 KB", kind: "XLSX" },
    ],
  },
  {
    id: "t-007",
    reference: "WC-DoH-2025/047",
    title: "Provincial telehealth expansion",
    organ: "Western Cape Health",
    province: "Western Cape",
    category: "Health",
    status: "Awarded",
    budget: "R 14M",
    publishedAt: iso(-90),
    closingAt: iso(-40),
    summary:
      "Awarded — expansion of telehealth capacity to 60 rural facilities, including endpoint devices and training.",
    documents: [
      { name: "Award Notice.pdf", size: "420 KB", kind: "PDF" },
    ],
  },
  {
    id: "t-008",
    reference: "TSH-2026/CON-19",
    title: "Roads rehabilitation — R573 Moloto corridor",
    organ: "Tshwane Metro",
    province: "Gauteng",
    category: "Construction",
    status: "Open",
    budget: "R 88M",
    publishedAt: iso(-4),
    closingAt: iso(35),
    summary:
      "Rehabilitation of 24km of the R573 corridor including stormwater, signage and pedestrian upgrades. CIDB 8CE required.",
    documents: [
      { name: "RFP.pdf", size: "3.9 MB", kind: "PDF" },
      { name: "Drawings.pdf", size: "12.4 MB", kind: "PDF" },
      { name: "BoQ.xlsx", size: "620 KB", kind: "XLSX" },
    ],
  },
  {
    id: "t-009",
    reference: "KZN-DoE-2026/SUP-33",
    title: "Learner nutrition — daily meals, uMkhanyakude",
    organ: "KZN Dept. of Education",
    province: "KwaZulu-Natal",
    category: "Supply",
    status: "Open",
    budget: "R 31M / year",
    publishedAt: iso(-8),
    closingAt: iso(18),
    summary:
      "Preparation and delivery of daily meals to 178 schools including cold-chain, kitchen setup and menu compliance.",
    documents: [
      { name: "Nutrition Standards.pdf", size: "1.1 MB", kind: "PDF" },
      { name: "Response Template.docx", size: "210 KB", kind: "DOCX" },
    ],
  },
];

export const CATEGORIES: TenderCategory[] = [
  "Construction", "IT & Digital", "Health", "Consulting", "Supply", "Security",
];
export const PROVINCES = [
  "Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape", "National",
];
export const STATUSES: TenderStatus[] = ["Open", "Closing soon", "Awarded"];

export function daysUntil(iso: string) {
  const ms = new Date(iso).getTime() - Date.now();
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

export function buildTenderDoc(t: Tender, docName: string) {
  return `HADEES TRADING PTY LTD — Tender Document Pack
==================================================
Reference   : ${t.reference}
Title       : ${t.title}
Organ       : ${t.organ}
Province    : ${t.province}
Category    : ${t.category}
Status      : ${t.status}
Budget      : ${t.budget}
Published   : ${new Date(t.publishedAt).toDateString()}
Closing     : ${new Date(t.closingAt).toDateString()}

Document    : ${docName}
--------------------------------------------------

Summary
-------
${t.summary}

Mandatory attachments
---------------------
- Central Supplier Database (CSD) report
- SARS tax compliance PIN
- B-BBEE affidavit or verification certificate
- Company registration documents (CoR 14.3 / MOI)
- Signed declaration of interest (SBD 4)

Evaluation criteria (typical)
-----------------------------
- Price                      : 80 / 90 points
- B-BBEE recognition         : 20 / 10 points
- Functional pre-qualification per RFP

Response guidance
-----------------
1. Read the full RFP before drafting.
2. Address every mandatory clause with page references.
3. Have Hadees Trading review the compliance pack before submission.
4. Submit at least 24 hours before the closing time.

Prepared by Hadees Trading — Tender Hub
© ${new Date().getFullYear()} Hadees Trading Pty Ltd. Sample document.
`;
}
