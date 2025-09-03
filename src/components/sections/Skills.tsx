import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = {
  "Backend": {
    items: ["Java", "Spring Boot", "Python", "FastAPI", "Django", "Node.js", "REST APIs", "GraphQL", "Microservices", "WebSockets"],
    color: "emerald"
  },
  "AI/ML": {
    items: ["TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy", "OpenAI API", "Embeddings", "RAG", "Clustering", "Neural Networks"],
    color: "sky"
  },
  "Databases": {
    items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Firebase", "Supabase"],
    color: "violet"
  },
  "DevOps": {
    items: ["Docker", "AWS", "GCP", "Vercel", "CI/CD", "Linux", "Nginx", "Git"],
    color: "orange"
  },
  "Frontend": {
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    color: "blue"
  },
  "Mobile": {
    items: ["Flutter", "Dart", "Firebase", "SQLite", "Provider", "Riverpod"],
    color: "pink"
  }
};

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  sky: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
  violet: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
  orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  pink: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300"
};

export function Skills() {
  return (
    <section id="skills" className="py-24">
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
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to build scalable, performant applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, data], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="font-heading text-xl flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full bg-${data.color}-500`} />
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {data.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={`${colorMap[data.color]} border-0 font-medium`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Note */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground text-sm">
              Proficiency levels vary across different technologies. 
              <span className="text-primary font-medium"> Always learning and growing!</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}