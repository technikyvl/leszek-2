import Services from "./services";

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
      </div>
    </section>
  )
}
