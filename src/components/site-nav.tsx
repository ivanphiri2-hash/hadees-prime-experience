import { Link } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav({ theme, onToggleTheme }: { theme: "dark" | "light"; onToggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <motion.nav
        initial={false}
        animate={{ width: scrolled ? "min(880px, 96%)" : "min(1160px, 100%)" }}
        transition={{ type: "spring", stiffness: 260, damping: 32 }}
        className={cn(
          "flex items-center justify-between rounded-full border px-3 py-2 backdrop-blur-xl transition-colors",
          scrolled ? "border-border/70 bg-background/70 shadow-[0_10px_40px_rgba(0,0,0,0.15)]" : "border-transparent bg-background/30"
        )}
      >
        <Link to="/" className="group flex items-center gap-2 pl-2">
          <span className="grid size-7 place-items-center rounded-md bg-foreground text-background">
            <span className="font-display text-lg leading-none">H</span>
          </span>
          <span className="font-display text-lg tracking-tight">Hadees<span className="text-muted-foreground">.trading</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-accent/70" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="grid size-9 place-items-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Book intro
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden grid size-9 place-items-center rounded-full border border-border/50"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden fixed inset-x-3 top-20 rounded-2xl border border-border bg-background/95 backdrop-blur-xl p-3 shadow-xl"
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-foreground px-4 py-3 text-center text-sm font-medium text-background">Book intro</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
