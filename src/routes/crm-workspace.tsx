import { createFileRoute } from "@tanstack/react-router";
import { CRMWorkspace } from "@/components/crm-workspace";

export const Route = createFileRoute("/crm-workspace")({
  head: () => ({
    meta: [
      { title: "CRM Workspace — IVAN OS Enterprise CRM" },
      { name: "description", content: "A dedicated CRM workspace for lead pipeline, quotes, documents and AI recommendations." },
      { property: "og:title", content: "CRM Workspace — IVAN OS Enterprise CRM" },
      { property: "og:description", content: "A premium command center for sales, compliance and delivery teams in Hadees Trading." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/crm-workspace" }],
  }),
  component: CRMWorkspace,
});
