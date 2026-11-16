import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { personalInfo, techStack } from "@/config/content";
import { useMotionVariants, viewportOnce } from "@/lib/motion";

export function About() {
  const { fade, stagger } = useMotionVariants();

  return (
    <section id="about" className="section-pad relative bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          eyebrow="About"
          title="Backends that make AI useful"
          lead={personalInfo.bio}
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-10"
          >
            <div>
              <h3 className="font-heading text-xl font-semibold tracking-tight">What I can show</h3>
              <ul className="mt-5 space-y-3.5">
                {personalInfo.highlights.map((item) => (
                  <motion.li
                    key={item}
                    variants={fade}
                    className="flex gap-3 text-[15px] leading-relaxed text-foreground/80"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary/80" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold tracking-tight">Core stack</h3>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                {techStack.map((tech) => (
                  <span key={tech.name} className="hairline-chip text-sm">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-10"
          >
            {personalInfo.focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                variants={fade}
                className="group border-l-2 border-transparent pl-0 transition-colors duration-300 hover:border-primary/40"
              >
                <p className="font-heading text-xs font-medium tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-primary/80">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-2 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                  {area.title}
                </h4>
                <div className="section-rule mt-3 opacity-60 transition-opacity group-hover:opacity-100" />
                <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
