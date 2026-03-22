"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Cloud, Server } from "lucide-react";
import type { CertType } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  award: Award,
  briefcase: Briefcase,
  cloud: Cloud,
  server: Server,
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
      <div>
        <h4 className="font-semibold text-sm leading-snug">{cert.title}</h4>
        <p className="text-muted-foreground text-xs mt-0.5">{cert.issuer}</p>
        <span className="inline-block mt-2 text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
          {cert.date}
        </span>
      </div>
    </motion.div>
  );
}
