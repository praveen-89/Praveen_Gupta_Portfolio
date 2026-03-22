import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Praveen Gupta. Available for full stack development projects, AI/ML work, and internship opportunities.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
