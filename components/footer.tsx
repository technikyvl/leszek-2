import Link from "next/link"

export default function Footer() {
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
                FOTO EXPRESS LESZEK JAKIEŁA
              </h1>
              <div className="flex flex-col items-start sm:items-end gap-3">
                <a
                  href="https://www.orlyfotografii.pl/profile-195180-leszek-jakiela-photography"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="https://www.orlyfotografii.pl/images/medals/195180/laureat300_gold_pl.png"
                    alt="Foto Express Leszek Jakieła Photography - Racibórz"
                    title="Foto Express Leszek Jakieła Photography - Racibórz"
                    width="300"
                    height="75"
                    style={{ border: 0 }}
                  />
                </a>
                <p className="text-white text-sm sm:text-base">© 2025 Foto Express Leszek Jakieła - Racibórz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
