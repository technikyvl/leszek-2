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
      syncTouch: true,
      syncTouchLerp: 0.1,
    })

    lenisRef.current = lenis

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Expose lenis to window for scroll functions
    ;(window as any).lenis = lenis

    // Handle smooth scroll to section on page load (e.g., from subpages)
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        const sectionId = hash.substring(1) // Remove #
        // Wait for Lenis to be ready and page to render
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element && lenis) {
            lenis.scrollTo(element, {
              offset: -20,
              duration: 1.5,
            })
          }
        }, 100)
      }
    }

    // Check hash on mount
    handleHashScroll()

    // Also listen for hash changes
    window.addEventListener('hashchange', handleHashScroll)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      lenis.destroy()
      delete (window as any).lenis
      window.removeEventListener('hashchange', handleHashScroll)
    }
  }, [optimizations])

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
