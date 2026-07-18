import { createFileRoute } from "@tanstack/react-router";
import { AuthWorkspace } from "@/components/auth-workspace";

export const Route = createFileRoute("/auth-workspace")({
  head: () => ({
    meta: [
      { title: "Authenticated Workspace — IVAN OS" },
      { name: "description", content: "A secure authenticated workspace for Hadees Trading teams and clients." },
      { property: "og:title", content: "Authenticated Workspace — IVAN OS" },
      { property: "og:description", content: "Role-based team and client workspaces with secure documents, notifications and approvals." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/auth-workspace" }],
  }),
  component: AuthWorkspace,
});
