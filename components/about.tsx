import { FocusCardsDemo } from "@/components/ui/focus-cards-demo";

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-neutral-900">Najbliższy fotograf od urzędu</h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Nie ma znaczenia, czy potrzebujesz eleganckiego portretu biznesowego, wyjątkowych zdjęć ze ślubu, czy po prostu nowych fotografii do dokumentów.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Wszystko sprowadza się do jednego — chcesz wyglądać dobrze i czuć się swobodnie przed obiektywem. I właśnie w tym pomagam.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Od ponad 10 lat fotografuję ludzi w Raciborzu i okolicach – przedsiębiorców, zakochane pary, rodziny, każdego, kto chce zatrzymać chwilę na dłużej.
            </p>
          </div>
          <div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Nie lubię sztuczności. Lubię prawdziwe emocje, naturalne światło i spokój, który sprawia, że nawet najbardziej nieśmiała osoba potrafi się uśmiechnąć.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Fotografuję z uważnością i cierpliwością – tak, abyś na zdjęciach pozostał sobą, w najlepszym wydaniu.
            </p>
          </div>
        </div>
        
        {/* Focus Cards Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-900 text-center">Moje Usługi</h3>
          <FocusCardsDemo />
        </div>
      </div>
    </section>
  )
}
