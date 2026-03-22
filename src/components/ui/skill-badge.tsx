"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
  delay?: number;
}

export function SkillBadge({ name, className, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold",
        "glass border hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-default",
        className
      )}
    >
      {name}
    </motion.span>
  );
}

interface SkillProgressProps {
  name: string;
  percent: number;
  delay?: number;
}

export function SkillProgress({ name, percent, delay = 0 }: SkillProgressProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <span>{name}</span>
        <span className="text-primary">{percent}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  );
}
