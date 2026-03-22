import type { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Praveen Gupta — a Full Stack Developer and AI/ML Engineer with expertise in React, Next.js, Python, and IBM Watsonx.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
