"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const faces = [
  "/0H2A0113_pp%20kopia-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A0169_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A0318_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A0430_pp1-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A0562_pp1%20kopia2-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A0601_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A1586_pp%20kopia-Format%20dodatkowy-102x152%20mm_10x15%20kopia.jpg",
  "/0H2A1740_pp1-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A1769_pp1-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A2303_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A2378_pp%20kopia1-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A2534_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A3097_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A4108_pp%20kopia-Format%20dodatkowy-102x152%20mm_10x15%20kopia1.jpg",
  "/0H2A4130_pp12-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A4173%20kopia_pp%20kopia-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A5617_pp1-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A6027_pp%20kopia-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A6236_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A6591_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A8177_pp%20kopia-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A8732_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A9414_pp1-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A9640_pp1-Format%20dodatkowy-102x152%20mm_10x15%20kopia.jpg",
  "/IMG_1517_pp1a-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_1777_pp1-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_1790_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_2221_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_2379_pp%20kopia-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_2964_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_3032_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_3198_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_3803_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_3952_pp%20kor-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_3987_pp1-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_4055_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_4272_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_4311_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_4903_pp1-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_6387_pp1-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_7250_pp1-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_7254_pp1-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_7284_pp-Format%20dodatkowy-102x152%20mm_10x15%20j_czerny.jpg",
  "/IMG_8932_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
];

export default function DocumentsGallery({ params }: { params: { locale: string } }) {
  const locale = params.locale || "pl";
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-center mb-3">
          <Link href={`/${locale}/gallery`} className="text-sm uppercase text-neutral-600 hover:text-neutral-900">← Kategoria</Link>
          <Link href={`/${locale}`} className="text-sm uppercase text-neutral-600 hover:text-neutral-900">Strona główna</Link>
        </div>
        <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="text-4xl md:text-6xl font-bold text-neutral-900">Zdjęcia do dokumentów</motion.h1>
        <motion.p initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.4,delay:.05}} className="text-neutral-600 mt-2">Przykładowe realizacje zdjęć do dokumentów.</motion.p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {faces.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.02 * i }}
            className="relative aspect-[3/4] overflow-hidden rounded-lg"
          >
            <Image src={src} alt="Zdjęcie do dokumentów" fill className="object-cover" unoptimized />
          </motion.div>
        ))}
      </div>
    </main>
  );
}


