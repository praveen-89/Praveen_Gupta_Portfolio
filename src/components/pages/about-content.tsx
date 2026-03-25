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
import { EducationCard } from "@/components/ui/education-card";
import { siteConfig, skillCategories, certifications, education } from "@/lib/data";

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
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto lg:mx-0 -mt-6"
          >
            {/* Decorative background blobs */}
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-orange/10 to-accent/5 rounded-[2.5rem] blur-2xl opacity-70 pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange/20 rounded-full blur-[40px] pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-accent/30 rounded-full blur-2xl pointer-events-none" />

            <div className="group relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10 hover:shadow-primary/25 hover:border-primary/40 transition-all duration-500 hover:scale-[1.03]">
              <img
                src="/My photo.jpeg"
                alt="Praveen Gupta"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

      {/* ─── Academic Journey ─── */}
      <Section className="bg-background">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            label="Education"
            title="Academic Journey"
            description="Building knowledge foundations and pursuing excellence in learning"
          />
          <div className="flex flex-col gap-6 mt-8">
            {education.map((item, index) => (
              <EducationCard key={item.degree} education={item} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* ─── Skills ─── */}
      <Section className="relative bg-muted/30 overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-5xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-5xl pointer-events-none" />

        <div className="relative z-10">
          <SectionHeader
            label="Expertise"
            title="Skills & Technologies"
            description="A curated set of technologies I've worked with across domains."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, catIdx) => {
              const Icon = iconMap[cat.icon] ?? Code2;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                  className="group relative p-6 rounded-3xl border bg-card shadow-sm hover:bg-card/40 hover:backdrop-blur-2xl hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
                >
                  {/* Subtle gradient hover effect for the card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 border border-primary/10 shadow-inner">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg tracking-tight">{cat.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, idx) => (
                        <SkillBadge
                          key={skill}
                          name={skill}
                          delay={catIdx * 0.1 + idx * 0.05}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
