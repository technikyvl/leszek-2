import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations()
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20" />
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                {t('footer.name')}
              </h1>
              <p className="text-white text-sm sm:text-base">{t('footer.copyright')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
