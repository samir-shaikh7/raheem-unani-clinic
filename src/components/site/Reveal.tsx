"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({ children, className, stagger = 0.08 }: { children: ReactNode; className?: string; stagger?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, y = 24 }: { children: ReactNode; className?: string; y?: number }) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };
  return <motion.div variants={variants} className={className}>{children}</motion.div>;
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      {children}
    </div>
  );
}
