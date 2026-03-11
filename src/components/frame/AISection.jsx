import { useEffect, useRef, useState } from 'react'

export default function AISection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const bars = [
    { height: '20%' },
    { height: '32%' },
    { height: '45%' },
    { height: '62%' },
    { height: '85%' },
    { height: '100%' },
  ]

  return (
    <section className="bg-[#fcfbf9]" ref={sectionRef}>
      <style>{`
        @keyframes growBar {
          from { height: 0; }
        }
        @keyframes drawLine {
          from { stroke-dashoffset: 500; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeInArea {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popDot {
          from { r: 0; }
          to { r: 3; }
        }
      `}</style>
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-3">
        {/* Column 1 — Bar chart */}
        <div className="relative p-6 md:p-[50px]">
          <div className="hidden md:block absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="md:hidden absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />

          <h3 className={`font-serif text-[22px] text-midnight mb-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Turn screen data into retail growth.</h3>
          <div className="flex items-end gap-3 h-[180px] relative">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((pct) => (
              <div key={pct} className="absolute left-0 right-0 h-px bg-black/5" style={{ bottom: `${pct}%` }} />
            ))}
            {bars.map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                <div
                  className="w-full bg-midnight/10 rounded-sm relative group cursor-default"
                  style={{
                    height: visible ? bar.height : '0%',
                    transition: `height 1s ease-out ${i * 0.12}s`,
                  }}
                >
                  <div className="absolute inset-0 bg-gold/40 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 — Line chart */}
        <div className="relative p-6 md:p-[50px]">
          <div className="md:hidden absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />

          <h3 className={`font-serif text-[22px] text-midnight mb-6 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Optimize every<br />impression.</h3>
          <div className="h-[180px] relative group/line cursor-default">
            <svg viewBox="0 0 260 140" className="w-full h-full" preserveAspectRatio="none">
              {/* Grid lines */}
              {[0, 35, 70, 105, 140].map((y) => (
                <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="#0a0a0a" strokeOpacity="0.05" strokeWidth="1" />
              ))}
              {/* Area fill */}
              <path
                d="M0,120 Q30,110 52,95 T104,70 T156,40 T208,22 T260,8 L260,140 L0,140 Z"
                fill="#0a0a0a"
                fillOpacity="0.04"
                style={{
                  opacity: visible ? 1 : 0,
                  transition: 'opacity 1.5s ease-out',
                }}
              />
              {/* Gold area on hover */}
              <path
                d="M0,120 Q30,110 52,95 T104,70 T156,40 T208,22 T260,8 L260,140 L0,140 Z"
                fill="#c6ae79"
                fillOpacity="0.15"
                className="opacity-0 group-hover/line:opacity-100 transition-opacity duration-300"
              />
              {/* Line */}
              <path
                d="M0,120 Q30,110 52,95 T104,70 T156,40 T208,22 T260,8"
                fill="none"
                stroke="#0a0a0a"
                strokeOpacity="0.15"
                strokeWidth="2"
                className="group-hover/line:!stroke-gold transition-all duration-300"
                style={{
                  strokeDasharray: 500,
                  strokeDashoffset: visible ? 0 : 500,
                  transition: 'stroke-dashoffset 1.5s ease-out',
                }}
              />
              {/* Data points */}
              {[
                [0, 120], [52, 95], [104, 70], [156, 40], [208, 22], [260, 8]
              ].map(([cx, cy], i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={visible ? 3 : 0}
                  fill="#0a0a0a"
                  fillOpacity="0.2"
                  className="group-hover/line:!fill-gold group-hover/line:!fill-opacity-60 transition-all duration-300"
                  style={{ transition: `r 0.3s ease-out ${0.3 + i * 0.2}s` }}
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Column 3 — Bubble chart */}
        <div className="relative p-6 md:p-[50px]">
          <div className="md:hidden absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />

          <h3 className={`font-serif text-[22px] text-midnight mb-6 transition-all duration-1000 delay-[400ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Identify high‑value<br />touchpoints.</h3>
          <div className="h-[180px] relative group/bubble cursor-default">
            <svg viewBox="0 0 260 160" className="w-full h-full">
              {/* Grid lines */}
              {[0, 40, 80, 120, 160].map((y) => (
                <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="#0a0a0a" strokeOpacity="0.05" strokeWidth="1" />
              ))}
              {[0, 65, 130, 195, 260].map((x) => (
                <line key={x} x1={x} y1="0" x2={x} y2="160" stroke="#0a0a0a" strokeOpacity="0.05" strokeWidth="1" />
              ))}
              {/* Bubbles */}
              {[
                { cx: 40, cy: 120, r: 12 },
                { cx: 75, cy: 95, r: 8 },
                { cx: 110, cy: 85, r: 18 },
                { cx: 145, cy: 55, r: 10 },
                { cx: 170, cy: 70, r: 14 },
                { cx: 200, cy: 35, r: 22 },
                { cx: 235, cy: 25, r: 15 },
                { cx: 55, cy: 60, r: 6 },
                { cx: 130, cy: 40, r: 9 },
              ].map((b, i) => (
                <g key={i}>
                  {/* Default bubble */}
                  <circle
                    cx={b.cx}
                    cy={b.cy}
                    r={visible ? b.r : 0}
                    fill="#0a0a0a"
                    fillOpacity="0.06"
                    stroke="#0a0a0a"
                    strokeOpacity="0.12"
                    strokeWidth="1"
                    className="group-hover/bubble:opacity-0 transition-opacity duration-300"
                    style={{ transition: `r 0.6s ease-out ${0.2 + i * 0.08}s, opacity 0.3s` }}
                  />
                  {/* Gold bubble on hover */}
                  <circle
                    cx={b.cx}
                    cy={b.cy}
                    r={visible ? b.r : 0}
                    fill="#c6ae79"
                    fillOpacity="0.25"
                    stroke="#c6ae79"
                    strokeOpacity="0.5"
                    strokeWidth="1"
                    className="opacity-0 group-hover/bubble:opacity-100 transition-opacity duration-300"
                    style={{ transition: `r 0.6s ease-out ${0.2 + i * 0.08}s, opacity 0.3s` }}
                  />
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
