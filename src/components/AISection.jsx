import { useEffect, useRef, useState } from 'react'

export default function AISection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const PER_SEC = 300.61
  const periods = [
    { label: 'Sekund', amount: PER_SEC },
    { label: 'Minut', amount: PER_SEC * 60 },
    { label: 'Timme', amount: PER_SEC * 3600 },
    { label: 'Dag', amount: PER_SEC * 86400 },
  ]
  const maxAmount = periods[periods.length - 1].amount

  function formatKr(n) {
    if (n >= 1_000_000) return Math.round(n / 1_000_000).toLocaleString('sv-SE') + ' mkr'
    if (n >= 1_000) return Math.round(n).toLocaleString('sv-SE') + ' kr'
    return n.toLocaleString('sv-SE', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + ' kr'
  }

  return (
    <section className="bg-[#0a0a0a]" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-6 pt-0 md:p-[50px] md:pt-0">
        {/* Column 1 — Bar chart */}
        <div className="relative p-[25px] bg-[#1a0a0a] rounded-[16px] border border-white/5">

          <h3 className={`font-heading text-[22px] text-white mb-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Så snabbt växer skulden</h3>
          <div className="flex items-end gap-3 h-[180px] relative">
            {[0, 25, 50, 75, 100].map((pct) => (
              <div key={pct} className="absolute left-0 right-0 h-px bg-white/5" style={{ bottom: `${pct}%` }} />
            ))}
            {periods.map((p, i) => {
              const pct = (p.amount / maxAmount) * 100
              return (
                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                  <div
                    className="w-full bg-[#e65245] rounded-sm relative group cursor-default"
                    style={{
                      height: visible ? `${Math.max(pct, 2)}%` : '0%',
                      transition: `height 1s ease-out ${i * 0.15}s`,
                      boxShadow: '0 0 15px rgba(230,82,69,0.3)',
                    }}
                  >
                    <div className="absolute inset-0 bg-[#d4453a] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-white/70 whitespace-nowrap font-medium">{formatKr(p.amount)}</span>
                  </div>
                  <span className="text-[10px] text-white/40 mt-1">{p.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Column 2 — Förklarande text */}
        <div className="relative p-[25px] bg-[#1a0a0a] rounded-[16px] border border-white/5">

          <div className="flex items-center h-full">
            <p className={`font-serif text-[16px] text-white/50 text-left transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Varje sekund växer Sveriges statsskuld med över <span className="font-bold text-white/80">300 kronor</span>. Det betyder att på bara en minut har skulden ökat med <span className="font-bold text-white/80">18 000 kronor</span>. Efter en timme har det blivit över <span className="font-bold text-white/80">en miljon</span>. Och under ett enda dygn läggs nästan <span className="font-bold text-white/80">26 miljoner kronor</span> till på notan — pengar som framtidens skattebetalare ska betala tillbaka.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
