import { useEffect, useState } from "react";

export type SiteContact = {
  email: string;
  phone: string;
  phoneHref: string;
  whatsapp: string; // digits only, e.g. 27000000000
  addressLine1: string;
  addressLine2: string;
  city: string;
  postalCode: string;
  country: string;
  mapsQuery: string; // used for the Google Maps embed
};

export const DEFAULT_CONTACT: SiteContact = {
  email: "info@hadeestrading.co.za",
  phone: "+27 00 000 0000",
  phoneHref: "tel:+27000000000",
  whatsapp: "27000000000",
  addressLine1: "Stand 30065",
  addressLine2: "Motlhabeng",
  city: "Mahikeng",
  postalCode: "2735",
  country: "South Africa",
  mapsQuery: "Stand 30065, Motlhabeng, Mahikeng, 2735, South Africa",
};

const KEY = "hadees-site-contact-v1";

function read(): SiteContact {
  if (typeof window === "undefined") return DEFAULT_CONTACT;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return DEFAULT_CONTACT;
    return { ...DEFAULT_CONTACT, ...JSON.parse(raw) } as SiteContact;
  } catch {
    return DEFAULT_CONTACT;
  }
}

export function saveContact(next: SiteContact) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent("hadees-contact-updated"));
}

export function useSiteContact(): SiteContact {
  const [contact, setContact] = useState<SiteContact>(DEFAULT_CONTACT);
  useEffect(() => {
    setContact(read());
    const on = () => setContact(read());
    window.addEventListener("hadees-contact-updated", on);
    window.addEventListener("storage", on);
    return () => {
      window.removeEventListener("hadees-contact-updated", on);
      window.removeEventListener("storage", on);
    };
  }, []);
  return contact;
}

export function formatAddress(c: SiteContact) {
  return `${c.addressLine1}, ${c.addressLine2}, ${c.city}, ${c.postalCode}, ${c.country}`;
}

export function mailto(c: SiteContact, subject?: string, body?: string) {
  const q = new URLSearchParams();
  if (subject) q.set("subject", subject);
  if (body) q.set("body", body);
  const s = q.toString();
  return `mailto:${c.email}${s ? `?${s}` : ""}`;
}

export function whatsappHref(c: SiteContact, message?: string) {
  const base = `https://wa.me/${c.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
