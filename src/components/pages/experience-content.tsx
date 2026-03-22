"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { CertCard } from "@/components/ui/cert-card";
import { SkillProgress } from "@/components/ui/skill-badge";
import { experiences, certifications, skillsWithProgress } from "@/lib/data";

export function ExperiencePageContent() {
  return (
    <>
      {/* ─── Hero Banner ─── */}
      <section className="hero-gradient py-20 px-4 sm:px-6 border-b">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Career
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Experience &{" "}
              <span className="gradient-text">Credentials</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl text-base sm:text-lg leading-relaxed">
              A timeline of my professional journey, certifications, and technical
              proficiency levels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Work Experience ─── */}
      <Section>
        <SectionHeader
          label="Work"
          title="Professional Experience"
          description="Hands-on roles where I applied my skills to real-world products."
        />
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-5 w-4 h-4 rounded-full bg-primary border-2 border-background" />

              <div className="p-6 rounded-2xl bg-card border card-hover">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-1.5 mt-0.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.company}
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    <CalendarDays className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── Certifications ─── */}
      <Section className="bg-muted/30">
        <SectionHeader
          label="Credentials"
          title="Certifications"
          description="Recognized certificates from global technology leaders."
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </Section>

      {/* ─── Skills Progress ─── */}
      <Section>
        <SectionHeader
          label="Proficiency"
          title="Technical Skills"
          description="Self-assessed proficiency levels across key technologies."
        />
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl">
          {skillsWithProgress.map((skill, i) => (
            <SkillProgress
              key={skill.name}
              name={skill.name}
              percent={skill.percent}
              delay={i * 0.08}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
