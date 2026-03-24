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
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/ui/project-card";
import { siteConfig, projects, techStack } from "@/lib/data";

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
  nextjs: "N",
  react: "⚛",
  typescript: "TS",
  python: "Py",
  nodejs: "⬡",
  cpp: "C++",
  aws: "☁",
  git: "⎇",
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
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 sm:px-6 hero-gradient overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full"
        >
          <div className="text-left lg:text-left">
            {/* Eyebrow badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border text-sm font-medium text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

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
                className="w-12 h-12 rounded-2xl glass border border-primary/20 flex items-center justify-center text-muted-foreground hove:text-primary hover:border-primary/40 hover:bg-primary/5 hover:scale-110 transition-all shadow-sm hover:shadow-primary/10"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>

          {/* Hero Image Area */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
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
              className="relative z-10 w-full ml-auto group"
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

      {/* ─── Stats ─── */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Projects Built", value: "5+", icon: Code2 },
            { label: "Technologies", value: "12+", icon: Cpu },
            { label: "Certifications", value: "4", icon: Globe },
            { label: "Years Learning", value: "3+", icon: ArrowRight },
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
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border hover:border-primary/30 hover:text-primary transition-all hover:scale-105 cursor-default"
            >
              <span className="w-7 h-7 rounded-md bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xs font-black text-primary">
                {techIcons[tech.icon]}
              </span>
              <span className="text-sm font-semibold">{tech.name}</span>
            </motion.div>
          ))}
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
    </>
  );
}
