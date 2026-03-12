import { useEffect, useState, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Skuld / årslön förskollärare (~530 000 kr)
const BASE_DEBT = 1_041_890_000_000
const BASE_TIME = new Date('2026-03-12T00:00:00').getTime()
const RATE_PER_MS = 300.61 / 1000
const SALARY = 530_000

function formatNumber(n) {
  const s = Math.floor(n).toString()
  const groups = []
  for (let i = s.length; i > 0; i -= 3) {
    groups.unshift(s.slice(Math.max(0, i - 3), i))
  }
  return groups.join(' ')
}

function TeacherCard({ isVisible }) {
  const [count, setCount] = useState(0)
  const [added, setAdded] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(Date.now())

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      const debt = BASE_DEBT + (now - BASE_TIME) * RATE_PER_MS
      setCount(Math.floor(debt / SALARY))
      setAdded(Math.floor(((now - startRef.current) * RATE_PER_MS) / SALARY))
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div className={`relative p-[25px] bg-white rounded-[16px] shadow-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

      <h3 className="text-[26px] text-midnight mb-1" style={{ fontFamily: 'Anton, sans-serif', fontVariantNumeric: 'tabular-nums' }}>{formatNumber(count)}</h3>
      <p className="font-serif text-[14px] text-[#e65245] mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>(+{added} sedan du kom in)</p>
      <p className="font-serif text-[16px] text-midnight/60"><span className="font-bold text-midnight">förskollärare</span> kunde anställas för ett helt år</p>
    </div>
  )
}

function PoliceCard({ isVisible }) {
  const POLICE_SALARY = 440_000
  const [count, setCount] = useState(0)
  const [added, setAdded] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(Date.now())

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      const debt = BASE_DEBT + (now - BASE_TIME) * RATE_PER_MS
      setCount(Math.floor(debt / POLICE_SALARY))
      setAdded(Math.floor(((now - startRef.current) * RATE_PER_MS) / POLICE_SALARY))
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div className={`relative p-[25px] bg-white rounded-[16px] shadow-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>

      <h3 className="text-[26px] text-midnight mb-1" style={{ fontFamily: 'Anton, sans-serif', fontVariantNumeric: 'tabular-nums' }}>{formatNumber(count)}</h3>
      <p className="font-serif text-[14px] text-[#e65245] mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>(+{added} sedan du kom in)</p>
      <p className="font-serif text-[16px] text-midnight/60">nya <span className="font-bold text-midnight">poliser</span> kunde anställas för ett helt år</p>
    </div>
  )
}

function LunchCard({ isVisible }) {
  const LUNCH_COST = 6_762
  const [count, setCount] = useState(0)
  const [added, setAdded] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(Date.now())

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      const debt = BASE_DEBT + (now - BASE_TIME) * RATE_PER_MS
      setCount(Math.floor(debt / LUNCH_COST))
      setAdded(Math.floor(((now - startRef.current) * RATE_PER_MS) / LUNCH_COST))
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div className={`relative p-[25px] bg-white rounded-[16px] shadow-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>

      <h3 className="text-[26px] text-midnight mb-1" style={{ fontFamily: 'Anton, sans-serif', fontVariantNumeric: 'tabular-nums' }}>{formatNumber(count)}</h3>
      <p className="font-serif text-[14px] text-[#e65245] mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>(+{added} sedan du kom in)</p>
      <p className="font-serif text-[16px] text-midnight/60"><span className="font-bold text-midnight">skolluncher</span> varje dag ett helt läsår</p>
    </div>
  )
}

function ElderCard({ isVisible }) {
  const ELDER_COST = 1_000_000
  const [count, setCount] = useState(0)
  const [added, setAdded] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(Date.now())

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      const debt = BASE_DEBT + (now - BASE_TIME) * RATE_PER_MS
      setCount(Math.floor(debt / ELDER_COST))
      setAdded(Math.floor(((now - startRef.current) * RATE_PER_MS) / ELDER_COST))
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div className={`relative p-[25px] bg-white rounded-[16px] shadow-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>

      <h3 className="text-[26px] text-midnight mb-1" style={{ fontFamily: 'Anton, sans-serif', fontVariantNumeric: 'tabular-nums' }}>{formatNumber(count)}</h3>
      <p className="font-serif text-[14px] text-[#e65245] mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>(+{added} sedan du kom in)</p>
      <p className="font-serif text-[16px] text-midnight/60">platser på <span className="font-bold text-midnight">äldreboende</span> under ett helt år</p>
    </div>
  )
}

export default function ThreeColumns() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 pb-0 md:p-[50px] md:pb-0">
        <TeacherCard isVisible={isVisible} />
        <PoliceCard isVisible={isVisible} />
        <LunchCard isVisible={isVisible} />
        <ElderCard isVisible={isVisible} />
      </div>
    </section>
  )
}
