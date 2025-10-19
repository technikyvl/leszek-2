"use client"

import Image from "next/image"
import { useTranslations } from 'next-intl'

export default function Gallery() {
  const t = useTranslations('gallery')
  
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
    <section className="min-h-screen bg-neutral-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-neutral-900">{t('title')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
