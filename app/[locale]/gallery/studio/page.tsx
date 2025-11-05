"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function StudioGallery() {
  const params = useParams();
  const locale = (params?.locale as string) || "pl";
  
  return (
    <main className="min-h-screen px-6 py-20 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex justify-between items-center mb-8">
          <Link href={`/${locale}/gallery`} className="text-sm uppercase text-neutral-600 hover:text-neutral-900 transition-colors">← Kategoria</Link>
          <Link href={`/${locale}`} className="text-sm uppercase text-neutral-600 hover:text-neutral-900 transition-colors">Strona główna</Link>
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 16 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-4xl md:text-6xl font-bold text-neutral-900 mb-4"
        >
          Sesje studyjne
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4, delay: 0.05 }} 
          className="text-neutral-600 text-lg mb-12"
        >
          Galeria zdjęć studyjnych pojawi się wkrótce.
        </motion.p>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Puste miejsce na przyszłe zdjęcia */}
        </div>
      </div>
    </main>
  );
}


