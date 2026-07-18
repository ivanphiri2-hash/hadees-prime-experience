import { createFileRoute, Link } from "@tanstack/react-router";
import { EnterpriseCRM } from "@/components/enterprise-crm";

export const Route = createFileRoute("/enterprise-crm")({
  head: () => ({
    meta: [
      { title: "IVAN OS Enterprise CRM — Hadees Trading" },
      { name: "description", content: "The IVAN OS Enterprise CRM unifies sales, finance, compliance, documents and AI automation under one intelligent operating system." },
      { property: "og:title", content: "IVAN OS Enterprise CRM — Hadees Trading" },
      { property: "og:description", content: "A premium enterprise CRM platform designed for workflows, automation and compliance across South African businesses." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/enterprise-crm" }],
  }),
  component: EnterpriseCRM,
});
