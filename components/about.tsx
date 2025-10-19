import { FocusCardsDemo } from "@/components/ui/focus-cards-demo";

export default function About() {
  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-neutral-900">Najbliższy fotograf od urzędu</h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Jestem Leszek Jakieła, profesjonalny fotograf z Raciborza. Oferuję kompleksowe usługi fotograficzne 
              dla firm, par młodych oraz osób potrzebujących zdjęć do dokumentów.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Specjalizuję się w fotografii biznesowej, ślubnej oraz zdjęciach do dokumentów. 
              Każde zlecenie wykonuję z najwyższą starannością i profesjonalizmem.
            </p>
          </div>
          <div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Moje usługi obejmują: fotografie biznesowe dla firm i korporacji, profesjonalną fotografię ślubną 
              oraz zdjęcia do dokumentów (dowód osobisty, paszport, legitymacja).
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Pracuję z nowoczesnym sprzętem fotograficznym i zapewniam szybką realizację zleceń. 
              Zapraszam do współpracy - jestem najbliższym fotografem od urzędu!
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
