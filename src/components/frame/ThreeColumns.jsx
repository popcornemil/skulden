import { useScrollReveal } from '../../hooks/useScrollReveal'

const cells = [
  { title: 'Built for\nProfessionals', text: <>From retail environments to corporate spaces and public installations, <span className="font-bold">Axxe Frame™</span> simplifies complex display setups — patented frame technology, fast and modular installation, precision alignment system, designed for premium digital signage — install smarter, scale faster</> },
  { title: 'Minimal Design.\nMaximum Impact.', text: <>Displays should feel like part of the architecture — not an add-on. <span className="font-bold">Axxe Frame™</span> creates a clean, modern display surface that enhances the space around it. Invisible structure. Visible impact.</> },
  { title: 'The Future of\nDisplay Framing', text: <><span className="font-bold">Axxe Frame™</span> is redefining how digital displays are installed, integrated, and experienced. Engineered for performance. Designed for aesthetics. Built for the future.</> },
]

export default function ThreeColumns() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cells.map((cell, i) => (
          <div key={i} className={`relative p-6 md:p-[50px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
            {/* Left line (first column) */}
            {i % 3 === 0 && <div className="hidden lg:block absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />}
            {i % 2 === 0 && <div className="hidden md:block lg:hidden absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />}
            <div className="md:hidden absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
            {/* Right line */}
            <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
            {/* Bottom line */}
            <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />

            {cell.title && <h3 className="font-serif text-[22px] text-midnight mb-3 whitespace-pre-line">{cell.title}</h3>}
            {cell.text && <p className="font-serif text-[16px] text-midnight/60">{cell.text}</p>}
            {cell.link && <a href="#" className="font-serif text-[16px] text-midnight mt-4 inline-block hover:text-gold transition-colors duration-300">Learn more &rarr;</a>}
          </div>
        ))}
      </div>
    </section>
  )
}
