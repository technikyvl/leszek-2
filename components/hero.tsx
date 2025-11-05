"use client"
import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import { useIsMobile } from "@/lib/use-breakpoint"

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
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

  return (
    <div ref={container} className="h-screen overflow-hidden relative">
      <motion.div style={{ y, scale, willChange: 'transform' }} className="relative h-full">
        <Image
          src="/polish%20photographer%20studio%20leszek%20jakiela%20in%20raciborz%20photo%20of%20his%20photo%20saloon%20from%20the%20street%20perspective.jpg"
          fill
          priority
          alt="Studio Leszek Jakieła w Raciborzu – widok z ulicy"
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
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
              <span className="text-white text-sm md:text-lg lg:text-xl font-semibold opacity-90">Długa 6, 47-400 Racibórz</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
