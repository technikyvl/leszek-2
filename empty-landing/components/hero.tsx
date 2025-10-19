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
          src="/images/mountain-landscape.jpg"
          fill
          alt="Mountain landscape background"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex items-center justify-start z-10">
          <div className="text-left text-white max-w-3xl px-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Fotografia Ślubna w Raciborzu</h1>
            <p className="text-sm md:text-base leading-relaxed mb-8">
              Profesjonalna fotografia ślubna i wideofilmowanie. Uchwytam najpiękniejsze chwile Waszego dnia, 
              tworząc wspomnienia, które będą towarzyszyć Wam przez całe życie.
            </p>
            <button className="px-4 py-2 border-2 border-white bg-transparent text-white text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              ZOBACZ OFERTĘ
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
