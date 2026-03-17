import { useEffect, useState, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const BASE_DEBT = 1_041_890_000_000
const BASE_TIME = new Date('2026-03-12T00:00:00').getTime()
const RATE_PER_MS = 300.61 / 1000

function formatNumber(n) {
  const s = Math.floor(n).toString()
  const groups = []
  for (let i = s.length; i > 0; i -= 3) {
    groups.unshift(s.slice(Math.max(0, i - 3), i))
  }
  return groups.join(' ')
}

function CountCard({ cost, isVisible, delay, label, description }) {
  const [count, setCount] = useState(0)
  const [added, setAdded] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(Date.now())

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      const debt = BASE_DEBT + (now - BASE_TIME) * RATE_PER_MS
      setCount(Math.floor(debt / cost))
      setAdded(Math.floor(((now - startRef.current) * RATE_PER_MS) / cost))
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [cost])

  return (
    <div className={`relative p-[16px] rounded-[12px] text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${delay}ms` }}>
      <h3 className="text-[20px] text-white mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontVariantNumeric: 'tabular-nums', textShadow: '0 0 20px rgba(230,82,69,0.4)' }}>{formatNumber(count)}</h3>
      <p className="font-serif text-[12px] text-white/40">{description}</p>
    </div>
  )
}

export default function Section5() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full relative p-6 pb-[50px] md:px-[50px] md:pt-[50px] md:pb-[50px]">

        <h2 className={`font-heading text-[32px] md:text-[48px] lg:text-[64px] font-light text-white mb-4 text-center leading-[1.05] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Medan du har<br />varit här har skulden<br />fortsatt att växa</h2>
        <p className={`font-serif text-[16px] text-white/60 text-center max-w-[600px] mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Varje sekund tickar skulden uppåt. Det är just därför Skuldklockan finns. För att synliggöra det som annars döljs bakom krångliga siffror och politiska bortförklaringar. När människor ser verkligheten svart på vitt blir det svårare att blunda. Och lättare att kräva förändring.</p>

        <div className={`flex justify-center mt-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
    </section>
  )
}
