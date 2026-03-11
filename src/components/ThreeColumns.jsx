const cells = [
  { title: 'Axxe Frame™', text: 'Patented display framing system designed for seamless installations.', link: true },
  { title: 'Axxe Screen™', text: 'Professional displays engineered for modern environments.', link: true },
  { title: 'Axxe Play™', text: 'Software to control and manage digital screens at scale.', link: true },
  { title: 'Axxe Cloud™', text: 'The platform connecting every device and location.', link: true },
  { title: 'Axxe Studio™', text: 'Create and manage visual content across your network.', link: true },
  { title: 'Axxe AI™', text: 'Intelligence powering adaptive retail experiences.', link: true },
]

export default function ThreeColumns() {
  return (
    <section className="bg-[#fcfbf9]">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-3 group/grid">
        {cells.map((cell, i) => (
          <div key={i} className="relative p-[50px] transition-opacity duration-500 group-hover/grid:opacity-50 hover:!opacity-100">
            {/* Left line (only first column) */}
            {i % 3 === 0 && <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />}
            {/* Right line */}
            <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
            {/* Bottom line */}
            <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />

            {cell.title && <h3 className="font-serif text-[22px] text-midnight mb-3">{cell.title}</h3>}
            {cell.text && <p className="font-serif text-[16px] text-midnight/60">{cell.text}</p>}
            {cell.link && <a href="#" className="font-serif text-[16px] text-midnight mt-4 inline-block hover:text-gold transition-colors duration-300">Learn more &rarr;</a>}
          </div>
        ))}
      </div>
    </section>
  )
}
