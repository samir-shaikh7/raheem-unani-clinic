"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Treatments" },
  { href: "#why", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Number.isFinite(pct) ? pct : 0);

      const sections = links
        .map((l) => document.querySelector(l.href))
        .filter(Boolean) as HTMLElement[];
      const cur = sections.find((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= 120 && r.bottom >= 120;
      });
      if (cur) setActive(`#${cur.id}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled ? "glass-light shadow-soft" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-gold">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-gold">
                <path d="M12 2l2.39 4.84L19.8 7.6l-3.9 3.81.92 5.37L12 14.27 7.18 16.78l.92-5.37L4.2 7.6l5.41-.76L12 2z" />
              </svg>
            </span>
            <div className="leading-tight">
              <div
                className={cn(
                  "font-display text-lg font-semibold tracking-tight",
                  scrolled ? "text-foreground" : "text-white"
                )}
              >
                Raheem
              </div>
              <div
                className={cn(
                  "text-[10px] uppercase tracking-[0.18em]",
                  scrolled ? "text-muted-foreground" : "text-white/70"
                )}
              >
                Unani Clinic
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/80 hover:text-white",
                  active === l.href &&
                    (scrolled ? "text-primary" : "text-gold")
                )}
              >
                {l.label}
                {active === l.href && (
                  <motion.span
                    layoutId="navdot"
                    className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold"
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className={cn(
                "inline-flex items-center gap-2 text-sm font-medium",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              <Phone className="h-4 w-4" /> {CLINIC.phone}
            </a>
            <a
              href="#book"
              className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold transition hover:scale-[1.03]"
            >
              Book Appointment
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className={cn(
              "rounded-lg p-2 lg:hidden",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-gold via-primary to-gold transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.header>

      {open && (
        <div className="fixed inset-0 top-[64px] z-30 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative mx-4 mt-2 rounded-2xl glass-light p-4 shadow-luxe"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl bg-primary px-4 py-3 text-center font-semibold text-primary-foreground"
            >
              Book Appointment
            </a>
          </motion.div>
        </div>
      )}
    </>
  );
}
