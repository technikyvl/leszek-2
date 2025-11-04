"use client"

import dynamic from "next/dynamic";
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { SectionReveal } from "@/components/ui/section-reveal"

const Services = dynamic(() => import("./services"), {
  ssr: false,
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><p className="text-neutral-600">Ładowanie usług...</p></div>
});

export default function About() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  // Animation only used for Methods section below
  return (
    <section ref={container} id="about" className="min-h-screen bg-white py-20 px-6">
      <SectionReveal className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-neutral-900">
          Najbliższy fotograf od urzędu
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Przede wszystkim specjalizuję się w zdjęciach do dokumentów – dowód osobisty, paszport, prawo jazdy, legitymacja studencka. 
              Wszystko, czego potrzebujesz do urzędowych spraw.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Dodatkowo oferuję profesjonalną fotografię biznesową oraz sesje studyjne – portrety firmowe, sesje indywidualne, rodzinne i świąteczne.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Moje studio znajduje się tuż obok urzędu, więc nie musisz już biegać po całym mieście. 
              Szybko, profesjonalnie, w dobrej cenie. <span className="font-semibold">Wszystko od ręki w expressie!</span>
            </p>
          </div>
          <div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Od ponad 10 lat fotografuję ludzi w Raciborzu i okolicach. Znam wymagania urzędów i wiem, 
              jak zrobić zdjęcie, które zostanie zaakceptowane za pierwszym razem.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Pracuję w profesjonalnym studio z najwyższej klasy oświetleniem <span className="font-semibold">Profoto</span>. 
              Nawet paszportowe zdjęcie może wyglądać świetnie!
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              <span className="font-semibold">Orły Fotografii</span> – jestem dumny z nagrody, którą otrzymałem za moją pracę.
            </p>
          </div>
        </div>

        {/* Methods & Certification Section */}
        <motion.div 
          className="bg-neutral-900 text-white rounded-2xl p-8 md:p-12 mb-16"
          style={{ 
            y: useTransform(scrollYProgress, [0, 0.3], [40, 0]),
            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 1])
          }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                Metody Robienia Zdjęć
              </h3>
              <div className="flex items-center gap-4 mb-2">
                <div className="relative w-32 h-16 md:w-40 md:h-20">
                  <Image
                    src="/orly.png"
                    alt="Orły Fotografii - Nagroda"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm md:text-base text-neutral-300 font-semibold">Orły Fotografii</p>
                  <p className="text-xs md:text-sm text-neutral-400">Nagroda za doskonałość</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Profesjonalne Studio Fotograficzne</h4>
                    <p className="text-neutral-300">
                      Zdjęcia wykonywane w profesjonalnym studio z kontrolowanym oświetleniem Profoto
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Kontrola Jakości na Każdym Etapie</h4>
                    <p className="text-neutral-300">
                      Wielokrotne ujęcia z natychmiastowym podglądem i wyborem najlepszego zdjęcia
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Profesjonalna Obróbka</h4>
                    <p className="text-neutral-300">
                      Retusz i korekta wykonywane z Twoim uczestnictwem, zgodnie z Twoimi preferencjami
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Zgodność z Wymogami</h4>
                    <p className="text-neutral-300">
                      Każde zdjęcie spełnia aktualne wymogi urzędowe i jest gotowe do użycia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-neutral-700 pt-8 mt-8">
              <div className="text-center">
                <h4 className="text-xl md:text-2xl font-bold mb-4">
                  Certyfikowane Zdjęcia z Oprogramowaniem Dokumenty Pro 8
                </h4>
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl font-bold text-white mb-1">370+</span>
                    <span className="text-neutral-300">Formatów</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl font-bold text-white mb-1">80</span>
                    <span className="text-neutral-300">Krajów</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xl md:text-2xl font-bold text-white mb-1">✓</span>
                    <span className="text-neutral-300">Certyfikat Zgodności</span>
                  </div>
                </div>
                <p className="mt-6 text-neutral-300 max-w-2xl mx-auto">
                  Wszystkie zdjęcia wykonywane są przy użyciu profesjonalnego oprogramowania <span className="font-semibold text-white">Dokumenty Pro 8</span>, 
                  które zapewnia zgodność z ponad <span className="font-semibold text-white">370 formatami</span> z <span className="font-semibold text-white">80 krajów</span>. 
                  Każde zdjęcie zawiera <span className="font-semibold text-white">certyfikat zgodności</span>, potwierdzający spełnienie wszystkich wymogów urzędowych.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Key Features Section */}
        <div className="bg-neutral-50 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-900 text-center">
            Dlaczego warto wybrać nasze studio?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Profesjonalne Studio z Oświetleniem Profoto</h4>
                  <p className="text-neutral-600">
                    Najwyższej klasy sprzęt fotograficzny zapewniający doskonałą jakość zdjęć
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Wielokrotne Ujęcia – Wybierasz Najlepsze</h4>
                  <p className="text-neutral-600">
                    Robimy kilka ujęć podczas sesji i wspólnie z klientem wybieramy najlepsze zdjęcie
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Profesjonalny Retusz z Twoim Uczestnictwem</h4>
                  <p className="text-neutral-600">
                    Na życzenie klienta oferujemy profesjonalny retusz. Uczestniczysz podczas obróbki, 
                    więc możesz śledzić na bieżąco intensywność retuszu i decydować o finalnym efekcie
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Express – Od Ręki</h4>
                  <p className="text-neutral-600">
                    Wszystkie usługi realizowane natychmiastowo, bez oczekiwania
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Categories */}
        <div className="mb-16">
          <Services />
        </div>
      </SectionReveal>
    </section>
  )
}
