import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="brand">
          <span className="brand-logo">A</span>
          <span className="brand-text">URA EARPODS</span>
        </div>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#about" className="active">About</a>
          <a href="#product">Our Product</a>
          <a href="#features">Features</a>
          <a href="#offer">Offer</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-links">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#product" onClick={() => setIsMobileMenuOpen(false)}>Our Product</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#offer" onClick={() => setIsMobileMenuOpen(false)}>Offer</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar.scrolled {
          padding: 0.8rem 0;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          font-weight: 800;
          font-size: 1.2rem;
          letter-spacing: -0.5px;
          cursor: pointer;
        }

        .brand-logo {
          font-size: 1.6rem;
          color: var(--primary);
          margin-right: 2px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          background: rgba(15, 23, 42, 0.05);
          padding: 0.3rem;
          border-radius: 999px;
          gap: 0.2rem;
          border: 1px solid rgba(15, 23, 42, 0.03);
          transition: all 0.3s ease;
        }

        .navbar.scrolled .nav-links {
          background: rgba(15, 23, 42, 0.03);
        }

        .nav-links a {
          color: var(--text-gray);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
          padding: 0.6rem 1.4rem;
          border-radius: 999px;
          transition: all 0.3s ease;
        }

        .nav-links a.active, .nav-links a:hover {
          color: #fff;
          background: var(--text-dark);
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          max-width: 320px;
          height: 100vh;
          background: #fff;
          z-index: 999;
          padding: 6rem 2rem;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: -10px 0 30px rgba(0,0,0,0.1);
        }

        .mobile-drawer.open { right: 0; }

        .drawer-links {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .drawer-links a {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-dark);
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
