import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function FrameIllustration() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full relative p-6 md:p-[50px]">
        <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
        <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
        <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <svg viewBox="0 0 1100 500" className="w-full h-auto" fill="none">
            {/* Background grid */}
            {Array.from({ length: 23 }, (_, i) => (
              <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="500" stroke="#0a0a0a" strokeOpacity="0.08" strokeWidth="0.5" />
            ))}
            {Array.from({ length: 11 }, (_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 50} x2="1100" y2={i * 50} stroke="#0a0a0a" strokeOpacity="0.08" strokeWidth="0.5" />
            ))}

            {/* Wall surface hint */}
            <rect x="150" y="30" width="800" height="440" rx="2" fill="#0a0a0a" fillOpacity="0.015" />

            {/* Outer frame — the Axxe Frame system */}
            <rect
              x="250" y="70" width="600" height="340" rx="3"
              stroke="#0a0a0a" strokeOpacity="0.12" strokeWidth="2"
              className={isVisible ? '' : ''}
              style={{
                strokeDasharray: 1880,
                strokeDashoffset: isVisible ? 0 : 1880,
                transition: 'stroke-dashoffset 2s ease-out',
              }}
            />

            {/* Inner frame — display edge */}
            <rect
              x="270" y="90" width="560" height="300" rx="1"
              stroke="#0a0a0a" strokeOpacity="0.08" strokeWidth="1"
              style={{
                strokeDasharray: 1720,
                strokeDashoffset: isVisible ? 0 : 1720,
                transition: 'stroke-dashoffset 2s ease-out 0.3s',
              }}
            />

            {/* Display screen area */}
            <rect
              x="280" y="100" width="540" height="280" rx="1"
              fill="#0a0a0a" fillOpacity={isVisible ? 0.03 : 0}
              style={{ transition: 'fill-opacity 1s ease-out 0.8s' }}
            />

            {/* Screen content lines — simulating content */}
            {[130, 160, 190].map((y, i) => (
              <rect
                key={i}
                x="320" y={y} width={240 - i * 40} height="4" rx="2"
                fill="#0a0a0a"
                fillOpacity={isVisible ? 0.06 : 0}
                style={{ transition: `fill-opacity 0.6s ease-out ${1.2 + i * 0.15}s` }}
              />
            ))}

            {/* Screen content — image placeholder */}
            <rect
              x="320" y="220" width="200" height="120" rx="2"
              fill="#0a0a0a"
              fillOpacity={isVisible ? 0.04 : 0}
              style={{ transition: 'fill-opacity 0.6s ease-out 1.6s' }}
            />

            {/* Frame profile — top detail */}
            <line x1="250" y1="70" x2="270" y2="90" stroke="#C5A55A" strokeOpacity={isVisible ? 0.4 : 0} strokeWidth="0.5" style={{ transition: 'stroke-opacity 0.6s ease-out 1s' }} />
            <line x1="850" y1="70" x2="830" y2="90" stroke="#C5A55A" strokeOpacity={isVisible ? 0.4 : 0} strokeWidth="0.5" style={{ transition: 'stroke-opacity 0.6s ease-out 1s' }} />
            <line x1="250" y1="410" x2="270" y2="390" stroke="#C5A55A" strokeOpacity={isVisible ? 0.4 : 0} strokeWidth="0.5" style={{ transition: 'stroke-opacity 0.6s ease-out 1s' }} />
            <line x1="850" y1="410" x2="830" y2="390" stroke="#C5A55A" strokeOpacity={isVisible ? 0.4 : 0} strokeWidth="0.5" style={{ transition: 'stroke-opacity 0.6s ease-out 1s' }} />

            {/* Dimension lines — top */}
            <line x1="250" y1="45" x2="850" y2="45" stroke="#C5A55A" strokeOpacity="0.3" strokeWidth="0.5"
              strokeDasharray="4 4"
              style={{ strokeDashoffset: isVisible ? 0 : 600, transition: 'stroke-dashoffset 1.5s ease-out 0.5s' }}
            />
            <line x1="250" y1="40" x2="250" y2="50" stroke="#C5A55A" strokeOpacity="0.3" strokeWidth="0.5" />
            <line x1="850" y1="40" x2="850" y2="50" stroke="#C5A55A" strokeOpacity="0.3" strokeWidth="0.5" />
            <text x="550" y="42" textAnchor="middle" fill="#C5A55A" fillOpacity="0.4" fontSize="10" fontFamily="Roobert, sans-serif">600mm</text>

            {/* Dimension lines — right */}
            <line x1="880" y1="70" x2="880" y2="410" stroke="#C5A55A" strokeOpacity="0.3" strokeWidth="0.5"
              strokeDasharray="4 4"
              style={{ strokeDashoffset: isVisible ? 0 : 340, transition: 'stroke-dashoffset 1.5s ease-out 0.7s' }}
            />
            <line x1="875" y1="70" x2="885" y2="70" stroke="#C5A55A" strokeOpacity="0.3" strokeWidth="0.5" />
            <line x1="875" y1="410" x2="885" y2="410" stroke="#C5A55A" strokeOpacity="0.3" strokeWidth="0.5" />
            <text x="900" y="244" fill="#C5A55A" fillOpacity="0.4" fontSize="10" fontFamily="Roobert, sans-serif" transform="rotate(90, 900, 244)">340mm</text>

            {/* Mount points */}
            {[[310, 120], [790, 120], [310, 360], [790, 360]].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r={isVisible ? 4 : 0} fill="none" stroke="#C5A55A" strokeOpacity="0.3" strokeWidth="0.5"
                  style={{ transition: `r 0.4s ease-out ${1.8 + i * 0.1}s` }}
                />
                <circle cx={cx} cy={cy} r={isVisible ? 1.5 : 0} fill="#C5A55A" fillOpacity="0.3"
                  style={{ transition: `r 0.4s ease-out ${1.8 + i * 0.1}s` }}
                />
              </g>
            ))}

            {/* Labels */}
            <text x="170" y="240" textAnchor="middle" fill="#0a0a0a" fillOpacity={isVisible ? 0.15 : 0} fontSize="9" fontFamily="Roobert, sans-serif" letterSpacing="0.15em"
              style={{ transition: 'fill-opacity 0.6s ease-out 1.4s' }}
              transform="rotate(-90, 170, 240)"
            >
              WALL SURFACE
            </text>

            <text x="550" y="445" textAnchor="middle" fill="#0a0a0a" fillOpacity={isVisible ? 0.2 : 0} fontSize="11" fontFamily="Roobert, sans-serif" letterSpacing="0.2em"
              style={{ transition: 'fill-opacity 0.6s ease-out 1.6s' }}
            >
              AXXE FRAME™ SYSTEM
            </text>

            {/* Frame profile label */}
            <text x="550" y="78" textAnchor="middle" fill="#C5A55A" fillOpacity={isVisible ? 0.35 : 0} fontSize="8" fontFamily="Roobert, sans-serif" letterSpacing="0.15em"
              style={{ transition: 'fill-opacity 0.6s ease-out 1.2s' }}
            >
              PATENTED FRAME PROFILE
            </text>

            {/* Depth indicator — small side view */}
            <g style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.8s ease-out 2s' }}>
              {/* Side profile box */}
              <rect x="960" y="160" width="12" height="160" rx="1" fill="none" stroke="#0a0a0a" strokeOpacity="0.1" strokeWidth="1" />
              <rect x="955" y="155" width="22" height="5" rx="0.5" fill="none" stroke="#0a0a0a" strokeOpacity="0.08" strokeWidth="0.5" />
              <rect x="955" y="320" width="22" height="5" rx="0.5" fill="none" stroke="#0a0a0a" strokeOpacity="0.08" strokeWidth="0.5" />

              {/* Depth dimension */}
              <line x1="990" y1="155" x2="990" y2="325" stroke="#C5A55A" strokeOpacity="0.25" strokeWidth="0.5" strokeDasharray="3 3" />
              <text x="1005" y="244" fill="#C5A55A" fillOpacity="0.35" fontSize="8" fontFamily="Roobert, sans-serif" transform="rotate(90, 1005, 244)">22mm depth</text>
              <text x="966" y="248" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.12" fontSize="7" fontFamily="Roobert, sans-serif" transform="rotate(-90, 966, 248)">SIDE VIEW</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
