import { FocusCards } from "@/components/ui/focus-cards";
import { useTranslations } from 'next-intl'

export function FocusCardsDemo() {
  const t = useTranslations()
  const cards = [
    {
      title: t('services.documentPhotos'),
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: t('services.studioSessions'),
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return <FocusCards cards={cards} />;
}
