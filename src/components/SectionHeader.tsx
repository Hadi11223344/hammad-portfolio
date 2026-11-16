import { motion } from "framer-motion";
import { easeOutExpo, useMotionVariants, viewportOnceLoose } from "@/lib/motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, lead, className = "" }: SectionHeaderProps) {
  const { reduced, fade } = useMotionVariants();

  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnceLoose}
      className={`max-w-2xl ${className}`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-heading text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight">
        {title}
      </h2>
      <motion.div
        className="section-rule mt-6 origin-left"
        initial={reduced ? false : { scaleX: 0 }}
        whileInView={reduced ? undefined : { scaleX: 1 }}
        viewport={viewportOnceLoose}
        transition={{ duration: 0.7, delay: 0.12, ease: easeOutExpo }}
      />
      {lead ? (
        <p className="mt-6 text-base leading-relaxed text-foreground/80 sm:text-lg">{lead}</p>
      ) : null}
    </motion.div>
  );
}
