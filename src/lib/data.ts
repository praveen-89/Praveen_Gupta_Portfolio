// ============================================================
//  Portfolio Data — Single source of truth for all content
// ============================================================

export const siteConfig = {
  name: "Praveen Gupta",
  title: "Full Stack Developer | AI/ML Engineer",
  education: "B.Tech in Computer Science and Technology",
  university: "Gurukul Kangri Deemed to be University, Haridwar",
  location: "Haridwar, Uttarakhand, India",
  email: "praveen.strange0@gmail.com",
  github: "https://github.com/praveen-89",
  linkedin: "https://www.linkedin.com/in/praveen-gupta11",
  resumeView: "https://drive.google.com/file/d/1CCzNzWpRaZ4hDlR9u111uLgv0Q2dwySp/view?usp=sharing",
  resumeDownload: "https://drive.google.com/uc?export=download&id=1CCzNzWpRaZ4hDlR9u111uLgv0Q2dwySp",
  description:
    "I'm a Full-Stack Developer & AI/ML Engineer building scalable web apps and intelligent automation systems. From AI voice agents to healthcare dashboards, I turn ideas into production-grade products powered by React, Next.js, Node.js, and cloud-native workflows.",
  emailjs: {
    serviceId: "service_cqptzf4",
    templateId: "template_e0j8xk2",
    publicKey: "DgMPMWHY2d0KFznkJ",
  },
};

// ─── Skills ─────────────────────────────────────────────────
export type SkillCategoryType = {
  title: string;
  icon: string;
  description: string;
  skills: string[];
  usedIn?: string;
};

export const skillCategories: SkillCategoryType[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    description: "Core languages used for backend systems, scripting, and system-level applications.",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL"],
    usedIn: "CoreAI, Library Monitoring, OmniTutor",
  },
  {
    title: "Frontend Engineering",
    icon: "Globe",
    description: "Building responsive, modern, and highly interactive user interfaces.",
    skills: ["React", "Next.js", "Vite", "TypeScript", "Tailwind CSS"],
    usedIn: "Clutch Momentum, HelloAlex, SevaGrid",
  },
  {
    title: "Backend & API Engineering",
    icon: "Server",
    description: "Architecting robust APIs, microservices, and asynchronous background tasks.",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "CodeIgniter", "Redis"],
    usedIn: "CoreAI, HelloAlex, Dijit Program",
  },
  {
    title: "AI / Machine Learning",
    icon: "Brain",
    description: "Developing models for predictive analytics, natural language, and vector retrieval.",
    skills: ["PyTorch", "Sentence Transformers", "Embeddings", "FAISS", "LLMs", "NLP", "Gemini API", "RAG"],
    usedIn: "AI Candidate Discovery, CoreAI",
  },
  {
    title: "Generative AI",
    icon: "Sparkles",
    description: "Implementing voice AI, real-time agents, and multimodal context processing.",
    skills: ["Gemini", "LLM Applications", "AI Agents", "Voice AI", "RAG", "Embeddings", "Semantic Search", "Prompt Engineering"],
    usedIn: "OmniTutor, HelloAlex",
  },
  {
    title: "Databases & Data",
    icon: "Database",
    description: "Designing schemas and managing relational, NoSQL, and vector datastores.",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "SQL", "Vector Search / FAISS"],
    usedIn: "AI Candidate Discovery, Dijit Program",
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    description: "Containerizing applications and deploying infrastructure for production workloads.",
    skills: ["Docker", "Docker Compose", "Vercel", "Nginx", "Prometheus", "Google Cloud", "Git", "GitHub"],
    usedIn: "CoreAI, Clutch Momentum",
  },
  {
    title: "Systems & Architecture",
    icon: "Network",
    description: "Designing scalable, decoupled, and distributed software systems.",
    skills: ["OOP / OOD", "Database Design", "System Design", "Distributed Systems", "REST Architecture", "Scalable Architectures", "Asynchronous Processing", "API Gateway / Worker Architecture"],
    usedIn: "CoreAI, AI Candidate Discovery",
  },
  {
    title: "Computer Vision & Automation",
    icon: "Eye",
    description: "Real-time object detection, posture tracking, and environmental monitoring.",
    skills: ["YOLOv8", "MediaPipe", "OpenCV", "Real-Time Vision", "Pose Detection", "Audio Monitoring", "Automation"],
    usedIn: "Library Monitoring System",
  },
  {
    title: "Development Tools",
    icon: "Wrench",
    description: "Essential utilities for rapid development, testing, and version control.",
    skills: ["GitHub", "Cursor AI", "Chrome DevTools", "VS Code", "Docker", "Postman"],
  }
];

export const technicalSkills = [
  { name: "React / Next.js", icon: "react" },
  { name: "Node.js / Express", icon: "nodejs" },
  { name: "MongoDB", icon: "database" },
  { name: "PostgreSQL", icon: "database" },
  { name: "Supabase", icon: "database" },
  { name: "Tailwind CSS", icon: "globe" },
  { name: "AI & Machine Learning", icon: "brain" },
  { name: "Cloud Computing", icon: "cloud" },
];

export const techStack = [
  { name: "React.js", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express.js", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Supabase", icon: "supabase" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Artificial Intelligence & Machine Learning", icon: "ai" },
  { name: "Cloud Computing", icon: "cloud" },
];

// ─── Projects ────────────────────────────────────────────────
export type ProjectType = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  domains: string[];
  github: string;
  demo?: string;
  featured: boolean;
};

export const projects: ProjectType[] = [
  {
    id: "ai-candidate-discovery",
    title: "AI Candidate Discovery & Intelligent Ranking System",
    description: "A semantic search and ranking engine processing 100K+ candidate profiles using FAISS and Sentence Transformers.",
    longDescription: "An intelligent recruitment platform that utilizes NLP and vector embeddings to decouple traditional keyword search. Built with Python, FAISS, and Sentence Transformers for semantic matching. The decoupled architecture includes a FastAPI backend, React/Vite frontend, and Supabase/PostgreSQL for structured data storage, effectively scaling to handle 100K+ candidate profiles.",
    tags: ["Python", "FAISS", "Sentence Transformers", "FastAPI", "React", "Vite", "Supabase", "Docker"],
    domains: ["AI / ML", "NLP", "Software Engineering"],
    github: "https://github.com/praveen-89/AI-Candidate-Discovery-Intelligent-Ranking-System",
    featured: true,
  },
  {
    id: "coreai-distributed-inference",
    title: "CoreAI Distributed Inference Platform",
    description: "A highly scalable distributed inference infrastructure using FastAPI, Redis queues, and PyTorch workers.",
    longDescription: "A robust ML infrastructure project demonstrating advanced asynchronous processing and decoupled microservices. The architecture utilizes a FastAPI Gateway to receive requests, Redis as a message broker for task queuing, and independent PyTorch workers for heavy ML inference. Containerized via Docker Compose and monitored with Prometheus.",
    tags: ["Python", "FastAPI", "PyTorch", "Redis", "Docker", "Prometheus"],
    domains: ["Distributed Systems", "Cloud / DevOps", "AI / ML"],
    github: "https://github.com/praveen-89/CoreAI-Distributed-Inference-Platform",
    featured: true,
  },
  {
    id: "omnitutor",
    title: "OmniTutor",
    description: "A real-time multimodal generative AI voice tutor utilizing WebSockets and Gemini Native Audio.",
    longDescription: "A cutting-edge generative AI application designed for real-time, bidirectional voice interactions. OmniTutor leverages Gemini 2.5 Flash Native Audio via WebSockets, implementing advanced features like voice activity detection, noise gating, and barge-in (interruption) handling for a natural conversational flow. Also includes screen sharing capabilities and Google Cloud Storage integration.",
    tags: ["Gemini", "WebSockets", "Node.js", "React", "Audio Worklet"],
    domains: ["Generative AI", "AI / ML", "Cloud / DevOps"],
    github: "https://github.com/praveen-89/Omnitutor",
    featured: true,
  },
  {
    id: "helloalex",
    title: "HelloAlex",
    description: "A voice-powered AI customer support agent capable of sentiment analysis and intent detection.",
    longDescription: "A voice-powered AI customer support system built with Next.js, Express, and Google Gemini. Features a sophisticated intent detection pipeline for handling dynamic interactions, integrated sentiment analysis, and seamless voice interaction via the Web Speech API. Includes a real-time agent dashboard and protocols for human escalation.",
    tags: ["Next.js", "Express", "Google Gemini", "Web Speech API"],
    domains: ["Generative AI", "AI / ML", "NLP", "SaaS / Product"],
    github: "https://github.com/praveen-89/HelloAlex",
    featured: true,
  },
  {
    id: "clutch-momentum",
    title: "Clutch Momentum",
    description: "A scalable SaaS platform for the creator economy featuring role-based dashboards.",
    longDescription: "A full-stack product engineering project serving the creator economy. Features Next.js and TypeScript on the frontend with Zustand for state management. The platform includes secure role-based access control, differentiating between Creator dashboards and Super Admin dashboards, fully deployed on Vercel with a responsive public landing page.",
    tags: ["Next.js", "TypeScript", "Zustand", "SaaS"],
    domains: ["SaaS / Product", "Software Engineering"],
    github: "https://github.com/praveen-89/Clutch-Momentum",
    featured: true,
  },
  {
    id: "library-monitoring-system",
    title: "Library Monitoring System with Computer Vision",
    description: "A real-time computer vision system for posture detection, noise monitoring, and automated alerts.",
    longDescription: "A real-time AI and edge-vision application designed to monitor library environments. It leverages YOLOv8 for object detection and MediaPipe for advanced pose estimation to track activity. The system includes audio monitoring for noise detection and triggers automated voice/siren alerts using pyttsx3, directly processing real-time webcam feeds without relying on web technologies.",
    tags: ["Python", "YOLOv8", "MediaPipe", "OpenCV", "pyttsx3"],
    domains: ["Computer Vision", "Automation", "AI / ML"],
    github: "https://github.com/praveen-89/Library-Monitering-System-with-Computer-Vision",
    featured: true,
  },
  {
    id: "sevagrid",
    title: "SevaGrid",
    description: "A full-stack product engineering solution focusing on social impact and community assistance.",
    longDescription: "A socially-driven web application designed to bridge gaps in community support networks. Built with modern full-stack web technologies to ensure a robust, accessible, and responsive user experience.",
    tags: ["Full-Stack", "Web Development", "React"],
    domains: ["SaaS / Product", "Software Engineering"],
    github: "https://github.com/praveen-89/SevaGrid",
    featured: false,
  },
  {
    id: "smart-claims-processing",
    title: "Smart Claims Processing Platform",
    description: "An automated insurance technology platform designed to streamline claims handling.",
    longDescription: "A business process automation tool targeting the insurance sector. It utilizes intelligent processing workflows to rapidly ingest, analyze, and process claims data, reducing manual overhead and minimizing processing delays.",
    tags: ["Automation", "Process Engineering"],
    domains: ["Automation", "Software Engineering"],
    github: "https://github.com/praveen-89/Smart-Claims-Processing-Platform_HiDevs",
    featured: false,
  },
  {
    id: "automated-underwriting",
    title: "Automated Underwriting Platform",
    description: "An AI-enhanced decision support system for automating underwriting processes.",
    longDescription: "An intelligent platform aimed at the financial and insurance industries. It integrates automated evaluation rules and decision support mechanics to quickly assess risk and underwrite applications with high accuracy.",
    tags: ["Automation", "Decision Support"],
    domains: ["Automation", "AI / ML"],
    github: "https://github.com/praveen-89/Automated-Underwriting-Platform_HiDevs",
    featured: false,
  },
  {
    id: "ai-clone",
    title: "Build Your Own AI Clone",
    description: "A backend systems project focused on creating personalized generative AI instances.",
    longDescription: "A generative AI backend engineering project exploring personalized language models. Designed to ingest personal data and contexts to spin up customized AI clones capable of responding in a specific persona.",
    tags: ["Generative AI", "Backend", "LLMs"],
    domains: ["Generative AI", "AI / ML", "Software Engineering"],
    github: "https://github.com/praveen-89/Build-Your-Own-AI-Clone_HiDevs",
    featured: false,
  },
  {
    id: "banking-management-system",
    title: "Banking Management System",
    description: "A foundational object-oriented C++ application for console-based banking operations.",
    longDescription: "A foundational software engineering project built entirely in C++. It demonstrates core principles of Object-Oriented Programming (OOP) including inheritance, polymorphism, and encapsulation through a console-based interface for managing bank accounts and transactions.",
    tags: ["C++", "OOP"],
    domains: ["Other / Foundational", "Software Engineering"],
    github: "https://github.com/praveen-89/Banking_Management_System",
    featured: false,
  }
];

// ─── Project filter categories ────────────────────────────────
export const projectCategories = [
  "All", 
  "Software Engineering", 
  "AI / ML", 
  "Generative AI", 
  "Computer Vision", 
  "Distributed Systems", 
  "Cloud / DevOps", 
  "SaaS / Product", 
  "Automation", 
  "Other / Foundational"
];

// ─── Expertise / Services ────────────────────────────────────
export const expertise = [
  {
    title: "Full-Stack Development",
    icon: "Globe",
    description:
      "Building end-to-end web applications with React.js, Node.js, and modern databases — from pixel-perfect Tailwind UIs to scalable Express.js APIs.",
    highlights: ["React.js / Tailwind CSS", "Node.js / Express.js", "MongoDB", "PostgreSQL / Supabase"],
  },
  {
    title: "AI & Machine Learning",
    icon: "Brain",
    description:
      "Designing intelligent systems — from predictive ML models and NLP chatbots to computer vision pipelines — that solve real-world problems.",
    highlights: ["Machine Learning", "Artificial Intelligence", "IBM WatsonX", "OpenCV"],
  },
  {
    title: "Cloud & Automation",
    icon: "Cloud",
    description:
      "Deploying production-grade apps on cloud platforms with CI/CD pipelines, automated workflows, and real-time monitoring dashboards.",
    highlights: ["Cloud Computing", "GCP", "Vercel", "Power BI"],
  },
];

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
    title: "Cloud Technology",
    issuer: "Infosys Springboard",
    date: "2024",
    icon: "server",
    color: "from-green-500 to-teal-500",
    link: "https://drive.google.com/file/d/1y7iokpwzak8sDXVnn7h4aubPWzhwp_1e/view?usp=sharing",
  },
];

// ─── Education ───────────────────────────────────────────────
export type EducationType = {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  status: "Completed" | "Pursuing";
  description: string;
  subjects?: string[];
};

export const education: EducationType[] = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "Gurukul Kangri Deemed to be University",
    location: "Haridwar, Uttarakhand",
    duration: "2023 - 2027",
    status: "Pursuing",
    description:
      "Deepening my knowledge in core computer science subjects while actively building full-stack applications. Engaging in technical problem-solving and continually exploring new frameworks and AI technologies.",
    subjects: [
      "Data Structures & Algorithms",
      "System Design",
      "Database Management",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
    ],
  },
  {
    degree: "Higher Secondary (XII) - Science Stream",
    institution: "Mahatma Gandhi Intermediate College",
    location: "Gorakhpur, Uttar Pradesh",
    duration: "2021 - 2022",
    status: "Completed",
    description:
      "Built a solid analytical foundation with a focus on Physics, Chemistry, and Mathematics, which sparked my deep interest in logical reasoning and software engineering.",
  },
];

// ─── Experience ──────────────────────────────────────────────
export type ExperienceType = {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  tags: string[];
  logo?: string;
};

export const experiences: ExperienceType[] = [
  {
    role: "Software Engineer Intern",
    company: "YugaYatra Retail (OPC) Private Ltd",
    location: "Remote",
    duration: "Sep 2025 — Present",
    logo: "/yy logo.jpg",
    description:
      "Built a Power BI dashboard using automated GCP workflows, improving reporting efficiency by 50%. Forged strong stakeholder relationships by driving new initiatives and achieving project goals and annual renewals.",
    achievements: [
      "Built a Power BI dashboard using automated GCP workflows",
      "Improved reporting efficiency by 50% through automation",
      "Forged strong stakeholder relationships via new initiatives",
      "Achieved project goals and annual renewals",
      "Demonstrated Agile methodology and collaborative planning",
      "Strong problem solving, productivity, and communication",
    ],
    tags: ["Power BI", "GCP", "Stakeholder Management", "Automation", "Google Workspace", "Cursor AI"],
  },
  {
    role: "Software Development Engineer Intern",
    company: "DIJIT Program",
    location: "Remote",
    duration: "Apr 2026 — Jul 2026",
    description:
      "Built an enterprise SaaS platform with 16K+ users featuring modular role-based authentication and secure backend session guards.",
    achievements: [
      "Developed a robust CodeIgniter backend with REST APIs and modular routing.",
      "Implemented role-based authentication (Candidate, Recruiter, Admin flows).",
      "Secured application with robust backend session guards.",
      "Collaborated using GitHub teams to scale the product to 16K+ users."
    ],
    tags: ["CodeIgniter", "MySQL", "JavaScript", "RBAC", "SaaS", "Enterprise Software"],
  },
  {
    role: "Artificial Intelligence & Machine Learning Intern",
    company: "IBM SkillsBuild",
    location: "Noida, India",
    duration: "June 2024 — July 2024",
    logo: "/IBM logo",
    description:
      "Developed AI solutions including a restaurant chatbot and Diabetes & Kidney Stone prediction models using IBM WatsonX.",
    achievements: [
      "Developed an AI Restaurant Chatbot with intent detection",
      "Built Diabetes & Kidney Stone prediction models",
      "Optimized ML models with feature engineering",
      "Designed AI workflows on IBM WatsonX",
    ],
    tags: ["IBM WatsonX", "Machine Learning", "Python", "AI", "NLP"],
  },
];
