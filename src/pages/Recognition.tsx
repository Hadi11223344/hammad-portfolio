import { useEffect, useRef, useState } from "react";
import { ExternalLink, FileText, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { recognitionItems, type RecognitionItem } from "@/config/recognition";
import { siteConfig } from "@/config/site";

export default function Recognition() {
  const [lightbox, setLightbox] = useState<RecognitionItem | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.title = `Recognition — ${siteConfig.name}`;
    return () => {
      document.title = siteConfig.title;
    };
  }, []);

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

  const awards = recognitionItems.filter((i) => i.type === "award");
  const education = recognitionItems.filter((i) => i.type === "education");
  const experience = recognitionItems.filter((i) => i.type === "experience");
  const courses = recognitionItems.filter((i) => i.type === "course");

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Navbar />
      <main className="section-pad pt-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Proof
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Recognition
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Awards, education, internship letter, and certificates — titles and
            dates match the documents shown.
          </p>

          <Section title="Awards" items={awards} onOpen={setLightbox} />
          <Section title="Education" items={education} onOpen={setLightbox} />
          <Section title="Experience" items={experience} onOpen={setLightbox} />
          <Section
            title="Courses & certificates"
            items={courses}
            onOpen={setLightbox}
          />
        </div>
      </main>
      <Footer />

      {lightbox?.image ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="recognition-lightbox-title"
          onClick={() => setLightbox(null)}
        >
          <Button
            ref={closeRef}
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4"
            onClick={() => setLightbox(null)}
            aria-label="Close certificate"
          >
            <X className="h-5 w-5" />
          </Button>
          <div onClick={(e) => e.stopPropagation()}>
            <p id="recognition-lightbox-title" className="sr-only">
              {lightbox.title}
            </p>
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="max-h-[90vh] max-w-full object-contain shadow-lg"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Section({
  title,
  items,
  onOpen,
}: {
  title: string;
  items: RecognitionItem[];
  onOpen: (item: RecognitionItem) => void;
}) {
  if (items.length === 0) return null;

  return (
    <section className="mt-14">
      <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <ul className="mt-6 space-y-8">
        {items.map((item) => (
          <li
            key={item.id}
            className="grid gap-5 border-b border-border/60 pb-8 md:grid-cols-[minmax(0,1fr)_minmax(180px,280px)] md:gap-10"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">
                {item.highlight}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground md:text-xl">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.meta}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
              {item.file ? (
                <Button asChild variant="outline" size="sm" className="mt-4 gap-2 rounded-md">
                  <a href={item.file} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-3.5 w-3.5" />
                    {item.fileLabel ?? "Open document"}
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                </Button>
              ) : null}
            </div>

            {item.image ? (
              <button
                type="button"
                onClick={() => onOpen(item)}
                className="group relative overflow-hidden rounded-sm border border-border/70 bg-muted/20 text-left transition-colors hover:border-primary/40"
              >
                <img
                  src={item.image}
                  alt=""
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <span className="sr-only">View {item.title}</span>
              </button>
            ) : item.file ? (
              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[140px] flex-col items-center justify-center gap-2 rounded-sm border border-border/70 bg-muted/20 px-4 text-center transition-colors hover:border-primary/40"
              >
                <FileText className="h-6 w-6 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {item.fileLabel ?? "PDF certificate"}
                </span>
              </a>
            ) : (
              <div className="flex min-h-[120px] items-center justify-center rounded-sm border border-dashed border-border/80 bg-muted/20 px-4 text-center">
                <p className="text-xs text-muted-foreground">No scan attached</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
