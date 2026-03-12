import { useScrollReveal } from '../hooks/useScrollReveal'

export default function TwoColumns() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-[50px]">
        <div className="relative p-[25px] bg-white rounded-[16px] shadow-md">
          <p className={`font-serif text-[22px] text-midnight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Sveriges<br />största taxameter</p>
        </div>
        <div className="relative p-[25px] bg-white rounded-[16px] shadow-md">
          <div className={`font-serif text-[16px] text-midnight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p>Skulden växer varje sekund. Här ser du exakt hur snabbt. Varje krona som läggs på hög är en krona som framtida generationer tvingas betala tillbaka. Det är dags att kräva ansvar. Sätt press på politikerna.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
