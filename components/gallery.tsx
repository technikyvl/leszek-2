"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export default function Gallery() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
    layoutEffect: false,
  })

  const titleY = useTransform(scrollYProgress, [0, 0.3], [50, 0])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  const images = [
    {
      src: "/images/woman-horse.jpg",
      alt: "Sesja ślubna w plenerze",
    },
    {
      src: "/images/mountain-landscape.jpg",
      alt: "Fotografia ślubna w górach",
    },
    {
      src: "/images/spiral-circles.jpg",
      alt: "Abstrakcyjne ujęcia ślubne",
    },
    {
      src: "/placeholder.jpg",
      alt: "Portret ślubny",
    },
  ]

  return (
    <section ref={container} className="min-h-screen bg-neutral-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-12 text-neutral-900"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          Moja Praca
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => {
            const imageProgress = useTransform(
              scrollYProgress,
              [index * 0.15, 0.3 + index * 0.15],
              [0, 1]
            )
            const imageY = useTransform(imageProgress, [0, 1], [100, 0])
            const imageOpacity = useTransform(imageProgress, [0, 1], [0, 1])
            const imageScale = useTransform(imageProgress, [0, 1], [0.8, 1])

            return (
              <motion.div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-lg"
                style={{ y: imageY, opacity: imageOpacity, scale: imageScale }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
