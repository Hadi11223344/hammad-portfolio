export const siteConfig = {
  name: "Alex Alex",
  title: "Alex Alex — Backend & AI Engineer", 
  description: "Portfolio, projects, and blog. Java Spring Boot, Python FastAPI/Django, AI and agentic workflows.",
  url: "https://your-domain.vercel.app",
  author: "Alex Alex",
  keywords: ["Alex Alex", "Backend", "AI", "Spring Boot", "FastAPI", "Django", "Flutter", "Pakistan", "Portfolio"],
  
  // Contact Information
  contact: {
    email: "XXX@protonmail.com",
    phone: "0333333333",
    location: "Pakistan",
  },
  
  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/hammad-tahir1",
    github: "https://github.com/your-github", // placeholder
    email: "mailto:XXX@protonmail.com",
    whatsapp: "https://wa.me/923333333333",
  },
  
  // Navigation
  nav: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Timeline", href: "#timeline" },
    { name: "Contact", href: "#contact" },
  ],
  
  // Resume
  resume: {
    url: "/Alex_Alex_CV.pdf",
    note: "Updated quarterly"
  },
  
  // Analytics (optional)
  analytics: {
    // Add Plausible or Vercel Analytics ID when available
    plausible: process.env.NEXT_PUBLIC_PLAUSIBLE_ID,
    vercel: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID,
  },
  
  // Form Integration
  formspree: {
    id: process.env.NEXT_PUBLIC_FORMSPREE_ID,
  }
};

export type SiteConfig = typeof siteConfig;