// ============================================================
//  Portfolio Data — Single source of truth for all content
// ============================================================

export const siteConfig = {
  name: "Praveen Gupta",
  title: "Full Stack Developer | AI/ML Engineer",
  education: "B.Tech in Computer Science and Engineering",
  email: "praveengupta@example.com",
  github: "https://github.com/praveen-89",
  linkedin: "https://linkedin.com/in/praveen-gupta",
  resume: "/resume.pdf",
  description:
    "I am a Full-Stack developer who loves building scalable web applications and exploring AI/ML technologies. I have experience in full-stack development and have built multiple real-world projects involving backend systems, machine learning, and intelligent automation.",
};

// ─── Skills ─────────────────────────────────────────────────
export const skillCategories = [
  {
    title: "Languages",
    icon: "Code2",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Development",
    icon: "Globe",
    skills: ["React", "Next.js", "Node.js", "Express", "HTML/CSS", "REST APIs"],
  },
  {
    title: "AI / Machine Learning",
    icon: "Brain",
    skills: [
      "IBM Watsonx",
      "Machine Learning",
      "OpenCV",
      "scikit-learn",
      "Data Analysis",
    ],
  },
  {
    title: "Tools & Cloud",
    icon: "Cloud",
    skills: ["Git", "GitHub", "AWS", "VS Code", "Postman", "Linux"],
  },
];

export const skillsWithProgress = [
  { name: "React / Next.js", percent: 85 },
  { name: "Python", percent: 80 },
  { name: "Node.js / Express", percent: 78 },
  { name: "Machine Learning", percent: 65 },
  { name: "C / C++", percent: 70 },
  { name: "TypeScript", percent: 72 },
];

// ─── Tech Stack ──────────────────────────────────────────────
export const techStack = [
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Python", icon: "python" },
  { name: "Node.js", icon: "nodejs" },
  { name: "C++", icon: "cpp" },
  { name: "AWS", icon: "aws" },
  { name: "Git", icon: "git" },
];

// ─── Projects ────────────────────────────────────────────────
export type ProjectType = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  github: string;
  demo?: string;
  featured: boolean;
};

export const projects: ProjectType[] = [
  {
    id: "banking-management",
    title: "Banking Management System",
    description:
      "A console-based banking system built with C++ featuring account management, deposits, withdrawals, and transaction history.",
    longDescription:
      "A comprehensive console-based Banking Management System implemented in C++. It supports creating and managing multiple bank accounts, performing deposits and withdrawals, tracking transaction history, and calculating interest. Uses OOP principles including inheritance, polymorphism, and encapsulation to structure the codebase.",
    tags: ["C++", "OOP", "Data Structures", "Console App"],
    category: "Systems",
    github: "https://github.com/praveen-89",
    featured: true,
  },
  {
    id: "file-organizer",
    title: "File Organizer Tool",
    description:
      "An intelligent Python-based file organizer that automatically categorizes and sorts files by type, date, and size.",
    longDescription:
      "A smart file organization tool built in Python that monitors a directory and automatically categorizes files into folders based on their extension, creation date, or custom rules. Features a configurable rule engine, undo functionality, and a summary report generated after each run.",
    tags: ["Python", "Automation", "File System", "CLI"],
    category: "Automation",
    github: "https://github.com/praveen-89",
    featured: true,
  },
  {
    id: "ai-restaurant-chatbot",
    title: "AI Restaurant Chatbot",
    description:
      "An AI-powered chatbot for restaurants using IBM Watsonx that handles reservations, menu queries, and customer support.",
    longDescription:
      "Built using IBM Watsonx Assistant, this conversational AI handles restaurant use cases including table reservations, answering menu queries, providing allergen information, and routing customer complaints. Integrated with a simple Node.js backend for reservation management and session handling.",
    tags: ["IBM Watsonx", "AI", "Node.js", "Chatbot", "NLP"],
    category: "AI/ML",
    github: "https://github.com/praveen-89",
    demo: "#",
    featured: true,
  },
  {
    id: "face-detection",
    title: "Face Detection System",
    description:
      "A real-time face detection system using Python and OpenCV capable of detecting multiple faces in images and video streams.",
    longDescription:
      "A real-time face detection application built with Python and OpenCV. Utilizes Haar Cascade Classifiers and DNN-based detection to identify and bound multiple faces in both static images and live webcam feeds. Includes optional landmark detection and age/gender estimation pipeline.",
    tags: ["Python", "OpenCV", "Computer Vision", "ML"],
    category: "AI/ML",
    github: "https://github.com/praveen-89",
    featured: false,
  },
  {
    id: "kidney-stone-detection",
    title: "Kidney Stone Detection ML Model",
    description:
      "A machine learning model trained to detect kidney stones in ultrasound images with high accuracy using image classification.",
    longDescription:
      "A healthcare AI project that applies machine learning to detect kidney stones from medical ultrasound images. Pre-processes raw images, extracts meaningful features, and trains a classification model (SVM + CNN pipeline) to distinguish stone-present vs normal samples. Achieved strong validation accuracy and built a lightweight web interface for live predictions.",
    tags: ["Python", "Machine Learning", "CNN", "Healthcare AI", "scikit-learn"],
    category: "AI/ML",
    github: "https://github.com/praveen-89",
    featured: false,
  },
];

// ─── Project filter categories ────────────────────────────────
export const projectCategories = ["All", "AI/ML", "Automation", "Systems"];

// ─── Certifications ──────────────────────────────────────────
export type CertType = {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  color: string;
  link?: string;
};

export const certifications: CertType[] = [
  {
    title: "IBM Granite for Software Development",
    issuer: "IBM SkillsBuild",
    date: "2026",
    icon: "code2",
    color: "from-pink-600 to-rose-600",
    link: "https://drive.google.com/file/d/1rUzAYugzM6POC5s4LmR3iQZ5-C_m2CvF/view?usp=sharing",
  },
  {
    title: "AI Agent Architech",
    issuer: "IBM SkillsBuild",
    date: "2025",
    icon: "award",
    color: "from-blue-600 to-indigo-600",
    link: "https://drive.google.com/file/d/1QLrssKD9T74zEapxWvP2bYfMKFfIJxEf/view?usp=sharing",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2024",
    icon: "award",
    color: "from-blue-500 to-cyan-500",
    link: "https://drive.google.com/file/d/1Q5CTussf8L1SaTsC_tNN5j6IoKlOX5zV/view?usp=sharing",
  },
  {
    title: "Project Management Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2024",
    icon: "brain",
    color: "from-purple-600 to-indigo-600",
    link: "https://drive.google.com/file/d/1-16W4KxTaJvelCfyZQ5fTvrLGpvbOJBD/view?usp=sharing",
  },
  {
    title: "Developer and Technology Program",
    issuer: "Accenture",
    date: "2024",
    icon: "briefcase",
    color: "from-purple-500 to-pink-500",
    link: "https://drive.google.com/file/d/1p1Mpa_3OLU65VBZkhLbjeWo4nO39zL1O/view?usp=sharing",
  },
  {
    title: "AWS Solution Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: "cloud",
    color: "from-orange-500 to-yellow-500",
    link: "https://drive.google.com/file/d/1-xQjyhkWYkl3dLnYE2fLK4_RvqFHwOND/view?usp=sharing",
  },
  {
    title: "Cloud Technology",
    issuer: "Infosys Springboard",
    date: "2024",
    icon: "server",
    color: "from-green-500 to-teal-500",
    link: "https://drive.google.com/file/d/1y7iokpwzak8sDXVnn7h4aubPWzhwp_1e/view?usp=sharing",
  },


];

// ─── Experience ──────────────────────────────────────────────
export const experiences = [
  {
    role: "Full Stack Development Intern",
    company: "Tech Startup (Remote)",
    duration: "2024 — Present",
    description:
      "Contributed to building web applications using React and Node.js. Integrated RESTful APIs, improved UI performance, and collaborated on AI-powered features using IBM Watsonx.",
    tags: ["React", "Node.js", "REST APIs", "IBM Watsonx"],
  },
];
