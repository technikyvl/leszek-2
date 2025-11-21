"use client"

import { motion, useMotionValue, useSpring, useInView } from "framer-motion"
import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useDevice, getDeviceOptimizations } from "@/lib/use-device"

type GoogleSummary = {
  rating: number
  user_ratings_total: number
  reviews?: { author_name: string; text: string; rating: number }[]
}

export default function Gallery() {
  const [summary, setSummary] = useState<GoogleSummary | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const sectionInView = useInView(sectionRef, { once: true, margin: "0px 0px -100px 0px" })

  useEffect(() => {
    let mounted = true
    fetch("/api/google-reviews")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!mounted) return
        if (data && data.rating) setSummary(data)
        else setSummary({ rating: 5.0, user_ratings_total: 227 })
      })
      .catch(() => setSummary({ rating: 5.0, user_ratings_total: 227 }))
    return () => {
      mounted = false
    }
  }, [])

  const rating = summary?.rating ?? 5.0
  const total = summary?.user_ratings_total ?? 227
  const reviews = summary?.reviews ?? [
    { author_name: "Magda", text: "Pełen profesjonalizm, zdjęcia do dokumentów od ręki.", rating: 5 },
    { author_name: "Kamil", text: "Szybko, miło i zgodnie z wymogami urzędowymi.", rating: 5 },
    { author_name: "Anna", text: "Najlepsze studio w okolicy – polecam!", rating: 5 },
  ]

  function Stat({ label, target, start, suffix = "", prefix = "", decimals = 0 }: { label: string; target: number; start: boolean; suffix?: string; prefix?: string; decimals?: number }) {
    const mv = useMotionValue(0)
    // Device-optimized spring settings
    const device = useDevice()
    const optimizations = getDeviceOptimizations(device)
    const spring = useSpring(mv, { 
      stiffness: optimizations.animations.springStiffness, 
      damping: 20 
    })
    useEffect(() => {
      if (start) mv.set(target)
    }, [start, target, mv])
    const [val, setVal] = useState(0)
    useEffect(() => {
      const unsub = spring.on("change", (v) => setVal(v))
      return () => unsub()
    }, [spring])
    return (
      <div className="rounded-xl bg-white p-6 shadow-sm border border-neutral-200 text-center">
        <div className="text-3xl md:text-4xl font-bold text-neutral-900">
          {prefix}{val.toFixed(decimals)}{suffix}
        </div>
        <div className="text-sm text-neutral-500 mt-1">{label}</div>
      </div>
    )
  }

  return (
    <section id="gallery" ref={sectionRef} className="min-h-screen bg-neutral-100 py-20 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl md:text-6xl font-bold mb-4 text-neutral-900"
          style={{
            willChange: sectionInView ? 'auto' : 'transform, opacity',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          Opinie Klientów
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
          className="text-neutral-600 mb-10"
          style={{
            willChange: sectionInView ? 'auto' : 'transform, opacity',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          <span className="inline-flex items-center gap-2 font-semibold text-neutral-900">
            <span className="flex items-center gap-1 text-yellow-500">
              <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
            </span>
            {rating.toFixed(1)}/5 – {total} opinii na Google
          </span>
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Stat label="Opinie" target={total} suffix="+" start={sectionInView} />
          <Stat label="Ocena" target={rating} decimals={1} prefix="★ " start={sectionInView} />
          <Stat label="Sesji fotograficznych" target={450} suffix="+" start={sectionInView} />
          <Stat label="Zdjęć do dokumentów" target={4550} suffix="+" start={sectionInView} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] }}
              className="rounded-xl bg-white p-6 shadow-sm border border-neutral-200"
              style={{
                willChange: sectionInView ? 'auto' : 'transform, opacity',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-500">
                  {Array.from({ length: rev.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <span className="text-sm text-neutral-500">{rev.author_name}</span>
            </div>
              <p className="text-neutral-700 leading-relaxed">{rev.text}</p>
            </motion.div>
          ))}
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Leszek+Jakie%C5%82a+Photography"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 text-sm text-neutral-600 hover:text-neutral-900 underline"
        >
          Zobacz wszystkie opinie na Google
        </a>
      </div>
    </section>
  )
}
