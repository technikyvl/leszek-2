"use client"

import Link from "next/link"
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './language-switcher'

export default function Header() {
  const t = useTranslations('header')
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -20;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="flex justify-between items-center gap-4">
        <div className="text-black text-xs sm:text-sm uppercase tracking-wide font-bold whitespace-nowrap">
          {t('logo')}
        </div>
        <nav className="flex items-center gap-3 sm:gap-4 md:gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-xs sm:text-sm font-medium cursor-pointer whitespace-nowrap"
          >
            {t('about')}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-xs sm:text-sm font-medium cursor-pointer whitespace-nowrap"
          >
            {t('contact')}
          </button>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}
