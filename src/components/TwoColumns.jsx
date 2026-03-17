import { useScrollReveal } from '../hooks/useScrollReveal'

export default function TwoColumns() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="next-section" className="bg-[#0a0a0a] scroll-mt-16 md:scroll-mt-20" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full p-6 pt-0 md:px-[50px] md:pb-0 md:pt-[50px] text-center">
        <p className={`font-heading text-[32px] md:text-[48px] lg:text-[64px] font-light text-white leading-[0.9] uppercase transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Sveriges<br />största taxameter</p>
        <p className={`font-serif text-[16px] text-white/60 mt-4 max-w-[520px] mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Skulden växer varje sekund. Här ser du exakt hur snabbt. Varje krona som läggs på hög är en krona som framtida generationer tvingas betala tillbaka. Det är dags att kräva ansvar. Sätt press på politikerna.</p>
      </div>
    </section>
  )
}
