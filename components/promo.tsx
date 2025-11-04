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
            src="https://www.google.com/maps?q=Leszek+Jakie%C5%82a+Photography+Racib%C3%B3rz&output=embed"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg">
        Zdjęcia do Dokumentów
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
        Profesjonalne zdjęcia do dokumentów i portrety biznesowe.
        Szybko, tanio, obok urzędu.
      </p>
    </div>
    </SectionReveal>
  )
}
