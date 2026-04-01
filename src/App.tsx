import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Features from './components/Features';
import QualitySection from './components/QualitySection';
import Offer from './components/Offer';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="main-wrapper">
      <CursorFollower />
      <Navbar />
      <Hero />
      <div className="reveal"><Showcase /></div>
      <div className="reveal"><Features /></div>
      <div className="reveal"><QualitySection /></div>
      <div className="reveal"><Offer /></div>
      <Footer />
    </div>
  );
}

export default App;
