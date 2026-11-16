import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { timeline } from "@/config/content";
import { useMotionVariants, viewportOnce } from "@/lib/motion";

export function Timeline() {
  const { fade, stagger } = useMotionVariants();

  return (
    <section id="timeline" className="section-pad border-y border-border/70 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          eyebrow="Experience"
          title="Path, not a collage"
          lead="Education, internship, and paid delivery — chronological and accurate."
          className="[&_h2]:font-extrabold"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16"
        >
          {timeline.map((event, index) => (
            <motion.div
              key={`${event.year}-${event.title}`}
              variants={fade}
              className={`group grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 py-9 sm:grid-cols-[7.5rem_auto_minmax(0,1fr)] sm:gap-x-0 sm:py-11 ${
                index < timeline.length - 1 ? "border-b border-border/70" : ""
              }`}
            >
              <div className="col-start-1 row-start-1 sm:pr-8 sm:text-right">
                <p className="font-heading text-sm font-semibold tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-base">
                  {event.year}
                </p>
              </div>

              <div
                className="relative col-start-1 row-start-2 w-3 justify-self-center sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:mx-5 sm:w-4"
                aria-hidden
              >
                <span className="absolute left-1/2 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125" />
                {index < timeline.length - 1 ? (
                  <span className="absolute bottom-[-2.75rem] left-1/2 top-4 w-px -translate-x-1/2 bg-border sm:bottom-[-3.25rem]" />
                ) : null}
              </div>

              <div className="col-start-2 row-span-2 row-start-1 sm:col-start-3 sm:row-span-2 sm:row-start-1 sm:max-w-2xl">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {event.type}
                </p>
                <h3 className="mt-2 font-heading text-xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                  {event.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
