"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function Header() {
  const params = useParams();
  const locale = (params?.locale as string) || "pl";
  const [open, setOpen] = useState(false);

  // close menu on route change or resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
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
    <header className="absolute top-0 left-0 right-0 z-50 p-4 sm:p-6" style={{ paddingTop: 'calc(env(safe-area-inset-top) + 1rem)' }}>
      <div className="flex justify-between items-center">
        <div className="text-white text-xs sm:text-sm uppercase tracking-wide font-bold">foto express leszek jakieła</div>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 sm:gap-8" aria-label="Główna nawigacja">
          <Link
            href={`/${locale}#about`}
            onClick={(e) => {
              // If on same page, prevent default and use smooth scroll
              if (window.location.pathname === `/${locale}` || window.location.pathname === `/${locale}/`) {
                e.preventDefault();
                scrollToSection('about');
              }
            }}
            className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs sm:text-sm font-medium cursor-pointer whitespace-nowrap px-2 py-2"
          >
            O Mnie
          </Link>
          <Link
            href={`/${locale}/documents`}
            className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs sm:text-sm font-medium whitespace-nowrap px-2 py-2"
          >
            Zdjęcia do dokumentów
          </Link>
          <Link
            href={`/${locale}/gallery`}
            className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs sm:text-sm font-medium whitespace-nowrap px-2 py-2"
          >
            Galeria
          </Link>
          <Link
            href={`/${locale}#contact`}
            onClick={(e) => {
              // If on same page, prevent default and use smooth scroll
              if (window.location.pathname === `/${locale}` || window.location.pathname === `/${locale}/`) {
                e.preventDefault();
                scrollToSection('contact');
              }
            }}
            className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs sm:text-sm font-medium cursor-pointer whitespace-nowrap px-2 py-2"
          >
            Kontakt
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label="Otwórz menu"
          aria-expanded={open}
          className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-white/70"
          onClick={() => setOpen(v => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3.75 6.75a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm.75 4.5a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden mt-3 rounded-xl bg-black/60 backdrop-blur px-3 py-2" role="dialog" aria-label="Menu mobilne">
          <div className="flex flex-col gap-1">
            <Link
              href={`/${locale}#about`}
              onClick={(e) => {
                setOpen(false);
                // If on same page, prevent default and use smooth scroll
                if (window.location.pathname === `/${locale}` || window.location.pathname === `/${locale}/`) {
                  e.preventDefault();
                  scrollToSection('about');
                }
              }}
              className="text-white text-sm uppercase text-left px-2 py-2 rounded hover:bg-white/10 whitespace-nowrap"
            >O Mnie</Link>
            <Link onClick={() => setOpen(false)} href={`/${locale}/documents`} className="text-white text-sm uppercase px-2 py-2 rounded hover:bg-white/10 whitespace-nowrap">Zdjęcia do dokumentów</Link>
            <Link onClick={() => setOpen(false)} href={`/${locale}/gallery`} className="text-white text-sm uppercase px-2 py-2 rounded hover:bg-white/10 whitespace-nowrap">Galeria</Link>
            <Link
              href={`/${locale}#contact`}
              onClick={(e) => {
                setOpen(false);
                // If on same page, prevent default and use smooth scroll
                if (window.location.pathname === `/${locale}` || window.location.pathname === `/${locale}/`) {
                  e.preventDefault();
                  scrollToSection('contact');
                }
              }}
              className="text-white text-sm uppercase text-left px-2 py-2 rounded hover:bg-white/10 whitespace-nowrap"
            >Kontakt</Link>
          </div>
        </div>
      )}
    </header>
  )
}
