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
  // View resume in browser (Google Drive preview)
  resumeView: "https://drive.google.com/file/d/1CCzNzWpRaZ4hDlR9u111uLgv0Q2dwySp/view?usp=sharing",
  // Direct download link
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
    title: "Tools",
    icon: "Cloud",
    skills: ["Git", "GitHub", "VS Code", "Cursor", "Postman"],
  },
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

// ─── Tech Stack ──────────────────────────────────────────────
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
  category: string;
  github: string;
  demo?: string;
  featured: boolean;
};

export const projects: ProjectType[] = [
  {
    id: "helloalex",
    title: "HelloAlex",
    description:
      "An AI voice support agent built with Next.js, Express, and Gemini that automates 80%+ of customer queries with multi-module intent handling.",
    longDescription:
      "HelloAlex is a production-grade AI Customer Support Voice Agent. Built with Next.js, Express.js, and Google Gemini AI, it automates 80%+ of inbound customer queries. The system implements 4+ intelligent modules covering intent detection, sentiment analysis, order management, and returns/refunds — improving resolution rates by 60%. Features a real-time support dashboard, voice I/O, cloud deployment on Vercel, and handles 100+ concurrent sessions.",
    tags: ["Next.js", "Express.js", "Gemini AI", "Voice AI", "Node.js", "Cloud"],
    category: "AI/ML",
    github: "https://github.com/praveen-89/HelloAlex",
    demo: "https://hello-alex-five.vercel.app",
    featured: true,
  },
  {
    id: "diabetes-help",
    title: "Diabetes_Help",
    description:
      "A full-stack healthcare platform with 3 user roles enabling appointments, digital health records, and real-time scheduling for 1000+ patients.",
    longDescription:
      "Diabetes_Help is a comprehensive full-stack healthcare management platform designed to streamline care for diabetic patients. Built with React (TypeScript), Tailwind CSS, and Supabase, it supports 3 distinct user roles (Patient, Doctor, Admin) with secure authentication, digital health records, appointment scheduling, and real-time dashboards. Manages 1000+ secure patient records and improves operational efficiency by 50% through automated scheduling and live updates.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Healthcare", "PostgreSQL"],
    category: "Web",
    github: "https://github.com/praveen-89/Diabetes_Help",
    featured: true,
  },
  {
    id: "ai-restaurant-chatbot",
    title: "AI Restaurant Chatbot",
    description:
      "An AI-powered chatbot built with IBM WatsonX that handles restaurant reservations, menu queries, and customer support.",
    longDescription:
      "Built during the IBM SkillsBuild AI/ML internship, this conversational AI handles restaurant use cases including table reservations, answering menu queries, providing allergen information, and routing customer complaints. Integrated with a Node.js backend for reservation management. Part of the Diabetes & Kidney Stone prediction solution ecosystem developed using IBM WatsonX for healthcare analytics.",
    tags: ["IBM WatsonX", "AI", "Node.js", "Chatbot", "NLP"],
    category: "AI/ML",
    github: "https://github.com/praveen-89",
    demo: "https://www.linkedin.com/posts/praveen-gupta11_ibmwatsonx-ai-chatbotdevelopment-activity-7345018597913612288-U1_r?utm_source=share&utm_medium=member_android&rcm=ACoAAEZrLnkBNeCQjNuhQWwxVDdTvNuWFFf3AWc",
    featured: true,
  },
  {
    id: "diabetes-kidney-prediction",
    title: "Diabetes & Kidney Stone Predictor",
    description:
      "ML models trained to predict Diabetes and detect Kidney Stones using data preprocessing, feature engineering, and IBM WatsonX workflows.",
    longDescription:
      "Developed during the IBM SkillsBuild AI/ML internship, this project features two healthcare prediction models. The Diabetes predictor uses logistic regression and ensemble methods on clinical data, while the Kidney Stone detector uses image-based ML models. Both were built using data preprocessing pipelines, feature engineering, and end-to-end AI workflows designed on IBM WatsonX for healthcare analytics.",
    tags: ["Python", "Machine Learning", "IBM WatsonX", "Healthcare AI", "scikit-learn"],
    category: "AI/ML",
    github: "https://github.com/praveen-89",
    demo: "https://www.linkedin.com/posts/praveen-gupta11_machinelearning-ibm-watsonx-activity-7345110369033441280-csyJ?utm_source=share&utm_medium=member_android&rcm=ACoAAEZrLnkBNeCQjNuhQWwxVDdTvNuWFFf3AWc",
    featured: false,
  },
  {
    id: "library-monitoring-cv",
    title: "Library Monitoring System",
    description:
      "A real-time Computer Vision system tracking library occupancy and resource usage using object detection algorithms.",
    longDescription:
      "A Computer Vision and Machine Learning application designed to monitor library environments. It leverages object detection models to count occupants, track seating availability in real-time, and analyze resource utilization. Built using Python and OpenCV, it provides automated monitoring capabilities to improve facility management and user experience in educational institutions.",
    tags: ["Python", "Computer Vision", "OpenCV", "Object Detection", "Machine Learning"],
    category: "AI/ML",
    github: "https://github.com/praveen-89/Library-Monitering-System-with-Computer-Vision",
    featured: true,
  },
];

// ─── Project filter categories ────────────────────────────────
export const projectCategories = ["All", "AI/ML", "Web"];

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
