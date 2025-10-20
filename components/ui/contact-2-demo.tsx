import { Contact2 } from "@/components/ui/contact-2";

const Contact2Demo = () => {
  return (
    <Contact2 
      title="Kontakt"
      description="Jestem dostępny do pytań, konsultacji i współpracy. Skontaktuj się ze mną, aby omówić szczegóły Twojego zlecenia fotograficznego!"
      phone="+48 123 456 789"
      email="leszek.jakiela@fotografia.pl"
      web={{ label: "fotografia-raciborz.pl", url: "https://fotografia-raciborz.pl" }}
    />
  );
};

export { Contact2Demo };
