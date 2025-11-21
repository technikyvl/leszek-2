"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { useDevice, getDeviceOptimizations } from "@/lib/use-device"

export default function Featured() {
  const container = useRef<HTMLDivElement>(null)
  const device = useDevice()
  const optimizations = getDeviceOptimizations(device)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  // Device-optimized transforms
  const parallaxIntensity = optimizations.animations.parallaxIntensity
  const imageMaxY = device.isLowEnd ? 20 : device.type === "mobile" ? 30 : device.type === "tablet" ? 40 : 50
  const textMaxY = device.isLowEnd ? 15 : device.type === "mobile" ? 20 : device.type === "tablet" ? 25 : 30
  const maxScale = device.isLowEnd ? 1.02 : device.type === "mobile" ? 1.03 : device.type === "tablet" ? 1.04 : 1.05

  const imageY = useTransform(scrollYProgress, [0, 1], [imageMaxY * parallaxIntensity, -imageMaxY * parallaxIntensity])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1 - (1 - maxScale), 1, maxScale])

  const textY = useTransform(scrollYProgress, [0, 1], [textMaxY * parallaxIntensity, -textMaxY * parallaxIntensity])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <SectionReveal>
      <div ref={container} className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0">
      <motion.div 
        className={`relative flex-1 mb-8 lg:mb-0 lg:order-2 ${
          device.type === "mobile" 
            ? "h-[300px] sm:h-[400px] w-full p-2" 
            : "h-[400px] lg:h-[800px]"
        }`}
        style={{ 
          y: imageY, 
          opacity: imageOpacity, 
          scale: imageScale,
          willChange: optimizations.performance.useWillChange ? 'transform, opacity' : 'auto',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <Image
          src="/mapa.png"
          alt="Mapa lokalizacji studia fotograficznego"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={device.type === "mobile" ? "object-contain" : "object-cover"}
          style={device.type === "mobile" ? { 
            objectPosition: "center"
          } : undefined}
          quality={optimizations.images.quality}
        />
      </motion.div>
      <motion.div 
        className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1"
        style={{ 
          y: textY, 
          opacity: textOpacity,
          willChange: optimizations.performance.useWillChange ? 'transform, opacity' : 'auto',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
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
