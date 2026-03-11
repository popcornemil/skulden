import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function ScreenIllustration() {
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

            {/* Main display — outer bezel */}
            <rect
              x="200" y="50" width="700" height="400" rx="4"
              stroke="#0a0a0a" strokeOpacity="0.15" strokeWidth="2.5"
              style={{
                strokeDasharray: 2200,
                strokeDashoffset: isVisible ? 0 : 2200,
                transition: 'stroke-dashoffset 2s ease-out',
              }}
            />

            {/* Thin bezel line */}
            <rect
              x="212" y="62" width="676" height="376" rx="2"
              stroke="#0a0a0a" strokeOpacity="0.06" strokeWidth="0.5"
              style={{
                strokeDasharray: 2104,
                strokeDashoffset: isVisible ? 0 : 2104,
                transition: 'stroke-dashoffset 2s ease-out 0.2s',
              }}
            />

            {/* Screen panel */}
            <rect
              x="216" y="66" width="668" height="368" rx="1"
              fill="#0a0a0a"
              fillOpacity={isVisible ? 0.04 : 0}
              style={{ transition: 'fill-opacity 1s ease-out 0.6s' }}
            />

            {/* Screen content — headline */}
            <rect x="260" y="120" width="280" height="8" rx="4" fill="#0a0a0a"
              fillOpacity={isVisible ? 0.08 : 0}
              style={{ transition: 'fill-opacity 0.6s ease-out 1.2s' }}
            />
            <rect x="260" y="145" width="180" height="6" rx="3" fill="#0a0a0a"
              fillOpacity={isVisible ? 0.05 : 0}
              style={{ transition: 'fill-opacity 0.6s ease-out 1.35s' }}
            />
            <rect x="260" y="165" width="220" height="6" rx="3" fill="#0a0a0a"
              fillOpacity={isVisible ? 0.05 : 0}
              style={{ transition: 'fill-opacity 0.6s ease-out 1.5s' }}
            />

            {/* Screen content — image block */}
            <rect x="260" y="200" width="200" height="140" rx="3" fill="#0a0a0a"
              fillOpacity={isVisible ? 0.035 : 0}
              style={{ transition: 'fill-opacity 0.6s ease-out 1.6s' }}
            />

            {/* Screen content — side stats */}
            {[200, 240, 280, 320].map((y, i) => (
              <g key={i}>
                <rect x="500" y={y} width={60 + (i % 3) * 20} height="20" rx="3" fill="#0a0a0a"
                  fillOpacity={isVisible ? 0.03 : 0}
                  style={{ transition: `fill-opacity 0.5s ease-out ${1.7 + i * 0.1}s` }}
                />
                <rect x="580" y={y + 6} width={80 - i * 10} height="4" rx="2" fill="#0a0a0a"
                  fillOpacity={isVisible ? 0.05 : 0}
                  style={{ transition: `fill-opacity 0.5s ease-out ${1.8 + i * 0.1}s` }}
                />
              </g>
            ))}

            {/* Brightness indicator — left */}
            <g style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.8s ease-out 1.8s' }}>
              {/* Sun icon */}
              <circle cx="120" cy="180" r="8" fill="none" stroke="#C5A55A" strokeOpacity="0.4" strokeWidth="1" />
              <circle cx="120" cy="180" r="3" fill="#C5A55A" fillOpacity="0.3" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const rad = (angle * Math.PI) / 180
                const x1 = 120 + 12 * Math.cos(rad)
                const y1 = 180 + 12 * Math.sin(rad)
                const x2 = 120 + 16 * Math.cos(rad)
                const y2 = 180 + 16 * Math.sin(rad)
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C5A55A" strokeOpacity="0.3" strokeWidth="0.5" />
              })}
              <text x="120" y="210" textAnchor="middle" fill="#C5A55A" fillOpacity="0.4" fontSize="8" fontFamily="Roobert, sans-serif">700 nits</text>
              <text x="120" y="222" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.15" fontSize="7" fontFamily="Roobert, sans-serif" letterSpacing="0.1em">BRIGHTNESS</text>
            </g>

            {/* Resolution spec — left */}
            <g style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.8s ease-out 2s' }}>
              <rect x="95" y="270" width="50" height="30" rx="2" fill="none" stroke="#0a0a0a" strokeOpacity="0.08" strokeWidth="0.5" />
              <text x="120" y="282" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.12" fontSize="6" fontFamily="Roobert, sans-serif">4K</text>
              <text x="120" y="294" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.12" fontSize="5" fontFamily="Roobert, sans-serif">3840×2160</text>
              <text x="120" y="316" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.15" fontSize="7" fontFamily="Roobert, sans-serif" letterSpacing="0.1em">RESOLUTION</text>
            </g>

            {/* Viewing angle — right */}
            <g style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.8s ease-out 2.2s' }}>
              {/* Arc */}
              <path d="M 960 250 A 40 40 0 0 1 1000 210" fill="none" stroke="#C5A55A" strokeOpacity="0.3" strokeWidth="0.5" />
              <path d="M 960 250 A 40 40 0 0 0 1000 290" fill="none" stroke="#C5A55A" strokeOpacity="0.3" strokeWidth="0.5" />
              <line x1="960" y1="210" x2="960" y2="290" stroke="#C5A55A" strokeOpacity="0.2" strokeWidth="0.5" />
              <line x1="960" y1="250" x2="1000" y2="210" stroke="#C5A55A" strokeOpacity="0.2" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="960" y1="250" x2="1000" y2="290" stroke="#C5A55A" strokeOpacity="0.2" strokeWidth="0.5" strokeDasharray="3 3" />
              <text x="980" y="255" textAnchor="middle" fill="#C5A55A" fillOpacity="0.4" fontSize="9" fontFamily="Roobert, sans-serif">178°</text>
              <text x="980" y="310" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.15" fontSize="7" fontFamily="Roobert, sans-serif" letterSpacing="0.1em">VIEWING ANGLE</text>
            </g>

            {/* 24/7 reliability — right */}
            <g style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.8s ease-out 2.4s' }}>
              <circle cx="980" cy="380" r="16" fill="none" stroke="#0a0a0a" strokeOpacity="0.08" strokeWidth="0.5" />
              <line x1="980" y1="368" x2="980" y2="380" stroke="#0a0a0a" strokeOpacity="0.15" strokeWidth="0.8" />
              <line x1="980" y1="380" x2="990" y2="385" stroke="#0a0a0a" strokeOpacity="0.15" strokeWidth="0.8" />
              <text x="980" y="410" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.15" fontSize="7" fontFamily="Roobert, sans-serif" letterSpacing="0.1em">24/7 RATED</text>
            </g>

            {/* Dimension — top */}
            <line x1="200" y1="30" x2="900" y2="30" stroke="#C5A55A" strokeOpacity="0.3" strokeWidth="0.5"
              strokeDasharray="4 4"
              style={{ strokeDashoffset: isVisible ? 0 : 700, transition: 'stroke-dashoffset 1.5s ease-out 0.5s' }}
            />
            <line x1="200" y1="25" x2="200" y2="35" stroke="#C5A55A" strokeOpacity="0.3" strokeWidth="0.5" />
            <line x1="900" y1="25" x2="900" y2="35" stroke="#C5A55A" strokeOpacity="0.3" strokeWidth="0.5" />
            <text x="550" y="27" textAnchor="middle" fill="#C5A55A" fillOpacity="0.4" fontSize="10" fontFamily="Roobert, sans-serif">55"</text>

            {/* Label — bottom */}
            <text x="550" y="480" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.2" fontSize="11" fontFamily="Roobert, sans-serif" letterSpacing="0.2em"
              style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s ease-out 1.6s' }}
            >
              AXXE SCREEN™ PROFESSIONAL DISPLAY
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}
