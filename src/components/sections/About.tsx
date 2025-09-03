import { motion } from "framer-motion";
import { Server, Brain, Smartphone, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const focusAreas = [
  {
    title: "Backend APIs",
    description: "RESTful services, microservices architecture, and real-time features with WebSockets",
    icon: Server
  },
  {
    title: "AI/RAG/Agentic",
    description: "Machine learning pipelines, embedding systems, and intelligent automation workflows",
    icon: Brain
  },
  {
    title: "Mobile/Flutter Integration",
    description: "Cross-platform mobile apps with robust backend integrations and real-time sync",
    icon: Smartphone
  }
];

const highlights = [
  "1+ year building REST APIs, integrations, and real-time features.",
  "Comfortable with Java (Spring Boot), Python (FastAPI/Django), and Flutter for app UIs.",
  "Worked with Google Maps, Firebase Realtime DB, Stripe/PayPal, and WebSockets.",
  "Exploring agentic AI, RAG, and human-in-the-loop workflows."
];

const techStack = [
  "Java", "Spring Boot", "Python", "FastAPI", "Django", "PostgreSQL", 
  "Redis", "Docker", "Firebase", "Flutter", "TensorFlow", "scikit-learn"
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm a backend-leaning full-stack engineer focused on practical AI. I've built Java Spring Boot and Python FastAPI/Django services, real-time features with Firebase, payment integrations, chat systems, and API-driven apps. I'm currently building an AI-powered fashion recommendation system (Flutter + Django) using embeddings and clustering, and I'm exploring agentic AI for a centralized productivity tool that connects to docs, email, and more.
                </p>
              </div>

              {/* Experience Highlights */}
              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-xl mb-4">
                  Experience Highlights
                </h3>
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="font-heading font-semibold text-xl mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-card hover:bg-accent transition-colors px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Focus Areas Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="font-heading font-semibold text-xl mb-6 lg:text-center">
                Focus Areas
              </h3>
              
              <div className="grid gap-6">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <area.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-heading font-semibold text-lg mb-2">
                              {area.title}
                            </h4>
                            <p className="text-muted-foreground">
                              {area.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}