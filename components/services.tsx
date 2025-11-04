"use client"

import { FocusCards } from "@/components/ui/focus-cards"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

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
      {/* Document Photos Section - replaced with animated component */}
      <div>
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 text-center">
          Zdjęcia do Dokumentów
        </h3>
        <p className="text-center text-neutral-600 mb-8 max-w-2xl mx-auto">
          Wszystkie rodzaje zdjęć do dokumentów urzędowych. Wykonane zgodnie z aktualnymi przepisami, od ręki w expressie.
        </p>
        <AnimatedTestimonials
          autoplay
          testimonials={[
            {
              name: documentCategories[0].title,
              designation: "Dowód osobisty",
              quote: documentCategories[0].description,
              src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c51?q=80&w=1600&auto=format&fit=crop",
            },
            {
              name: documentCategories[1].title,
              designation: "Paszport",
              quote: documentCategories[1].description,
              src: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1600&auto=format&fit=crop",
            },
            {
              name: documentCategories[2].title,
              designation: "Prawo jazdy",
              quote: documentCategories[2].description,
              src: "https://images.unsplash.com/photo-1533613220915-609f661a6fd8?q=80&w=1600&auto=format&fit=crop",
            },
            {
              name: documentCategories[3].title,
              designation: "Legitymacja szkolna",
              quote: documentCategories[3].description,
              src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
            },
            {
              name: documentCategories[4].title,
              designation: "Legitymacja studencka",
              quote: documentCategories[4].description,
              src: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1600&auto=format&fit=crop",
            },
            {
              name: documentCategories[5].title,
              designation: "Dyplom",
              quote: documentCategories[5].description,
              src: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=1600&auto=format&fit=crop",
            },
            {
              name: documentCategories[6].title,
              designation: "Wiza",
              quote: documentCategories[6].description,
              src: "https://images.unsplash.com/photo-1517632298129-5f63a2050c02?q=80&w=1600&auto=format&fit=crop",
            },
            {
              name: documentCategories[7].title,
              designation: "Biznes",
              quote: documentCategories[7].description,
              src: "https://images.unsplash.com/photo-1554774853-b415df9eeb92?q=80&w=1600&auto=format&fit=crop",
            },
          ]}
        />
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

