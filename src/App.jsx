import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Frame from './pages/Frame'
import Screen from './pages/Screen'
import Play from './pages/Play'
import Cloud from './pages/Cloud'
import Revenue from './pages/Revenue'
import Invest from './pages/Invest'
import AI from './pages/AI'
import About from './pages/About'
import Studio from './pages/Studio'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-midnight text-white">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frame" element={<Play />} />
          <Route path="/screen" element={<Screen />} />
          <Route path="/play" element={<Frame />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/about" element={<About />} />
          <Route path="/studio" element={<Studio />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
