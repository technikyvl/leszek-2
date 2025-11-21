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
  const inView = useInView(ref, { once, margin: "0px 0px -50px 0px" });
  
  // On mobile, show immediately to avoid visibility issues
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shouldAnimate = !isMobile;
  
  return (
    <motion.div
      ref={ref}
      initial={shouldAnimate ? { opacity: 0, y: 24 } : { opacity: 1, y: 0 }}
      animate={shouldAnimate && !inView ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={cn(className)}
      style={{
        willChange: shouldAnimate && !inView ? 'transform, opacity' : 'auto',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
});


