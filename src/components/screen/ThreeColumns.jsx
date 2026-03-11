import { useScrollReveal } from '../../hooks/useScrollReveal'

const cells = [
  { title: 'Built for\nProfessional Displays', text: <>Every <span className="font-bold">Axxe Screen™</span> is engineered to perform in demanding environments — high brightness and clarity, optimized for digital signage, seamless integration with <span className="font-bold">Axxe Frame™</span>, and reliable 24/7 performance. Screens designed not just to display content — but to elevate it.</> },
]

export default function ThreeColumns() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full">
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
