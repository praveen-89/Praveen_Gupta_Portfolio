"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, CheckCircle2, AlertCircle, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { Section, SectionHeader } from "@/components/ui/section";
import { siteConfig } from "@/lib/data";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactPageContent() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    if (!name || name.trim().length < 2) errs.name = "Name must be at least 2 characters.";
    if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) errs.email = "Please enter a valid email.";
    if (!message || message.trim().length < 10) errs.message = "Message must be at least 10 characters.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const data = new FormData(formRef.current);
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setFormState("loading");

    try {
      const result = await emailjs.sendForm(
        siteConfig.emailjs.serviceId,
        siteConfig.emailjs.templateId,
        formRef.current,
        siteConfig.emailjs.publicKey
      );

      if (result.text === "OK") {
        setFormState("success");
        formRef.current.reset();
      } else {
        throw new Error(result.text);
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setFormState("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-muted-foreground/60 text-sm";

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
              Get In Touch
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl text-base sm:text-lg leading-relaxed">
              Have a project or opportunity in mind? I&apos;d love to hear from you.
              My inbox is always open.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="Contact"
              title="Reach Out"
              description="Whether you have a question, a project proposal, or just want to say hi — I'm here."
            />

            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: MapPin, label: "Location", value: "India", href: null },
                { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl glass border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">{label}</p>
                    {href ? (
                      <Link href={href} className="text-sm font-semibold hover:text-primary transition-colors">
                        {value}
                      </Link>
                    ) : (
                      <p className="text-sm font-semibold">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Find Me Online
              </p>
              <div className="flex gap-3">
                {[
                  { href: siteConfig.github, icon: Github, label: "GitHub" },
                  { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
                ].map(({ href, icon: Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border hover:border-primary/30 hover:text-primary transition-all text-sm font-semibold hover:scale-105"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-card border space-y-5"
            >
              <h2 className="text-xl font-bold mb-1">Send a Message</h2>
              <p className="text-sm text-muted-foreground mb-5">
                Fill out the form below and I&apos;ll get back to you shortly.
              </p>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className={inputClass}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or question..."
                  className={`${inputClass} resize-none`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === "loading" || formState === "success"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 disabled:opacity-60 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                {formState === "loading" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {/* Success / Error Messages */}
              {formState === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {formState === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
