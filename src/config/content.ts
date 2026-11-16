export const personalInfo = {
  name: "Hammad Tahir",
  title: "Backend & Applied AI Engineer",
  tagline: "I build the backend systems that make AI useful",
  bio: "CS graduate from UMT (3.76 CGPA, Rector’s Merit Award). I build FastAPI backends and ship applied AI product features — voice agents, healthcare chat safety/RAG (engineering controls, not medical-grade), and recruiting screening pipelines. Looking for ASE / Backend / Applied AI roles in Lahore.",

  badges: ["Open to ASE / Backend roles", "Lahore, Pakistan", "FastAPI · Applied AI"],

  highlights: [
    "6-month paid internship at IREG-IT (backend services, CI/CD, Linux VPS).",
    "Delivered paid client work: SmartCare (healthcare chat safety/RAG) and HireBeam (AI recruiting).",
    "FYP: VOIA — FastAPI voice-agent platform with workflows, RAG, and telephony (team lead / backend lead).",
    "Comfortable explaining backend design end-to-end: auth, data models, APIs, Docker.",
  ],

  focusAreas: [
    {
      title: "Backend",
      description:
        "FastAPI services, async SQLAlchemy, PostgreSQL, Redis, JWT/OAuth, WebSockets, and Dockerized deploys.",
      icon: "Server",
    },
    {
      title: "Applied AI",
      description:
        "RAG, embeddings, prompt/safety layers, multi-LLM APIs, and agent-style workflows inside real products.",
      icon: "Brain",
    },
    {
      title: "ML / DL",
      description:
        "Transfer learning, NER fine-tuning, CV feature extractors, and research experiments when the product needs them.",
      icon: "Cpu",
    },
  ],
};

export const skills = {
  Backend: {
    tier: "core" as const,
    items: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Pydantic",
      "REST APIs",
      "WebSockets",
      "Alembic",
      "Celery",
      "Java",
      "Spring Boot",
    ],
    color: "emerald",
  },
  Data: {
    tier: "core" as const,
    items: ["PostgreSQL", "Redis", "SQLite", "SQL", "pgvector"],
    color: "violet",
  },
  "Applied AI": {
    tier: "core" as const,
    items: [
      "LLM APIs",
      "RAG",
      "Embeddings",
      "Prompt engineering",
      "Safety layers",
      "LangGraph",
      "sentence-transformers",
    ],
    color: "sky",
  },
  ML: {
    tier: "applied" as const,
    items: ["Scikit-learn", "Feature pipelines", "Evaluation", "NER fine-tuning"],
    color: "sky",
  },
  DL: {
    tier: "applied" as const,
    items: ["PyTorch", "Hugging Face", "Transformers", "BART", "Bi-LSTM"],
    color: "violet",
  },
  CV: {
    tier: "applied" as const,
    items: ["OpenCV", "ResNet50", "TensorFlow/Keras", "Image preprocessing"],
    color: "orange",
  },
  Frontend: {
    tier: "also" as const,
    items: ["Next.js", "TypeScript", "React", "Flutter", "Django templates"],
    color: "blue",
  },
  DevOps: {
    tier: "core" as const,
    items: ["Docker", "Docker Compose", "Linux", "Nginx", "Git", "GitHub Actions", "CI/CD"],
    color: "orange",
  },
};

export const timeline = [
  {
    year: "2026",
    title: "BS Computer Science — UMT",
    type: "Education",
    description:
      "Graduated with 3.76 CGPA. Rector’s Merit Award (Fall 2024, 4.00 semester). Capstone: VOIA voice AI platform (FastAPI).",
    icon: "GraduationCap",
  },
  {
    year: "2025–2026",
    title: "Paid projects — SmartCare & HireBeam",
    type: "Experience",
    description:
      "Built FastAPI backends with LLM features: healthcare chat safety/RAG (SmartCare — not medical-grade) and resume screening with embeddings/NER (HireBeam).",
    icon: "Briefcase",
  },
  {
    year: "2024–2025",
    title: "Java Intern — IREG-IT",
    type: "Experience",
    description:
      "Six-month paid internship. Worked on a Spring Boot tax-document service, multi-language support, Linux VPS hardening, and CI/CD.",
    icon: "Code",
  },
  {
    year: "2022",
    title: "Started BS Computer Science",
    type: "Education",
    description: "University of Management and Technology, Lahore.",
    icon: "Rocket",
  },
];

export const techStack = [
  { name: "Python", icon: "Snake" },
  { name: "FastAPI", icon: "Zap" },
  { name: "PostgreSQL", icon: "Database" },
  { name: "Redis", icon: "Layers" },
  { name: "Docker", icon: "Container" },
  { name: "LLM APIs", icon: "Brain" },
  { name: "RAG", icon: "Bot" },
  { name: "SQLAlchemy", icon: "Server" },
];
