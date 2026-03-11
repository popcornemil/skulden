import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { value: '99.9%', label: 'Uptime globally' },
  { value: '<5min', label: 'Average install time' },
  { value: '256-bit', label: 'End-to-end encryption' },
  { value: '50ms', label: 'Average sync time' },
]

export default function Platform() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section className="px-6 lg:px-12 pb-[100px] bg-midnight">
      <div className="max-w-7xl mx-auto">
      <div
        ref={ref}
        className={`bg-[#141414] rounded-[25px] px-6 lg:px-12 py-24 text-center transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-6">
          Reliable. Flexible. Future-ready.
        </p>

        <h2 className="font-serif text-[48px] font-light text-white max-w-3xl mx-auto leading-tight mb-8">
          Built for Global Scale
        </h2>

        <p className="text-white/60 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          From single locations to international retail networks.
          Axxe infrastructure is designed to scale across thousands of screens, locations, and experiences.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full text-white text-sm font-medium tracking-wide hover:bg-white hover:text-midnight transition-all duration-300 mb-16"
        >
          Book a demo &rarr;
        </a>

        {/* Stats */}
        <div className="flex justify-between w-full">
          {stats.map((stat) => (
            <div key={stat.label} className="flex gap-4 text-left">
              <div className="w-px bg-gold shrink-0" />
              <div>
                <p className="font-serif text-5xl md:text-6xl font-light text-white">{stat.value}</p>
                <p className="text-white/50 text-base font-light mt-2">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
