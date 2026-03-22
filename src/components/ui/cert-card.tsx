"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Cloud, Server, ExternalLink, Brain, Code2 } from "lucide-react";
import type { CertType } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  award: Award,
  briefcase: Briefcase,
  cloud: Cloud,
  server: Server,
  brain: Brain,
  code2: Code2,
};

interface CertCardProps {
  cert: CertType;
  index?: number;
}

export function CertCard({ cert, index = 0 }: CertCardProps) {
  const Icon = iconMap[cert.icon] ?? Award;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start gap-4 p-5 rounded-2xl bg-card border card-hover"
    >
      <div
        className={cn(
          "w-11 h-11 shrink-0 rounded-xl flex items-center justify-center bg-gradient-to-br",
          cert.color
        )}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm leading-snug truncate" title={cert.title}>
          {cert.title}
        </h4>
        <p className="text-muted-foreground text-xs mt-0.5 truncate" title={cert.issuer}>
          {cert.issuer}
        </p>
        <div className="flex items-center justify-between mt-2.5">
          <span className="inline-block text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            {cert.date}
          </span>
          {cert.link && (
            <Link
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] font-bold text-muted-foreground hover:text-primary transition-colors group/link"
            >
              Open
              <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
