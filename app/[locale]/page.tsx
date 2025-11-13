"use client"

import { useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Featured from "@/components/featured"
import Gallery from "@/components/gallery"
import Promo from "@/components/promo"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { useDevice, getDeviceOptimizations } from "@/lib/use-device"

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null)
  const device = useDevice()
  const optimizations = getDeviceOptimizations(device)

  useEffect(() => {
    const lenis = new Lenis({
      duration: optimizations.lenis.duration,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: optimizations.lenis.wheelMultiplier,
      touchMultiplier: optimizations.lenis.touchMultiplier,
      infinite: false,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Expose lenis to window for scroll functions
    ;(window as any).lenis = lenis

    return () => {
      lenis.destroy()
      delete (window as any).lenis
    }
  }, [])

  return (
    <main style={{ minHeight: '100vh', width: '100%' }}>
      <Header />
      <Hero />
      <About />
      <Featured />
      <Gallery />
      <Promo />
      <Contact />
      <Footer />
    </main>
  )
}
