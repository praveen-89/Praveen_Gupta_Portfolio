"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Tag } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ProjectType } from "@/lib/data";

interface ProjectCardProps {
  project: ProjectType;
  index?: number;
  onClick?: () => void;
}

export function ProjectCard({ project, index = 0, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "group relative flex flex-col rounded-2xl border bg-card p-6 orange-glass-hover cursor-pointer",
        project.featured &&
          "border-orange/20 ring-1 ring-orange/10 shadow-lg shadow-orange/5"
      )}
      onClick={onClick}
    >
      {project.featured && (
        <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-orange bg-orange/10 px-2 py-1 rounded-full">
          Featured
        </span>
      )}

      {/* Category Tag */}
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
        <Tag className="w-4 h-4" />
        <span>{project.category}</span>
      </div>

      <h3 className="text-lg font-bold mb-2 group-hover:text-orange transition-colors leading-tight">
        {project.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link z-10"
        >
          <Github className="w-5 h-5" />
          GitHub
        </Link>
        {project.demo && project.demo !== "#" && (
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors ml-auto group/demo z-10"
          >
            Live Demo
            <ExternalLink className="w-4 h-4 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 transition-transform" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
