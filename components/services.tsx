"use client"

import { FocusCards } from "@/components/ui/focus-cards"

export default function Services() {
  // Document photo categories (from FotoJoker)
  const documentCategories = [
    {
      title: "Zdjęcia do Dowodu Osobistego",
      src: "/placeholder.jpg",
      description: "Zdjęcia spełniające wszystkie wymogi urzędowe"
    },
    {
      title: "Zdjęcia do Paszportu",
      src: "/placeholder.jpg",
      description: "Wymiar i format zgodny z przepisami"
    },
    {
      title: "Zdjęcia do Prawa Jazdy",
      src: "/placeholder.jpg",
      description: "Szybko i zgodnie z wymogami"
    },
    {
      title: "Zdjęcia do Legitymacji Szkolnej",
      src: "/placeholder.jpg",
      description: "Dla uczniów i studentów"
    },
    {
      title: "Zdjęcia do Legitymacji Studenckiej",
      src: "/placeholder.jpg",
      description: "Zdjęcia studenckie"
    },
    {
      title: "Zdjęcia do Dyplomu",
      src: "/placeholder.jpg",
      description: "Eleganckie zdjęcia na dyplomy"
    },
    {
      title: "Zdjęcia do Wizy",
      src: "/placeholder.jpg",
      description: "Zgodne z wymogami konsularnymi"
    },
    {
      title: "Zdjęcia Biznesowe",
      src: "/placeholder.jpg",
      description: "Profesjonalne portrety do CV i LinkedIn"
    },
  ]

  // Studio photography categories
  const studioCategories = [
    {
      title: "Sesje Indywidualne",
      src: "/placeholder.jpg",
      description: "Profesjonalne portrety indywidualne"
    },
    {
      title: "Sesje Rodzinne",
      src: "/placeholder.jpg",
      description: "Wspólne zdjęcia rodzinne w profesjonalnym studio"
    },
    {
      title: "Sesje Świąteczne",
      src: "/placeholder.jpg",
      description: "Pamiątkowe zdjęcia z okazji świąt"
    },
    {
      title: "Sesje Portretowe",
      src: "/placeholder.jpg",
      description: "Klasyczne portrety studyjne"
    },
  ]

  return (
    <div className="space-y-16">
      {/* Document Photos Section */}
      <div>
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 text-center">
          Zdjęcia do Dokumentów
        </h3>
        <p className="text-center text-neutral-600 mb-8 max-w-2xl mx-auto">
          Wszystkie rodzaje zdjęć do dokumentów urzędowych. Wykonane zgodnie z aktualnymi przepisami, od ręki w expressie.
        </p>
        <FocusCards cards={documentCategories.map(cat => ({ title: cat.title, src: cat.src }))} />
      </div>

      {/* Studio Photography Section */}
      <div>
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 text-center">
          Zdjęcia Studyjne
        </h3>
        <p className="text-center text-neutral-600 mb-8 max-w-2xl mx-auto">
          Profesjonalne sesje fotograficzne w naszym studio z oświetleniem Profoto
        </p>
        <FocusCards cards={studioCategories.map(cat => ({ title: cat.title, src: cat.src }))} />
      </div>
    </div>
  )
}

