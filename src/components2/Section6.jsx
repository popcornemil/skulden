import { useEffect, useState, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const RATE_PER_SEC = 300.61
const RATE_PER_MIN = RATE_PER_SEC * 60
const RATE_PER_HOUR = RATE_PER_SEC * 3600
const RATE_PER_MS = RATE_PER_SEC / 1000

function formatDebt(n) {
  const s = Math.floor(n).toString()
  const groups = []
  for (let i = s.length; i > 0; i -= 3) {
    groups.unshift(s.slice(Math.max(0, i - 3), i))
  }
  return groups.join(' ')
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

function CityCounter({ name, label, debt, ratePerMs }) {
  const [current, setCurrent] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      setCurrent(debt + (now - new Date('2026-03-12T00:00:00').getTime()) * ratePerMs)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [debt, ratePerMs])

  return (
    <div className="text-right">
      <p className="font-serif text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">{name}</p>
      <p className="text-[28px] md:text-[36px] text-white" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontVariantNumeric: 'tabular-nums', textShadow: '0 0 20px rgba(230,82,69,0.4)' }}>{formatDebt(current)}<span className="text-white/40 text-[14px] ml-1">kr</span></p>
      <p className="font-serif text-[9px] text-white/20 mt-1">{label}</p>
    </div>
  )
}

export default function Section6() {
  const [ref, isVisible] = useScrollReveal()
  const [increase, setIncrease] = useState(0)
  const startRef = useRef(Date.now())
  const rafRef = useRef(null)

  useEffect(() => {
    const tick = () => {
      setIncrease((Date.now() - startRef.current) * RATE_PER_MS)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <section id="next-section" className="relative scroll-mt-16 md:scroll-mt-20 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src="https://pub-54cb667dfd3547d5806ae33fef3e81d4.r2.dev/skulden-skuldklockan-tickar/galleri-3-raknar.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>
      <div className="relative z-10 w-full p-6 md:px-[100px] md:py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end">
          {/* Left column — heading + body */}
          <div>
            <h4 className={`font-serif text-xs md:text-sm text-[#e65245] uppercase tracking-[0.25em] mb-4 text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Vägen framåt</h4>
            <p className={`font-heading text-[48px] md:text-[80px] lg:text-[100px] font-light text-white leading-[0.85] uppercase text-left -ml-[4px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Hur vänder vi<br />utvecklingen?</p>
            <p className={`font-serif text-[16px] text-white/60 mt-6 max-w-[520px] text-left transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Sverige behöver en politik som sätter ansvar före slöseri. Det börjar med:</p>
            <div className={`grid grid-cols-2 gap-x-8 gap-y-3 mt-4 font-serif text-[16px] text-white/60 text-left transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-start gap-3"><span className="text-[#e65245] mt-1.5 text-[8px]">●</span>Tydliga prioriteringar</div>
              <div className="flex items-start gap-3"><span className="text-[#e65245] mt-1.5 text-[8px]">●</span>Fler medborgare som säger ifrån</div>
              <div className="flex items-start gap-3"><span className="text-[#e65245] mt-1.5 text-[8px]">●</span>Mindre slöseri med skattepengar</div>
              <div className="flex items-start gap-3"><span className="text-[#e65245] mt-1.5 text-[8px]">●</span>Bättre uppföljning av resultat</div>
              <div className="flex items-start gap-3"><span className="text-[#e65245] mt-1.5 text-[8px]">●</span>Större öppenhet kring kostnader</div>
              <div className="flex items-start gap-3"><span className="text-[#e65245] mt-1.5 text-[8px]">●</span>Hårdare granskning av offentliga utgifter</div>
              <div className="flex items-start gap-3"><span className="text-[#e65245] mt-1.5 text-[8px]">●</span>Ökad press på makthavare</div>
              <div className="flex items-start gap-3"><span className="text-[#e65245] mt-1.5 text-[8px]">●</span>Stärkt medborgarinflytande</div>
            </div>
          </div>

          {/* Right column */}
          <div></div>
        </div>
      </div>
    </section>
  )
}
