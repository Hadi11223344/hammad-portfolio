import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { homepageSelected, kindBadgeClass } from "@/config/caseStudies";
import { cn } from "@/lib/utils";
import { useMotionVariants, viewportOnce } from "@/lib/motion";

export function Projects() {
  const { fadeSoft } = useMotionVariants();

  return (
    <section id="projects" className="section-pad border-y border-border/50 bg-background">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeader
          eyebrow="Selected work"
          title="Four proofs of the lane"
          lead="Flagship, paid, and independent work — open a case study for architecture and decisions."
          className="[&_h2]:font-extrabold"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10">
          {homepageSelected.map((study) => (
            <motion.div
              key={study.slug}
              variants={fadeSoft}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="min-w-0"
            >
              <Link to={study.route} className="group flex h-full flex-col">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-muted">
                  <img
                    src={study.cover}
                    alt={`${study.shortTitle} cover`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex min-w-0 flex-1 flex-col">
                  <span
                    className={cn(
                      "inline-flex w-fit max-w-full truncate rounded-sm border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em]",
                      kindBadgeClass[study.kind]
                    )}
                  >
                    {study.kindLabel}
                  </span>
                  <div className="mt-2.5 flex items-start justify-between gap-3">
                    <h3 className="min-w-0 font-heading text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                      {study.shortTitle}
                    </h3>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {study.problem}
                  </p>
                  <p className="mt-auto pt-3 text-xs text-muted-foreground/80">
                    {study.role}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/70 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link
              to="/research/seq-donut"
              className="link-underline text-muted-foreground hover:text-foreground"
            >
              Research · SEQ-DONUT
            </Link>
            <Link
              to="/experience/ireg-it"
              className="link-underline text-muted-foreground hover:text-foreground"
            >
              Experience · IREG-IT
            </Link>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary"
          >
            All projects
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
