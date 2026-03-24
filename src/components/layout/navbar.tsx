"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border shadow-lg shadow-black/5 py-1"
          : "bg-background/40 backdrop-blur-sm py-2"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-transform group-hover:scale-110">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight group-hover:gradient-text transition-all">
            PG
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border",
                    isActive
                      ? "text-primary bg-primary/10 border-primary/20 shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border-transparent hover:border-border/50 hover:shadow-sm"
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-b shadow-2xl px-4 py-6"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-6 py-3 rounded-full text-base font-semibold transition-all border",
                        isActive
                          ? "text-primary bg-primary/10 border-primary/20"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted border-transparent"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
