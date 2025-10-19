import Image from "next/image"

export default function Gallery() {
  const images = [
    {
      src: "/modern-research-laboratory.png",
      alt: "Research laboratory",
    },
    {
      src: "/team-collaboration-workspace.png",
      alt: "Team collaboration",
    },
    {
      src: "/innovative-technology-design.jpg",
      alt: "Technology design",
    },
    {
      src: "/scientific-equipment-and-tools.jpg",
      alt: "Scientific equipment",
    },
  ]

  return (
    <section className="min-h-screen bg-neutral-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-neutral-900">Moja Praca</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
