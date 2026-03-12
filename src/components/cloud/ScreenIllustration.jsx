import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function ScreenIllustration() {
  const [ref, isVisible] = useScrollReveal()

  const nodes = [
    { cx: 550, cy: 120, label: 'AXXE CLOUD™', r: 40, main: true },
    { cx: 250, cy: 250, label: 'STORE A', r: 24 },
    { cx: 450, cy: 300, label: 'STORE B', r: 24 },
    { cx: 650, cy: 300, label: 'STORE C', r: 24 },
    { cx: 850, cy: 250, label: 'STORE D', r: 24 },
    { cx: 150, cy: 390, label: 'SCREEN', r: 16, small: true },
    { cx: 280, cy: 410, label: 'SCREEN', r: 16, small: true },
    { cx: 400, cy: 420, label: 'SCREEN', r: 16, small: true },
    { cx: 520, cy: 420, label: 'SCREEN', r: 16, small: true },
    { cx: 640, cy: 420, label: 'SCREEN', r: 16, small: true },
    { cx: 770, cy: 410, label: 'SCREEN', r: 16, small: true },
    { cx: 900, cy: 390, label: 'SCREEN', r: 16, small: true },
    { cx: 1000, cy: 350, label: 'SCREEN', r: 16, small: true },
  ]

  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 5], [1, 6],
    [2, 7], [2, 8],
    [3, 9], [3, 10],
    [4, 11], [4, 12],
  ]

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

            {/* Connection lines */}
            {connections.map(([from, to], i) => (
              <line
                key={`c${i}`}
                x1={nodes[from].cx} y1={nodes[from].cy}
                x2={nodes[to].cx} y2={nodes[to].cy}
                stroke={from === 0 ? '#C5A55A' : '#0a0a0a'}
                strokeOpacity={isVisible ? (from === 0 ? 0.6 : 0.25) : 0}
                strokeWidth={from === 0 ? 1.5 : 1}
                strokeDasharray={from === 0 ? 'none' : '4 4'}
                style={{ transition: `stroke-opacity 0.8s ease-out ${0.8 + i * 0.12}s` }}
              />
            ))}

            {/* Data pulse dots on main connections */}
            {connections.filter(([from]) => from === 0).map(([from, to], i) => {
              const dx = nodes[to].cx - nodes[from].cx
              const dy = nodes[to].cy - nodes[from].cy
              return (
                <circle
                  key={`pulse${i}`}
                  cx={nodes[from].cx + dx * 0.5}
                  cy={nodes[from].cy + dy * 0.5}
                  r={isVisible ? 4 : 0}
                  fill="#C5A55A"
                  fillOpacity={isVisible ? 0.8 : 0}
                  style={{ transition: `all 0.6s ease-out ${1.5 + i * 0.15}s` }}
                >
                  <animate attributeName="opacity" values="0.5;0.15;0.5" dur="2.5s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                </circle>
              )
            })}

            {/* Nodes */}
            {nodes.map((node, i) => (
              <g key={`n${i}`} style={{ opacity: isVisible ? 1 : 0, transition: `opacity 0.6s ease-out ${0.4 + i * 0.1}s` }}>
                {/* Outer ring */}
                <circle
                  cx={node.cx} cy={node.cy} r={node.r}
                  fill={node.main ? '#0a0a0a' : 'none'}
                  fillOpacity={node.main ? 0.08 : 0}
                  stroke={node.main ? '#C5A55A' : '#0a0a0a'}
                  strokeOpacity={node.main ? 0.7 : (node.small ? 0.2 : 0.3)}
                  strokeWidth={node.main ? 2 : 1}
                />
                {/* Inner dot */}
                <circle
                  cx={node.cx} cy={node.cy}
                  r={node.main ? 6 : (node.small ? 3 : 4)}
                  fill={node.main ? '#C5A55A' : '#0a0a0a'}
                  fillOpacity={node.main ? 0.8 : (node.small ? 0.3 : 0.45)}
                />
                {/* Label */}
                <text
                  x={node.cx}
                  y={node.cy + node.r + 14}
                  textAnchor="middle"
                  fill={node.main ? '#C5A55A' : '#0a0a0a'}
                  fillOpacity={node.main ? 0.8 : 0.45}
                  fontSize={node.main ? 11 : (node.small ? 7 : 9)}
                  fontFamily="Roobert, sans-serif"
                  letterSpacing="0.15em"
                >
                  {node.label}
                </text>
              </g>
            ))}

            {/* Cloud icon hint above main node */}
            <g style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.8s ease-out 0.6s' }}>
              <path
                d="M530 65 Q530 50 545 50 Q550 40 560 40 Q570 40 575 50 Q585 50 585 60 Q590 60 590 67 Q590 75 580 75 L540 75 Q530 75 530 65 Z"
                fill="none"
                stroke="#C5A55A"
                strokeOpacity="0.7"
                strokeWidth="1.5"
              />
            </g>

            {/* Label — bottom */}
            <text x="550" y="480" textAnchor="middle" fill="#0a0a0a" fillOpacity={isVisible ? 0.45 : 0} fontSize="12" fontFamily="Roobert, sans-serif" letterSpacing="0.2em"
              style={{ transition: 'fill-opacity 0.6s ease-out 2s' }}
            >
              AXXE CLOUD™ NETWORK
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}
