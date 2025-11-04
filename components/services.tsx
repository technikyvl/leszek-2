"use client"

import { FocusCards } from "@/components/ui/focus-cards"
import DocumentCarousel from "./document-carousel"

export default function Services() {
  // Document photo categories (from FotoJoker)
  const documentCategories = [
    {
      title: "Zdjęcia do Dowodu Osobistego",
      src: "/icons/id-card.svg",
      description: "Zdjęcia spełniające wszystkie wymogi urzędowe"
    },
    {
      title: "Zdjęcia do Paszportu",
      src: "/icons/passport.svg",
      description: "Wymiar i format zgodny z przepisami"
    },
    {
      title: "Zdjęcia do Prawa Jazdy",
      src: "/icons/drivers-license.svg",
      description: "Szybko i zgodnie z wymogami"
    },
    {
      title: "Zdjęcia do Legitymacji Szkolnej",
      src: "/icons/student-id.svg",
      description: "Dla uczniów i studentów"
    },
    {
      title: "Zdjęcia do Legitymacji Studenckiej",
      src: "/icons/student-id.svg",
      description: "Zdjęcia studenckie"
    },
    {
      title: "Zdjęcia do Dyplomu",
      src: "/icons/diploma.svg",
      description: "Eleganckie zdjęcia na dyplomy"
    },
    {
      title: "Zdjęcia do Wizy",
      src: "/icons/visa.svg",
      description: "Zgodne z wymogami konsularnymi"
    },
    {
      title: "Zdjęcia Biznesowe",
      src: "/icons/briefcase.svg",
      description: "Profesjonalne portrety do CV i LinkedIn"
    },
  ]

  // Studio photography categories
  const studioCategories = [
    {
      title: "Sesje Indywidualne",
      src: "/icons/portrait.svg",
      description: "Profesjonalne portrety indywidualne"
    },
    {
      title: "Sesje Rodzinne",
      src: "/icons/family.svg",
      description: "Wspólne zdjęcia rodzinne w profesjonalnym studio"
    },
    {
      title: "Sesje Świąteczne",
      src: "/icons/holiday.svg",
      description: "Pamiątkowe zdjęcia z okazji świąt"
    },
    {
      title: "Sesje Portretowe",
      src: "/icons/portrait.svg",
      description: "Klasyczne portrety studyjne"
    },
  ]

  return (
    <div className="space-y-16">
      {/* Document Photos Section */}
      <div>
        <DocumentCarousel items={documentCategories} />
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

