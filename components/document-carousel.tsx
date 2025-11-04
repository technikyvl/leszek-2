"use client"

import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

type DocItem = {
  title: string
  src: string
  description: string
}

type Props = {
  items: DocItem[]
}

export default function DocumentCarousel({ items }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      {/* Left: Single slide, click to advance */}
      <div className="w-full">
        <div className="relative cursor-pointer select-none" ref={emblaRef} onClick={scrollNext}>
          <div className="flex">
            {items.map((item, idx) => (
              <div key={idx} className="min-w-0 flex-[0_0_100%]">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200 bg-white">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-8 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Title and dynamic caption */}
      <div className="w-full">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
          Zdjęcia do dokumentów
        </h3>
        <p className="text-neutral-600 mb-3">
          {items[selectedIndex]?.description}
        </p>
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
          <span className="font-semibold">Aktualna kategoria:</span>
          <span>{items[selectedIndex]?.title}</span>
        </div>
      </div>
    </div>
  )
}


