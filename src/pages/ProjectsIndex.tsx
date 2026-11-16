import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  caseStudies,
  kindBadgeClass,
  productCaseStudies,
  type CaseStudy,
} from "@/config/caseStudies";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function ProjectsIndex() {
  useEffect(() => {
    document.title = `Projects — ${siteConfig.name}`;
    return () => {
      document.title = siteConfig.title;
    };
  }, []);

  const secondary = caseStudies.filter(
    (c) => c.kind === "research" || c.kind === "internship"
  );

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Navbar />
      <main className="pt-28 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <header className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Case studies
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Projects
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              Software and applied AI products with honest ownership
              labels—flagship, paid, and independent work.
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12">
            {productCaseStudies.map((study) => (
              <ProjectCard key={study.slug} study={study} />
            ))}
          </div>

          {secondary.length > 0 ? (
            <section className="mt-16 border-t border-border/70 pt-12 sm:mt-20">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Also
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                Research & experience
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8">
                {secondary.map((study) => (
                  <ProjectCard key={study.slug} study={study} compact />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ProjectCard({
  study,
  compact = false,
}: {
  study: CaseStudy;
  compact?: boolean;
}) {
  return (
    <Link
      to={study.route}
      className="group flex h-full min-w-0 flex-col"
    >
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-sm bg-muted",
          compact ? "aspect-[16/10]" : "aspect-[16/10]"
        )}
      >
        <img
          src={study.cover}
          alt={`${study.shortTitle} cover`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.opacity = "0";
          }}
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
          <h2
            className={cn(
              "min-w-0 font-display font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary",
              compact ? "text-lg md:text-xl" : "text-xl md:text-2xl"
            )}
          >
            {study.shortTitle}
          </h2>
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
  );
}
