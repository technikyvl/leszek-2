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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="px-4 sm:px-6 py-3 sm:py-4 w-full">
        <div className="backdrop-blur-md bg-black/40 rounded-xl px-4 sm:px-6 py-2 flex items-center justify-between">
          <div className="text-white text-xs sm:text-sm uppercase tracking-wide font-bold">foto express leszek jakieła</div>
          <nav className="flex items-center gap-4 sm:gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs sm:text-sm font-medium cursor-pointer py-2"
            >
              O Mnie
            </button>
            <Link
              href={`/${locale}/gallery`}
              className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs sm:text-sm font-medium py-2"
            >
              Galeria
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs sm:text-sm font-medium cursor-pointer py-2"
            >
              Kontakt
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
