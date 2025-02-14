import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { OurWork } from './components/OurWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceLayout } from './components/ServiceLayout';
import { ResidentialServices } from './pages/ResidentialServices';
import { IndustrialServices } from './pages/IndustrialServices';
import { CommercialServices } from './pages/CommercialServices';
import { MaintenanceServices } from './pages/MaintenanceServices';
import { PrivacyPolicy } from './pages/PrivacyPolicy';  
import { TermsOfService } from './pages/TermsOfService'; 
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollToSection } from './components/ScrollToSection';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToSection />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <AboutUs />
                <ServiceLayout />
                <OurWork />
                <Contact />
              </>
            } />

            <Route path="/services/residential" element={<ResidentialServices />} />
            <Route path="/services/industrial" element={<IndustrialServices />} />
            <Route path="/services/commercial" element={<CommercialServices />} />
            <Route path="/services/maintenance" element={<MaintenanceServices />} />

            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos-de-servico" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
