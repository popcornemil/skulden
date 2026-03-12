import { useEffect, useState, useRef } from 'react'

// Sveriges statsskuld ~1 041 miljarder kr (mars 2026), ökar ~1 200 kr/sek
const BASE_DEBT = 86_642_961_377
const BASE_TIME = new Date('2026-03-12T00:00:00').getTime()
const RATE_PER_MS = 300.61 / 1000

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

function formatKronor(n) {
  const rounded = Math.floor(n * 100) / 100
  const [whole, dec] = rounded.toFixed(2).split('.')
  const groups = []
  for (let i = whole.length; i > 0; i -= 3) {
    groups.unshift(whole.slice(Math.max(0, i - 3), i))
  }
  return groups.join(' ') + ',' + dec
}

function getTimeLabel(ms) {
  const secs = Math.floor(ms / 1000)
  if (secs < 60) return `${secs} sekund${secs !== 1 ? 'er' : ''}`
  const mins = Math.floor(secs / 60)
  if (mins < 60) return `${mins} minut${mins !== 1 ? 'er' : ''}`
  const hours = Math.floor(mins / 60)
  return `${hours} timm${hours !== 1 ? 'ar' : 'e'}`
}

export default function Hero2() {
  const [loaded, setLoaded] = useState(false)
  const [debt, setDebt] = useState(BASE_DEBT)
  const [increase, setIncrease] = useState(0)
  const rafRef = useRef(null)
  const startTimeRef = useRef(Date.now())

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      const elapsed = now - BASE_TIME
      setDebt(BASE_DEBT + elapsed * RATE_PER_MS)
      setIncrease((now - startTimeRef.current) * RATE_PER_MS)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <section id="hero" className="bg-[#fcfbf9] pt-16 md:pt-20 relative">
      <div className="max-w-[1200px] mx-auto w-full min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex flex-col justify-center gap-8 p-6 pb-16 md:px-[50px] md:pb-24 relative">
        {/* Left line */}
        {/* Right line */}
        {/* Bottom line */}
        <div className="bg-black rounded-[20px] p-8 md:p-12">
          <div>
            {/* Tagline */}
            <div className={`mb-4 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="font-serif text-sm font-medium text-white/60 text-center">
                Sveriges skuld just nu
              </p>
            </div>

            {/* Debt counter */}
            <div className={`transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-baseline justify-center gap-3">
                <span
                  className="font-serif text-[36px] md:text-[56px] lg:text-[72px] [font-weight:950] text-[#e65245] leading-[1.05] tracking-tight"
                  style={{ fontVariantNumeric: 'tabular-nums', textShadow: '0 0 20px rgba(230, 82, 69, 0.6), 0 0 60px rgba(230, 82, 69, 0.3)' }}
                >
                  {formatDebt(debt)}
                </span>
                <span className="font-serif text-[20px] md:text-[28px] text-white/40 font-light">kr</span>
              </div>
              <p className="font-serif text-[16px] md:text-[20px] text-white/40 mt-2 text-center">
                {formatBiljoner(debt)}
              </p>
            </div>
          </div>

          {/* Increase since visit */}
          <div className={`text-center mt-8 transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-serif text-xs md:text-sm text-white/40 uppercase tracking-[0.2em] mb-1">
              sedan du öppnade sidan
            </p>
            <p
              className="font-serif text-[24px] md:text-[36px] text-white leading-tight [font-weight:950]"
              style={{ fontVariantNumeric: 'tabular-nums', textShadow: '0 0 20px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2)' }}
            >
              {formatKronor(increase)} kr
            </p>
            <p className="font-serif text-xs md:text-sm text-white/40 mt-1">
              skulden har ökat med detta belopp på {getTimeLabel(Date.now() - startTimeRef.current)}
            </p>
          </div>
        </div>

        {/* Scroll down indicator */}
        <button
          onClick={() => document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })}
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-midnight/40 hover:text-midnight/60 transition-all duration-1000 delay-600 cursor-pointer ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="font-serif text-xs uppercase tracking-[0.2em]">Läs mer</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </section>
  )
}
