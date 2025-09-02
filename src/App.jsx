import react from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import Products from "./pages/Products"
import Services from "./pages/Services"
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'



function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About /> } />
        <Route path="/product" element={<Products />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
