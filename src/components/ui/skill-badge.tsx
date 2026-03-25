"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Code2, 
  Globe, 
  Brain, 
  Database, 
  Terminal, 
  Zap,
  Server,
  Cloud,
  Cpu,
  Monitor
} from "lucide-react";

const skillIconMap: Record<string, React.ElementType> = {
  react: Globe,
  nextjs: Zap,
  python: Terminal,
  nodejs: Server,
  brain: Brain,
  code2: Code2,
  typescript: Code2,
  globe: Globe,
  database: Database,
  cloud: Cloud,
  cpu: Cpu,
  monitor: Monitor
};

interface SkillBadgeProps {
  name: string;
  className?: string;
  delay?: number;
}

export function SkillBadge({ name, className, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold",
        "bg-muted/50 border border-border/50 text-foreground backdrop-blur-sm shadow-sm",
        "hover:bg-primary/10 hover:text-primary hover:border-primary/30 hover:shadow-md hover:shadow-primary/5",
        "transition-all duration-300 cursor-default",
        className
      )}
    >
      {name}
    </motion.span>
  );
}

interface TechSkillCardProps {
  name: string;
  icon?: string;
  delay?: number;
}

export function TechSkillCard({ name, icon, delay = 0 }: TechSkillCardProps) {
  const Icon = (icon && skillIconMap[icon]) || Code2;

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        delay,
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(var(--primary), 0.3)" }}
      className={cn(
        "group relative flex flex-col items-center justify-center p-6 rounded-2xl",
        "bg-card/50 border border-border/50 backdrop-blur-md transition-all duration-300 orange-glass-hover",
        "hover:bg-card"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      <div className="relative z-10 w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
        <Icon className="w-6 h-6 text-orange" />
      </div>
      
      <h4 className="relative z-10 font-bold text-center text-sm tracking-tight text-foreground/90 group-hover:text-orange transition-colors duration-300">
        {name}
      </h4>
      
      {/* Decorative dot */}
      <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-orange/20 group-hover:bg-orange/50 transition-colors" />
    </motion.div>
  );
}
