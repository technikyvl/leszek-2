import Link from "next/link";

export default function StudioGallery({ params }: { params: { locale: string } }) {
  const locale = params.locale || "pl";
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-center mb-3">
          <Link href={`/${locale}/gallery`} className="text-sm uppercase text-neutral-600 hover:text-neutral-900">← Kategoria</Link>
          <Link href={`/${locale}`} className="text-sm uppercase text-neutral-600 hover:text-neutral-900">Strona główna</Link>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900">Sesje studyjne</h1>
        <p className="text-neutral-600 mt-2">Galeria zdjęć studyjnych pojawi się wkrótce.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Puste miejsce na przyszłe zdjęcia */}
      </div>
    </main>
  );
}


