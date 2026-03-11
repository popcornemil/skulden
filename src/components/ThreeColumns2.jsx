import { useScrollReveal } from '../hooks/useScrollReveal'

const cells = [
  {
    title: 'Physical Spaces\nAre Becoming Digital',
    text: 'Retail is evolving into connected environments where technology, content, and data meet. Axxe provides the infrastructure that powers this transformation — from display systems to intelligent software. Designed for modern retail. Built for global scale.',
  },
  {
    title: 'Designed for\nthe Future of Retail',
    text: 'Stores are no longer just physical locations. They are media environments. Axxe enables brands to transform spaces into dynamic digital experiences that evolve in real time.',
  },
  {
    title: 'Built for\nGlobal Scale',
    text: 'From single locations to international retail networks. Axxe infrastructure is designed to scale across thousands of screens, locations, and experiences. Reliable. Flexible. Future-ready.',
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
