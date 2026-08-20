"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectType } from "@/lib/data";

interface ProjectCardProps {
  project: ProjectType;
  index?: number;
  onClick?: () => void;
}

// Domain to gradient background for projects without images
const domainGradients: Record<string, string> = {
  "AI / ML": "from-violet-900 via-purple-900 to-indigo-900",
  "NLP": "from-blue-900 via-indigo-900 to-violet-900",
  "Generative AI": "from-fuchsia-900 via-purple-900 to-blue-900",
  "Distributed Systems": "from-cyan-900 via-teal-900 to-blue-900",
  "Cloud / DevOps": "from-sky-900 via-blue-900 to-indigo-900",
  "Computer Vision": "from-emerald-900 via-teal-900 to-cyan-900",
  "SaaS / Product": "from-orange-900 via-rose-900 to-pink-900",
  "Automation": "from-amber-900 via-orange-900 to-red-900",
  "Software Engineering": "from-slate-800 via-gray-900 to-zinc-900",
  "Other / Foundational": "from-zinc-800 via-slate-900 to-gray-900",
};

function getGradient(domains: string[]): string {
  for (const d of domains) {
    if (domainGradients[d]) return domainGradients[d];
  }
  return "from-slate-800 via-gray-900 to-zinc-900";
}

export function ProjectCard({ project, index = 0, onClick }: ProjectCardProps) {
  const VISIBLE_TAGS = 3;
  const visibleTags = project.tags.slice(0, VISIBLE_TAGS);
  const extraTagCount = project.tags.length - VISIBLE_TAGS;
  const primaryDomain = project.domains[0];
  const gradient = getGradient(project.domains);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.025, y: -5, transition: { duration: 0.18, ease: "easeOut" } }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl hover:shadow-black/10 transition-shadow cursor-pointer p-3 gap-0"
      onClick={onClick}
    >
      {/* ── Image / Banner ── */}
      <div className="relative w-full h-44 overflow-hidden rounded-xl">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            loading={index < 3 ? "eager" : "lazy"}
            priority={index < 3}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            {/* Abstract pattern overlay */}
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 60%),
                                  radial-gradient(circle at 70% 60%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
              }}
            />
            <div className="relative z-10 text-white/30 text-6xl font-black select-none tracking-tighter">
              {project.title.charAt(0)}
            </div>
          </div>
        )}

        {/* Overlay gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Domain badge — top right */}
        <span className="absolute top-3 right-3 z-10 bg-white/90 dark:bg-white/95 text-black text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
          {primaryDomain}
        </span>
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col flex-1 pt-4 px-2 pb-2">
        {/* Title */}
        <h3 className="text-base font-bold text-gray-900 leading-snug mb-2 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
          {project.description}
        </p>

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-1.5 mb-2">
              <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-400" />
              <span className="text-xs font-bold text-gray-800">Key Features:</span>
            </div>
            <ul className="space-y-1">
              {project.keyFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-gray-500">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-gray-200 text-gray-600 bg-gray-50"
            >
              {tag}
            </span>
          ))}
          {extraTagCount > 0 && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-gray-200 text-gray-500 bg-gray-50">
              +{extraTagCount}
            </span>
          )}
        </div>

        {/* ── Action Buttons ── */}
        <div className="flex items-center gap-2 mt-auto">
          {/* Live Demo — primary wide button */}
          {project.demo && project.demo !== "#" ? (
            <>
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Link>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="GitHub Repository"
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors shrink-0"
              >
                <Github className="w-4 h-4" />
              </Link>
            </>
          ) : (
            /* No demo — GitHub takes full-width */
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-2 border border-gray-200 hover:border-blue-500 hover:text-blue-500 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
