# IVAN OS Enterprise CRM + Platform Hardening — Phased Plan

This request spans a full enterprise CRM plus site-wide polish. Delivering it in one turn would produce shallow scaffolding across ~40 modules. Below is a realistic phased plan that ships production-quality work in each turn. Please pick the phase to start (or approve the order and I'll run them sequentially).

## What's already shipped (baseline)
- Marketing site (Home, Services, About, Contact, Insights)
- Tender Hub with search + filters + downloadable brief packs (`/tenders`)
- IVAN OS section + `/ivan-os` route + demo wizard (basic)
- Schedule Demo modal → Supabase `demo_bookings` → `/schedule-demo/success`
- Auth (`/auth`) + Admin Bookings dashboard + RBAC (`user_roles`, `has_role`, `is_admin`)
- Google Maps satellite on Contact
- Centralized site-config with admin editor

## Phase A — Polish & Fixes (1 turn)
Immediate quality wins on what already exists.
- Accessibility pass: color contrast on muted text, aria-labels on icon buttons, `<main>` landmarks per route, keyboard focus rings, `h-dvh` where needed, alt text audit.
- Performance: lazy-load heavy sections (IVAN OS wizard, ecosystem SVGs), defer motion on `prefers-reduced-motion`, image `loading="lazy"` + `decoding="async"`, remove duplicate framer-motion mounts.
- Duplicate copy scan on Home / IVAN OS / Services and rewrite repeats.
- Tender Hub: add "Respond to this tender" pathway (opens Schedule Demo modal pre-filled with tender ref + `source="tender:{ref}"`, stored in `demo_bookings.source`).
- Wire Schedule Demo into the final primary CTA on Home + IVAN OS with proper validation + loading states (already partially done; verify).

## Phase B — IVAN OS Wizard v2 (1 turn)
Full interactive wizard: selectable use-cases (Ops / Sales / Finance / Compliance / Custom) that live-update a rich dashboard preview (KPIs, pipeline chart, alerts, activity feed, AI recommendations) with smooth transitions. Ends in Schedule Demo pre-filled with chosen use-case.

## Phase C — Compliance Hub (1 turn)
- `/compliance` landing with categories: CIDB, NHBRC, COIDA, CSD, Tax Clearance, B-BBEE, Annual Returns.
- `/compliance/$slug` SEO-friendly detail pages (unique title/description/OG, FAQ JSON-LD, `Article` schema).
- Downloadable assets (client-generated PDFs/text packs like Tender Hub).
- Expiry-alert explainer + CTA into Schedule Demo.

## Phase D — CRM Foundation (1 turn)
Database + shell only, deferring depth to later phases.
- Migrations: `companies`, `contacts`, `leads`, `opportunities`, `activities`, `notes`, plus expanded `app_role` enum (admin, sales_manager, sales, marketing, support, finance, ops, client, super_admin) with RLS + GRANTs.
- `/crm` gated under `_authenticated/` with role-aware nav.
- Dashboard: KPIs (revenue, pipeline value, open leads, tasks), recent activity, AI recommendations placeholder, business health score.
- Global search (companies/contacts/leads) via a single RPC.

## Phase E — Pipeline + Quotes + Invoices (1 turn)
- Kanban pipeline (drag-drop) over `opportunities.stage`.
- Quotes: line items, PDF export (client-side), status, email/WhatsApp share links.
- Invoices: line items, status, payment reminders (stub), PDF export.
- Migrations: `quotes`, `quote_items`, `invoices`, `invoice_items`, `payments`.

## Phase F — Projects, Tasks, Documents, Calendar (1 turn)
- `projects`, `tasks`, `milestones`, `appointments`, `documents` with version metadata.
- Calendar view + task board.
- Document center with folders, permissions, upload → Supabase Storage.

## Phase G — Automation + IVAN AI Bridge (1 turn)
- Visual workflow builder (trigger → condition → AI → action → notify).
- Server functions calling Lovable AI Gateway (Gemini) for: lead qualification, quote drafting, email drafting, conversation summaries, next-best-action.
- `ai_conversations`, `automation_workflows`, `notifications` tables.

## Phase H — Client Portal + Communication Hub (1 turn)
- `/portal` gated for `client` role: invoices, projects, compliance status, documents, messages, tickets, payments.
- Communication hub: email (Resend), WhatsApp (Cloud API), internal chat, notifications center.

## Phase I — Geographic Intelligence + Analytics + Settings (1 turn)
- `provinces`, `districts`, `municipalities` seed + territory assignment.
- Google Places autocomplete on addresses; distance search.
- Analytics dashboards (revenue, conversion, forecast).
- Full Settings: users, roles, permissions, branding, integrations, AI models.

## Phase J — Payments + Integrations + Hardening (1 turn)
- PayFast + Stripe checkout for invoices.
- QuickBooks/Xero export.
- Final security scan, RLS audit, SEO scan, Lighthouse pass.

## Technical notes
- All tables: RLS on, explicit GRANTs, role-scoped policies via `has_role(auth.uid(), ...)`.
- Server-side writes via `createServerFn` + `requireSupabaseAuth`; admin ops load `supabaseAdmin` inside handlers.
- AI via Lovable AI Gateway (Gemini default). No mock data at runtime.
- Every new route: unique `head()` (title, description, OG, Twitter, canonical) + relevant JSON-LD.
- Mobile-first, dark theme, glassmorphism, Motion transitions honoring `prefers-reduced-motion`.

## Recommended start
**Phase A + B in one turn** (polish + wizard v2 + tender response pathway + final CTA wiring). This delivers the immediately-visible items in your request and sets a clean base before we start pouring CRM schema.

Reply with:
- "Start A+B" (recommended), or
- Name the phase(s) to run first, or
- Ask me to reshape the phases.
