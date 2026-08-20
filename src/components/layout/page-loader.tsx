"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_PAGES = ["Home", "About", "Experience", "Projects", "Contact"];

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Only show on first visit or hard refresh (sessionStorage gate)
    const alreadySeen = sessionStorage.getItem("pg_loader_seen");
    if (alreadySeen) {
      setVisible(false);
    } else {
      sessionStorage.setItem("pg_loader_seen", "1");
    }
  }, []);

  const dismiss = () => {
    setExiting(true);
    setTimeout(() => setVisible(false), 700);
  };

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => dismiss(), 10000);
    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse at 60% 30%, rgba(99,102,241,0.18) 0%, transparent 60%), radial-gradient(ellipse at 20% 70%, rgba(244,114,182,0.12) 0%, transparent 60%), hsl(222 47% 6%)",
          }}
          onClick={dismiss}
        >
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl pointer-events-none" />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative w-full max-w-md mx-4 rounded-3xl overflow-hidden text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
              backdropFilter: "blur(24px)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

            <div className="px-8 pt-10 pb-8 flex flex-col items-center gap-5">

              {/* Profile photo */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Spinning ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute -inset-1.5 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #6366f1, #ec4899, #f59e0b, #6366f1)",
                    padding: "2px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-white/10 relative z-10">
                  <Image
                    src="/praveen-gupta-photo.png"
                    alt="Praveen Gupta"
                    fill
                    className="object-cover object-top"
                    sizes="96px"
                    priority
                  />
                </div>
              </motion.div>

              {/* Welcome text */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400/80">
                  Welcome
                </span>
                <h1 className="text-2xl font-bold text-white leading-tight">
                  Hey, I&apos;m <span className="text-indigo-400">Praveen Gupta</span> 👋
                </h1>
                <p className="text-sm text-white/50 mt-0.5">
                  Full-Stack Developer &amp; AI/ML Engineer
                </p>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="w-12 h-px bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
              />

              {/* Note */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.45 }}
                className="text-sm text-white/60 leading-relaxed"
              >
                This is a{" "}
                <span className="text-white/90 font-semibold">multi-page portfolio</span>.
                Feel free to explore all sections using the navbar above!
              </motion.p>

              {/* Page pills */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.78, duration: 0.45 }}
                className="flex flex-wrap justify-center gap-2"
              >
                {NAV_PAGES.map((page, i) => (
                  <motion.span
                    key={page}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.85 + i * 0.06 }}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(99,102,241,0.15)",
                      border: "1px solid rgba(99,102,241,0.3)",
                      color: "rgba(165,180,252,0.9)",
                    }}
                  >
                    {page}
                  </motion.span>
                ))}
              </motion.div>

              {/* Progress bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                className="w-full"
              >
                <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.1, duration: 9.7, ease: "linear" }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  />
                </div>
                <p className="text-[11px] text-white/25 mt-2 text-center">
                  Click anywhere to skip
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
