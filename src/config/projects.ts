export const projects = [
  {
    id: "stylesense",
    title: "StyleSense (FYP)",
    subtitle: "AI Fashion & Hairstyle Recommender",
    description: "Upload wardrobe, get outfit combos; like/dislike to improve; static hairstyle suggestions; background removal before feature extraction.",
    longDescription: "An intelligent fashion recommendation system that uses computer vision and machine learning to suggest personalized outfit combinations. The system analyzes user wardrobe items, applies CNN embeddings with K-Means clustering, and provides real-time recommendations based on user preferences and feedback.",
    category: "AI/ML",
    tags: ["Flutter", "Django", "Python", "CNN", "K-Means", "Google ML Kit", "Computer Vision"],
    image: "/placeholder-stylesense.jpg",
    links: {
      live: "#",
      github: "#",
      case: "#"
    },
    stats: {
      accuracy: "85%+ user-rated relevance",
      features: "Modular pipeline for future online learning",
      tech: "CNN embeddings + clustering"
    },
    featured: true,
    year: "2024"
  },
  {
    id: "grocery-manager", 
    title: "Grocery Store Manager",
    subtitle: "Inventory, Billing & Reports",
    description: "SKU tracking, low-stock alerts, printable invoices with comprehensive inventory management and reporting system.",
    longDescription: "A complete inventory management solution for grocery stores featuring real-time stock tracking, automated low-stock alerts, billing system with printable invoices, and comprehensive reporting dashboard. Reduced stockouts by ~30% in pilot deployment.",
    category: "Backend",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "React", "Inventory Management"],
    image: "/placeholder-grocery.jpg",
    links: {
      live: "#",
      github: "#",
      case: "#"
    },
    stats: {
      impact: "30% reduction in stockouts",
      features: "Real-time inventory tracking",
      deployment: "Docker containerized"
    },
    featured: true,
    year: "2023"
  },
  {
    id: "geocourier",
    title: "GeoCourier Tracker", 
    subtitle: "Live Courier Map & ETA",
    description: "Real-time location streaming and ETA sharing links for customers with live tracking dashboard.",
    longDescription: "A real-time courier tracking system that provides live location updates and ETA calculations for customers. Features include WebSocket-based real-time updates, Google Maps integration for route optimization, and shareable tracking links for enhanced customer experience.",
    category: "Backend",
    tags: ["FastAPI", "Firebase", "WebSockets", "Google Maps", "Real-time", "Location Services"],
    image: "/placeholder-geocourier.jpg", 
    links: {
      live: "#",
      github: "#",
      case: "#"
    },
    stats: {
      realtime: "Sub-second location updates",
      integration: "Google Maps SDK",
      architecture: "WebSocket-based streaming"
    },
    featured: false,
    year: "2023"
  },
  {
    id: "paylink",
    title: "PayLink Gateway Integration",
    subtitle: "Stripe/PayPal Unified Payments", 
    description: "Unified payment microservice with webhooks, retries, and receipts supporting multiple payment providers.",
    longDescription: "A comprehensive payment gateway integration service that unifies Stripe and PayPal APIs into a single interface. Features include webhook handling, automatic retry logic, receipt generation, and comprehensive transaction logging for audit trails.",
    category: "Integrations",
    tags: ["Django", "Celery", "Redis", "Stripe", "PayPal", "Webhooks", "Microservices"],
    image: "/placeholder-paylink.jpg",
    links: {
      live: "#", 
      github: "#",
      case: "#"
    },
    stats: {
      providers: "Multi-gateway support",
      reliability: "Automatic retry logic", 
      security: "PCI-compliant handling"
    },
    featured: false,
    year: "2023"
  },
  {
    id: "chatconnect",
    title: "ChatConnect",
    subtitle: "Team Chat with Channels & Files",
    description: "Lightweight Slack-style chat; JWT auth; typing/online indicators with file sharing capabilities.",
    longDescription: "A real-time team communication platform similar to Slack, featuring channel-based conversations, file sharing, typing indicators, online status, and JWT-based authentication. Built with FastAPI and WebSockets for optimal performance.",
    category: "Backend",
    tags: ["FastAPI", "WebSockets", "PostgreSQL", "JWT", "S3", "Real-time Chat"],
    image: "/placeholder-chat.jpg",
    links: {
      live: "#",
      github: "#", 
      case: "#"
    },
    stats: {
      realtime: "WebSocket-based messaging",
      features: "Typing & online indicators",
      storage: "S3-compatible file sharing"
    },
    featured: false,
    year: "2023"
  }
];

export const projectCategories = [
  { id: "all", name: "All", count: projects.length },
  { id: "backend", name: "Backend", count: projects.filter(p => p.category === "Backend").length },
  { id: "ai-ml", name: "AI/ML", count: projects.filter(p => p.category === "AI/ML").length }, 
  { id: "mobile", name: "Mobile", count: projects.filter(p => p.category === "Mobile").length },
  { id: "integrations", name: "Integrations", count: projects.filter(p => p.category === "Integrations").length }
];

export const featuredProjects = projects.filter(project => project.featured);