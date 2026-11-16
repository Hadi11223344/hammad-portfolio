import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Github, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CaseStudy, CaseScreenshot, kindBadgeClass } from "@/config/caseStudies";
import { cn } from "@/lib/utils";

type Props = {
  study: CaseStudy;
};

export function CaseStudyLayout({ study }: Props) {
  const hasScreenshots = Boolean(study.screenshots?.length);
  const hasSnippets = study.implementationSnippets.length > 0;
  const hasEvaluation = study.evaluation.length > 0;
  const tags = study.tags.slice(0, 5);
  const shotCount = study.screenshots?.length ?? 0;
  const [lightbox, setLightbox] = useState<CaseScreenshot | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!lightbox) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Navbar />
      <main className="pt-28">
        <section className="relative">
          <div className="relative h-[28vw] min-h-[160px] max-h-[280px] w-full overflow-hidden bg-muted">
            <img
              src={study.cover}
              alt={`${study.shortTitle} project cover`}
              className="absolute inset-0 h-full w-full object-cover object-top"
              fetchPriority="high"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-5xl -mt-16 px-6 pb-8 sm:px-10 md:-mt-20 md:pb-10">
            <Link
              to={
                study.kind === "research" || study.kind === "internship"
                  ? "/"
                  : "/projects"
              }
              className="mb-5 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {study.kind === "research" || study.kind === "internship"
                ? "Home"
                : "All projects"}
            </Link>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <p
                className={cn(
                  "inline-flex rounded-sm border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em]",
                  kindBadgeClass[study.kind]
                )}
              >
                {study.kindLabel}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground/80">{study.role}</span>
                <span className="mx-2 text-border">·</span>
                {study.year}
              </p>
            </div>

            <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              {study.title}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
              {study.subtitle}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              {study.links.github ? (
                <Button asChild size="sm" className="gap-2 rounded-md">
                  <a
                    href={study.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-3.5 w-3.5" />
                    {study.links.label ?? "GitHub"}
                    <ExternalLink className="h-3 w-3 opacity-70" />
                  </a>
                </Button>
              ) : study.links.label ? (
                <span className="inline-flex items-center rounded-sm border border-border/70 px-3 py-1.5 text-xs text-muted-foreground">
                  {study.links.label}
                </span>
              ) : null}
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-border/70 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-10 px-6 pb-20 sm:px-10 md:space-y-12 md:pb-24">
          <section className="max-w-2xl border-t border-border/60 pt-8">
            <h2 className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
              Problem
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              {study.problem}
            </p>
            {study.visitorShouldUnderstand ? (
              <p className="mt-3 border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-foreground/85">
                {study.visitorShouldUnderstand}
              </p>
            ) : null}
          </section>

          {hasScreenshots ? (
            <section className="border-t border-border/60 pt-8">
              <h2 className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Product walkthrough
              </h2>
              <div
                className={cn(
                  "mx-auto mt-6 grid max-w-[960px] gap-5 sm:gap-6",
                  shotCount === 1 ? "sm:grid-cols-1" : "sm:grid-cols-2"
                )}
              >
                {study.screenshots!.map((shot) => (
                  <figure
                    key={shot.src}
                    className={cn(
                      "min-w-0",
                      shotCount === 1 && "mx-auto w-full max-w-xl"
                    )}
                  >
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {shot.caption}
                    </p>
                    <button
                      type="button"
                      onClick={() => setLightbox(shot)}
                      aria-label={`View larger: ${shot.caption}`}
                      className="block w-full overflow-hidden rounded-sm border border-border/70 bg-zinc-950 text-left transition-opacity hover:opacity-95"
                    >
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        className="mx-auto h-auto w-full max-w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

          <section className="border-t border-border/60 pt-8">
            <h2 className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
              Architecture
            </h2>
            <div className="mx-auto mt-5 max-w-[960px] overflow-auto rounded-sm border border-border/70 bg-card/30 p-3 md:p-4">
              <img
                src={study.diagram}
                alt={`${study.shortTitle} architecture diagram`}
                className="mx-auto h-auto max-h-[70vh] w-auto max-w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            {study.diagramCaption ? (
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                {study.diagramCaption}
              </p>
            ) : null}
            <div className="mt-5 flex flex-wrap gap-2">
              {study.architectureLayers.map((layer) => (
                <span
                  key={layer.name}
                  title={layer.detail}
                  className="rounded-sm border border-border/70 bg-muted/30 px-2.5 py-1.5 text-xs text-foreground/85"
                >
                  <span className="font-medium">{layer.name}</span>
                  {layer.detail ? (
                    <span className="text-muted-foreground"> · {layer.detail}</span>
                  ) : null}
                </span>
              ))}
            </div>
          </section>

          <section className="border-t border-border/60 pt-8">
            <h2 className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
              Engineering
            </h2>
            <div className="mt-5 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Contribution
                </p>
                <ul className="mt-3 space-y-2">
                  {study.contribution.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {study.decisions.length > 0 ? (
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    Decisions
                  </p>
                  <div className="mt-3 space-y-4">
                    {study.decisions.map((d) => (
                      <div key={d.question}>
                        <p className="text-sm font-medium text-foreground">
                          {d.question}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {d.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">{study.access}</p>
          </section>

          {hasSnippets ? (
            <section className="border-t border-border/60 pt-8">
              <h2 className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Implementation evidence
              </h2>
              <div className="mt-5 space-y-5">
                {study.implementationSnippets.map((s) => (
                  <div key={s.title}>
                    <p className="text-sm font-medium text-foreground">{s.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
                    <pre className="mt-3 overflow-x-auto rounded-sm border border-border/70 bg-muted/40 p-4 text-xs leading-relaxed text-foreground/90">
                      <code>{s.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {hasEvaluation ? (
            <section className="border-t border-border/60 pt-8">
              <h2 className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Evaluation
              </h2>
              <ul className="mt-4 space-y-3">
                {study.evaluation.map((e) => (
                  <li key={e.label}>
                    <p className="text-sm font-medium text-foreground">{e.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-8">
            <div className="flex flex-wrap items-center gap-3">
              {study.links.github ? (
                <Button asChild variant="outline" size="sm" className="gap-2 rounded-md">
                  <a
                    href={study.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-3.5 w-3.5" />
                    {study.links.label ?? "GitHub"}
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                </Button>
              ) : (
                <p className="text-sm text-muted-foreground">{study.links.label}</p>
              )}
            </div>
            {study.next ? (
              <Link
                to={study.next.href}
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Next: {study.next.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ) : null}
          </section>
        </div>
      </main>
      <Footer />

      {lightbox ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-lightbox-title"
          onClick={() => setLightbox(null)}
        >
          <Button
            ref={closeRef}
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
          >
            <X className="h-5 w-5" />
          </Button>
          <div className="max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <p id="case-lightbox-title" className="sr-only">
              {lightbox.caption}
            </p>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[85vh] max-w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
