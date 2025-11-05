"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import { SectionReveal } from "@/components/ui/section-reveal"

export default function Section() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30], { clamp: false })

  return (
    <SectionReveal>
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Interactive Google Map as background */}
      <div className="fixed top-0 left-0 h-screen w-full -z-10">
        <motion.div style={{ y }} className="relative w-full h-full">
          <iframe
            title="Mapa - Leszek Jakieła Photography"
            src="https://www.google.com/maps?q=Leszek+Jakie%C5%82a+Photography+Racib%C3%B3rz&output=embed&hl=pl"
            className="absolute inset-0 h-full w-full border-0 [filter:grayscale(1)_contrast(1.1)_brightness(0.35)]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Subtle dark overlay to emulate dark theme */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
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
