import { useScrollReveal } from '../../hooks/useScrollReveal'

const cells = [
  { title: 'Control Every Screen', text: <>Manage your entire display network from one intuitive platform. Upload content. Schedule campaigns. Control screens in real time. All from one place.</> },
  { title: 'Built for Modern\nDigital Signage', text: <><span className="font-bold">Axxe Play™</span> simplifies digital screen management without sacrificing power. Cloud-based platform. Remote screen control. Real-time content updates. Smart scheduling. Scalable for large installations. Simple to use. Powerful to scale.</> },
  { title: 'Designed to Work\nwith Axxe Frame™', text: <>Together, <span className="font-bold">Axxe Frame™</span> and <span className="font-bold">Axxe Play™</span> create a complete digital display solution. Hardware meets software. Design meets control. One ecosystem for modern digital displays.</> },
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
