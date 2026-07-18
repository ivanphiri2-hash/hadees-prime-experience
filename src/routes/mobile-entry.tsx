import { createFileRoute } from "@tanstack/react-router";
import { MobileEntry } from "@/components/mobile-entry";

export const Route = createFileRoute("/mobile-entry")({
  head: () => ({
    meta: [
      { title: "Mobile App Entry — IVAN OS" },
      { name: "description", content: "A mobile entrypoint for clients and field teams within the IVAN OS platform." },
      { property: "og:title", content: "Mobile App Entry — IVAN OS" },
      { property: "og:description", content: "Designing secure mobile access for customers, sales, and operations." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/mobile-entry" }],
  }),
  component: MobileEntry,
});
