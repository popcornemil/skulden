import { useEffect, useState, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const BASE_DEBT = 1_041_890_000_000
const BASE_TIME = new Date('2026-03-12T00:00:00').getTime()
const RATE_PER_MS = 300.61 / 1000
const SWEDEN_POP = 10_500_000

const cities = [
  { name: 'Stockholm', pop: 1_000_000 },
  { name: 'Göteborg', pop: 590_000 },
  { name: 'Malmö', pop: 350_000 },
]

function formatKr(n) {
  const s = Math.floor(n).toString()
  const groups = []
  for (let i = s.length; i > 0; i -= 3) {
    groups.unshift(s.slice(Math.max(0, i - 3), i))
  }
  return groups.join(' ')
}

function CityCard({ city, isVisible, delay }) {
  const [debt, setDebt] = useState(0)
  const [added, setAdded] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(Date.now())
  const share = city.pop / SWEDEN_POP

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      const totalDebt = BASE_DEBT + (now - BASE_TIME) * RATE_PER_MS
      setDebt(totalDebt * share)
      setAdded((now - startRef.current) * RATE_PER_MS * share)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [share])

  return (
    <div className={`relative p-[25px] bg-white rounded-[16px] shadow-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${delay}ms` }}>
      <p className="font-serif text-[14px] text-midnight/40 mb-2">{city.name}</p>
      <h3 className="font-serif text-[20px] text-midnight mb-1 whitespace-nowrap" style={{ fontVariantNumeric: 'tabular-nums' }}>{formatKr(debt)} kr</h3>
      <p className="font-serif text-[14px] text-[#e65245]" style={{ fontVariantNumeric: 'tabular-nums' }}>(+{formatKr(added)} kr sedan du kom in)</p>
    </div>
  )
}

export default function ThreeColumns3() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 pt-0 md:p-[50px] md:pt-0 md:pb-0">
        {cities.map((city, i) => (
          <CityCard key={city.name} city={city} isVisible={isVisible} delay={i * 100} />
        ))}
        <div className={`relative p-[25px] flex items-center justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
          <a href="#" className="px-8 py-4 bg-[#e65245] text-white font-serif text-[16px] font-medium rounded-full hover:bg-[#d4453a] transition-colors duration-300">
            Se alla städer
          </a>
        </div>
      </div>
    </section>
  )
}
