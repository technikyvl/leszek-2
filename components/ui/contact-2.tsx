import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
  return (
    <section id="contact" className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          {/* Info column */}
          <div className="mx-auto flex w-full lg:w-auto max-w-2xl flex-col gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-4xl md:text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-neutral-900 text-white p-6">
                <h3 className="text-lg font-semibold mb-2">Siedziba</h3>
                <h4 className="text-2xl md:text-3xl font-bold mb-4">Foto Express Leszek Jakieła</h4>
                <div className="space-y-1 text-neutral-200">
                  <p className="whitespace-nowrap">Batorego&nbsp;7</p>
                  <p className="whitespace-nowrap">47-400&nbsp;Racibórz</p>
                  <p className="pt-2 whitespace-nowrap">NIP:&nbsp;6392005862</p>
                </div>
              </div>
              <div className="rounded-2xl bg-neutral-900 text-white p-6">
                <h3 className="text-lg font-semibold mb-2">Godziny otwarcia</h3>
                <div className="text-2xl md:text-3xl font-bold leading-snug">
                  <p className="mb-2">Pon – Pt: 9:00 – 17:00</p>
                  <p>Sob: 9:00 – 12:00</p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <a href={`tel:${phone.replace(/\s+/g, "")}`} className="rounded-xl border bg-white p-4 text-center shadow-sm hover:shadow transition">
                <div className="text-sm text-neutral-600">Telefon</div>
                <div className="text-lg font-semibold">{phone}</div>
              </a>
              <a href={`mailto:${email}`} className="rounded-xl border bg-white p-4 text-center shadow-sm hover:shadow transition">
                <div className="text-sm text-neutral-600">E‑mail</div>
                <div className="text-lg font-semibold break-all">{email}</div>
              </a>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">Imię</Label>
                <Input type="text" id="firstname" placeholder="Twoje imię" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Nazwisko</Label>
                <Input type="text" id="lastname" placeholder="Twoje nazwisko" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="twoj@email.com" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Temat</Label>
              <Input type="text" id="subject" placeholder="Temat wiadomości" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Wiadomość</Label>
              <Textarea placeholder="Napisz swoją wiadomość tutaj..." id="message" />
            </div>
            <Button className="w-full">Wyślij Wiadomość</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
