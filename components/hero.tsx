"use client"
import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import Header from "./header"

export default function Hero() {
  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src="/images/woman-horse.jpg"
          fill
          alt="Sesja ślubna w plenerze"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex items-end justify-start z-10">
          <div className="text-left text-white px-6 pb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight uppercase">Fotografia na Każdą Okazję</h1>
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="px-4 py-2 border-2 border-white bg-transparent text-white text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
            >
              SKONTAKTUJ SIĘ TERAZ
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
