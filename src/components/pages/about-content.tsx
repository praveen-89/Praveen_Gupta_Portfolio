"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Brain,
  Cloud,
  GraduationCap,
  MapPin,
  Calendar,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { SkillBadge } from "@/components/ui/skill-badge";
import { CertCard } from "@/components/ui/cert-card";
import { siteConfig, skillCategories, certifications } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Brain,
  Cloud,
};

export function AboutPageContent() {
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
              Who Am I
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-normal mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-primary" />
                {siteConfig.education}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                {siteConfig.university}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Introduction ─── */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 flex items-center justify-center relative overflow-hidden border border-primary/20">
              {/* Initials */}
              <span className="text-6xl sm:text-7xl font-black gradient-text select-none">
                PG
              </span>
              {/* Orbit decoration */}
              <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-primary/10 animate-spin [animation-duration:20s]" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl glass border shadow-xl">
              <p className="text-xs font-semibold text-muted-foreground">Status</p>
              <p className="text-sm font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                Open to Work
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionHeader
              label="Introduction"
              title="Passionate Developer"
              description={siteConfig.description}
            />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m currently pursuing my {siteConfig.education} at{" "}
                <span className="font-bold text-foreground">
                  {siteConfig.university}
                </span>
                , where I have developed a strong foundation in algorithms, data
                structures, and software engineering principles.
              </p>
              <p>
                My passion lies at the intersection of web development and artificial
                intelligence — building products that are not only functional, but
                intelligent. From REST APIs to ML pipelines, I enjoy working across the
                full stack.
              </p>
              <p>
                Outside of coding, I love exploring new technologies, contributing to
                open-source, and continuously learning from the developer community.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ─── Skills ─── */}
      <Section className="bg-muted/30">
        <SectionHeader
          label="Expertise"
          title="Skills & Technologies"
          description="A curated set of technologies I've worked with across domains."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat, catIdx) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                className="p-5 rounded-2xl bg-card border card-hover"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-sm">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, idx) => (
                    <SkillBadge
                      key={skill}
                      name={skill}
                      delay={catIdx * 0.08 + idx * 0.04}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ─── Certifications ─── */}
      <Section>
        <SectionHeader
          label="Credentials"
          title="Certifications"
          description="Certificates earned from globally recognized organizations."
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </Section>
    </>
  );
}
