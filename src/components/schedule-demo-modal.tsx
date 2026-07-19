import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Loader2, X, Calendar, ArrowRight } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { useSiteContact, mailto } from "@/lib/site-config";
import { createBooking } from "@/lib/bookings";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid work email").max(200),
  company: z.string().trim().min(2, "Company name required").max(120),
  role: z.string().trim().max(80).optional().or(z.literal("")),
  useCase: z.enum(["ops", "sales", "finance", "compliance", "custom"]),
  date: z.string().min(1, "Pick a preferred date"),
  notes: z.string().trim().max(600).optional().or(z.literal("")),
});

type FormState = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormState, string>>;

const USE_CASES: { id: FormState["useCase"]; label: string; hint: string }[] = [
  { id: "ops", label: "Operations & workflow automation", hint: "Route tasks, approvals & handovers." },
  { id: "sales", label: "Sales & CRM intelligence", hint: "Auto-score leads and draft follow-ups." },
  { id: "finance", label: "Finance & reconciliation", hint: "Reconcile invoices and flag anomalies." },
  { id: "compliance", label: "Compliance & tender readiness", hint: "Track BBBEE, tax and NHBRC signals." },
  { id: "custom", label: "Something else", hint: "Tell us what you're trying to solve." },
];

export function ScheduleDemoModal({ open, onClose, defaultUseCase, source }: { open: boolean; onClose: () => void; defaultUseCase?: FormState["useCase"]; source?: string }) {
  const contact = useSiteContact();
  const navigate = useNavigate();
  const [state, setState] = useState<FormState>({
    name: "", email: "", company: "", role: "",
    useCase: defaultUseCase ?? "ops", date: "", notes: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending">("idle");

  useEffect(() => { if (open) { setStatus("idle"); setErrors({}); } }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => setState((s) => ({ ...s, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(state);
    if (!parsed.success) {
      const errs: Errors = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as keyof FormState] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await createBooking({
        name: parsed.data.name, email: parsed.data.email, company: parsed.data.company,
        role: parsed.data.role || undefined, use_case: parsed.data.useCase,
        preferred_date: parsed.data.date, notes: parsed.data.notes || undefined,
        source: source ?? "ivan-os",
      });
      onClose();
      navigate({ to: "/schedule-demo/success" });
    } catch (err: any) {
      setStatus("idle");
      toast.error(err?.message ?? "Could not submit — try again.");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0B1220] text-white shadow-[0_30px_120px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full border border-white/10 text-white/70 hover:bg-white/10" aria-label="Close">
              <X className="size-4" />
            </button>

            <form onSubmit={submit} className="p-8 sm:p-10">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#F59E0B]">
                <Calendar className="size-3.5" /> Schedule a live IVAN OS demo
              </div>
              <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">Book a 30-minute walkthrough</h2>
              <p className="mt-2 text-sm text-white/60">A HADEES engineer will tailor the session to your stack. We reply within one business day.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" v={state.name} onChange={(v) => update("name", v)} error={errors.name} required />
                <Field label="Work email" type="email" v={state.email} onChange={(v) => update("email", v)} error={errors.email} required />
                <Field label="Company" v={state.company} onChange={(v) => update("company", v)} error={errors.company} required />
                <Field label="Role (optional)" v={state.role || ""} onChange={(v) => update("role", v)} />
              </div>

              <div className="mt-5">
                <label className="block font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">Focus area</label>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {USE_CASES.map((u) => (
                    <button key={u.id} type="button" onClick={() => update("useCase", u.id)}
                      className={`text-left rounded-xl border px-4 py-3 text-sm transition ${state.useCase === u.id ? "border-[#F59E0B] bg-[#F59E0B]/10" : "border-white/10 hover:border-white/25 bg-white/[0.02]"}`}>
                      <p className="font-medium">{u.label}</p>
                      <p className="mt-0.5 text-xs text-white/50">{u.hint}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-[220px_1fr]">
                <Field label="Preferred date" type="date" v={state.date} onChange={(v) => update("date", v)} error={errors.date} required />
                <Field label="Anything specific to prep?" v={state.notes || ""} onChange={(v) => update("notes", v)} />
              </div>

              <div className="mt-8 flex items-center justify-between gap-3">
                <a href={mailto(contact, "IVAN OS demo enquiry")} className="text-xs text-white/50 hover:text-white">Prefer email? {contact.email}</a>
                <button disabled={status === "sending"} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black disabled:opacity-60">
                  {status === "sending" ? <><Loader2 className="size-4 animate-spin" /> Booking…</> : <>Confirm booking <ArrowRight className="size-4" /></>}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, v, onChange, error, type = "text", required }: {
  label: string; v: string; onChange: (v: string) => void; error?: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">{label}{required && " *"}</label>
      <input
        type={type} value={v} onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className={`mt-2 w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm outline-none transition ${error ? "border-red-500/60" : "border-white/10 focus:border-white/40"}`}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
