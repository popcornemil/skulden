export default function DashboardMockup() {
  const displays = [
    { name: 'Entrance Display', location: 'Nordstan, Gothenburg', status: 'Live', uptime: '99.8%', impressions: '12,450', image: '/bild1.jpg' },
    { name: 'Checkout Screen A', location: 'Mall of Scandinavia', status: 'Live', uptime: '99.9%', impressions: '8,320', image: '/bild2.jpg' },
    { name: 'Window Display', location: 'Emporia, Malmö', status: 'Scheduled', uptime: '98.5%', impressions: '15,200', image: '/bild3.jpg' },
    { name: 'Aisle End Cap', location: 'Nordstan, Gothenburg', status: 'Live', uptime: '99.7%', impressions: '6,890', image: '/bild4.jpg' },
    { name: 'Fitting Room Panel', location: 'Täby Centrum', status: 'Live', uptime: '100%', impressions: '4,120', image: '/bild5.jpg' },
    { name: 'Lobby Screen', location: 'Väla, Helsingborg', status: 'Paused', uptime: '97.2%', impressions: '9,750', image: '/bild6.jpg' },
  ]

  return (
    <div className="rounded-[16px] overflow-hidden shadow-2xl border border-black/10 bg-white text-[#1a1a1a] text-[13px]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="flex h-[620px]">
        {/* Sidebar */}
        <div className="w-[200px] bg-[#fafafa] border-r border-black/5 p-4 flex flex-col shrink-0">
          <div className="flex items-center gap-2 mb-6 px-2">
            <img src="/logo-nopayoff-gold.png" alt="Axxe" className="h-5" style={{ filter: 'brightness(0)' }} />
          </div>
          <div className="flex items-center gap-2 px-2 mb-1 text-[11px] text-black/30 uppercase tracking-wider">
            <span>Search</span>
            <span className="ml-auto text-[10px] bg-black/5 rounded px-1.5 py-0.5">⌘K</span>
          </div>
          <nav className="mt-4 space-y-1">
            {[
              { icon: '⌂', label: 'Dashboard', active: false },
              { icon: '▣', label: 'Displays', active: true },
              { icon: '◎', label: 'Locations', active: false },
              { icon: '▶', label: 'Content', active: false },
              { icon: '◈', label: 'Analytics', active: false },
              { icon: '⚙', label: 'Settings', active: false },
            ].map(item => (
              <div key={item.label} className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] ${item.active ? 'bg-black text-white font-medium' : 'text-black/50 hover:bg-black/5'}`}>
                <span className="text-sm">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
          <div className="mt-auto px-2 flex items-center gap-2">
            <img src="/nikk.png" alt="Nikk Matson" className="w-7 h-7 rounded-full object-cover" />
            <div>
              <p className="text-[12px] font-medium">Nikk Matson</p>
              <p className="text-[10px] text-black/40">Axxe HQ</p>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top bar */}
          <div className="h-[52px] border-b border-black/5 flex items-center px-5 gap-3 shrink-0">
            <span className="font-medium text-[14px]">Displays</span>
            <span className="text-black/30 text-[12px] ml-1">24 active</span>
            <div className="ml-auto flex items-center gap-2">
              {['All locations ▾', 'Status ▾', 'Last 7 days ▾'].map(f => (
                <span key={f} className="px-3 py-1.5 rounded-full border border-black/10 text-[11px] text-black/60">{f}</span>
              ))}
            </div>
          </div>

          {/* Display grid */}
          <div className="flex-1 overflow-hidden p-5">
            <div className="grid grid-cols-3 gap-4 h-full">
              {displays.map(d => (
                <div key={d.name} className="flex flex-col">
                  <div className="relative rounded-lg overflow-hidden aspect-[16/10] bg-black/5">
                    <img src={d.image} alt={d.name} className="w-full h-full object-cover" />
                    <span className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-medium ${
                      d.status === 'Live' ? 'bg-green-500/90 text-white' :
                      d.status === 'Scheduled' ? 'bg-blue-500/90 text-white' :
                      'bg-black/50 text-white'
                    }`}>{d.status}</span>
                  </div>
                  <div className="mt-2">
                    <p className="font-medium text-[12px]">{d.name}</p>
                    <p className="text-[11px] text-black/40">{d.location}</p>
                    <div className="flex gap-4 mt-1.5 text-[11px] text-black/50">
                      <span>Uptime <span className="text-black/80 font-medium">{d.uptime}</span></span>
                      <span>Views <span className="text-black/80 font-medium">{d.impressions}</span></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Panel */}
        <div className="w-[280px] border-l border-black/5 flex flex-col shrink-0">
          <div className="h-[52px] border-b border-black/5 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <span className="text-sm">✦</span>
              <span className="font-medium text-[13px]">Axxe AI</span>
            </div>
            <span className="text-black/30 text-lg cursor-pointer">×</span>
          </div>
          <div className="flex-1 p-4 overflow-hidden flex flex-col gap-3">
            {/* User message */}
            <div className="ml-auto bg-black/5 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[220px]">
              <p className="text-[12px]">Which displays should I prioritize for the weekend campaign?</p>
            </div>
            {/* AI response */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[12px]">✦</span>
                <span className="text-[11px] text-black/40">Show reasoning ›</span>
              </div>
              <div className="text-[12px] text-black/70 leading-relaxed">
                <p>Based on foot traffic and conversion data from the last 30 days:</p>
                <p className="font-medium text-black mt-2">Focus on high-traffic entrances</p>
                <p className="mt-1"><span className="font-medium text-black">Entrance Display</span> at Nordstan has the highest engagement rate at 3.2x above average.</p>
                <ul className="mt-2 space-y-1 text-[11px]">
                  <li>• Peak hours: 11:00–14:00</li>
                  <li>• Best performing content: Video</li>
                  <li>• Suggested duration: 15s spots</li>
                </ul>
                <p className="font-medium text-black mt-3">Scale to similar locations</p>
                <p className="mt-1"><span className="font-medium text-black">Window Display</span> at Emporia shows similar audience patterns and is currently scheduled.</p>
              </div>
            </div>
          </div>
          <div className="p-3 border-t border-black/5">
            <div className="flex items-center gap-2 bg-black/3 rounded-full px-3 py-2">
              <span className="text-black/30 text-[12px]">+ Ask for recommendations</span>
              <span className="ml-auto w-6 h-6 rounded-full bg-black flex items-center justify-center">
                <span className="text-white text-[11px]">↑</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
