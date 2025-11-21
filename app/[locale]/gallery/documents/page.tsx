"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useDevice, getDeviceOptimizations } from "@/lib/use-device";
import { galleryPortraits } from "@/lib/image-gender-balance";

// Gallery faces - no duplicates, balanced gender distribution
const faces = galleryPortraits;

export default function DocumentsGallery() {
  const params = useParams();
  const locale = (params?.locale as string) || "pl";
  const device = useDevice();
  const optimizations = getDeviceOptimizations(device);
  
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
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
          Zdjęcia do dokumentów
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4, delay: 0.05 }} 
          className="text-neutral-600 text-lg mb-12"
        >
          Przykładowe realizacje zdjęć do dokumentów.
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {faces.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.02 * i }}
            className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image 
              src={src} 
              alt={`Zdjęcie do dokumentów - przykład ${i + 1}`} 
              fill 
              className="object-cover" 
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              quality={optimizations.images.quality}
              loading="lazy"
            />
          </motion.div>
        ))}
        </div>
      </div>
    </main>
  );
}


