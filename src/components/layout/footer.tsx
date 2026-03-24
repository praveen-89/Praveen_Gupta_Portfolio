"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Zap, Heart } from "lucide-react";
import { siteConfig } from "@/lib/data";

const socialLinks = [
  { href: siteConfig.github, icon: Github, label: "GitHub" },
  { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t bg-card/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-bold leading-none">{siteConfig.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Full Stack Developer · AI/ML Engineer
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl glass border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-xs text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} {siteConfig.name}. Built with{" "}
            <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using
            Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
