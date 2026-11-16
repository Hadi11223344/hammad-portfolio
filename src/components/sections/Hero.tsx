import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/config/content";
import { siteConfig } from "@/config/site";
import { scrollToId, usePrefersReducedMotion } from "@/lib/motion";
import portrait from "@/assets/portrait.jpg";

export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-background">
      <motion.div
        initial={reduced ? false : { scale: 1.04, opacity: 0.9 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: reduced ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[52svh] min-h-[17rem] w-full overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[46vw] xl:w-[48vw] 2xl:w-[50vw]"
      >
        <img
          src={portrait}
          alt={`Portrait of ${personalInfo.name}, Backend and Applied AI Engineer`}
          className="h-full w-full object-cover object-[50%_28%] lg:object-[42%_18%]"
          fetchPriority="high"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background via-background/40 to-transparent lg:hidden"
        />
        <div aria-hidden className="hero-portrait-mask absolute inset-0 hidden lg:block" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-0 max-w-7xl flex-col justify-center px-6 pb-16 pt-10 sm:px-10 lg:min-h-[100svh] lg:px-12 lg:pb-24 lg:pt-24">
        <div className="hero-read-wash relative max-w-xl rounded-sm lg:max-w-[28rem] xl:max-w-xl">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.5 }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground"
          >
            {personalInfo.title}
          </motion.p>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.65, delay: reduced ? 0 : 0.06 }}
            className="font-heading text-[clamp(3rem,9vw,6.5rem)] font-extrabold leading-[0.9] tracking-tight text-foreground"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            initial={reduced ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: reduced ? 0 : 0.7,
              delay: reduced ? 0 : 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="section-rule mt-6 origin-left"
          />

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : 0.22 }}
            className="mt-6 max-w-md text-lg leading-relaxed tracking-tight text-foreground/80 sm:text-xl"
          >
            {personalInfo.tagline}.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : 0.34 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Button size="lg" asChild className="icon-nudge h-12 rounded-md px-8 text-base tracking-tight shadow-sm">
              <Link to="/projects">
                Explore projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="icon-nudge glass-soft h-12 rounded-md border-foreground/20 px-8 text-base tracking-tight"
            >
              <a href={siteConfig.resume.url} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => scrollToId("contact")}
              className="h-12 rounded-md px-6 text-base tracking-tight text-muted-foreground hover:text-foreground"
            >
              Get in touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
