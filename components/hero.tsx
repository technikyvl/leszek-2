"use client"
import Image from "next/image"
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useIsMobile } from "@/lib/use-breakpoint"

const facePortraits = [
  "/0H2A0169_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A0318_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A0430_pp1-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A0562_pp1%20kopia2-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A0601_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_1777_pp1-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_1790_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_2221_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
]

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 150 : 300], {
    clamp: false,
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 1.1 : 1.2], {
    clamp: false,
  })

  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facePortraits.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={container} className="h-screen overflow-hidden relative">
      <motion.div style={{ y, scale, willChange: 'transform' }} className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={facePortraits[currentIndex]}
              fill
              priority={currentIndex === 0}
              alt="Zdjęcia do dokumentów - portrety"
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end justify-start z-10">
          <motion.div 
            className="text-left text-white px-6 pb-8"
            style={{
              opacity: textOpacity,
              y: textY,
              willChange: 'transform, opacity'
            }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight uppercase">Zdjęcia do Dokumentów - Racibórz</h1>
            <div className="flex items-center gap-4">
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
                className="px-4 py-2 border-2 border-white bg-transparent text-white text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
              >
                SKONTAKTUJ SIĘ TERAZ
              </button>
              <span className="text-white text-sm md:text-lg lg:text-xl font-semibold opacity-90">Batorego 7, 47-400 Racibórz</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
