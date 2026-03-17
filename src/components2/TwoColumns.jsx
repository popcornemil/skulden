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

export default function TwoColumns() {
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
        <img src="https://pub-54cb667dfd3547d5806ae33fef3e81d4.r2.dev/skulden-skuldklockan-tickar/galleri-2-tunnelbana.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>
      <div className="relative z-10 w-full p-6 md:px-[100px] py-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end">
          {/* Left column — heading + body */}
          <div>
            <h4 className={`font-serif text-xs md:text-sm text-[#e65245] uppercase tracking-[0.25em] mb-4 text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Skuldklockan tickar</h4>
            <p className={`font-heading text-[48px] md:text-[80px] lg:text-[100px] font-light text-white leading-[1.05] uppercase text-left -ml-[4px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Medan du<br />tittade hit<br />växte skulden</p>
            <p className={`font-serif text-[16px] text-white/60 mt-6 max-w-[520px] text-left transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Skulden växer varje sekund. Här ser du exakt hur snabbt. Varje krona som läggs på hög är en krona som framtida generationer tvingas betala tillbaka. Det är dags att kräva ansvar. Sätt press på politikerna.</p>
          </div>

          {/* Right column — live counter */}
          <div className={`text-right transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <FixedDigits
              value={formatKronor(increase) + ' kr'}
              className="text-[36px] md:text-[56px] text-[#e65245] leading-tight"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, textShadow: '0 0 20px rgba(230,82,69,0.4)' }}
            />
            <p className="font-serif text-xs md:text-sm text-white/60 mt-2">
              på {getTimeLabel(Date.now() - startRef.current)}
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="p-[16px] rounded-[12px]">
                <p className="font-serif text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Per sekund</p>
                <p className="text-[24px] md:text-[28px] text-white" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontVariantNumeric: 'tabular-nums', textShadow: '0 0 20px rgba(230,82,69,0.4)' }}>300,61<span className="text-white/40 text-[11px] ml-1">kr</span></p>
              </div>
              <div className="p-[16px] rounded-[12px]">
                <p className="font-serif text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Per minut</p>
                <p className="text-[24px] md:text-[28px] text-white" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontVariantNumeric: 'tabular-nums', textShadow: '0 0 20px rgba(230,82,69,0.4)' }}>{formatDebt(RATE_PER_MIN)}<span className="text-white/40 text-[11px] ml-1">kr</span></p>
              </div>
              <div className="p-[16px] rounded-[12px]">
                <p className="font-serif text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Per timme</p>
                <p className="text-[24px] md:text-[28px] text-white" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontVariantNumeric: 'tabular-nums', textShadow: '0 0 20px rgba(230,82,69,0.4)' }}>{formatDebt(RATE_PER_HOUR)}<span className="text-white/40 text-[11px] ml-1">kr</span></p>
              </div>
              <div className="p-[16px] rounded-[12px]">
                <p className="font-serif text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Per dag</p>
                <p className="text-[24px] md:text-[28px] text-white" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontVariantNumeric: 'tabular-nums', textShadow: '0 0 20px rgba(230,82,69,0.4)' }}>{formatDebt(RATE_PER_SEC * 86400)}<span className="text-white/40 text-[11px] ml-1">kr</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
