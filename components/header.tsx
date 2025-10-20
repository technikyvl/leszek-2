import Link from "next/link"

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <div className="text-black text-sm uppercase tracking-wide font-bold">leszek jakieła</div>
        <nav className="flex gap-8">
          <button
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-sm font-medium cursor-pointer"
          >
            O Mnie
          </button>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-sm font-medium cursor-pointer"
          >
            Kontakt
          </button>
        </nav>
      </div>
    </header>
  )
}
