import { useEffect, useState } from 'react'

export default function Hero2() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <section className="bg-[#fcfbf9] pt-16 md:pt-20">
      <div className="max-w-[1200px] mx-auto w-full min-h-[300px] md:h-[500px] flex flex-col justify-between p-6 md:p-[50px] relative">
        {/* Left line */}
        <div className="absolute left-0 top-0 bottom-[10px] w-px bg-black/7" />
        {/* Right line */}
        <div className="absolute right-0 top-0 bottom-[10px] w-px bg-black/7" />
        {/* Bottom line */}
        <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
        <div>
          {/* Tagline */}
          <div className={`mb-4 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-serif text-sm font-medium text-midnight">
              Axxe Frame™
            </p>
          </div>

          {/* Heading */}
          <h1 className={`font-serif text-[32px] md:text-[48px] lg:text-[64px] font-light text-midnight leading-[1.05] tracking-tight max-w-[900px] transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            The Frame Behind<br />Next-Generation Displays
          </h1>
        </div>

        {/* Book demo button at bottom */}
        <div className={`mt-8 md:mt-0 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#contact"
            className="group inline-block bg-midnight text-white rounded-full hover:bg-midnight/90 transition-all duration-500"
            style={{ padding: '16px' }}
          >
            <span className="relative flex items-center">
              <span className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shrink-0 absolute left-0 group-hover:left-[calc(100%-40px)] transition-all duration-500 z-10">
                <span className="text-lg text-midnight">&rarr;</span>
              </span>
              <span className="font-serif text-[16px] md:text-[20px] font-medium pl-[52px] pr-2 group-hover:pl-2 group-hover:pr-[52px] transition-all duration-500">Explore the ecosystem</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
