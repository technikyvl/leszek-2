"use client"

import Image from "next/image"

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <Image
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          width={600}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4">Zdjęcia do Dokumentów</h3>
        <p className="text-2xl lg:text-4xl mb-8">
          Nie musisz już biegać po całym mieście, żeby zrobić zdjęcia do dokumentów.
          Moje studio znajduje się tuż obok urzędu, gdzie wyrabiasz dowód osobisty, prawo jazdy, paszport czy inne dokumenty.
        </p>
        
        <button 
          onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              const yOffset = -20;
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit"
        >
          UMÓW SESJĘ
        </button>
      </div>
    </div>
  )
}
