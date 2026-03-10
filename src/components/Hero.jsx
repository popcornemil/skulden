import { useEffect, useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/AdobeStock_992950050.jpeg"
          alt="Axxe retail infrastructure"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-midnight/85" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-midnight" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold text-xs font-medium tracking-[0.35em] uppercase mb-6">
            Displays · Software · Intelligence
          </p>
        </div>

        <h1 className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95] tracking-tight transition-all duration-1000 delay-200 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          AI Infrastructure for the{' '}
          <span className="italic text-gold">Future of Retail</span>
        </h1>

        <p className={`mt-8 text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Axxe builds the infrastructure powering the next generation of retail experiences.
          <br />One connected platform.
        </p>

        {/* Gold line */}
        <div className={`mx-auto mt-10 h-px bg-gold/40 transition-all duration-1500 delay-600 ${
          loaded ? 'w-20 opacity-100' : 'w-0 opacity-0'
        }`} />

        <div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="#about"
            className="px-10 py-4 bg-gold text-midnight text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300"
          >
            Explore the Ecosystem
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 delay-1000 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
