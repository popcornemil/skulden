import { useEffect, useState, useRef } from 'react'

// Sveriges statsskuld ~1 041 miljarder kr (mars 2026), ökar ~1 200 kr/sek
const BASE_DEBT = 86_642_961_377
const BASE_TIME = new Date('2026-03-12T00:00:00').getTime()
const RATE_PER_MS = 300.61 / 1000
const RATE_PER_SEC = 300.61
const RATE_PER_MIN = RATE_PER_SEC * 60
const RATE_PER_HOUR = RATE_PER_SEC * 3600
const STOCKHOLM_POP = 1_000_000

function formatDebt(n) {
  const s = Math.floor(n).toString()
  const groups = []
  for (let i = s.length; i > 0; i -= 3) {
    groups.unshift(s.slice(Math.max(0, i - 3), i))
  }
  return groups.join(' ')
}

function FixedDigits({ value, className, style }) {
  const chars = value.split('')
  return (
    <span className={className} style={style}>
      {chars.map((ch, i) => (
        <span key={i} style={{ display: 'inline-block', width: ch === ' ' ? '0.25em' : '1ch', textAlign: 'center' }}>{ch}</span>
      ))}
    </span>
  )
}

function formatBiljoner(n) {
  const miljarder = n / 1_000_000_000
  return miljarder.toFixed(2).replace('.', ',') + ' miljarder kronor'
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
    <section id="hero" className="bg-[#0a0a0a] relative">
      {/* Fullwidth video background */}
      <div className="relative min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 bg-black" />

        {/* Red glow at top */}
        <div className="absolute inset-x-0 top-0 h-[300px]" style={{ background: 'radial-gradient(ellipse at top center, rgba(230,82,69,0.15) 0%, transparent 70%)' }} />

        <div className="relative z-10 flex flex-col items-center justify-center gap-6 p-6 md:px-[50px] max-w-[1200px] mx-auto w-full">
          {/* Warning badge */}
          <div className={`transition-all duration-1000 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#e65245]/40 text-[#e65245] text-xs font-medium uppercase tracking-[0.15em]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              Realtidsdata
            </span>
          </div>

          {/* Title */}
          <div className={`text-center transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading text-[36px] md:text-[56px] lg:text-[72px] font-bold text-white leading-tight">Stockholms stads<br /><span className="text-[#e65245]">skuldklocka</span></h2>
            <p className="font-serif text-[14px] md:text-[16px] text-white/50 mt-4">Stadens externa skuld ökar med ungefär 1 miljon kronor i timmen</p>
          </div>

          {/* Debt counter card */}
          <div className={`w-full max-w-[1000px] mt-4 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="rounded-[20px] border border-white/10 bg-[#111]/80 p-8 md:p-12">
              <p className="font-serif text-xs md:text-sm font-medium text-white/40 text-center uppercase tracking-[0.2em] mb-4">
                Total skuld just nu
              </p>
              <div className="flex items-baseline justify-center gap-3">
                <FixedDigits
                  value={formatDebt(debt)}
                  className="text-[42px] md:text-[72px] lg:text-[96px] text-[#e65245] leading-[1.05]"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, textShadow: '0 0 30px rgba(230,82,69,0.6), 0 0 60px rgba(230,82,69,0.3)' }}
                />
                <span className="text-[20px] md:text-[28px] text-white/30 font-light" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800 }}>kr</span>
              </div>
              <p className="font-serif text-[16px] md:text-[20px] text-[#e65245]/70 mt-3 text-center">
                {formatBiljoner(debt)}
              </p>
            </div>
          </div>

          {/* CTA button */}
          <div className={`flex justify-center mt-2 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="#contact"
              className="group inline-block bg-[#e65245] text-white rounded-full hover:bg-[#d4453a] transition-all duration-500"
              style={{ padding: '16px' }}
            >
              <span className="relative flex items-center">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 absolute left-0 group-hover:left-[calc(100%-40px)] transition-all duration-500 z-10">
                  <span className="text-lg text-[#e65245]">&rarr;</span>
                </span>
                <span className="font-serif text-[16px] md:text-[20px] font-medium pl-[52px] pr-2 group-hover:pl-2 group-hover:pr-[52px] transition-all duration-500">Bli medlem</span>
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
