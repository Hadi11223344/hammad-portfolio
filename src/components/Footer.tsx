import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { scrollToId, useMotionVariants, viewportOnce } from "@/lib/motion";

export function Footer() {
  const year = new Date().getFullYear();
  const { fade } = useMotionVariants();
  const navigate = useNavigate();

  const handleNav = (href: string, type: "route" | "hash") => {
    if (type === "hash") {
      if (window.location.pathname === "/") {
        scrollToId(href.replace("/#", "").replace("#", ""));
      } else {
        navigate(href);
      }
      return;
    }
    navigate(href);
  };

  const social = [
    { name: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
    { name: "GitHub", href: siteConfig.social.github, icon: Github },
    { name: "Email", href: siteConfig.social.email, icon: Mail },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto max-w-7xl border-t border-primary-foreground/15 px-6 py-16 sm:px-10 sm:py-20"
      >
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-16">
          <div>
            <h3 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              {siteConfig.name}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
              Backend & Applied AI Engineer — I build the backend systems that make AI useful.
              Open to ASE / Backend roles in Lahore.
            </p>
            <div className="mt-6 flex gap-1">
              {social.map((link) => {
                const Icon = link.icon;
                return (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <a
                      href={link.href}
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{link.name}</span>
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/65">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.href, link.type)}
                    className="link-underline text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/65">
              Contact
            </h4>
            <div className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.location}</p>
              <a
                href={siteConfig.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-block pt-1 text-primary-foreground"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p>Built with React · FastAPI-focused portfolio</p>
        </div>
      </div>
    </footer>
  );
}
