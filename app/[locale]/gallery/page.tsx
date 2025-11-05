"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function GalleryLanding() {
  const params = useParams();
  const locale = (params?.locale as string) || "pl";
  const cards = [
    {
      title: "Zdjęcia do dokumentów",
      src: "/0H2A0169_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
      href: "documents",
    },
    {
      title: "Sesje studyjne",
      src: "/individual%20photo%20session%20polish%20girl.jpg",
      href: "studio",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-20 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Simple nav */}
        <div className="flex justify-start items-center mb-6">
          <Link href={`/${locale}`} className="text-sm uppercase text-neutral-600 hover:text-neutral-900">← Powrót</Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900">Galeria</h1>
          <p className="text-neutral-600 mt-2">Wybierz kategorię, aby zobaczyć zdjęcia.</p>
        </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:px-8 w-full">
        {cards.map((c) => (
          <Link key={c.title} href={`/${locale}/gallery/${c.href}`} className="block group">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-72 md:h-[28rem] w-full transition-all duration-300 ease-out"
            >
              <img src={c.src} alt={c.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center">
                <div className="text-2xl md:text-3xl font-semibold text-white text-center drop-shadow-lg">
                  {c.title}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      </div>
    </main>
  );
}


