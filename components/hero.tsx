"use client"
import Image from "next/image"
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useDevice, getDeviceOptimizations } from "@/lib/use-device"
import { heroPortraits } from "@/lib/image-gender-balance"

const facePortraits = heroPortraits

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)
  const device = useDevice()
  const optimizations = getDeviceOptimizations(device)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  })

  // Device-optimized transforms
  const parallaxIntensity = optimizations.animations.parallaxIntensity
  const maxY = device.isLowEnd ? 50 : device.type === "mobile" ? 100 : device.type === "tablet" ? 150 : 200
  const maxScale = device.isLowEnd ? 1.02 : device.type === "mobile" ? 1.05 : device.type === "tablet" ? 1.08 : 1.1

  const y = useTransform(scrollYProgress, [0, 1], [0, maxY * parallaxIntensity], {
    clamp: false,
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, maxScale], {
    clamp: false,
  })

  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -30])

  // Auto-rotate carousel every 2 seconds (faster) - optimized with requestAnimationFrame
  useEffect(() => {
    let frameId: number;
    let lastTime = 0;
    const interval = 2000;
    
    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= interval) {
        setCurrentIndex((prev) => (prev + 1) % facePortraits.length)
        lastTime = currentTime;
      }
      frameId = requestAnimationFrame(animate);
    };
    
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [])

  return (
    <div ref={container} className="h-screen relative" style={{ overflow: 'hidden' }}>
      <motion.div 
        style={{ 
          y, 
          scale, 
          willChange: optimizations.performance.useWillChange ? 'transform' : 'auto',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }} 
        className="relative h-full bg-white"
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="absolute inset-0"
            style={{
              willChange: 'opacity',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          >
        <Image
              src={facePortraits[currentIndex]}
          fill
              priority={currentIndex === 0}
              alt="Zdjęcia do dokumentów - portrety"
              style={{ objectFit: "contain", objectPosition: "center center" }}
              sizes="100vw"
              loading={currentIndex === 0 ? "eager" : "lazy"}
              quality={optimizations.images.quality}
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
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
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