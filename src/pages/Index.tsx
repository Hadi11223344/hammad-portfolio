import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Server, Brain, Smartphone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.h1 
              className="font-heading font-bold text-5xl md:text-7xl text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Alex Alex
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 font-medium"
            >
              Backend & AI Engineer — Java Spring Boot • Python FastAPI/Django • Agentic AI
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              I build pragmatic, production-ready backends and AI features. 1+ year experience 
              shipping APIs, real-time features, and ML-powered user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-4 text-lg">
                Hire Me <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm font-medium px-8 py-4 text-lg">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap gap-3 justify-center items-center"
            >
              {["Available for Internships", "Open to Remote", "Based in Pakistan"].map((badge) => (
                <Badge key={badge} variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium">
                  {badge}
                </Badge>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a backend-leaning full-stack engineer focused on practical AI. I've built Java Spring Boot and Python FastAPI/Django services, real-time features with Firebase, payment integrations, chat systems, and API-driven apps.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["Java", "Spring Boot", "Python", "FastAPI", "Django", "PostgreSQL", "Redis", "Docker"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-card hover:bg-accent transition-colors px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="grid gap-6">
              {[
                { title: "Backend APIs", icon: Server, desc: "RESTful services and real-time features" },
                { title: "AI/ML", icon: Brain, desc: "Machine learning and intelligent automation" },
                { title: "Mobile Integration", icon: Smartphone, desc: "Cross-platform mobile apps" }
              ].map((area) => (
                <Card key={area.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <area.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-lg mb-2">{area.title}</h4>
                        <p className="text-muted-foreground">{area.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">Let's Work Together</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          <p className="text-muted-foreground text-lg mb-8">
            Ready to bring your next project to life? I'm available for internships and exciting opportunities.
          </p>
          
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="lg" asChild className="hover:text-primary">
              <a href="https://www.linkedin.com/in/hammad-tahir1" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild className="hover:text-primary">
              <a href="mailto:XXX@protonmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild className="hover:text-primary">
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;