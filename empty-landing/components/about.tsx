export default function About() {
  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-neutral-900">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              We are a team of researchers and innovators dedicated to pushing the boundaries of what's possible. Our
              work spans multiple disciplines, from technology to design, always with a focus on creating meaningful
              impact.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Through collaboration and experimentation, we transform complex challenges into elegant solutions that
              shape the future.
            </p>
          </div>
          <div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Our approach combines rigorous research with creative thinking, ensuring that every project we undertake
              is both scientifically sound and beautifully executed.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Join us on our journey to explore new frontiers and make a lasting difference in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
