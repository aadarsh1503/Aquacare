import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeroSection from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ContactSection from './components/ContactSection/ContactSection';
import MobileNavbar from './components/MobileNavbar/MobileNavbar';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import ConstructionMaintenance from './components/Construction&Maintenance/Construction&Maintenance';
import Electrical from './components/Electrical/Electrical';
import Plumbing2 from './components/Plumbing2/Plumbing2';
import Painting from './components/Painting/Painting';
import Gypsum from './components/Gypsum/Gypsum';
import WaterFeatures from './components/WaterFeatures/WaterFeatures';
import Jaccuzi from './components/Jaccuzi/Jaccuzi';
import SplashPads from './components/SplashPads/SplashPads';
import OurProjects from './components/OurProjects/OurProjects';
import RecentProjectsTable from './components/RecentProjectsTable/RecentProjectsTable';
import SwimmingPool from './components/SwimmingPool/SwimmingPool';
import FittedBathrooms from './components/FittedBathrooms/FittedBathrooms';


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
          <Route path="/construction&Maintenance" element={<ConstructionMaintenance />} />
          <Route path="/electrical" element={<Electrical />} />
          <Route path="/plumbing" element={<Plumbing2 />} />
          <Route path="/painting" element={<Painting />} />
          <Route path="/gypsum" element={<Gypsum />} />
          <Route path="/water-Features" element={<WaterFeatures />} />
          <Route path="/jacuzzi&Sauna" element={<Jaccuzi />} />
          <Route path="/splashPads" element={<SplashPads />} />
          <Route path="/our-Projects" element={<OurProjects />} />
          <Route path="/recent-Projects" element={<RecentProjectsTable />} />
          <Route path="/swimmingPool" element={<SwimmingPool />} />
          <Route path="/fittedBathrooms" element={<FittedBathrooms />} />

         







          




       
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
