import {
  Globe, FileCheck, Briefcase, ShieldCheck, FileText, Palette,
  Lightbulb, Bot, Database, Server, type LucideIcon,
} from 'lucide-react'

export interface ServiceItem {
  slug: string
  title: string
  short: string
  description: string
  icon: LucideIcon
  features: string[]
  gradient: string
}

export const services: ServiceItem[] = [
  {
    slug: 'website-design',
    title: 'Website Design',
    short: 'Premium, fast, responsive websites',
    description: 'Enterprise-grade websites built with modern frameworks, optimized for speed, SEO, and conversion.',
    icon: Globe,
    features: ['Custom Design', 'SEO Optimized', 'Mobile Responsive', 'Fast Loading'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    slug: 'business-registration',
    title: 'Business Registration',
    short: 'CIPC registration & compliance',
    description: 'Register your business with CIPC, get tax numbers, and all the compliance documents you need.',
    icon: FileCheck,
    features: ['CIPC Registration', 'Tax Clearance', 'BBEE Certificates', 'Share Certificates'],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    slug: 'tender-assistance',
    title: 'Tender Assistance',
    short: 'Win government & private tenders',
    description: 'Complete tender preparation, document compilation, and submission assistance.',
    icon: Briefcase,
    features: ['Tender Preparation', 'Document Compilation', 'Submission Support', 'Compliance Check'],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    slug: 'compliance',
    title: 'Compliance',
    short: 'POPIA, SARS, BBBEE & more',
    description: 'Stay compliant with South African regulations including POPIA, SARS, and BBBEE requirements.',
    icon: ShieldCheck,
    features: ['POPIA Compliance', 'SARS Filing', 'BBBEE Advisory', 'Annual Returns'],
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    slug: 'business-documents',
    title: 'Business Documents',
    short: 'Professional document drafting',
    description: 'Custom business documents, contracts, policies, and legal templates drafted professionally.',
    icon: FileText,
    features: ['Contracts', 'Policies', 'Templates', 'Legal Documents'],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    slug: 'branding',
    title: 'Branding',
    short: 'Logo, identity & brand strategy',
    description: 'Complete brand identity packages from logo design to brand guidelines and strategy.',
    icon: Palette,
    features: ['Logo Design', 'Brand Identity', 'Brand Guidelines', 'Marketing Materials'],
    gradient: 'from-fuchsia-500 to-pink-500',
  },
  {
    slug: 'business-consulting',
    title: 'Business Consulting',
    short: 'Strategic growth advisory',
    description: 'Expert business consulting to help you scale, optimize operations, and increase profitability.',
    icon: Lightbulb,
    features: ['Strategy Planning', 'Operations', 'Financial Advisory', 'Growth Strategy'],
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    short: 'Intelligent business automation',
    description: 'Leverage AI to automate workflows, customer support, and business processes.',
    icon: Bot,
    features: ['AI Chatbots', 'Workflow Automation', 'Process Optimization', 'AI Integration'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    slug: 'crm-development',
    title: 'CRM Development',
    short: 'Custom CRM systems',
    description: 'Bespoke CRM systems tailored to your business processes and customer management needs.',
    icon: Database,
    features: ['Custom CRM', 'Lead Management', 'Sales Pipeline', 'Reporting'],
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    slug: 'hosting-domains',
    title: 'Hosting & Domains',
    short: 'Reliable hosting & domain management',
    description: 'Fast, secure hosting solutions and domain registration with full management.',
    icon: Server,
    features: ['Web Hosting', 'Domain Registration', 'SSL Certificates', 'Email Hosting'],
    gradient: 'from-teal-500 to-green-500',
  },
]

export interface SolutionItem {
  slug: string
  title: string
  short: string
  description: string
  icon: LucideIcon
  gradient: string
}

export const solutions: SolutionItem[] = [
  { slug: 'enterprise-crm', title: 'Enterprise CRM', short: 'Full-scale customer relationship management', description: 'Enterprise-grade CRM platform with advanced analytics, automation, and integrations.', icon: Database, gradient: 'from-blue-500 to-indigo-500' },
  { slug: 'ivan-os', title: 'IVAN OS', short: 'Operating system for your business', description: 'IVAN OS — an integrated business operating system that unifies your workflows.', icon: Server, gradient: 'from-gold-400 to-amber-600' },
  { slug: 'automation', title: 'Automation', short: 'Automate repetitive business tasks', description: 'Intelligent automation solutions that eliminate manual work and boost efficiency.', icon: Bot, gradient: 'from-cyan-500 to-blue-500' },
  { slug: 'client-portal', title: 'Client Portal', short: 'Secure client access & communication', description: 'Branded client portals for secure document sharing, communication, and project tracking.', icon: Globe, gradient: 'from-emerald-500 to-teal-500' },
  { slug: 'compliance-portal', title: 'Compliance Portal', short: 'Manage compliance in one place', description: 'Centralized compliance management portal for POPIA, SARS, and industry regulations.', icon: ShieldCheck, gradient: 'from-rose-500 to-red-500' },
  { slug: 'construction-solutions', title: 'Construction Solutions', short: 'Software for construction businesses', description: 'Specialized software solutions for construction project management and compliance.', icon: Briefcase, gradient: 'from-amber-500 to-orange-500' },
  { slug: 'business-intelligence', title: 'Business Intelligence', short: 'Data-driven decision making', description: 'BI dashboards and analytics that transform your business data into actionable insights.', icon: Lightbulb, gradient: 'from-violet-500 to-purple-500' },
  { slug: 'knowledge-base', title: 'Knowledge Base', short: 'Centralized knowledge management', description: 'Internal and external knowledge bases with search, categorization, and versioning.', icon: FileText, gradient: 'from-fuchsia-500 to-pink-500' },
  { slug: 'document-management', title: 'Document Management', short: 'Secure document storage & workflows', description: 'Enterprise document management with version control, approvals, and secure access.', icon: FileCheck, gradient: 'from-teal-500 to-cyan-500' },
  { slug: 'mobile-app', title: 'Mobile App', short: 'iOS & Android business apps', description: 'Cross-platform mobile applications for your business operations and customer engagement.', icon: Globe, gradient: 'from-indigo-500 to-violet-500' },
]

export interface WorkspaceLink {
  title: string
  description: string
  href: string
  icon: LucideIcon
  gradient: string
}

import { LayoutDashboard, Users, Settings, Smartphone, BookOpen } from 'lucide-react'

export const workspaceLinks: WorkspaceLink[] = [
  { title: 'CRM Workspace', description: 'Manage leads, deals, and customer relationships', href: '/workspace/crm', icon: Database, gradient: 'from-blue-500 to-indigo-500' },
  { title: 'Enterprise CRM', description: 'Full-scale enterprise customer management', href: '/workspace/enterprise-crm', icon: LayoutDashboard, gradient: 'from-cyan-500 to-blue-500' },
  { title: 'Admin Workspace', description: 'Administrative controls and system management', href: '/workspace/admin', icon: Settings, gradient: 'from-gold-400 to-amber-600' },
  { title: 'Client Portal', description: 'Secure client access and document sharing', href: '/workspace/client-portal', icon: Users, gradient: 'from-emerald-500 to-teal-500' },
  { title: 'Mobile App', description: 'Access your workspace on the go', href: '/workspace/mobile', icon: Smartphone, gradient: 'from-violet-500 to-purple-500' },
  { title: 'Knowledge Center', description: 'Knowledge base, docs, and resources', href: '/workspace/knowledge', icon: BookOpen, gradient: 'from-rose-500 to-pink-500' },
]

export const companyInfo = {
  name: 'Hadees Trading (Pty) Ltd',
  established: '2025',
  location: 'Mahikeng, South Africa',
  email: 'admin@hadeestrading.co.za',
  phone: '083 753 5798',
  phoneIntl: '+27 83 753 5798',
  whatsapp: '27837535798',
  address: 'Mahikeng, North West, South Africa',
}

export const trustBadges = [
  'Secure Payments',
  'South African Business',
  'POPIA Compliant',
  'SSL Secured',
  'Professional Support',
  'WhatsApp Support',
  'Secure Checkout',
  'Enterprise Grade Solutions',
]

export const deliveryEstimates = [
  { service: 'Starter Website', time: '2–4 Days' },
  { service: 'Business Website', time: '4–7 Days' },
  { service: 'Premium Website', time: '7–14 Days' },
  { service: 'Business Documents', time: '24–72 Hours' },
  { service: 'Business Registration', time: 'Dependent on Government Processing' },
]
