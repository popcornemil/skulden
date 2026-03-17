import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Home2 from './pages/Home2'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/2" element={<Home2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
