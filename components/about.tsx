"use client"

import { FocusCardsDemo } from "@/components/ui/focus-cards-demo";
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('about')
  
  return (
    <section id="about" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-neutral-900">{t('title')}</h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {t('description1')}
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {t('description2')}
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {t('description3')}
            </p>
          </div>
          <div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {t('description4')}
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {t('description5')}
            </p>
          </div>
        </div>
        
        {/* Focus Cards Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-900 text-center">{t('servicesTitle')}</h3>
          <FocusCardsDemo />
        </div>
      </div>
    </section>
  )
}
