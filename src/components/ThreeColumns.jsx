import { useScrollReveal } from '../hooks/useScrollReveal'

const cells = [
  { title: 'Axxe Frame™', text: 'Patented display framing system designed for seamless installations.', link: true, href: '/frame' },
  { title: 'Axxe Screen™', text: 'Professional displays engineered for modern environments.', link: true, href: '/screen' },
  { title: 'Axxe Play™', text: 'Software to control and manage digital screens at scale.', link: true, href: '/play' },
  { title: 'Axxe Cloud™', text: 'The platform connecting every device and location.', link: true, href: '/cloud' },
  { title: 'Axxe Revenue™', text: 'Retail media platform enabling in-store advertising, brand campaigns, and new revenue streams for retailers.', link: true, href: '/revenue' },
  { title: 'Axxe AI™', text: 'Intelligence powering adaptive retail experiences.', link: true },
]

export default function ThreeColumns() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 group/grid">
        {cells.map((cell, i) => (
          <div key={i} className={`relative p-6 md:p-[50px] transition-all duration-700 group-hover/grid:opacity-50 hover:!opacity-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
            {/* Left line (first column) */}
            {i % 3 === 0 && <div className="hidden lg:block absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />}
            {i % 2 === 0 && <div className="hidden md:block lg:hidden absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />}
            <div className="md:hidden absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
            {/* Right line */}
            <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
            {/* Bottom line */}
            <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />

            {cell.title && <h3 className="font-serif text-[22px] text-midnight mb-3">{cell.title}</h3>}
            {cell.text && <p className="font-serif text-[16px] text-midnight/60">{cell.text}</p>}
            {cell.link && <a href={cell.href || '#'} className="font-serif text-[16px] text-midnight mt-4 inline-block hover:text-gold transition-colors duration-300">Learn more &rarr;</a>}
          </div>
        ))}
      </div>
    </section>
  )
}
