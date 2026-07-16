import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Error 404</p>
        <h1 className="mt-4 font-display text-6xl text-foreground">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-foreground">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">You can try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">Try again</button>
          <a href="/" className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hadees Trading — Enterprise procurement, compliance & digital growth" },
      { name: "description", content: "Hadees Trading (Pty) Ltd is a South African enterprise partner for public-sector tenders, procurement, compliance advisory, web development and AI solutions." },
      { name: "author", content: "Hadees Trading (Pty) Ltd" },
      { name: "theme-color", content: "#0b0d14" },
      { property: "og:site_name", content: "Hadees Trading" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Hadees Trading (Pty) Ltd",
        url: "/",
        description: "Enterprise procurement, tender management, compliance advisory, web development and AI solutions in South Africa.",
        areaServed: "ZA",
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("hadees-theme") : null;
    if (stored === "light" || stored === "dark") setTheme(stored);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("hadees-theme", theme);
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const { theme, toggle } = useTheme();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <SiteNav theme={theme} onToggleTheme={toggle} />
        <Outlet />
        <SiteFooter />
        <WhatsAppCTA />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
