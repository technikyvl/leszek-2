"use client"

import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'

export default function Header() {
  const t = useTranslations('header')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <div className="text-black text-sm uppercase tracking-wide font-bold">{t('name')}</div>
        <nav className="flex gap-8 items-center">
          <button
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-sm font-medium cursor-pointer"
          >
            {t('about')}
          </button>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-sm font-medium cursor-pointer"
          >
            {t('contact')}
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => switchLanguage('pl')}
              className={`text-xs px-2 py-1 rounded transition-colors duration-300 ${
                locale === 'pl' 
                  ? 'bg-black text-white' 
                  : 'text-black hover:bg-neutral-100'
              }`}
            >
              PL
            </button>
            <button
              onClick={() => switchLanguage('uk')}
              className={`text-xs px-2 py-1 rounded transition-colors duration-300 ${
                locale === 'uk' 
                  ? 'bg-black text-white' 
                  : 'text-black hover:bg-neutral-100'
              }`}
            >
              UK
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
