import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: "fastapi-structure",
    title: "How I Structure FastAPI Projects for Scale",
    excerpt: "Learn my proven project structure for building maintainable FastAPI applications that can handle growth from prototype to production.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["backend", "fastapi", "python"],
    featured: true
  },
  {
    id: "embeddings-recommendations", 
    title: "Simple Embeddings + K-Means for Fashion Recommendations",
    excerpt: "Discover how to build a recommendation system using CNN embeddings and clustering algorithms for personalized fashion suggestions.",
    date: "2024-02-03",
    readTime: "7 min read",
    tags: ["ai", "ml", "recommender"],
    featured: false
  },
  {
    id: "spring-to-django",
    title: "From Spring Boot to Django: What Transfers Well",
    excerpt: "My experience transitioning from Java Spring Boot to Python Django and the concepts that translate between these powerful frameworks.",
    date: "2024-03-12", 
    readTime: "6 min read",
    tags: ["backend", "java", "python"],
    featured: false
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-24">
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
              Latest Blog Posts
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sharing insights about backend development, AI/ML, and software engineering
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  {/* Featured badge */}
                  {post.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  )}

                  {/* Content placeholder */}
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent z-10" />
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-muted-foreground/20 z-0">
                      {post.title.charAt(0)}
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <CardTitle className="font-heading text-xl mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    
                    <CardDescription>
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Read more */}
                    <div className="flex items-center text-sm font-medium text-primary group-hover:text-primary-hover transition-colors">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Posts Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button variant="outline" size="lg" className="group bg-card/50 backdrop-blur-sm">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}