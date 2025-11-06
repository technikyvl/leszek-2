"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import type React from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/lib/use-breakpoint";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const [failedMap, setFailedMap] = useState<Record<string, boolean>>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

  // Auto-scroll to active item
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeElement = container.children[activeIndex] as HTMLElement;
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  // Handle scroll to update active index
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const firstSpacer = container.querySelector('[data-carousel-spacer="start"]') as HTMLElement | null;
    const itemEl = container.querySelector('[data-carousel-item]') as HTMLElement | null;
    if (!itemEl) return;
    const gap = 16; // gap-4
    const spacerW = firstSpacer ? firstSpacer.clientWidth : 0;
    const itemW = itemEl.clientWidth;
    const offset = Math.max(0, container.scrollLeft - spacerW);
    const newIndex = Math.round(offset / (itemW + gap));
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < testimonials.length) {
      setActiveIndex(newIndex);
    }
  };

  // Drag-to-scroll for mouse and touch (pointer events)
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startScrollLeftRef.current = container.scrollLeft;
    container.setPointerCapture?.(e.pointerId);
    // Prevent text selection while dragging
    document.body.style.userSelect = "none";
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const dx = e.clientX - startXRef.current;
    container.scrollLeft = startScrollLeftRef.current - dx;
  };

  const endDrag = (e?: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    document.body.style.userSelect = "";
    if (e && scrollContainerRef.current) {
      scrollContainerRef.current.releasePointerCapture?.(e.pointerId);
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // Translate vertical wheel into horizontal scroll for desktop mouses
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      container.scrollBy({ left: e.deltaY, behavior: "smooth" });
    }
  };

  // Side padding to allow first/last slide to center perfectly
  const sidePadding = isMobile ? "16px" : "calc((100% - 560px)/2)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: isMobile ? 0.35 : 0.5, ease: "easeOut" }}
      className={cn("max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16", className)}
    >
      <div className="flex flex-col gap-8">
        {/* Horizontal scrollable images */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onWheel={handleWheel}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            paddingInline: 0,
            scrollPaddingInline: 0,
          }}
          role="region"
          aria-label="Karuzela zdjęć do dokumentów"
        >
          {/* Start spacer to allow first slide to center */}
          <div className="shrink-0" style={{ width: sidePadding }} aria-hidden data-carousel-spacer="start" />
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 basis-full md:basis-[560px] snap-center px-1"
              style={{ scrollSnapAlign: 'center', scrollSnapStop: 'always' }}
              data-carousel-item
            >
              <div className="relative h-[22rem] md:h-[26rem] lg:h-[28rem] w-full overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={failedMap[testimonial.src] ? "/placeholder.jpg" : testimonial.src}
                  alt={testimonial.name}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 500px"
                  draggable={false}
                  className="h-full w-full object-cover object-center"
                  onError={() => {
                    setFailedMap((m) => ({ ...m, [testimonial.src]: true }));
                  }}
                />
              </div>
            </div>
          ))}
          {/* End spacer to allow last slide to center */}
          <div className="shrink-0" style={{ width: sidePadding }} aria-hidden data-carousel-spacer="end" />
        </div>

        {/* Active item info */}
        <motion.div
          key={activeIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {testimonials[activeIndex].name}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            {testimonials[activeIndex].designation}
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {testimonials[activeIndex].quote}
          </p>
        </motion.div>

        {/* Scroll indicators */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                if (scrollContainerRef.current) {
                  const container = scrollContainerRef.current;
                  const firstSpacer = container.querySelector('[data-carousel-spacer="start"]') as HTMLElement | null;
                  const itemEl = container.querySelector('[data-carousel-item]') as HTMLElement | null;
                  const gap = 16;
                  const spacerW = firstSpacer ? firstSpacer.clientWidth : 0;
                  const itemW = itemEl ? itemEl.clientWidth : 0;
                  container.scrollTo({
                    left: spacerW + index * (itemW + gap),
                    behavior: "smooth",
                  });
                }
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-8 bg-neutral-900"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.div>
  );
};


