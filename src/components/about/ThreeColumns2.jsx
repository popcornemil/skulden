import { useScrollReveal } from '../../hooks/useScrollReveal'

const cells = [
  {
    title: 'Build the Future',
    text: 'We design technology for the next generation of retail. By combining displays, software, and AI, we help shape intelligent retail environments where brands and customers connect in new ways.',
  },
  {
    title: 'Unlock Value',
    text: 'We create new possibilities for retailers and brands. Through retail media, intelligent displays, and connected infrastructure, we transform physical spaces into new revenue opportunities.',
  },
  {
    title: 'Lead the Market',
    text: 'We build for retailers and brands that want to stay ahead. Our technology empowers ambitious businesses to innovate faster, grow stronger, and lead the future of retail.',
  },
]

export default function ThreeColumns2() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-3">
        {cells.map((cell, i) => (
          <div key={i} className={`relative p-6 md:p-[50px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 150}ms` }}>
            {i === 0 && <div className="hidden md:block absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />}
            <div className="md:hidden absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
            <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
            <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />

            <h3 className="font-serif text-[22px] text-midnight mb-3 whitespace-pre-line">{cell.title}</h3>
            <p className="font-serif text-[16px] text-midnight/60">{cell.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
