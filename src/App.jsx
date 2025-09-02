import react from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
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
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
