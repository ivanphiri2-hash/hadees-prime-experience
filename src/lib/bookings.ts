import { supabase } from "@/integrations/supabase/client";

export type BookingRow = {
  id: string; name: string; email: string; company: string; role: string | null;
  use_case: string; preferred_date: string; notes: string | null; status: string;
  source: string | null; created_at: string;
};

export type BookingInput = {
  name: string; email: string; company: string; role?: string;
  use_case: "ops" | "sales" | "finance" | "compliance" | "custom";
  preferred_date: string; notes?: string; source?: string;
};

export async function createBooking(input: BookingInput) {
  const { data, error } = await supabase.from("demo_bookings").insert(input).select("id").single();
  if (error) throw error;
  return data as { id: string };
}

export async function listBookings() {
  const { data, error } = await supabase.from("demo_bookings").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as BookingRow[];
}

export async function updateBookingStatus(id: string, status: string) {
  const { error } = await supabase.from("demo_bookings").update({ status }).eq("id", id);
  if (error) throw error;
}

export function bookingsToCSV(rows: BookingRow[]) {
  const headers = ["created_at","name","email","company","role","use_case","preferred_date","status","source","notes"];
  const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  return [headers.join(","), ...rows.map(r => headers.map(h => esc((r as any)[h])).join(","))].join("\n");
}

export function downloadCSV(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 500);
}
