import { motion } from "framer-motion";
import { GraduationCap, Code, Sparkles, Rocket } from "lucide-react";

const timelineEvents = [
  {
    year: "2024",
    title: "AI Fashion Recommender (FYP)",
    type: "Project",
    description: "Built StyleSense using Flutter, Django, and machine learning for personalized fashion recommendations.",
    icon: Sparkles
  },
  {
    year: "2023",
    title: "Backend Development Focus",
    type: "Experience", 
    description: "Specialized in Java Spring Boot and Python FastAPI for building scalable REST APIs and microservices.",
    icon: Code
  },
  {
    year: "2022",
    title: "Started Software Engineering",
    type: "Education",
    description: "Began Computer Science studies focusing on backend development and AI technologies.",
    icon: GraduationCap
  },
  {
    year: "2022",
    title: "First Full-Stack Project",
    type: "Project", 
    description: "Developed grocery store management system with inventory tracking and billing features.",
    icon: Rocket
  }
];

const typeColors = {
  Project: "bg-primary/10 text-primary border-primary/20",
  Experience: "bg-secondary/10 text-secondary border-secondary/20",
  Education: "bg-purple-100 text-purple-600 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800"
};

export function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              My Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key milestones in my development as a backend engineer and AI enthusiast
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start gap-8"
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-card border-4 border-primary/20 rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        className="bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl font-bold text-primary font-heading">
                            {event.year}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${typeColors[event.type as keyof typeof typeColors]}`}>
                            {event.type}
                          </span>
                        </div>
                        
                        <h3 className="font-heading font-semibold text-xl mb-3">
                          {event.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}