import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Photos from './pages/Photos'
// import About from './pages/About

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        {/* <Route path="/about" element={<about/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App