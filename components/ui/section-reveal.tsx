"use client";

import { motion, useInView } from "framer-motion";
import { PropsWithChildren, useRef, memo } from "react";
import { cn } from "@/lib/utils";

type Props = PropsWithChildren<{
  className?: string;
  once?: boolean;
}>;

export const SectionReveal = memo(function SectionReveal({ children, className, once = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "0px 0px -100px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={cn(className)}
      style={{
        willChange: inView ? 'auto' : 'transform, opacity',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
});


