export const siteConfig = {
  name: "Hammad Tahir",
  title: "Hammad Tahir — Backend & Applied AI Engineer",
  description:
    "CS graduate building FastAPI backends and LLM-powered product features. Open to ASE / Backend / Applied AI roles in Lahore.",
  /** Update after deploy — used for absolute OG/Twitter URLs */
  url: "https://hammad-portfolio.vercel.app",
  author: "Hammad Tahir",
  keywords: [
    "Hammad Tahir",
    "Associate Software Engineer",
    "FastAPI",
    "Python Backend",
    "Applied AI",
    "LLM",
    "RAG",
    "Lahore",
    "Pakistan",
  ],

  contact: {
    email: "hammadtahir1@protonmail.com",
    phone: "+92 300 500 8369",
    location: "Lahore, Pakistan",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/hammad-tahir1",
    github: "https://github.com/Hadi11223344",
    email: "mailto:hammadtahir1@protonmail.com",
    whatsapp: "https://wa.me/923005008369",
  },

  /** Mix of routes and in-page anchors */
  nav: [
    { name: "Home", href: "/", type: "route" as const },
    { name: "Projects", href: "/projects", type: "route" as const },
    { name: "Research", href: "/research/seq-donut", type: "route" as const },
    { name: "Experience", href: "/experience/ireg-it", type: "route" as const },
    { name: "Recognition", href: "/recognition", type: "route" as const },
    { name: "Contact", href: "/#contact", type: "hash" as const },
  ],

  resume: {
    url: "/resume_hammad.pdf",
    note: "Updated for ASE / Backend applications",
  },
};

export type SiteConfig = typeof siteConfig;
