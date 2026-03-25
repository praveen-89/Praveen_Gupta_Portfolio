"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  Code2,
  Cpu,
  Globe,
  ChevronDown,
  Award,
  Clock,
  Brain,
  Cloud,
  Sparkles,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/ui/project-card";
import { siteConfig, projects, techStack, certifications, expertise } from "@/lib/data";

// ─── Typing effect hook ───────────────────────────────────────
const TITLES = [
  "Full Stack Developer",
  "AI/ML Engineer",
  "React · Next.js Dev",
  "Problem Solver",
];

function useTypingEffect(strings: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index % strings.length];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplay(current.substring(0, display.length + 1));
          if (display.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setDisplay(current.substring(0, display.length - 1));
          if (display.length - 1 === 0) {
            setIsDeleting(false);
            setIndex((i) => i + 1);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [display, isDeleting, index, strings, speed, pause]);

  return display;
}

// ─── Tech logo pill ───────────────────────────────────────────
const techIcons: Record<string, string> = {
  react: "⚛",
  nodejs: "⬡",
  express: "EX",
  mongodb: "M",
  postgresql: "🐘",
  supabase: "⚡",
  tailwind: "≈",
  ai: "🧠",
  cloud: "☁",
};

// ─── Expertise icon map ───────────────────────────────────────
const expertiseIconMap: Record<string, React.ElementType> = {
  Globe,
  Brain,
  Cloud,
  Code2,
  Cpu,
};

// ─── Page Component ───────────────────────────────────────────
export default function HomePage() {
  const typedText = useTypingEffect(TITLES);
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 sm:px-6 hero-gradient overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full"
        >
          <div className="text-left lg:text-left">

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-normal mb-4 leading-none"
            >
              Hi, I&apos;m{" "}
              <br />
              <span className="gradient-text">{siteConfig.name.split(" ")[0]}</span>{" "}
              <span className="gradient-text">{siteConfig.name.split(" ")[1]}</span>
            </motion.h1>

            {/* Animated title */}
            <motion.div
              variants={itemVariants}
              className="h-10 flex items-center mb-6"
            >
              <span className="text-xl sm:text-2xl font-semibold text-muted-foreground">
                {typedText}
                <span className="inline-block w-0.5 h-6 bg-primary ml-0.5 animate-pulse align-middle" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
            >
              {siteConfig.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.resumeView}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border font-semibold text-sm hover:border-primary/30 transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" /> View Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border font-semibold text-sm hover:border-primary/30 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" /> Contact Me
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center gap-5"
            >
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl glass border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 hover:scale-110 transition-all shadow-sm hover:shadow-primary/10"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl glass border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 hover:scale-110 transition-all shadow-sm hover:shadow-primary/10"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>

          {/* Hero Image Area */}
          <motion.div
            variants={itemVariants}
            className="relative order-first lg:order-none mb-10 lg:mb-0"
          >
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 w-full max-w-[320px] sm:max-w-sm lg:max-w-none mx-auto lg:ml-auto group"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="/hero-photo.jpg"
                  alt={siteConfig.name}
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-auto"
                />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 blur-[80px] rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 blur-[100px] rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Stats (Dynamic) ─── */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Projects Built", value: `${projects.length}+`, icon: Code2 },
            { label: "Technologies", value: `${techStack.length}+`, icon: Cpu },
            { label: "Certifications", value: `${certifications.length}`, icon: Award },
            { label: "Years Learning", value: "3+", icon: Clock },
          ].map(({ label, value, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center p-6 rounded-2xl glass border card-hover"
            >
              <Icon className="w-5 h-5 text-primary mx-auto mb-3" />
              <p className="text-3xl font-black gradient-text">{value}</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── Explore More ─── */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xl sm:text-2xl font-bold text-muted-foreground mb-6 tracking-wide">
            Explore more of my work and connect with me
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-foreground text-background font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              GitHub
              <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-[#0A66C2] text-white font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-lg shadow-[#0A66C2]/25 hover:shadow-xl hover:shadow-[#0A66C2]/30"
            >
              <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              LinkedIn
              <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </a>
          </div>
        </motion.div>
      </Section>

      {/* ─── Tech Stack ─── */}
      <Section>
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
            Technologies I Work With
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl glass border orange-glass-hover hover:text-orange transition-all cursor-default mt-2"
            >
              <span className="w-8 h-8 rounded-md bg-gradient-to-br from-primary/20 to-orange/20 flex items-center justify-center text-sm font-black text-orange shadow-sm">
                {techIcons[tech.icon]}
              </span>
              <span className="text-[15px] font-semibold">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── What I Do (Expertise) ─── */}
      <Section className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-orange/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              What I Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="section-heading">My Expertise</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
              I specialize in building full-stack applications, intelligent AI systems, and cloud-native solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, i) => {
              const Icon = expertiseIconMap[item.icon] ?? Sparkles;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group relative p-8 rounded-3xl bg-card border orange-glass-hover transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 border border-primary/10">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs font-semibold px-3 py-1 rounded-lg bg-muted/50 text-muted-foreground border border-border/50 group-hover:border-primary/20 group-hover:text-primary/80 transition-colors"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner dot */}
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-orange/20 group-hover:bg-orange/50 transition-colors" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ─── Featured Projects ─── */}
      <Section>
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Highlights
            </p>
            <h2 className="text-3xl font-bold">
              <span className="section-heading">Featured Projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Section>

      {/* ─── CTA Banner ─── */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-10 sm:p-14 text-center"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-orange/5 to-accent/10 border border-primary/10 rounded-3xl" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              I&apos;m always open to new projects, collaborations, and exciting opportunities.
              Feel free to reach out if you have an idea you&apos;d like to bring to life.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                <Mail className="w-4 h-4" /> Get in Touch
              </Link>
              <a
                href={siteConfig.resumeView}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border font-semibold text-sm hover:border-primary/30 transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" /> View Resume
              </a>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
