"use client"
import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import { useTranslations } from 'next-intl'

export default function Hero() {
  let t;
  try {
    t = useTranslations('hero')
  } catch (error) {
    // Fallback if translations fail
    t = (key: string) => {
      const fallbacks: Record<string, string> = {
        title: 'Zdjęcia do Dokumentów - Racibórz',
        button: 'SKONTAKTUJ SIĘ TERAZ',
        address: 'Długa 6, 47-400 Racibórz'
      }
      return fallbacks[key] || key
    }
  }
  
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
    layoutEffect: false,
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300], {
    clamp: false,
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2], {
    clamp: false,
  })

  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  return (
    <div ref={container} className="h-screen overflow-hidden relative">
      <motion.div style={{ y, scale }} className="relative h-full">
        <Image
          src="/images/woman-horse.jpg"
          fill
          alt="Sesja ślubna w plenerze"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex items-end justify-start z-10">
          <motion.div 
            className="text-left text-white px-6 pb-8"
            style={{
              opacity: textOpacity,
              y: textY,
            }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight uppercase">{t('title')}</h1>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const yOffset = -20;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="px-4 py-2 border-2 border-white bg-transparent text-white text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
              >
                {t('button')}
              </button>
              <span className="text-white text-sm md:text-lg lg:text-xl font-semibold opacity-90">{t('address')}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
