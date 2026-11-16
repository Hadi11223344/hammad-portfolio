import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { skills } from "@/config/content";
import { useMotionVariants, viewportOnce } from "@/lib/motion";

const tierOrder = ["core", "applied", "also"] as const;
const tierLabel: Record<(typeof tierOrder)[number], string> = {
  core: "Core",
  applied: "Applied",
  also: "Also used",
};

export function Skills() {
  const entries = Object.entries(skills);
  const { fade, stagger } = useMotionVariants();

  const grouped = tierOrder.map((tier) => ({
    tier,
    items: entries.filter(([, data]) => data.tier === tier),
  }));

  return (
    <section id="skills" className="section-pad border-y border-border/70 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16 xl:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              eyebrow="Skills"
              title="Stack by how I use it"
              lead="Core delivery tools first, then applied ML/DL/CV, then supporting frontend."
              className="[&_h2]:font-extrabold"
            />
          </div>

          <div className="mt-14 space-y-14 lg:mt-2">
            {grouped.map(({ tier, items }) => {
              if (!items.length) return null;
              const deEmp = tier === "also";
              return (
                <motion.div
                  key={tier}
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                >
                  <p
                    className={`mb-6 text-[11px] font-medium uppercase tracking-[0.2em] ${
                      deEmp ? "text-muted-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {tierLabel[tier]}
                  </p>
                  <div
                    className={`grid gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 ${
                      deEmp ? "border-t border-border/70 pt-8 opacity-90" : ""
                    }`}
                  >
                    {items.map(([category, data], index) => (
                      <motion.div key={category} variants={fade}>
                        <div className="flex items-baseline gap-4">
                          <span
                            className={`font-heading tracking-tight text-muted-foreground ${
                              deEmp ? "text-xl" : "text-3xl font-bold sm:text-4xl"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3
                            className={`font-heading tracking-tight ${
                              deEmp
                                ? "text-base font-medium text-foreground/70"
                                : "text-xl font-semibold text-foreground sm:text-2xl"
                            }`}
                          >
                            {category}
                          </h3>
                        </div>
                        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-3">
                          {data.items.map((skill) => (
                            <span
                              key={skill}
                              className={
                                deEmp
                                  ? "hairline-chip-muted text-xs"
                                  : "hairline-chip text-sm"
                              }
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
