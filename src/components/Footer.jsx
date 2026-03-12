import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Footer() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <footer className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Logo row */}
        <div className="relative p-6 pb-2 md:p-[50px] md:pb-2 flex justify-center">
          <div className={`flex flex-col items-center gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-serif text-[14px] text-midnight/40">Skulden är en del av Skattebetalarna.</p>
            <img
              src="/skattebetalarna-logo.svg"
              alt="Skattebetalarna"
              className="h-5 md:h-6 w-auto"
            />
          </div>
        </div>

        {/* Links row */}
        <div className="relative p-6 pt-2 pb-2 md:p-[50px] md:pt-2 md:pb-2">
          <div className={`flex flex-wrap items-center justify-center gap-4 md:gap-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {['Om Skulden', 'Om Skattebetalarna', 'Metod / Beräkning', 'Kontakt', 'Integritetspolicy'].map(link => (
              <a
                key={link}
                href="#"
                className="font-serif text-[14px] text-midnight/40 hover:text-midnight transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright row */}
        <div className="relative px-6 md:px-[50px] py-2">
          <p className="font-serif text-midnight/20 text-xs text-center">
            &copy; {new Date().getFullYear()} Skattebetalarna. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  )
}
