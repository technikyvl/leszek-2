export default function About() {
  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-neutral-900">O Mnie</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Jestem Leszek Jakieła, profesjonalny fotograf ślubny z Raciborza. Od lat specjalizuję się w fotografii 
              ślubnej i wideofilmowaniu, tworząc wyjątkowe wspomnienia dla par młodych.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Moja pasja do fotografii pozwala mi uchwycić najważniejsze momenty Waszego dnia w sposób naturalny 
              i pełen emocji. Każde zdjęcie to opowieść o Waszej miłości.
            </p>
          </div>
          <div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Pracuję z najwyższą starannością, dbając o każdy szczegół. Moje usługi obejmują kompleksową obsługę 
              ślubów - od przygotowań, przez ceremonię, aż po zabawę weselną.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Zapraszam do współpracy - razem stworzymy piękne wspomnienia, które będą cieszyć Was przez długie lata.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
