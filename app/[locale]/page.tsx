"use client"

import { useEffect } from "react"
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
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
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
