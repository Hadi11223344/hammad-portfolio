export type CaseKind = "flagship" | "paid" | "independent" | "research" | "internship";

export type CaseScreenshot = {
  src: string;
  caption: string;
  alt: string;
};

export type CaseStudy = {
  slug: string;
  route: string;
  title: string;
  shortTitle: string;
  kind: CaseKind;
  kindLabel: string;
  subtitle: string;
  year: string;
  featured: boolean;
  homepageSelected: boolean;
  cover: string;
  diagram: string;
  diagramCaption?: string;
  screenshots?: CaseScreenshot[];
  problem: string;
  summary: string;
  visitorShouldUnderstand: string;
  role: string;
  tags: string[];
  contribution: string[];
  architectureLayers: { name: string; detail: string }[];
  decisions: { question: string; answer: string }[];
  implementationSnippets: { title: string; note: string; code: string }[];
  evaluation: { label: string; detail: string }[];
  access: string;
  links: { github?: string; label?: string };
  next?: { label: string; href: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "voia",
    route: "/projects/voia",
    title: "VOIA — AI Voice Agent Platform",
    shortTitle: "VOIA",
    kind: "flagship",
    kindLabel: "Flagship · Team-led FYP",
    subtitle: "Backend platform for configurable, self-hosted AI voice agents",
    year: "2025–2026",
    featured: true,
    homepageSelected: true,
    cover: "/projects/voia/cover.jpg",
    diagram: "/projects/voia/architecture.png",
    diagramCaption:
      "Presentation → API gateway → business logic → data access → infrastructure.",
    screenshots: [
      {
        src: "/projects/voia/dashboard.jpg",
        caption: "Dashboard",
        alt: "VOIA dashboard overview with call metrics and analytics",
      },
      {
        src: "/projects/voia/flow-playground.jpg",
        caption: "Flow Playground",
        alt: "VOIA flow playground with node canvas and debug trace",
      },
      {
        src: "/projects/voia/integrations.jpg",
        caption: "Integrations",
        alt: "VOIA integrations screen with provider cards",
      },
    ],
    problem:
      "Teams need self-hosted voice agents that combine telephony, realtime media, graph workflows, and swappable AI providers—not a single prompt wired to a phone call.",
    summary:
      "Team-led FastAPI voice-agent platform with Twilio streaming, LangGraph workflows, Redis state, RAG, and multi-provider STT/LLM/TTS.",
    visitorShouldUnderstand: "",
    role: "Team Lead · Backend Lead",
    tags: ["FastAPI", "Redis", "Twilio", "WebSockets", "LangGraph"],
    contribution: [
      "Led backend architecture: agents, workflows, calls, and dashboard APIs.",
      "Redis-backed session state and graph-based execution patterns.",
      "Telephony + multi-provider AI/speech integration paths.",
    ],
    architectureLayers: [
      { name: "Presentation", detail: "Next.js · React Flow · landing" },
      { name: "API gateway", detail: "JWT · rate limits · security" },
      { name: "Business logic", detail: "LangGraph · RAG · tools" },
      { name: "Data access", detail: "SQLAlchemy · Redis · checkpointer" },
      { name: "Infrastructure", detail: "Twilio · STT/LLM/TTS · MCP" },
    ],
    decisions: [
      {
        question: "Why WebSockets for realtime voice?",
        answer:
          "Call audio and agent events need low-latency bidirectional streaming HTTP alone cannot provide.",
      },
      {
        question: "Why Redis-backed state?",
        answer:
          "Sessions and workflow progress need fast shared state across async workers and long-lived calls.",
      },
    ],
    implementationSnippets: [],
    evaluation: [],
    access: "Team-led FYP · backend lead · frontend shared",
    links: {
      github: "https://github.com/Hadi11223344/Voia",
      label: "GitHub",
    },
    next: { label: "SmartCare — Healthcare AI", href: "/projects/smartcare" },
  },
  {
    slug: "smartcare",
    route: "/projects/smartcare",
    title: "SmartCare — Healthcare AI",
    shortTitle: "SmartCare",
    kind: "paid",
    kindLabel: "Paid client delivery · Applied AI",
    subtitle: "Safer healthcare chat with retrieval, patient context, and deterministic checks",
    year: "2026",
    featured: true,
    homepageSelected: true,
    cover: "/projects/smartcare/cover.jpg",
    diagram: "/diagrams/smartcare-architecture.svg",
    diagramCaption:
      "Pre-safety → patient context + RAG → LLM → post-safety. Engineering controls, not medical-grade claims.",
    screenshots: [
      {
        src: "/projects/smartcare/landing.jpg",
        caption: "Landing",
        alt: "SmartCare landing page with AI-powered home healthcare messaging",
      },
      {
        src: "/projects/smartcare/provider-portal.jpg",
        caption: "Provider Portal",
        alt: "SmartCare provider portal practice overview and earnings",
      },
      {
        src: "/projects/smartcare/patient-portal.png",
        caption: "Patient Portal",
        alt: "SmartCare patient portal dashboard with AI assistant shortcuts",
      },
    ],
    problem:
      "Healthcare chat needs patient context, retrieval, and deterministic safety gates around the LLM—not free-form generation treated as clinical advice.",
    summary:
      "Paid FastAPI backend: patient-context assembly, document RAG with pgvector, Groq responses, and multilingual pre/post safety checks.",
    visitorShouldUnderstand: "",
    role: "Backend / AI features",
    tags: ["FastAPI", "Groq", "PostgreSQL", "pgvector", "Redis"],
    contribution: [
      "FastAPI services with async SQLAlchemy and Alembic migrations.",
      "Patient-context assembly and document RAG for grounded replies.",
      "Deterministic pre/post safety checks (PII, emergency, crisis patterns).",
    ],
    architectureLayers: [
      { name: "Pre-safety", detail: "PII · crisis · emergency heuristics" },
      { name: "Context + RAG", detail: "Patient history · pgvector docs" },
      { name: "Generation", detail: "Groq-backed LLM" },
      { name: "Post-safety", detail: "Second-pass policy checks" },
    ],
    decisions: [
      {
        question: "Why deterministic checks around the LLM?",
        answer:
          "Crisis, PII, and emergency rules need predictable, auditable behavior that does not depend on prompt luck.",
      },
      {
        question: "What happens on an emergency trigger?",
        answer:
          "The pipeline short-circuits to a policy-driven safe response instead of free-form model output.",
      },
    ],
    implementationSnippets: [],
    evaluation: [],
    access:
      "Paid client · FastAPI backend remains private · not medical-grade or diagnostic claims. A separate public UI demo exists for walkthrough only.",
    links: {
      github: "https://github.com/Hadi11223344/smart-care-frontend-demo",
      label: "Frontend demo",
    },
    next: { label: "HireBeam — AI Recruiting", href: "/projects/hirebeam" },
  },
  {
    slug: "hirebeam",
    route: "/projects/hirebeam",
    title: "HireBeam — AI Recruiting",
    shortTitle: "HireBeam",
    kind: "paid",
    kindLabel: "Paid client delivery · NLP / Applied ML",
    subtitle: "Transformer NER, skill dictionaries, and semantic matching for screening",
    year: "2026",
    featured: true,
    homepageSelected: true,
    cover: "/projects/hirebeam/cover.jpg",
    diagram: "/diagrams/hirebeam-architecture.svg",
    problem:
      "Recruiting pipelines need reliable skill extraction and matching—neither pure dictionaries nor a single embedding space are enough alone.",
    summary:
      "Paid FastAPI recruiting backend: resume parsing, DistilRoBERTa skill NER, dictionary coverage, sentence-transformer embeddings, and Gemini-assisted screening.",
    visitorShouldUnderstand:
      "HireBeam is a hybrid NLP system: learned extraction + lexical coverage + semantic similarity, with evaluation reported transparently.",
    role: "Backend / applied ML",
    tags: ["FastAPI", "DistilRoBERTa", "Sentence Transformers", "pgvector", "Gemini"],
    contribution: [
      "Built resume ingestion and preprocessing over FastAPI.",
      "Fine-tuned DistilRoBERTa NER for skill/entity extraction.",
      "Maintained a complementary skill dictionary (400+ terms).",
      "Implemented sentence-transformer embeddings and pgvector similarity.",
      "Wired Gemini-assisted screening-question workflows.",
    ],
    architectureLayers: [
      { name: "Ingestion", detail: "PDF/document input and text extraction." },
      { name: "NER", detail: "Fine-tuned DistilRoBERTa for skill/entity spans." },
      { name: "Lexicon", detail: "Skill dictionary for complementary coverage." },
      { name: "Embeddings", detail: "Sentence-transformer vectors into pgvector." },
      { name: "Matching", detail: "Similarity ranking between resumes and roles." },
      { name: "Screening", detail: "Gemini-assisted screening question flows." },
    ],
    decisions: [
      {
        question: "Why combine NER with a dictionary?",
        answer:
          "Transformers miss rare or domain spellings; a lexicon catches known terms while the model generalizes beyond the list.",
      },
      {
        question: "How do embeddings complement extraction?",
        answer:
          "Entities name what appears; embeddings score semantic fit between resume content and job requirements.",
      },
    ],
    implementationSnippets: [
      {
        title: "Hybrid extraction sketch",
        note: "Model spans union lexicon hits before embedding.",
        code: `skills = set(ner.predict(text))\nskills |= dictionary.match(text)\nvec = embedder.encode(text)\nmatches = pgvector.topk(job_vec, vec, k=20)`,
      },
    ],
    evaluation: [
      {
        label: "Fine-tuning data",
        detail: "2,260 labelled resumes used in DistilRoBERTa fine-tuning.",
      },
      {
        label: "Overall F1",
        detail: "Reported ~0.60 overall F1 — presented with methodology limits; not marketed as exceptional.",
      },
      {
        label: "Lexicon",
        detail: "400+ terms in the complementary skill dictionary.",
      },
    ],
    access: "Private paid client project · sanitized architecture shown · source not public",
    links: {
      github: "",
      label: "Private client project",
    },
    next: { label: "OUTFYT — Fashion ML", href: "/projects/outfyt" },
  },
  {
    slug: "outfyt",
    route: "/projects/outfyt",
    title: "OUTFYT — AI Fashion Recommendation",
    shortTitle: "OUTFYT",
    kind: "independent",
    kindLabel: "Independent project · Computer Vision / ML",
    subtitle: "ResNet50 embeddings, MLP heads, and wardrobe intelligence",
    year: "2024–2025",
    featured: false,
    homepageSelected: true,
    cover: "/projects/outfyt/cover.jpg",
    diagram: "/projects/outfyt/visual-inference.png",
    diagramCaption:
      "Upload → preprocess → ResNet50 → MLP heads → wardrobe DB. Face-shape styling via landmarks — not facial recognition.",
    screenshots: [
      {
        src: "/projects/outfyt/recommendation-logic.png",
        caption: "Recommendation logic",
        alt: "OUTFYT recommendation and cosine similarity logic diagram",
      },
    ],
    problem:
      "A digital wardrobe needs reliable visual classification and similarity—not a black-box model disconnected from the product database.",
    summary:
      "Independent fashion app: Flutter client, Django API, ResNet50 feature extraction, separate MLP heads, and cosine wardrobe matching.",
    visitorShouldUnderstand: "",
    role: "Independent full-stack / ML",
    tags: ["Flutter", "Django", "ResNet50", "OpenCV", "PostgreSQL"],
    contribution: [
      "Visual inference: rembg/OpenCV → ResNet50 → category/colour/style MLP heads.",
      "Wardrobe integration in Django with cosine purchase intelligence.",
      "On-device face-landmark / face-shape styling (not facial recognition).",
    ],
    architectureLayers: [
      { name: "Preprocess", detail: "rembg · 224×224" },
      { name: "ResNet50", detail: "2048-d features" },
      { name: "MLP heads", detail: "Category · colour · style" },
      { name: "Wardrobe", detail: "Cosine 0.90 / 0.80 / 0.60" },
    ],
    decisions: [
      {
        question: "Why ResNet50 transfer learning?",
        answer:
          "Strong visual backbone without training a full CNN from scratch on limited wardrobe data.",
      },
      {
        question: "Why separate attribute heads?",
        answer:
          "Category, colour, and style have different label spaces—colour uses embedding alone; category/style also take gender.",
      },
    ],
    implementationSnippets: [],
    evaluation: [],
    access: "Independent project · public Fashion Recommendation repos available",
    links: {
      github: "https://github.com/Hadi11223344/Fashion-Recommendation-App",
      label: "GitHub",
    },
    next: { label: "SEQ-DONUT — Research", href: "/research/seq-donut" },
  },
  {
    slug: "seq-donut",
    route: "/research/seq-donut",
    title: "SEQ-DONUT — Deep Learning Research",
    shortTitle: "SEQ-DONUT",
    kind: "research",
    kindLabel: "Unpublished academic proof-of-concept",
    subtitle: "Sequential inductive bias between vision Transformers and text decoders",
    year: "2025–2026",
    featured: false,
    homepageSelected: false,
    cover: "/projects/seq-donut/cover.jpg",
    diagram: "/projects/seq-donut/model-architecture.png",
    diagramCaption:
      "Swin encoder → gated Bi-LSTM bridge → BART decoder → structured JSON fields. Unpublished academic POC.",
    screenshots: [
      {
        src: "/projects/seq-donut/architecture.jpg",
        caption: "Vision-to-text overview",
        alt: "SEQ-DONUT vision-to-text architecture with gated Bi-LSTM bridge",
      },
      {
        src: "/projects/seq-donut/experimental-workflow.png",
        caption: "Experimental workflow",
        alt: "SEQ-DONUT experimental training and evaluation workflow",
      },
    ],
    problem:
      "Document models can lose reading order when flattening visual tokens into a text decoder—SEQ-DONUT tests an explicit sequential bridge.",
    summary:
      "Co-authored research POC: Swin encoder, Bi-LSTM gated residual bridge, BART decoder for structured receipt fields.",
    visitorShouldUnderstand: "",
    role: "Co-author · deep learning experiments",
    tags: ["PyTorch", "Swin", "Bi-LSTM", "BART", "Hugging Face"],
    contribution: [
      "Co-authored with Muhammad Saad Awais under Dr. Tayyaba Anjum.",
      "Sequential bridge and gated residual fusion experiments on SROIE.",
      "Analyzed overfitting under broader fine-tuning; future work CORD/FUNSD.",
    ],
    architectureLayers: [
      { name: "Swin", detail: "Hierarchical vision tokens" },
      { name: "Bi-LSTM bridge", detail: "Zero-init residual gate" },
      { name: "BART", detail: "Autoregressive field decode" },
    ],
    decisions: [
      {
        question: "Why a bidirectional recurrent bridge?",
        answer:
          "Explicit sequential inductive bias for reading order that pure attention flattening may under-emphasize.",
      },
      {
        question: "Why zero-initialise the residual gate?",
        answer:
          "The recurrent branch starts near zero influence; the gate learns how much sequential signal to admit.",
      },
    ],
    implementationSnippets: [],
    evaluation: [],
    access: "Unpublished co-authored academic proof-of-concept · no fabricated headline metrics",
    links: { github: "", label: "Research materials on request" },
    next: { label: "IREG-IT Internship", href: "/experience/ireg-it" },
  },
  {
    slug: "ireg-it",
    route: "/experience/ireg-it",
    title: "IREG-IT — Backend Engineering Internship",
    shortTitle: "IREG-IT",
    kind: "internship",
    kindLabel: "Professional internship · Employer-owned",
    subtitle: "Secure Java APIs, documents, testing, and delivery",
    year: "Sep 2024 – Feb 2025",
    featured: false,
    homepageSelected: false,
    cover: "/projects/ireg/cover.jpg",
    diagram: "/diagrams/ireg-architecture.svg",
    problem:
      "Production backends need security, i18n documents, tests, and deployable pipelines—not only feature code.",
    summary:
      "Six-month paid Software Intern role: Spring Boot APIs, multilingual documents, Mockito/Playwright/k6, Docker, GitHub Actions, and Ubuntu/GCP delivery.",
    visitorShouldUnderstand:
      "Employer-owned work. This page shows sanitized engineering contributions—not employer source code as a public portfolio project.",
    role: "Java Intern · backend delivery",
    tags: ["Java 17", "Spring Boot", "PostgreSQL", "Docker", "GCP", "GitHub Actions"],
    contribution: [
      "Backend: Java 17, Spring Boot, Spring Security, JWT, IP allowlisting, JPA, PostgreSQL.",
      "Documents: PDFBox, ICU4J, multilingual generation and i18n.",
      "Reliability: Mockito, Playwright, k6 load tests, Grafana, SLF4J.",
      "Delivery: Docker, GitHub Actions, Ubuntu on GCP/Hostinger, Postfix/Dovecot mail setup.",
      "Coordinated with Bubble.io and Python/Django teammates on integrations.",
    ],
    architectureLayers: [
      { name: "Clients", detail: "Internal tools / Bubble.io consumers of REST APIs." },
      { name: "API", detail: "Spring Boot with security profiles and OpenAPI docs." },
      { name: "Data", detail: "JPA + PostgreSQL with environment-specific profiles." },
      { name: "Documents", detail: "PDFBox / ICU4J generation pipelines." },
      { name: "CI/CD", detail: "GitHub Actions → Docker → Ubuntu VPS." },
    ],
    decisions: [
      {
        question: "Why environment-specific Spring profiles?",
        answer:
          "Local, development, and production need different security and infrastructure settings without forking the codebase.",
      },
      {
        question: "Why treat this as experience, not a public repo?",
        answer:
          "Code remains employer-owned; the portfolio shows responsibilities and architecture, not proprietary sources.",
      },
    ],
    implementationSnippets: [
      {
        title: "Security posture (conceptual)",
        note: "JWT + IP allowlisting on sensitive document APIs.",
        code: `// Spring Security filter chain (illustrative)\nhttp.authorizeHttpRequests(auth -> auth\n    .requestMatchers(\"/api/docs/**\").authenticated())\n   .oauth2ResourceServer(OAuth2 -> ...)\n   .addFilterBefore(ipAllowlistFilter, UsernamePasswordAuthenticationFilter.class);`,
      },
    ],
    evaluation: [
      {
        label: "Automated tests",
        detail: "Mockito unit tests and Playwright coverage on critical flows.",
      },
      {
        label: "Load testing",
        detail: "k6 / Grafana exercises on deployed services.",
      },
    ],
    access: "Employer-owned internship work · sanitized summary only",
    links: { github: "", label: "Private / employer code" },
    next: { label: "Recognition", href: "/recognition" },
  },
];

export const homepageSelected = caseStudies.filter((c) => c.homepageSelected);

export const productCaseStudies = caseStudies.filter((c) =>
  ["flagship", "paid", "independent"].includes(c.kind)
);

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export const kindBadgeClass: Record<CaseKind, string> = {
  flagship: "border-primary/40 text-primary",
  paid: "border-foreground/30 text-foreground",
  independent: "border-border text-muted-foreground",
  research: "border-border text-muted-foreground",
  internship: "border-border text-muted-foreground",
};
