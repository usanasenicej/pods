import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Features from './components/Features';
import QualitySection from './components/QualitySection';
import Offer from './components/Offer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <Hero />
      <Showcase />
      <Features />
      <QualitySection />
      <Offer />
      <Footer />
    </div>
  );
}

export default App;
