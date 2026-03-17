import { useScrollReveal } from '../hooks/useScrollReveal'

const cells = [
  {
    title: 'Slöseriet\nhar ett pris',
    text: 'När politiken präglas av slöseri, dåliga prioriteringar och brist på ansvar, växer skulden. Det som borde ha använts klokt blir i stället en belastning för framtiden.\n\nOch notan skickas till skattebetalarna.\n\nSkulden handlar inte bara om ekonomi. Den handlar om ansvar. Om prioriteringar. Om vilket Sverige vi lämnar efter oss.',
  },
  {
    title: 'Medan du har varit här\nhar skulden fortsatt att växa',
    text: 'Varje sekund tickar skulden uppåt. Det är just därför Skuldklockan finns.\n\nFör att synliggöra det som annars döljs bakom krångliga siffror och politiska bortförklaringar.\n\nNär människor ser verkligheten svart på vitt blir det svårare att blunda. Och lättare att kräva förändring.',
  },
]

export default function ThreeColumns2() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-6 pb-0 md:p-[50px] md:pb-0">
        {cells.map((cell, i) => (
          <div key={i} className={`relative p-[25px] bg-white rounded-[16px] shadow-md transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 150}ms` }}>

            <h3 className="font-heading text-[22px] text-midnight mb-3 whitespace-pre-line leading-[0.9]">{cell.title}</h3>
            <p className="font-serif text-[16px] text-midnight/60 whitespace-pre-line">{cell.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
