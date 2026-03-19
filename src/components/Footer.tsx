import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-top-row">
        <div className="footer-brand">
          <h2 className="brand-text">AURA <span className="text-primary">PODS</span></h2>
        </div>
        
        <div className="footer-subscribe">
          <div className="subscribe-pill">
            <input type="text" placeholder="Subscribe to our newsletter" className="sub-input" />
            <button className="sub-btn">Subscribe Now</button>
          </div>
        </div>
      </div>

      <div className="container footer-main-grid">
        <div className="footer-col about-col">
          <p className="footer-about-text">
            Elevating the human experience through premium sound and high-fidelity audio engineering. Join our journey to redefine hearing.
          </p>
          <div className="social-pills">
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">TW</a>
            <a href="#" className="social-icon">IG</a>
            <a href="#" className="social-icon">LI</a>
          </div>
        </div>

        <div className="footer-col links-col">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Premium Audio</a></li>
            <li><a href="#">Aura App</a></li>
            <li><a href="#">Spatial Sound</a></li>
            <li><a href="#">Custom EQ</a></li>
          </ul>
        </div>

        <div className="footer-col links-col">
          <h3>Contact Us</h3>
          <ul>
            <li><Mail size={16} /> hi@newpods.tech</li>
            <li><Phone size={16} /> +1 234 567 890</li>
            <li><MapPin size={16} /> Silicon Valley, CA</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Aura EarPods. All rights reserved.</p>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 3rem 0; /* Reduced padding greatly to match tighter layout */
          background: #ffffff; /* White bg instead of black */
          color: #222;
          border-top: 2px solid #f1f1f1;
        }

        .footer-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem; /* Reduced margin */
          padding-bottom: 2rem;
          border-bottom: 1px solid #f1f1f1;
        }

        .brand-text {
          font-size: 1.8rem; /* Scaled down slightly */
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .text-primary {
          color: var(--primary);
        }

        .subscribe-pill {
          background: #fcfcfc;
          padding: 0.4rem; /* Tightened */
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 1rem;
          border: 1px solid #eaeaea;
          width: 450px; /* Scaled down */
        }

        .sub-input {
          background: none;
          border: none;
          color: #222;
          padding: 0.4rem 1.2rem;
          width: 100%;
          outline: none;
          font-size: 0.9rem;
        }

        .sub-input::placeholder { color: #aaa; }

        .sub-btn {
          background: #222;
          color: white;
          padding: 0.6rem 1.2rem; /* Tighter padding */
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.85rem;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: var(--transition);
        }

        .sub-btn:hover { background: var(--primary); }

        .footer-main-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem; /* Reduced gap */
          margin-bottom: 2.5rem; /* Reduced margin */
        }

        .footer-about-text {
          font-size: 0.95rem; /* Smaller text */
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          max-width: 400px;
        }

        .social-pills { display: flex; gap: 0.8rem; }

        .social-icon {
          width: 38px; /* Tighter social buttons */
          height: 38px;
          border-radius: 50%;
          background: #f4f5f7;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #222;
          font-size: 0.8rem;
          font-weight: 700;
          border: 1px solid #eaeaea;
          transition: var(--transition);
        }

        .social-icon:hover {
          background: var(--primary);
          border-color: var(--primary);
          color: #fff;
        }

        .footer-col h3 {
          font-size: 1.1rem; /* Scaled down */
          font-weight: 800;
          margin-bottom: 1.2rem;
          color: #222;
        }

        .footer-col ul { list-style: none; }
        .footer-col li { margin-bottom: 0.8rem; color: var(--text-gray); font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem; }
        .footer-col a { text-decoration: none; color: inherit; transition: var(--transition); }
        .footer-col a:hover { color: var(--primary); }

        .footer-bottom {
          padding-top: 1.5rem; /* Tighter padding */
          border-top: 1px solid #f1f1f1;
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: #aaa;
        }

        .bottom-links { display: flex; gap: 1.5rem; }
        .bottom-links a { text-decoration: none; color: inherit; }
        .bottom-links a:hover { color: var(--primary); }

        @media (max-width: 1024px) {
          .footer-top-row { flex-direction: column; gap: 2rem; }
          .subscribe-pill { width: 100%; }
          .footer-main-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .footer-main-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
