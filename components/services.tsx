"use client"

import { FocusCards } from "@/components/ui/focus-cards"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { servicePortraits } from "@/lib/image-gender-balance"

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

  // Local face images - balanced gender mix
  const faceImages = servicePortraits

  // Studio photography categories
  const studioCategories = [
    {
      title: "Sesje Indywidualne",
      src: "/individual%20photo%20session%20polish%20girl.jpg",
      description: "Profesjonalne portrety indywidualne"
    },
    {
      title: "Sesje Rodzinne",
      src: "/polish%20family%20photo.jpg",
      description: "Wspólne zdjęcia rodzinne w profesjonalnym studio"
    },
    {
      title: "Sesje Świąteczne",
      src: "/christmas%20polish%20family%20photo.jpg",
      description: "Pamiątkowe zdjęcia z okazji świąt"
    },
    {
      title: "Sesje Portretowe",
      src: "/polish%20businessmen%20with%20silver%20beard%20smiling%20realistic%20photo.jpg",
      description: "Klasyczne portrety studyjne",
      // Shift focus slightly to the right so the full face is visible
      objectPosition: "80% center",
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
          testimonials={documentCategories.map((cat, idx) => ({
            name: cat.title,
            designation: cat.title.replace("Zdjęcia do ", ""),
            quote: cat.description,
            src: faceImages[idx % faceImages.length],
          }))}
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
        <FocusCards cards={studioCategories as any} />
      </div>
    </div>
  )
}

