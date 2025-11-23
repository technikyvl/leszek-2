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
  const [backgroundColor, setBackgroundColor] = useState('rgb(153, 153, 153)')
  
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

  const imageRef = useRef<HTMLImageElement | null>(null)

  // Function to extract background color from image (only white/light background)
  const extractBackgroundColor = (imageElement: HTMLImageElement | null) => {
    if (!imageElement || !imageElement.complete) return
    
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = imageElement.naturalWidth || imageElement.width
    canvas.height = imageElement.naturalHeight || imageElement.height
    ctx.drawImage(imageElement, 0, 0)
    
    // Sample pixels from corners and edges (where white background usually is)
    const width = canvas.width
    const height = canvas.height
    const sampleSize = Math.min(100, Math.floor(width * 0.15), Math.floor(height * 0.15))
    
    // Sample from corners and edges
    const sampleAreas = [
      { x: 0, y: 0, w: sampleSize, h: sampleSize }, // top-left corner
      { x: width - sampleSize, y: 0, w: sampleSize, h: sampleSize }, // top-right corner
      { x: 0, y: height - sampleSize, w: sampleSize, h: sampleSize }, // bottom-left corner
      { x: width - sampleSize, y: height - sampleSize, w: sampleSize, h: sampleSize }, // bottom-right corner
      { x: Math.floor(width / 2) - Math.floor(sampleSize / 2), y: 0, w: sampleSize, h: sampleSize }, // top center
      { x: Math.floor(width / 2) - Math.floor(sampleSize / 2), y: height - sampleSize, w: sampleSize, h: sampleSize }, // bottom center
    ]
    
    let totalR = 0, totalG = 0, totalB = 0, pixelCount = 0
    
    sampleAreas.forEach(area => {
      for (let x = area.x; x < area.x + area.w; x += 3) {
        for (let y = area.y; y < area.y + area.h; y += 3) {
          const pixel = ctx.getImageData(x, y, 1, 1).data
          const r = pixel[0]
          const g = pixel[1]
          const b = pixel[2]
          
          // Only consider light/white pixels (RGB values > 180 indicate light background)
          // Also check that colors are relatively balanced (not too much difference between R, G, B)
          const isLight = r > 180 && g > 180 && b > 180
          const isBalanced = Math.abs(r - g) < 30 && Math.abs(g - b) < 30 && Math.abs(r - b) < 30
          
          if (isLight && isBalanced) {
            totalR += r
            totalG += g
            totalB += b
            pixelCount++
          }
        }
      }
    })
    
    // If we found enough light pixels, use their average
    // Otherwise, fall back to a default light gray
    if (pixelCount > 10) {
      const avgR = Math.round(totalR / pixelCount)
      const avgG = Math.round(totalG / pixelCount)
      const avgB = Math.round(totalB / pixelCount)
      setBackgroundColor(`rgb(${avgR}, ${avgG}, ${avgB})`)
    } else {
      // Fallback to light gray if not enough light pixels found
      setBackgroundColor('rgb(240, 240, 240)')
    }
  }

  // Extract background color when image loads
  useEffect(() => {
    const img = document.querySelector(`img[alt="Zdjęcia do dokumentów - portrety"]`) as HTMLImageElement | null
    if (img) {
      if (img.complete) {
        extractBackgroundColor(img)
      } else {
        img.onload = () => extractBackgroundColor(img)
      }
    }
  }, [currentIndex])

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
          backfaceVisibility: 'hidden',
          backgroundColor: backgroundColor
        }} 
        className="relative h-full"
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
              onLoad={(e) => {
                const img = e.currentTarget
                extractBackgroundColor(img)
              }}
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