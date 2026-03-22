"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProjectCard } from "@/components/ui/project-card";
import { projects, projectCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectsPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
              My Work
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl text-base sm:text-lg leading-relaxed">
              A collection of real-world projects spanning web development, AI/ML,
              automation, and systems programming.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Filter + Grid ─── */}
      <Section>
        {/* Filter Tabs */}
        <SectionHeader label="Portfolio" title="All Projects" />
        <div className="flex flex-wrap gap-2 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "glass border text-muted-foreground hover:text-foreground hover:border-primary/30"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-24 text-center text-muted-foreground">
            No projects found in this category.
          </div>
        )}
      </Section>
    </>
  );
}
