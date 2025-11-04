"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

type GoogleSummary = {
  rating: number
  user_ratings_total: number
  reviews?: { author_name: string; text: string; rating: number }[]
}

export default function Gallery() {
  const [summary, setSummary] = useState<GoogleSummary | null>(null)

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

  return (
    <section className="bg-neutral-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-neutral-900"
        >
          Opinie Klientów
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-neutral-600 mb-10"
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

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl bg-white p-6 shadow-sm border border-neutral-200"
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
