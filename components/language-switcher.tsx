"use client"

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'

const languages = [
  { code: 'pl', label: 'PL', fullLabel: 'Polski' },
  { code: 'uk', label: 'UA', fullLabel: 'Українська' },
]

export default function LanguageSwitcher() {
  let locale = 'pl'
  try {
    locale = useLocale()
  } catch (error) {
    console.error('Error getting locale:', error)
  }
  
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const switchLanguage = (newLocale: string) => {
    // Get pathname without locale
    const segments = pathname.split('/').filter(Boolean)
    const pathWithoutLocale = segments.slice(1).join('/') || ''
    // Navigate to new locale with same path
    router.push(`/${newLocale}${pathWithoutLocale ? '/' + pathWithoutLocale : ''}`)
    router.refresh()
    setIsOpen(false)
  }

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-xs md:text-sm font-medium cursor-pointer border border-black/20 hover:border-black/40 rounded-md bg-white/80 backdrop-blur-sm"
        aria-label="Switch language"
      >
        <span className="hidden sm:inline">{currentLanguage.fullLabel}</span>
        <span className="sm:hidden">{currentLanguage.label}</span>
        <svg
          className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-40 md:w-48 bg-white rounded-md shadow-lg border border-neutral-200 z-50 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full text-left px-4 py-2.5 md:py-3 text-sm md:text-base hover:bg-neutral-50 transition-colors duration-200 ${
                  locale === lang.code
                    ? 'bg-neutral-100 font-semibold'
                    : 'font-medium'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-neutral-900">{lang.fullLabel}</span>
                  {locale === lang.code && (
                    <svg
                      className="w-4 h-4 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

