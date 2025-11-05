"use client"

import Link from "next/link"
import { useParams } from "next/navigation"

export default function Header() {
  const params = useParams();
  const locale = (params?.locale as string) || "pl";
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(element, {
          offset: -20,
          duration: 1,
        });
      } else {
        const yOffset = -20;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide font-bold">foto express leszek jakieła</div>
        <nav className="flex gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-sm font-medium cursor-pointer"
          >
            O Mnie
          </button>
          <Link
            href={`/${locale}/gallery`}
            className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-sm font-medium"
          >
            Galeria
          </Link>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-sm font-medium cursor-pointer"
          >
            Kontakt
          </button>
        </nav>
      </div>
    </header>
  )
}
