import type { Metadata } from "next";
import { ProjectsPageContent } from "@/components/pages/projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Praveen Gupta's projects including an AI Restaurant Chatbot, Kidney Stone Detection ML model, Face Detection System, and more.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
