import Link from "next/link";

export default function DocumentsLanding({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return (
    <main className="min-h-screen px-6 py-20 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex justify-between items-center mb-8">
          <Link href={`/${locale}`} className="text-sm uppercase text-neutral-600 hover:text-neutral-900 transition-colors">← Strona główna</Link>
          <span className="text-neutral-400 uppercase text-xs">{locale}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-4">Zdjęcia do dokumentów</h1>
        <p className="text-neutral-600 text-lg mb-12">Podstrona w przygotowaniu.</p>
        <div className="rounded-xl border border-neutral-200 bg-white p-8 text-neutral-500">
          Tutaj wkrótce pojawią się informacje o rodzajach zdjęć, wymaganiach oraz przykłady.
        </div>
      </div>
    </main>
  );
}


