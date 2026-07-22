
-- CRM Foundation: companies, contacts, leads
CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE OR REPLACE FUNCTION public.is_crm_user(_uid uuid) RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _uid AND role IN ('super_admin','admin','staff','sales','finance','compliance')
  );
$$;

-- COMPANIES
CREATE TABLE public.crm_companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  industry text,
  province text,
  website text,
  phone text,
  email text,
  notes text,
  owner_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.crm_companies TO authenticated;
GRANT ALL ON public.crm_companies TO service_role;
ALTER TABLE public.crm_companies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "CRM users view companies" ON public.crm_companies FOR SELECT TO authenticated USING (public.is_crm_user(auth.uid()));
CREATE POLICY "CRM users insert companies" ON public.crm_companies FOR INSERT TO authenticated WITH CHECK (public.is_crm_user(auth.uid()));
CREATE POLICY "CRM users update companies" ON public.crm_companies FOR UPDATE TO authenticated USING (public.is_crm_user(auth.uid())) WITH CHECK (public.is_crm_user(auth.uid()));
CREATE POLICY "Admins delete companies" ON public.crm_companies FOR DELETE TO authenticated USING (public.is_admin(auth.uid()));
CREATE TRIGGER trg_crm_companies_updated BEFORE UPDATE ON public.crm_companies FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- CONTACTS
CREATE TABLE public.crm_contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES public.crm_companies(id) ON DELETE CASCADE,
  first_name text NOT NULL,
  last_name text,
  title text,
  email text,
  phone text,
  notes text,
  owner_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.crm_contacts TO authenticated;
GRANT ALL ON public.crm_contacts TO service_role;
ALTER TABLE public.crm_contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "CRM users view contacts" ON public.crm_contacts FOR SELECT TO authenticated USING (public.is_crm_user(auth.uid()));
CREATE POLICY "CRM users insert contacts" ON public.crm_contacts FOR INSERT TO authenticated WITH CHECK (public.is_crm_user(auth.uid()));
CREATE POLICY "CRM users update contacts" ON public.crm_contacts FOR UPDATE TO authenticated USING (public.is_crm_user(auth.uid())) WITH CHECK (public.is_crm_user(auth.uid()));
CREATE POLICY "Admins delete contacts" ON public.crm_contacts FOR DELETE TO authenticated USING (public.is_admin(auth.uid()));
CREATE TRIGGER trg_crm_contacts_updated BEFORE UPDATE ON public.crm_contacts FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE INDEX idx_crm_contacts_company ON public.crm_contacts(company_id);

-- LEADS
CREATE TYPE public.lead_stage AS ENUM ('new','qualified','proposal','negotiation','won','lost');
CREATE TYPE public.lead_source AS ENUM ('website','whatsapp','referral','tender','event','other');

CREATE TABLE public.crm_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  company_id uuid REFERENCES public.crm_companies(id) ON DELETE SET NULL,
  contact_id uuid REFERENCES public.crm_contacts(id) ON DELETE SET NULL,
  stage public.lead_stage NOT NULL DEFAULT 'new',
  source public.lead_source NOT NULL DEFAULT 'website',
  value_zar numeric(14,2) DEFAULT 0,
  probability int DEFAULT 20 CHECK (probability BETWEEN 0 AND 100),
  expected_close date,
  notes text,
  owner_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.crm_leads TO authenticated;
GRANT ALL ON public.crm_leads TO service_role;
ALTER TABLE public.crm_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "CRM users view leads" ON public.crm_leads FOR SELECT TO authenticated USING (public.is_crm_user(auth.uid()));
CREATE POLICY "CRM users insert leads" ON public.crm_leads FOR INSERT TO authenticated WITH CHECK (public.is_crm_user(auth.uid()));
CREATE POLICY "CRM users update leads" ON public.crm_leads FOR UPDATE TO authenticated USING (public.is_crm_user(auth.uid())) WITH CHECK (public.is_crm_user(auth.uid()));
CREATE POLICY "Admins delete leads" ON public.crm_leads FOR DELETE TO authenticated USING (public.is_admin(auth.uid()));
CREATE TRIGGER trg_crm_leads_updated BEFORE UPDATE ON public.crm_leads FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE INDEX idx_crm_leads_stage ON public.crm_leads(stage);
CREATE INDEX idx_crm_leads_company ON public.crm_leads(company_id);
