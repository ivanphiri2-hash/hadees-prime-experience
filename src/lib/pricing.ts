export type Currency = "ZAR";

export interface PricingHistory {
  id: string;
  serviceId: string;
  effectiveDate: string;
  price: number;
  currency: Currency;
  note?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description?: string;
  enabled: boolean;
  order: number;
}

export interface ServiceFeature {
  id: string;
  feature: string;
  starter: string;
  business: string;
  premium: string;
}

export interface WebsitePackage {
  id: string;
  name: string;
  badge?: string;
  price: number;
  priceLabel: string;
  tagline: string;
  features: string[];
  delivery: string;
  buttonLabel: string;
  featured?: boolean;
  order: number;
}

export interface BusinessService {
  id: string;
  name: string;
  price?: number;
  priceLabel: string;
  quoteType: "fixed" | "custom";
  order: number;
}

export interface ComplianceService {
  id: string;
  name: string;
  price?: number;
  priceLabel: string;
  quoteType: "fixed" | "custom";
  order: number;
}

export interface DocumentService {
  id: string;
  name: string;
  price?: number;
  priceLabel: string;
  note?: string;
  quoteType: "fixed" | "custom";
  order: number;
}

export interface DigitalService {
  id: string;
  name: string;
  description?: string;
  order: number;
}

export interface AddonService {
  id: string;
  name: string;
  priceLabel: string;
  subtitle: string;
  order: number;
}

export const serviceCategories: ServiceCategory[] = [
  { id: "packages", name: "Website Packages", enabled: true, order: 1 },
  { id: "registration", name: "Business Registration", enabled: true, order: 2 },
  { id: "compliance", name: "Compliance Services", enabled: true, order: 3 },
  { id: "documents", name: "Documents & Branding", enabled: true, order: 4 },
  { id: "digital", name: "Digital Solutions", enabled: true, order: 5 },
  { id: "addons", name: "Optional Add-ons", enabled: true, order: 6 },
];

export const websitePackages: WebsitePackage[] = [
  {
    id: "starter",
    name: "Starter Website",
    price: 1500,
    priceLabel: "R 1 500",
    tagline: "Perfect for Startups",
    features: [
      "1–3 Pages",
      "Mobile Responsive",
      "Contact Form",
      "WhatsApp Button",
      "Google Maps",
      "Social Links",
      "Basic SEO",
      "SSL Ready",
      "Fast Loading",
    ],
    delivery: "2–4 Business Days",
    buttonLabel: "Choose Starter",
    order: 1,
  },
  {
    id: "business",
    name: "Business Website",
    price: 2500,
    priceLabel: "R 2 500",
    tagline: "Best For Growing Businesses",
    features: [
      "5–8 Pages",
      "Premium Design",
      "WhatsApp Lead System",
      "Services Pages",
      "Gallery",
      "Testimonials",
      "SEO Setup",
      "Google Business",
      "Enquiry Forms",
      "Analytics",
    ],
    delivery: "4–7 Business Days",
    buttonLabel: "Choose Business",
    order: 2,
  },
  {
    id: "premium",
    name: "Premium Website",
    badge: "Most Popular",
    price: 5500,
    priceLabel: "R 5 500",
    tagline: "Enterprise digital presence for ambitious brands",
    features: [
      "8–15 Pages",
      "Premium UI/UX",
      "Corporate Design",
      "Portfolio",
      "Blog",
      "Full SEO",
      "WhatsApp Automation",
      "CRM Ready",
      "Lead Generation",
      "Copywriting",
      "Hosting Assistance",
      "Analytics",
      "Speed Optimization",
      "Security Hardening",
    ],
    delivery: "7–14 Business Days",
    buttonLabel: "Choose Premium",
    featured: true,
    order: 3,
  },
];

export const businessServices: BusinessService[] = [
  { id: "company-registration", name: "Company Registration", priceLabel: "R 3 500", quoteType: "fixed", price: 3500, order: 1 },
  { id: "custom-quote", name: "Custom Quote", priceLabel: "Custom Quote", quoteType: "custom", order: 2 },
];

export const complianceServices: ComplianceService[] = [
  { id: "coida", name: "COIDA Registration", priceLabel: "R 3 500", quoteType: "fixed", price: 3500, order: 1 },
  { id: "nhbrc", name: "NHBRC Registration", priceLabel: "R 4 500", quoteType: "fixed", price: 4500, order: 2 },
  { id: "cidb", name: "CIDB Registration", priceLabel: "Custom Quote", quoteType: "custom", order: 3 },
  { id: "csd", name: "CSD Registration", priceLabel: "Custom Quote", quoteType: "custom", order: 4 },
  { id: "tax-clearance", name: "Tax Clearance Assistance", priceLabel: "R 350", quoteType: "fixed", price: 350, order: 5 },
  { id: "nhbrc-assistance", name: "NHBRC Assistance", priceLabel: "R 500", quoteType: "fixed", price: 500, order: 6 },
  { id: "bbbee-registration", name: "B-BBEE Registration", priceLabel: "R 350", quoteType: "fixed", price: 350, order: 7 },
  { id: "annual-returns", name: "Annual Returns", priceLabel: "Custom Quote", quoteType: "custom", order: 8 },
  { id: "compliance-monitoring", name: "Business Compliance Monitoring", priceLabel: "Custom Quote", quoteType: "custom", order: 9 },
];

export const documentServices: DocumentService[] = [
  { id: "share-certificate", name: "Share Certificate", priceLabel: "R 350", quoteType: "fixed", price: 350, order: 1 },
  { id: "letterhead-design", name: "Letterhead Design", priceLabel: "Included", note: "Professional corporate stationery", quoteType: "fixed", order: 2 },
  { id: "logo-design", name: "Logo Design", priceLabel: "Included", note: "Brand identity concept", quoteType: "fixed", order: 3 },
  { id: "letterhead-logo", name: "Letterhead & Logo Package", priceLabel: "R 500", quoteType: "fixed", price: 500, order: 4 },
  { id: "business-plan", name: "Business Plan", priceLabel: "R 500", quoteType: "fixed", price: 500, order: 5 },
  { id: "tender-review", name: "Tender Document Review", priceLabel: "R 500", quoteType: "fixed", price: 500, order: 6 },
  { id: "invoice-template", name: "Invoice Template", priceLabel: "R 400", quoteType: "fixed", price: 400, order: 7 },
  { id: "quotation-template", name: "Quotation Template", priceLabel: "R 400", quoteType: "fixed", price: 400, order: 8 },
  { id: "invoice-quotation-bundle", name: "Invoice & Quotation Template Bundle", priceLabel: "R 400", quoteType: "fixed", price: 400, order: 9 },
  { id: "company-profile", name: "Company Profile", priceLabel: "Custom Quote", quoteType: "custom", order: 10 },
  { id: "business-proposal", name: "Business Proposal", priceLabel: "Custom Quote", quoteType: "custom", order: 11 },
  { id: "contract-preparation", name: "Contract Preparation", priceLabel: "Custom Quote", quoteType: "custom", order: 12 },
];

export const digitalServices: DigitalService[] = [
  { id: "premium-website-development", name: "Premium Website Development", order: 1 },
  { id: "ai-automation", name: "AI Automation", order: 2 },
  { id: "ivan-os-enterprise", name: "IVAN OS Enterprise", order: 3 },
  { id: "client-portal", name: "Client Portal", order: 4 },
  { id: "crm-system", name: "CRM System", order: 5 },
  { id: "business-email", name: "Business Email", order: 6 },
  { id: "hosting", name: "Hosting", order: 7 },
  { id: "seo", name: "SEO", order: 8 },
  { id: "brand-identity", name: "Brand Identity", order: 9 },
  { id: "digital-transformation", name: "Digital Transformation", order: 10 },
];

export const addons: AddonService[] = [
  { id: "logo-design-addon", name: "Logo Design", priceLabel: "R 250", subtitle: "Starting From", order: 1 },
  { id: "domain-registration", name: "Domain Registration", priceLabel: "R 120/year", subtitle: "Starting From", order: 2 },
  { id: "business-email-addon", name: "Business Email", priceLabel: "R 150", subtitle: "Starting From", order: 3 },
  { id: "hosting-setup", name: "Hosting Setup", priceLabel: "R 500/year", subtitle: "Starting From", order: 4 },
  { id: "extra-website-pages", name: "Extra Website Pages", priceLabel: "R 150", subtitle: "Per Page", order: 5 },
];

export const comparisonRows: ServiceFeature[] = [
  { id: "responsive", feature: "Responsive", starter: "Yes", business: "Yes", premium: "Yes" },
  { id: "seo", feature: "SEO", starter: "Basic", business: "Advanced", premium: "Enterprise" },
  { id: "whatsapp", feature: "WhatsApp", starter: "Included", business: "Included", premium: "Included" },
  { id: "automation", feature: "Automation", starter: "No", business: "Optional", premium: "Included" },
  { id: "portfolio", feature: "Portfolio", starter: "No", business: "Included", premium: "Included" },
  { id: "crm-ready", feature: "CRM Ready", starter: "No", business: "No", premium: "Included" },
  { id: "analytics", feature: "Analytics", starter: "Basic", business: "Advanced", premium: "Enterprise" },
  { id: "support", feature: "Support", starter: "Email", business: "Priority", premium: "VIP" },
];

export const faqItems = [
  { question: "How long does a website take?", answer: "Delivery ranges from 2 to 14 business days depending on the package and scope. Detailed schedules are confirmed during onboarding." },
  { question: "Do you offer payment plans?", answer: "Yes. We structure staged payments for website and compliance packages to keep cashflow predictable while the project moves forward." },
  { question: "Do you register companies?", answer: "Yes. We support company registration, CIPC filings, and related compliance documents for new South African businesses." },
  { question: "Do you assist with compliance?", answer: "Yes. We offer COIDA, NHBRC, CIDB, CSD, tax clearance, B-BBEE and ongoing monitoring through an integrated compliance workflow." },
  { question: "Do you redesign existing websites?", answer: "Absolutely. We modernise existing websites with enterprise-grade design, performance optimisation and integration ready for business systems." },
  { question: "Can I upgrade later?", answer: "Yes. Our packages are designed to scale. You can start with a website and upgrade to full automation, portals and enterprise integrations later." },
  { question: "Do you provide ongoing support?", answer: "Yes. We provide support, managed hosting, compliance refreshes, and ongoing optimisation as part of our enterprise service offering." },
];

export const whyChooseItems = [
  "Fast Delivery",
  "Professional Design",
  "Enterprise Security",
  "AI Powered",
  "Scalable Solutions",
  "Affordable Pricing",
  "Nationwide Service",
  "Dedicated Support",
];
