import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Frame from './pages/Frame'
import Screen from './pages/Screen'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-midnight text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frame" element={<Frame />} />
          <Route path="/screen" element={<Screen />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
