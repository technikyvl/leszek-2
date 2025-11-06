"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DocumentsLanding({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Top nav */}
        <div className="flex justify-between items-center mb-8">
          <Link href={`/${locale}`} className="text-sm uppercase text-neutral-600 hover:text-neutral-900 transition-colors">← Strona główna</Link>
          <span className="text-neutral-400 uppercase text-xs">{locale}</span>
        </div>

        {/* Hero */}
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-4">Zdjęcia do dokumentów</h1>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">Profesjonalne zdjęcia biometryczne spełniające rygorystyczne wymogi urzędowe. Gotowe w 15 minut, z możliwością wyboru najlepszego ujęcia i retuszem w cenie.</p>
        </motion.div>

        {/* Selling points */}
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-12">
          {[
            {title:"100% pewności",desc:"Zdjęcia wykonywane według aktualnych wytycznych – akceptowalne w urzędach."},
            {title:"Gotowe w 15 minut",desc:"Ekspresowa realizacja i wydruk na profesjonalnym sprzęcie."},
            {title:"Retusz w cenie",desc:"Wykonujemy kilka ujęć i retuszujemy zgodnie z Twoimi preferencjami."},
          ].map((b,i)=> (
            <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 text-center">
              <div className="text-xl font-semibold text-neutral-900 mb-1">{b.title}</div>
              <div className="text-neutral-600 text-sm">{b.desc}</div>
            </div>
          ))}
        </div>

        {/* Dokumenty Pro */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">Zgodność z wytycznymi</h2>
            <p className="text-neutral-600 mb-4">Wszystkie zdjęcia przygotowujemy w licencjonowanym oprogramowaniu <span className="font-semibold">Dokumenty Pro</span>, które posiada aktualizowane profile ponad 370 formatów i wspiera wymagania MSWiA oraz konsulatów.</p>
            <p className="text-neutral-600">Masz pewność, że zdjęcia będą <span className="font-semibold">biometryczne</span> i spełnią wymogi Twojego dokumentu.</p>
          </div>
          <div className="relative h-56 md:h-72 lg:h-80 order-1 md:order-2 rounded-xl overflow-hidden border border-neutral-200">
            <Image src="/dokumenty-pro-new.jpg" alt="Oprogramowanie Dokumenty Pro" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>

        {/* Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <div className="text-lg font-semibold mb-2">Dowód, Paszport, Prawo jazdy</div>
            <p className="text-neutral-600 text-sm">Biometryczne 35×45 mm. Twarz prosto do obiektywu, naturalny wyraz, zamknięte usta, dobrze widoczne oczy.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <div className="text-lg font-semibold mb-2">Dyplom i Legitymacja</div>
            <p className="text-neutral-600 text-sm">Najczęściej 45×65 mm; lewy półprofil (legitymacja). Dostosowujemy się do wymogów uczelni/instytucji.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <div className="text-lg font-semibold mb-2">Wiza</div>
            <p className="text-neutral-600 text-sm">Specyficzne kadrowanie i odległości. Przygotowujemy zgodnie z wymaganiami kraju (np. USA).</p>
          </div>
        </div>

        {/* Guidelines */}
        <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-8 mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">Wytyczne (skrócone)</h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-neutral-700 text-sm list-disc pl-5">
            <li>Twarz w pełni widoczna, bez przechylania głowy; patrz prosto w obiektyw.</li>
            <li>Naturalny wyraz twarzy, zamknięte usta, widoczna linia brwi.</li>
            <li>Oczy otwarte i wyraźne; okulary tylko bez zasłaniania oczu/odbić.</li>
            <li>Nakrycia głowy – wyłącznie z uzasadnieniem (np. religijnym).</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href={`/${locale}#contact`} className="inline-block bg-black text-white px-5 py-3 rounded-md text-sm hover:bg-neutral-800 transition-colors">Umów zdjęcia</Link>
          <p className="text-xs text-neutral-500 mt-3">Źródło inspiracji treści: <a className="underline" href="https://www.fotosilesia.pl/oferta/zdjecia-do-dokumentow/" target="_blank" rel="noreferrer">FotoSilesia – Zdjęcia do dokumentów</a></p>
        </div>
      </div>
    </main>
  );
}


