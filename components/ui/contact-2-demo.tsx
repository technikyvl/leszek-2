import { Contact2 } from "@/components/ui/contact-2";
import { useTranslations } from 'next-intl'

const Contact2Demo = () => {
  const t = useTranslations()
  return (
    <Contact2 
      title={t('contact.title')}
      description={t('contact.description')}
      phone={t('contact.phone')}
      email={t('contact.email')}
      web={{ label: t('contact.website'), url: "https://fotografia-raciborz.pl" }}
    />
  );
};

export { Contact2Demo };
