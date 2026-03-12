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
    <section id="hero" className="bg-[#fcfbf9] relative">
      <div className="max-w-[1200px] mx-auto w-full min-h-screen flex flex-col justify-center gap-8 p-6 pb-0 md:px-[50px] md:pb-0 relative">

        <div className={`flex justify-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <img src="/skulden-logo.png" alt="Skulden" className="h-14 md:h-20 w-auto" />
        </div>

        <div className={`rounded-[16px] overflow-hidden shadow-md transition-all duration-1000 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <video autoPlay muted loop playsInline className="w-full h-auto">
            <source src="/skulden_sno_3.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="bg-white rounded-[20px] p-8 md:p-12 shadow-md">
          <div>
            {/* Tagline */}
            <div className={`mb-4 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="font-serif text-sm font-medium text-midnight/60 text-center">
                Stockholms skuld just nu
              </p>
            </div>

            {/* Debt counter */}
            <div className={`transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-baseline justify-center gap-3">
                <span
                  className="text-[36px] md:text-[56px] lg:text-[72px] text-[#e65245] leading-[1.05] tracking-tight"
                  style={{ fontFamily: 'Anton, sans-serif', fontVariantNumeric: 'tabular-nums' }}
                >
                  {formatDebt(debt)}
                </span>
                <span className="font-serif text-[20px] md:text-[28px] text-midnight/40 font-light">kr</span>
              </div>
              <p className="font-serif text-[16px] md:text-[20px] text-midnight/40 mt-2 text-center">
                {formatBiljoner(debt)}
              </p>
            </div>
          </div>

          {/* Increase since visit */}
          <div className={`text-center mt-8 transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-serif text-xs md:text-sm text-midnight uppercase tracking-[0.2em] mb-1">
              sedan du öppnade sidan
            </p>
            <p
              className="text-[24px] md:text-[36px] text-midnight leading-tight"
              style={{ fontFamily: 'Anton, sans-serif', fontVariantNumeric: 'tabular-nums' }}
            >
              {formatKronor(increase)} kr
            </p>
            <p className="font-serif text-xs md:text-sm text-midnight/40 mt-1">
              skulden har ökat med detta belopp på {getTimeLabel(Date.now() - startTimeRef.current)}
            </p>
          </div>

        </div>

        <div className={`text-center transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-serif text-[28px] md:text-[40px] font-light text-midnight leading-tight">Stockholms skuldklocka</h2>
          <p className="font-serif text-[14px] md:text-[16px] text-midnight/60 mt-2">Stadens externa skuld ökar med ungefär 1 miljon kronor i timmen</p>
        </div>

        {/* Stats grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white p-[25px] rounded-[16px] shadow-md">
            <p className="font-serif text-[10px] md:text-xs text-midnight uppercase tracking-[0.15em] mb-2">Per sekund</p>
            <p className="text-[18px] md:text-[22px] text-midnight" style={{ fontFamily: 'Anton, sans-serif', fontVariantNumeric: 'tabular-nums' }}>300,61<span className="text-midnight/40 text-[14px] ml-1">kr</span></p>
          </div>
          <div className="bg-white p-[25px] rounded-[16px] shadow-md">
            <p className="font-serif text-[10px] md:text-xs text-midnight uppercase tracking-[0.15em] mb-2">Per minut</p>
            <p className="text-[18px] md:text-[22px] text-midnight" style={{ fontFamily: 'Anton, sans-serif', fontVariantNumeric: 'tabular-nums' }}>{formatDebt(RATE_PER_MIN)}<span className="text-midnight/40 text-[14px] ml-1">kr</span></p>
          </div>
          <div className="bg-white p-[25px] rounded-[16px] shadow-md">
            <p className="font-serif text-[10px] md:text-xs text-midnight uppercase tracking-[0.15em] mb-2">Per timme</p>
            <p className="text-[18px] md:text-[22px] text-midnight" style={{ fontFamily: 'Anton, sans-serif', fontVariantNumeric: 'tabular-nums' }}>{formatDebt(RATE_PER_HOUR)}<span className="text-midnight/40 text-[14px] ml-1">kr</span></p>
          </div>
          <div className="bg-white p-[25px] rounded-[16px] shadow-md">
            <p className="font-serif text-[10px] md:text-xs text-midnight uppercase tracking-[0.15em] mb-2">Per stockholmare</p>
            <p className="text-[18px] md:text-[22px] text-midnight" style={{ fontFamily: 'Anton, sans-serif', fontVariantNumeric: 'tabular-nums' }}>{formatDebt(debt / STOCKHOLM_POP)}<span className="text-midnight/40 text-[14px] ml-1">kr</span></p>
          </div>
        </div>

      </div>
    </section>
  )
}
