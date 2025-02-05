import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeroSection from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ContactSection from './components/ContactSection/ContactSection';
import MobileNavbar from './components/MobileNavbar/MobileNavbar';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

function App() {
  

  return (
    <Router> 
      <div>
        <Navbar />
        <MobileNavbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
       
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
