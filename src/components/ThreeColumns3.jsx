import { useEffect, useState, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const BASE_TIME = new Date('2026-03-12T00:00:00').getTime()

const cities = [
  { name: 'Stockholm', debt: 86_642_961_377, ratePerMs: 300.61 / 1000, label: 'Reella skulder' },
  { name: 'Göteborg', debt: 51_000_000_000, ratePerMs: 177.36 / 1000, label: 'Estimerade skulder' },
  { name: 'Malmö', debt: 30_000_000_000, ratePerMs: 105.21 / 1000, label: 'Estimerade skulder' },
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

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      setDebt(city.debt + (now - BASE_TIME) * city.ratePerMs)
      setAdded((now - startRef.current) * city.ratePerMs)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [city])

  return (
    <div className={`relative p-[25px] bg-white rounded-[16px] shadow-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${delay}ms` }}>
      <p className="font-serif text-[14px] text-midnight/40 mb-2">{city.name}</p>
      <h3 className="text-[26px] text-midnight mb-1 whitespace-nowrap" style={{ fontFamily: 'Mont Blanc, sans-serif', fontVariantNumeric: 'tabular-nums' }}>{formatKr(debt)} kr</h3>
      <p className="font-serif text-[14px] text-[#e65245]" style={{ fontVariantNumeric: 'tabular-nums' }}>(+{formatKr(added)} kr sedan du kom in)</p>
      <p className="font-serif text-[11px] text-midnight/30 mt-2">{city.label}</p>
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
