"use client"

import Link from "next/link"
import Image from "next/image"
import { useDevice } from "@/lib/use-device"

export default function Footer() {
  const device = useDevice()
  
  // Device-specific heights
  const getFooterHeight = () => {
    if (device.type === "mobile") {
      if (device.screenWidth < 375) return "300px" // Small phones
      if (device.screenWidth < 414) return "350px" // Medium phones
      return "400px" // Large phones
    }
    if (device.type === "tablet") {
      return "500px"
    }
    return "600px" // Desktop
  }
  
  const footerHeight = getFooterHeight()
  
  return (
    <footer className="relative bg-neutral-900 w-full" style={{ minHeight: footerHeight }}>
      <div className="bg-neutral-900 pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 h-full w-full flex flex-col justify-between" style={{ minHeight: footerHeight }}>
        <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
          <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.85] mt-4 sm:mt-6 lg:mt-10 mb-4 sm:mb-0 text-white font-bold tracking-tight">
            LESZEK JAKIEŁA
          </h1>
          <div className="flex flex-col items-start sm:items-end gap-3">
            <a
              href="https://www.orlyfotografii.pl/profile-195180-leszek-jakiela-photography"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-[300px] h-[75px]"
            >
              <Image
                src="https://www.orlyfotografii.pl/images/medals/195180/laureat300_gold_pl.png"
                alt="Leszek Jakieła Photography - Racibórz - Laureat Orłów Fotografii"
                fill
                className="object-contain"
                sizes="300px"
                quality={90}
                loading="lazy"
              />
            </a>
            <p className="text-white text-sm sm:text-base">© 2025 Leszek Jakieła - Racibórz</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
