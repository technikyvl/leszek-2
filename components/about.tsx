import { FocusCardsDemo } from "@/components/ui/focus-cards-demo";

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-neutral-900">Najbliższy fotograf od urzędu</h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Przede wszystkim specjalizuję się w zdjęciach do dokumentów – dowód osobisty, paszport, prawo jazdy, legitymacja studencka. 
              Wszystko, czego potrzebujesz do urzędowych spraw.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Dodatkowo oferuję profesjonalną fotografię biznesową – portrety firmowe, zdjęcia korporacyjne, sesje dla przedsiębiorców.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Moje studio znajduje się tuż obok urzędu, więc nie musisz już biegać po całym mieście. 
              Szybko, profesjonalnie, w dobrej cenie.
            </p>
          </div>
          <div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Od ponad 10 lat fotografuję ludzi w Raciborzu i okolicach. Znam wymagania urzędów i wiem, 
              jak zrobić zdjęcie, które zostanie zaakceptowane za pierwszym razem.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Pracuję z nowoczesnym sprzętem, zapewniam odpowiednie oświetlenie i tło. 
              Nawet paszportowe zdjęcie może wyglądać dobrze!
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
