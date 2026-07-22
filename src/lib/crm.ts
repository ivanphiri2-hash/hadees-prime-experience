import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

export type Company = Database["public"]["Tables"]["crm_companies"]["Row"];
export type Contact = Database["public"]["Tables"]["crm_contacts"]["Row"];
export type Lead = Database["public"]["Tables"]["crm_leads"]["Row"];
export type LeadStage = Database["public"]["Enums"]["lead_stage"];
export type LeadSource = Database["public"]["Enums"]["lead_source"];

export const LEAD_STAGES: LeadStage[] = ["new", "qualified", "proposal", "negotiation", "won", "lost"];
export const LEAD_SOURCES: LeadSource[] = ["website", "whatsapp", "referral", "tender", "event", "other"];

export const CRM_ROLES = ["super_admin", "admin", "staff", "sales", "finance", "compliance"] as const;

export async function isCrmUser(userId: string) {
  const { data, error } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", userId);
  if (error) return false;
  return (data ?? []).some((r) => (CRM_ROLES as readonly string[]).includes(r.role));
}

export async function listCompanies() {
  const { data, error } = await supabase.from("crm_companies").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return data as Company[];
}

export async function createCompany(input: Partial<Company> & { name: string }) {
  const { data: userRes } = await supabase.auth.getUser();
  const uid = userRes.user?.id ?? null;
  const { data, error } = await supabase.from("crm_companies").insert({ ...input, owner_id: uid, created_by: uid }).select().single();
  if (error) throw error;
  return data as Company;
}

export async function listContacts() {
  const { data, error } = await supabase.from("crm_contacts").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return data as Contact[];
}

export async function createContact(input: Partial<Contact> & { first_name: string }) {
  const { data: userRes } = await supabase.auth.getUser();
  const uid = userRes.user?.id ?? null;
  const { data, error } = await supabase.from("crm_contacts").insert({ ...input, owner_id: uid, created_by: uid }).select().single();
  if (error) throw error;
  return data as Contact;
}

export async function listLeads() {
  const { data, error } = await supabase.from("crm_leads").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return data as Lead[];
}

export async function createLead(input: Partial<Lead> & { title: string }) {
  const { data: userRes } = await supabase.auth.getUser();
  const uid = userRes.user?.id ?? null;
  const { data, error } = await supabase.from("crm_leads").insert({ ...input, owner_id: uid, created_by: uid }).select().single();
  if (error) throw error;
  return data as Lead;
}

export async function updateLeadStage(id: string, stage: LeadStage) {
  const { error } = await supabase.from("crm_leads").update({ stage }).eq("id", id);
  if (error) throw error;
}

export function formatZAR(n: number | null | undefined) {
  return new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR", maximumFractionDigits: 0 }).format(Number(n ?? 0));
}
