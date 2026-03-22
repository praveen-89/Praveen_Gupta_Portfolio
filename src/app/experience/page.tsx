import type { Metadata } from "next";
import { ExperiencePageContent } from "@/components/pages/experience-content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Praveen Gupta's professional experience, certifications timeline, and technical skills with proficiency levels.",
};

export default function ExperiencePage() {
  return <ExperiencePageContent />;
}
