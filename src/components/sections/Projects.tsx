import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: "stylesense",
    title: "StyleSense (FYP)",
    subtitle: "AI Fashion & Hairstyle Recommender",
    description: "Upload wardrobe, get outfit combos; like/dislike to improve; static hairstyle suggestions; background removal before feature extraction.",
    category: "AI/ML",
    tags: ["Flutter", "Django", "Python", "CNN", "K-Means", "Google ML Kit"],
    stats: {
      accuracy: "85%+ user-rated relevance",
      features: "Modular pipeline for future online learning"
    },
    featured: true,
    year: "2024"
  },
  {
    id: "grocery-manager", 
    title: "Grocery Store Manager",
    subtitle: "Inventory, Billing & Reports",
    description: "SKU tracking, low-stock alerts, printable invoices with comprehensive inventory management and reporting system.",
    category: "Backend",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "React"],
    stats: {
      impact: "30% reduction in stockouts",
      features: "Real-time inventory tracking"
    },
    featured: true,
    year: "2023"
  },
  {
    id: "geocourier",
    title: "GeoCourier Tracker", 
    subtitle: "Live Courier Map & ETA",
    description: "Real-time location streaming and ETA sharing links for customers with live tracking dashboard.",
    category: "Backend",
    tags: ["FastAPI", "Firebase", "WebSockets", "Google Maps"],
    stats: {
      realtime: "Sub-second location updates",
      integration: "Google Maps SDK"
    },
    featured: false,
    year: "2023"
  }
];

const projectCategories = [
  { id: "all", name: "All", count: projects.length },
  { id: "backend", name: "Backend", count: projects.filter(p => p.category === "Backend").length },
  { id: "ai-ml", name: "AI/ML", count: projects.filter(p => p.category === "AI/ML").length }
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "all") return true;
    return project.category.toLowerCase().replace("/", "-") === activeFilter;
  });

  return (
    <section id="projects" className="py-24 bg-muted/30">
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
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my best work in backend development, AI/ML, and full-stack applications
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full max-w-lg">
              <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur-sm">
                {projectCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.name}
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                    {/* Project Image Placeholder */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white/20 z-0">
                        {project.title.charAt(0)}
                      </div>
                      
                      {/* Overlay with links */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                        <Button size="sm" variant="secondary">
                          <Eye className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                        <Button size="sm" variant="outline">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                      
                      {/* Featured badge */}
                      {project.featured && (
                        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground z-30">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <CardTitle className="font-heading text-xl mb-1">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-primary font-medium">
                            {project.subtitle}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {project.year}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tags.slice(0, 4).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs bg-muted/50"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 4 && (
                          <Badge variant="secondary" className="text-xs bg-muted/50">
                            +{project.tags.length - 4}
                          </Badge>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="space-y-2">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm">
                            <span className="text-muted-foreground capitalize">{key}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Projects Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" className="group bg-card/50 backdrop-blur-sm">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}