"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface StickyNoteProps {
  id: string; // Unique ID to save dismiss state in localStorage
  message: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  delay?: number;
}

export function StickyNote({ id, message, position = "bottom-right", delay = 2000 }: StickyNoteProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already dismissed it
    const dismissed = localStorage.getItem(`sticky_note_${id}`);
    if (!dismissed) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [id, delay]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(`sticky_note_${id}`, "true");
  };

  const getPositionClasses = () => {
    switch (position) {
      case "bottom-right": return "bottom-6 right-6";
      case "bottom-left": return "bottom-6 left-6";
      case "top-right": return "top-24 right-6";
      case "top-left": return "top-24 left-6";
      default: return "bottom-6 right-6";
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className={`fixed z-50 ${getPositionClasses()} max-w-xs`}
        >
          <div className="relative overflow-hidden rounded-2xl bg-card border border-white/10 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl p-5">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-pink-500" />
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="pr-6">
              <p className="text-sm text-foreground/90 leading-relaxed font-medium">
                <span className="text-xl inline-block mb-1">💡</span><br/>
                {message}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
