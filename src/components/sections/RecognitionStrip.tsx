import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { proofStrip } from "@/config/recognition";
import { useMotionVariants, viewportOnce } from "@/lib/motion";

export function RecognitionStrip() {
  const { fade } = useMotionVariants();

  return (
    <section
      id="recognition-strip"
      className="border-y border-border/60 bg-card/25 py-10 md:py-12"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Compact proof
          </p>
          <Link
            to="/recognition"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Full recognition
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <motion.ul
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {proofStrip.map((item) => (
            <li key={item.label} className="border-l border-border/70 pl-4">
              <p className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {item.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {item.label}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
