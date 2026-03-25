"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, MapPin, Calendar, ChevronDown, BookOpen } from "lucide-react";
import { type EducationType } from "@/lib/data";
import { cn } from "@/lib/utils";

export function EducationCard({ education, index }: { education: EducationType; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card w-full rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-border transition-all overflow-hidden"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-6 sm:p-8 flex items-start gap-4 sm:gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        <div className="flex w-full items-start gap-4 sm:gap-6 relative">
          {/* Icon */}
          <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10 shadow-sm">
            <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
          </div>

          <div className="flex-1 flex flex-col items-start gap-2 pr-10">
            {/* Header Content */}
            <h3 className="text-[17px] sm:text-[19px] font-bold tracking-tight text-foreground leading-snug">
              {education.degree}
            </h3>
            <p className="text-[14px] sm:text-[15px] font-semibold text-primary">
              {education.institution}
            </p>

            {/* Metadata (Date, Location, Status) */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-muted-foreground mt-1">
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <Calendar className="w-4 h-4 text-primary/60" />
                {education.duration}
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <MapPin className="w-4 h-4 text-primary/60" />
                {education.location}
              </span>
              <span
                className={cn(
                  "px-3 py-0.5 rounded-full text-xs font-bold whitespace-nowrap",
                  education.status === "Pursuing"
                    ? "bg-orange/10 text-orange font-bold border border-orange/20 shadow-sm shadow-orange/10"
                    : "bg-blue-500/10 text-blue-600 font-bold border border-blue-500/20"
                )}
              >
                {education.status}
              </span>
            </div>
          </div>

          {/* Expand Icon */}
          <div className="absolute top-1 right-1 w-8 h-8 rounded-full border border-border/50 flex items-center justify-center bg-transparent text-muted-foreground hover:bg-muted/30 transition-colors shadow-sm">
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
              <div className="h-px w-full bg-border/50 mb-6" />
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {education.description}
              </p>

              {education.subjects && (
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-4 text-foreground">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold">Key Subjects</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {education.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="px-4 py-1.5 rounded-full text-[13px] font-semibold bg-blue-600/90 text-white shadow-sm hover:bg-blue-600 transition-colors"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
