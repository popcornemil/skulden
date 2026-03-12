import { useEffect, useState, useRef } from 'react'

// Sveriges statsskuld ~1 041 miljarder kr (mars 2026), ökar ~1 200 kr/sek
const BASE_DEBT = 1_041_890_000_000
const BASE_TIME = new Date('2026-03-12T00:00:00').getTime()
const RATE_PER_MS = 300.61 / 1000 // ~300,61 kr per sekund

function formatDebt(n) {
  const s = Math.floor(n).toString()
  const groups = []
  for (let i = s.length; i > 0; i -= 3) {
    groups.unshift(s.slice(Math.max(0, i - 3), i))
  }
  return groups.join(' ')
}

function formatBiljoner(n) {
  const biljoner = n / 1_000_000_000_000
  return biljoner.toFixed(2).replace('.', ',') + ' biljoner kronor'
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [debt, setDebt] = useState(BASE_DEBT)
  const rafRef = useRef(null)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      const elapsed = now - BASE_TIME
      setDebt(BASE_DEBT + elapsed * RATE_PER_MS)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute top-[90px] bottom-[10px] left-[10px] right-[10px] overflow-hidden rounded-[25px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold text-xl md:text-2xl font-bold tracking-[0.35em] uppercase">
            AI-Powered Retail Tech
          </p>
        </div>

        {/* Debt counter */}
        <div className={`mt-10 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block rounded-2xl border border-white/15 bg-white/8 backdrop-blur-xl px-10 py-8 md:px-16 md:py-10">
            <p className="text-white/70 text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4">
              Sveriges skuld just nu
            </p>
            <div className="flex items-baseline justify-center gap-2">
              <span
                className="text-gold text-4xl md:text-6xl lg:text-7xl font-bold tabular-nums tracking-tight"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                {formatDebt(debt)}
              </span>
              <span className="text-white/50 text-xl md:text-2xl font-bold">kr</span>
            </div>
            <p className="text-white/50 text-base md:text-lg mt-3">
              {formatBiljoner(debt)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
