"use client"

import { Contact2 } from "@/components/ui/contact-2";
import { useTranslations } from 'next-intl';

const Contact2Demo = () => {
  const t = useTranslations('contact')
  
  return (
    <Contact2 
      title={t('title')}
      description={t('subtitle')}
      phone="+48 123 456 789"
      email="leszek.jakiela@fotografia.pl"
      web={{ label: "fotografia-raciborz.pl", url: "https://fotografia-raciborz.pl" }}
    />
  );
};

export { Contact2Demo };
