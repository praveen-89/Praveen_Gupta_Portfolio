"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { CertCard } from "@/components/ui/cert-card";
import { TechSkillCard } from "@/components/ui/skill-badge";
import { ExperienceCard } from "@/components/ui/experience-card";
import { experiences, certifications, technicalSkills } from "@/lib/data";

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
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company + exp.role} exp={exp} index={i} />
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

      {/* ─── Technical Skills ─── */}
      <Section>
        <SectionHeader
          label="Proficiency"
          title="Technical Skills"
          description="Core technologies and frameworks I use to build scalable products."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {technicalSkills.map((skill, i) => (
            <TechSkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              delay={i * 0.05}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
