import { useScrollReveal } from '../hooks/useScrollReveal'

export default function DarkCard() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full relative p-6 md:p-[50px]">
        <div className={`bg-midnight rounded-[16px] p-[50px] shadow-md transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="font-serif text-[22px] text-white mb-3">Hur vänder vi utvecklingen?</h3>
          <p className="font-serif text-[16px] text-white/60 mb-8">Sverige behöver en politik som sätter ansvar före slöseri. Det börjar med:</p>
          <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <ul className="font-serif text-[16px] text-white/60 space-y-3">
              <li className="flex items-start gap-3"><span className="text-[#e65245] mt-1.5 text-[8px]">●</span>Tydliga prioriteringar</li>
              <li className="flex items-start gap-3"><span className="text-[#e65245] mt-1.5 text-[8px]">●</span>Mindre slöseri med skattepengar</li>
              <li className="flex items-start gap-3"><span className="text-[#e65245] mt-1.5 text-[8px]">●</span>Större öppenhet kring kostnader</li>
              <li className="flex items-start gap-3"><span className="text-[#e65245] mt-1.5 text-[8px]">●</span>Ökad press på makthavare</li>
            </ul>
          </div>
          <div className="flex flex-col justify-end pl-[50px]">
            <ul className="font-serif text-[16px] text-white/60 space-y-3">
              <li className="flex items-start gap-3"><span className="text-[#e65245] mt-1.5 text-[8px]">●</span>Fler medborgare som säger ifrån</li>
              <li className="flex items-start gap-3"><span className="text-[#e65245] mt-1.5 text-[8px]">●</span>Bättre uppföljning av resultat</li>
              <li className="flex items-start gap-3"><span className="text-[#e65245] mt-1.5 text-[8px]">●</span>Hårdare granskning av offentliga utgifter</li>
              <li className="flex items-start gap-3"><span className="text-[#e65245] mt-1.5 text-[8px]">●</span>Stärkt medborgarinflytande</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
