import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hammad-tahir1",
      icon: Linkedin
    },
    {
      name: "GitHub", 
      href: "https://github.com/your-github",
      icon: Github
    },
    {
      name: "Email",
      href: "mailto:XXX@protonmail.com",
      icon: Mail
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Alex Alex
              </h3>
              <p className="text-muted-foreground max-w-md">
                Backend & AI Engineer specializing in Java Spring Boot, Python FastAPI/Django, 
                and practical AI solutions. Building the future, one API at a time.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  
                  return (
                    <Button
                      key={link.name}
                      variant="ghost"
                      size="sm"
                      asChild
                      className="hover:text-primary transition-colors"
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <IconComponent className="w-5 h-5" />
                        <span className="sr-only">{link.name}</span>
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="/Alex_Alex_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                <span className="text-foreground">Email:</span><br />
                XXX@protonmail.com
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground">Phone:</span><br />
                0333333333
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground">Location:</span><br />
                Pakistan
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Alex Alex. All rights reserved.
            </p>
            
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}