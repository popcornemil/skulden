import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Frame from './pages/Frame'
import Screen from './pages/Screen'
import Play from './pages/Play'
import Cloud from './pages/Cloud'
import Revenue from './pages/Revenue'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-midnight text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frame" element={<Play />} />
          <Route path="/screen" element={<Screen />} />
          <Route path="/play" element={<Frame />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/revenue" element={<Revenue />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
