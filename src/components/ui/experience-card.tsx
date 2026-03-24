"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  MapPin, 
  CalendarDays, 
  Zap, 
  Cpu
} from "lucide-react";
import { ExperienceType } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ExperienceCardProps {
  exp: ExperienceType;
  index: number;
}

export function ExperienceCard({ exp, index }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 border-l-2 border-primary/20"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-primary border-2 border-background z-10" />

      <div 
        className={cn(
          "group rounded-3xl bg-card border transition-all duration-300 overflow-hidden",
          isExpanded ? "ring-1 ring-primary/20 shadow-xl shadow-primary/5" : "hover:shadow-lg hover:border-primary/20"
        )}
      >
        {/* Header - Always Visible */}
        <div 
          className="p-6 cursor-pointer flex items-start gap-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Logo */}
          <div className="w-14 h-14 shrink-0 rounded-xl bg-white border flex items-center justify-center p-2 shadow-sm">
            {exp.logo ? (
              <img 
                src={exp.logo} 
                alt={exp.company} 
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xl font-bold tracking-tight text-foreground truncate">
                {exp.role}
              </h3>
              <button 
                className={cn(
                  "w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground transition-all",
                  isExpanded ? "rotate-180 bg-primary/10 text-primary" : "group-hover:bg-primary/5"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-blue-600 font-bold text-sm mt-0.5">
              {exp.company}
            </p>

            <div className="flex flex-wrap gap-4 mt-3">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100/50">
                <CalendarDays className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold uppercase tracking-wider">{exp.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100/50">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold uppercase tracking-wider">{exp.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content - Expandable */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 pb-6 border-t border-border/50 pt-5 space-y-6 bg-muted/5">
                {/* Description - Already shown partially or fully? User image shows it in collapsed too but the achievements are in expanded */}
                {/* The user's image shows the description in BOTH, but in expanded it's at the top. */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <h4 className="font-bold text-sm tracking-tight">Key Achievements</h4>
                  </div>
                  <div className="grid gap-2.5">
                    {exp.achievements.map((item, i) => (
                      <div 
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white border border-primary/5 text-sm group/item hover:border-primary/20 transition-colors"
                      >
                        <Zap className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-green-500/10 flex items-center justify-center">
                      <Cpu className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <h4 className="font-bold text-sm tracking-tight text-foreground">Technologies Used</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="relative px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-primary backdrop-blur-md bg-primary/10 border border-primary/20 shadow-sm shadow-primary/10 hover:bg-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Simple Description when collapsed (matching the user's first image) */}
        {!isExpanded && (
          <div className="px-6 pb-6">
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {exp.description}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
