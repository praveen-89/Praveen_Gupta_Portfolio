"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id={id}
      className={cn("py-20 px-4 sm:px-6 max-w-6xl mx-auto", className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-14", centered && "text-center")}>
      {label && (
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold">
        <span className="section-heading">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed text-base sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
