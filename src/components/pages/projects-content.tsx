"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Tag } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProjectCard } from "@/components/ui/project-card";
import { projects, projectCategories, ProjectType } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectsPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

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
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={i} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-24 text-center text-muted-foreground">
            No projects found in this category.
          </div>
        )}
      </Section>

      {/* ─── Project Detail Modal ─── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border shadow-2xl p-6 sm:p-10 z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider mb-4">
                <Tag className="w-4 h-4" />
                {selectedProject.category}
              </div>

              <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-primary backdrop-blur-md bg-primary/10 border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-border/50">
                <Link
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border font-semibold text-sm hover:border-primary/30 transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4" /> View Source
                </Link>
                {selectedProject.demo && selectedProject.demo !== "#" && (
                  <Link
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
