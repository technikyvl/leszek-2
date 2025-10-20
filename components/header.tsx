"use client"
import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'

export default function Header() {
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = () => {
    const newLocale = locale === 'pl' ? 'uk' : 'pl'
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <div className="text-black text-sm uppercase tracking-wide font-bold">{t('header.name')}</div>
        <nav className="flex gap-8 items-center">
          <button
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-sm font-medium cursor-pointer"
          >
            {t('header.about')}
          </button>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-sm font-medium cursor-pointer"
          >
            {t('header.contact')}
          </button>
          <button
            onClick={switchLanguage}
            className="text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-sm font-medium cursor-pointer border border-black px-2 py-1 rounded"
          >
            {t('language.switch')}
          </button>
        </nav>
      </div>
    </header>
  )
}
