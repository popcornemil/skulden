import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Footer() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <footer className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Logo row */}
        <div className="relative p-6 md:p-[50px] flex justify-center">
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className={`flex flex-col items-center gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <img
              src="/axxe-screen.png"
              alt="Axxe Screen"
              className="h-10 md:h-14 w-auto"
              style={{ filter: 'brightness(0)' }}
            />
            <p className="font-serif text-[14px] md:text-[16px] text-midnight/40 text-center">Displays designed for the digital era.</p>
          </div>
        </div>

        {/* Links row */}
        <div className="relative p-6 md:p-[50px]">
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className={`flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(link => (
                <a
                  key={link}
                  href="#"
                  className="text-midnight/30 text-xs tracking-[0.1em] uppercase hover:text-midnight transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-6">
              {['Instagram', 'LinkedIn', 'YouTube'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-midnight/30 text-xs tracking-[0.1em] uppercase hover:text-midnight transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright row */}
        <div className="relative px-6 md:px-[50px] py-6">
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <p className="text-midnight/20 text-xs font-light tracking-wide text-center">
            &copy; {new Date().getFullYear()} Axxe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
