"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import { SectionReveal } from "@/components/ui/section-reveal"

export default function Featured() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  // Simplified transforms for better performance
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05])

  const textY = useTransform(scrollYProgress, [0, 1], [30, -30])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <SectionReveal>
      <div ref={container} className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0">
      <motion.div 
        className="relative flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2"
        style={{ 
          y: imageY, 
          opacity: imageOpacity, 
          scale: imageScale,
          willChange: 'transform, opacity'
        }}
      >
        <Image
          src="/mapa.png"
          alt="Mapa lokalizacji studia fotograficznego"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          quality={85}
        />
      </motion.div>
      <motion.div 
        className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1"
        style={{ y: textY, opacity: textOpacity }}
      >
        <h3 className="uppercase mb-4">Zdjęcia do Dokumentów</h3>
        <p className="text-2xl lg:text-4xl mb-8">
          Nie musisz już biegać po całym mieście, żeby zrobić zdjęcia do dokumentów.
          Moje studio znajduje się tuż obok urzędu, gdzie wyrabiasz dowód osobisty, prawo jazdy, paszport czy inne dokumenty.
        </p>
        
        <button 
          onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              const lenis = (window as any).lenis;
              if (lenis) {
                lenis.scrollTo(element, {
                  offset: -20,
                  duration: 1,
                });
              } else {
                const yOffset = -20;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }
          }}
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit"
        >
          UMÓW SESJĘ
        </button>
      </motion.div>
      </div>
    </SectionReveal>
  )
}
