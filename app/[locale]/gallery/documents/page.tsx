import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const faces = [
  "/0H2A0113_pp%20kopia-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A0169_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A0318_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A0430_pp1-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A0562_pp1%20kopia2-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/0H2A0601_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_1517_pp1a-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_1777_pp1-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_2964_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_3032_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_3198_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_3803_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
  "/IMG_4055_pp-Format%20dodatkowy-102x152%20mm_10x15.jpg",
];

export default function DocumentsGallery() {
  // locale-aware back link
  // @ts-ignore - this is a client file when bundled by Next
  const params = useParams?.() as any;
  const locale = (params?.locale as string) || "pl";
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-center mb-3">
          <Link href={`/${locale}/gallery`} className="text-sm uppercase text-neutral-600 hover:text-neutral-900">← Kategoria</Link>
          <Link href={`/${locale}`} className="text-sm uppercase text-neutral-600 hover:text-neutral-900">Strona główna</Link>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900">Zdjęcia do dokumentów</h1>
        <p className="text-neutral-600 mt-2">Przykładowe realizacje zdjęć do dokumentów.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {faces.map((src) => (
          <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image src={src} alt="Zdjęcie do dokumentów" fill className="object-cover" unoptimized />
          </div>
        ))}
      </div>
    </main>
  );
}


