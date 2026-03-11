import { useEffect, useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute top-[90px] bottom-[10px] left-[10px] right-[10px] overflow-hidden rounded-[25px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold text-xl md:text-2xl font-bold tracking-[0.35em] uppercase">
            AI-Powered Retail Tech
          </p>
        </div>
      </div>
    </section>
  )
}
