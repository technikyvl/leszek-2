"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { useDevice, getDeviceOptimizations } from "@/lib/use-device"

export default function Section() {
  const container = useRef<HTMLDivElement>(null)
  const device = useDevice()
  const optimizations = getDeviceOptimizations(device)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })
  
  // Device-optimized parallax
  const parallaxIntensity = optimizations.animations.parallaxIntensity
  const maxMovement = device.isLowEnd ? 5 : device.type === "mobile" ? 10 : device.type === "tablet" ? 15 : 20
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [-maxMovement * parallaxIntensity, maxMovement * parallaxIntensity], 
    { clamp: false }
  )

  return (
    <SectionReveal>
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Background photo instead of interactive map */}
      <div className="fixed top-0 left-0 h-screen w-full -z-10">
        <motion.div 
          style={{ 
            y, 
            willChange: optimizations.performance.useWillChange ? 'transform' : 'auto'
          }} 
          className="relative w-full h-full"
        >
          <Image 
            src="/legitymacja - dyplom - przed retuszem i po oraz w różnych układach/IMG_1092_pp1 kopia-PL Legitymacja szkolna-102x152 mm_6x 35x45 L.jpg" 
            alt="Zdjęcia do dokumentów" 
            fill 
            style={{ objectFit: "cover" }} 
            sizes="100vw"
            quality={optimizations.images.quality}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg">
        Zdjęcia do Dokumentów
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
        Profesjonalne zdjęcia do dokumentów i portrety biznesowe.
        Szybko, tanio, obok urzędu.
      </p>
    </div>
    </SectionReveal>
  )
}
