"use client";

import Link from "next/link";
import { FocusCards } from "@/components/ui/focus-cards";

export default function GalleryLanding() {
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
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900">Galeria</h1>
        <p className="text-neutral-600 mt-2">Wybierz kategorię, aby zobaczyć zdjęcia.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto md:px-8 w-full">
        {cards.map((c) => (
          <Link key={c.title} href={c.href} className="block group">
            <div className="rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out">
              {/* @ts-ignore - FocusCards Card styles replicated inline for link */}
              <img src={c.src} alt={c.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end py-8 px-4">
                <div className="text-xl md:text-2xl font-medium text-white">{c.title}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}


