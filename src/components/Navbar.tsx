import React from 'react';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="brand">
          <span className="brand-logo" style={{ color: 'var(--primary)' }}>A</span>
          <span className="brand-text">URA EARPODS</span>
        </div>
        
        <div className="nav-links">
          <a href="#about" className="active">About</a>
          <a href="#product">Our Product</a>
          <a href="#features">Features</a>
          <a href="#offer">Offer</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>

      <style>{`
        .navbar {
          padding: 2.5rem 0 1rem;
          width: 100%;
          z-index: 100;
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
          font-size: 1.4rem;
          letter-spacing: -0.5px;
          color: #222;
        }

        .brand-logo {
          font-size: 1.8rem;
          margin-right: 2px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          background: #333333; /* Dark grey nav pill */
          padding: 0.4rem 0.6rem;
          border-radius: 999px;
          gap: 0.5rem;
        }

        .nav-links a {
          color: #cccccc;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          padding: 0.5rem 1.2rem;
          border-radius: 999px;
          transition: var(--transition);
        }

        .nav-links a.active, .nav-links a:hover {
          color: #222;
          background: #ffffff;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
