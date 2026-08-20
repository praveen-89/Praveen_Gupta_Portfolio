import type { Metadata } from "next";
import { ProjectsPageContent } from "@/components/pages/projects-content";
import { StickyNote } from "@/components/ui/sticky-note";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Praveen Gupta's projects including an AI Restaurant Chatbot, Kidney Stone Detection ML model, Face Detection System, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <StickyNote 
        id="projects_tap_reminder" 
        message="Tap on project cards to see the full description!" 
        delay={2000} 
      />
      <ProjectsPageContent />
    </>
  );
}
