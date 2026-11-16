import { useReducedMotion, type Variants } from "framer-motion";

export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const viewportOnce = { once: true, margin: "-60px" } as const;
export const viewportOnceLoose = { once: true, margin: "-80px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

export const fadeUpSoft: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOutExpo },
  },
};

/** Opacity-only variants for prefers-reduced-motion */
export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.25 },
  },
};

export const staggerChildren: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export const staggerChildrenReduced: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0, delayChildren: 0 },
  },
};

export function usePrefersReducedMotion() {
  return Boolean(useReducedMotion());
}

export function useMotionVariants() {
  const reduced = usePrefersReducedMotion();
  return {
    reduced,
    fade: reduced ? fadeOnly : fadeUp,
    fadeSoft: reduced ? fadeOnly : fadeUpSoft,
    stagger: reduced ? staggerChildrenReduced : staggerChildren,
  };
}

export function scrollBehavior(): ScrollBehavior {
  if (typeof window === "undefined") return "smooth";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior() });
}
