import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Photos from './pages/Photos'

function App() {
  return (
    <BrowserRouter basename="/Talia-Website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App