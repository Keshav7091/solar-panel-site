import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import Services from "./pages/Services"
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

// ✅ Product category pages
import Modules from "./pages/product/Modules";
import Products from "./pages/product/Products";
import SolarSolutions from "./pages/product/SolarSolutions";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Individual product pages */}
        <Route path="/product/Modules" element={<Modules />} />
        <Route path="/product/Products" element={<Products />} />
        <Route path="/product/SolarSolutions" element={<SolarSolutions />} />

        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
