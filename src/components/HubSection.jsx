import { useScrollReveal } from '../hooks/useScrollReveal'

export default function HubSection() {
  const [ref, isVisible] = useScrollReveal()

  const inputs = [
    { icon: '▣', label: 'Displays' },
    { icon: '◎', label: 'Locations' },
    { icon: '▶', label: 'Content' },
  ]

  const outputs = [
    { icon: '◈', label: 'Real-time insights' },
    { icon: '⚙', label: 'Remote management' },
    { icon: '◉', label: 'Revenue performance' },
  ]

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <style>{`
        @keyframes pulseRight {
          0% { left: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: calc(100% - 6px); opacity: 0; }
        }
        @keyframes pulseLeft {
          0% { right: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { right: calc(100% - 6px); opacity: 0; }
        }
        .flow-dot-right {
          position: absolute;
          top: -2px;
          width: 6px;
          height: 5px;
          border-radius: 50%;
          background: #C5A55A;
          box-shadow: 0 0 8px #C5A55A;
          animation: pulseRight 2.5s ease-in-out infinite;
        }
        .flow-dot-left {
          position: absolute;
          top: -2px;
          width: 6px;
          height: 5px;
          border-radius: 50%;
          background: #C5A55A;
          box-shadow: 0 0 8px #C5A55A;
          animation: pulseLeft 2.5s ease-in-out infinite;
        }
      `}</style>
      <div className="max-w-[1200px] mx-auto w-full relative p-6 md:p-[50px]">
        {/* Border lines */}
        <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
        <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
        <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />

        {/* Heading */}
        <div className="text-center mb-[25px]">
          <h2 className={`font-serif text-[32px] md:text-[48px] lg:text-[56px] font-light text-midnight leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            AI-Powered Retail Tech
          </h2>
          <p className={`font-serif text-[16px] text-midnight/50 mt-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Axxe AI processes every data point across your retail ecosystem.
          </p>
          <div className={`mt-6 transition-all duration-1000 delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="/ai"
              className="group inline-block bg-midnight text-white rounded-full hover:bg-midnight/90 transition-all duration-500"
              style={{ padding: '16px' }}
            >
              <span className="relative flex items-center">
                <span className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shrink-0 absolute left-0 group-hover:left-[calc(100%-40px)] transition-all duration-500 z-10">
                  <span className="text-lg text-midnight">&rarr;</span>
                </span>
                <span className="font-serif text-[16px] md:text-[20px] font-medium pl-[52px] pr-2 group-hover:pl-2 group-hover:pr-[52px] transition-all duration-500">Discover Axxe AI</span>
              </span>
            </a>
          </div>
        </div>

        {/* Hub diagram — desktop */}
        <div className={`hidden md:block relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ height: '420px' }}>
          {/* Center hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="group/hub w-[260px] h-[260px] rounded-full border border-black/8 bg-gradient-to-b from-black/3 to-transparent flex items-center justify-center relative cursor-default">
                  <svg className="absolute w-[320px] h-[320px] opacity-[0.07] transition-all duration-700 ease-out group-hover/hub:scale-[1.15] group-hover/hub:rotate-[15deg] group-hover/hub:opacity-[0.12]" style={{ marginTop: '-16px' }} viewBox="0 0 140 140" fill="none">
                    <circle cx="70" cy="35" r="6" fill="#0a0a0a" />
                    <circle cx="40" cy="55" r="5" fill="#0a0a0a" />
                    <circle cx="100" cy="55" r="5" fill="#0a0a0a" />
                    <circle cx="30" cy="80" r="4" fill="#0a0a0a" />
                    <circle cx="70" cy="70" r="7" fill="#0a0a0a" />
                    <circle cx="110" cy="80" r="4" fill="#0a0a0a" />
                    <circle cx="45" cy="105" r="5" fill="#0a0a0a" />
                    <circle cx="95" cy="105" r="5" fill="#0a0a0a" />
                    <circle cx="70" cy="115" r="4" fill="#0a0a0a" />
                    <circle cx="55" cy="40" r="3" fill="#0a0a0a" />
                    <circle cx="85" cy="40" r="3" fill="#0a0a0a" />
                    <circle cx="50" cy="85" r="3" fill="#0a0a0a" />
                    <circle cx="90" cy="85" r="3" fill="#0a0a0a" />
                    <line x1="70" y1="35" x2="40" y2="55" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="70" y1="35" x2="100" y2="55" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="70" y1="35" x2="55" y2="40" stroke="#0a0a0a" strokeWidth="1" />
                    <line x1="70" y1="35" x2="85" y2="40" stroke="#0a0a0a" strokeWidth="1" />
                    <line x1="40" y1="55" x2="70" y2="70" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="100" y1="55" x2="70" y2="70" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="40" y1="55" x2="30" y2="80" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="100" y1="55" x2="110" y2="80" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="55" y1="40" x2="40" y2="55" stroke="#0a0a0a" strokeWidth="1" />
                    <line x1="85" y1="40" x2="100" y2="55" stroke="#0a0a0a" strokeWidth="1" />
                    <line x1="70" y1="70" x2="50" y2="85" stroke="#0a0a0a" strokeWidth="1" />
                    <line x1="70" y1="70" x2="90" y2="85" stroke="#0a0a0a" strokeWidth="1" />
                    <line x1="30" y1="80" x2="45" y2="105" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="110" y1="80" x2="95" y2="105" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="70" y1="70" x2="45" y2="105" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="70" y1="70" x2="95" y2="105" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="50" y1="85" x2="45" y2="105" stroke="#0a0a0a" strokeWidth="1" />
                    <line x1="90" y1="85" x2="95" y2="105" stroke="#0a0a0a" strokeWidth="1" />
                    <line x1="45" y1="105" x2="70" y2="115" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="95" y1="105" x2="70" y2="115" stroke="#0a0a0a" strokeWidth="1.5" />
                  </svg>
                  <img
                    src="/axxe-ai.png"
                    alt="Axxe"
                    className="w-[160px] h-auto relative z-10"
                    style={{ filter: 'brightness(0) opacity(0.6)', marginTop: '-4px' }}
                  />
            </div>
          </div>

          {/* Left cards + lines */}
          {inputs.map((item, i) => {
            const topPositions = ['40px', '190px', '340px']
            const rotations = ['20deg', '0deg', '-20deg']
            return (
              <div key={item.label} className={`absolute left-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ top: topPositions[i], transitionDelay: `${600 + i * 150}ms` }}>
                <div className="flex items-center">
                  <div className="bg-white rounded-xl shadow-sm border border-black/5 px-5 py-3 flex items-center gap-3">
                    <span className="text-midnight/40 text-sm">{item.icon}</span>
                    <span className="font-serif text-[15px] text-midnight/70">{item.label}</span>
                  </div>
                  <div
                    className="h-px bg-black/10 relative overflow-hidden"
                    style={{
                      width: i === 0 ? '310px' : i === 1 ? '275px' : '315px',
                      transform: `rotate(${rotations[i]})`,
                      transformOrigin: 'left center',
                    }}
                  >
                    {[0, 0.7, 1.4].map((d, j) => (
                      <span key={j} className="flow-dot-right" style={{ animationDelay: `${d}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )
          })}

          {/* Right cards + lines */}
          {outputs.map((item, i) => {
            const topPositions = ['40px', '190px', '340px']
            const rotations = ['-20deg', '0deg', '20deg']
            return (
              <div key={item.label} className={`absolute right-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ top: topPositions[i], transitionDelay: `${600 + i * 150}ms` }}>
                <div className="flex items-center">
                  <div
                    className="h-px bg-black/10 relative overflow-hidden"
                    style={{
                      width: i === 0 ? '250px' : i === 1 ? '195px' : '220px',
                      transform: `rotate(${rotations[i]})`,
                      transformOrigin: 'right center',
                    }}
                  >
                    {[0.3, 1, 1.7].map((d, j) => (
                      <span key={j} className="flow-dot-left" style={{ animationDelay: `${d}s` }} />
                    ))}
                  </div>
                  <div className="bg-white rounded-xl shadow-sm border border-black/5 px-5 py-3 flex items-center gap-3">
                    <span className="text-midnight/40 text-sm">{item.icon}</span>
                    <span className="font-serif text-[15px] text-midnight/70">{item.label}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Hub diagram — mobile */}
        <div className={`md:hidden transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex justify-center mb-10">
            <div className="w-[160px] h-[160px] rounded-full border border-black/8 bg-gradient-to-b from-black/3 to-transparent flex items-center justify-center relative">
                  <svg className="absolute w-[180px] h-[180px] opacity-[0.07]" style={{ marginTop: '-3px' }} viewBox="0 0 140 140" fill="none">
                    <circle cx="70" cy="35" r="6" fill="#0a0a0a" />
                    <circle cx="40" cy="55" r="5" fill="#0a0a0a" />
                    <circle cx="100" cy="55" r="5" fill="#0a0a0a" />
                    <circle cx="30" cy="80" r="4" fill="#0a0a0a" />
                    <circle cx="70" cy="70" r="7" fill="#0a0a0a" />
                    <circle cx="110" cy="80" r="4" fill="#0a0a0a" />
                    <circle cx="45" cy="105" r="5" fill="#0a0a0a" />
                    <circle cx="95" cy="105" r="5" fill="#0a0a0a" />
                    <circle cx="70" cy="115" r="4" fill="#0a0a0a" />
                    <line x1="70" y1="35" x2="40" y2="55" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="70" y1="35" x2="100" y2="55" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="40" y1="55" x2="70" y2="70" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="100" y1="55" x2="70" y2="70" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="40" y1="55" x2="30" y2="80" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="100" y1="55" x2="110" y2="80" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="70" y1="70" x2="45" y2="105" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="70" y1="70" x2="95" y2="105" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="45" y1="105" x2="70" y2="115" stroke="#0a0a0a" strokeWidth="1.5" />
                    <line x1="95" y1="105" x2="70" y2="115" stroke="#0a0a0a" strokeWidth="1.5" />
                  </svg>
                  <img
                    src="/axxe-ai.png"
                    alt="Axxe"
                    className="w-[90px] h-auto relative z-10"
                    style={{ filter: 'brightness(0) opacity(0.6)', marginTop: '-3px' }}
                  />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {inputs.map(item => (
              <div key={item.label} className="bg-white rounded-xl shadow-sm border border-black/5 px-4 py-3 flex items-center gap-2">
                <span className="text-midnight/40 text-sm">{item.icon}</span>
                <span className="font-serif text-[14px] text-midnight/70">{item.label}</span>
              </div>
            ))}
            {outputs.map(item => (
              <div key={item.label} className="bg-white rounded-xl shadow-sm border border-black/5 px-4 py-3 flex items-center gap-2">
                <span className="text-midnight/40 text-sm">{item.icon}</span>
                <span className="font-serif text-[14px] text-midnight/70">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
