export default function Contact() {
  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-neutral-900">Kontakt</h2>
        <p className="text-lg text-neutral-700 leading-relaxed mb-12">
          Masz pytania dotyczące fotografii ślubnej? Chcesz omówić szczegóły współpracy? 
          Skontaktuj się ze mną - chętnie odpowiem na wszystkie pytania.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
              Imię i Nazwisko
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
              placeholder="Twoje imię i nazwisko"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
              placeholder="twoj@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
              Wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
              placeholder="Opowiedz mi o swoim ślubie..."
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors duration-300"
          >
            Wyślij Wiadomość
          </button>
        </form>
      </div>
    </section>
  )
}
