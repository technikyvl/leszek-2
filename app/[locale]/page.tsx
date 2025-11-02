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
    try {
      const lenis = new Lenis()

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    } catch (error) {
      console.error('Lenis error:', error)
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
