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

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Detect if mobile device for optimized settings
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 0.5, // Slightly longer on mobile for smoother feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: isMobile ? 1.2 : 2, // Reduced for iPhone performance
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
