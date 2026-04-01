import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        
        <div className="nav-links">
          <a href="#about" className="active">About</a>
          <a href="#product">Our Product</a>
          <a href="#features">Features</a>
          <a href="#offer">Offer</a>
          <a href="#contact">Contact</a>
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

        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
