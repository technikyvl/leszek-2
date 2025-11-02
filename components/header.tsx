"use client"

import Link from "next/link"

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -20;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <div className="text-black text-sm uppercase tracking-wide font-bold">leszek jakieła</div>
        <nav className="flex gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-sm font-medium cursor-pointer"
          >
            O Mnie
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-sm font-medium cursor-pointer"
          >
            Kontakt
          </button>
        </nav>
      </div>
    </header>
  )
}
