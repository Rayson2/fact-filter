import "./index.scss"
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import TextFormat from './pages/formats/TextFormat'
import ImageFormat from './pages/formats/ImageFormat'
import VideoFormat from './pages/formats/VideoFormat'
import AudioFormat from './pages/formats/AudioFormat'


const App = () => {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/format/text" element={<TextFormat />} />
        <Route path="/format/image" element={<ImageFormat />} />
        <Route path="/format/video" element={<VideoFormat />} />
        <Route path="/format/audio" element={<AudioFormat />} />
      </Routes>
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
