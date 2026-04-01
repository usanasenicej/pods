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
          padding: 6rem 0 3rem;
          background: var(--text-dark);
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at bottom right, rgba(248, 158, 27, 0.05), transparent 600px);
          pointer-events: none;
        }

        .footer-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .brand-text {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -1px;
          color: #fff;
        }

        .subscribe-pill {
          background: rgba(255, 255, 255, 0.03);
          padding: 0.5rem;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          width: 500px;
          transition: all 0.3s ease;
        }

        .subscribe-pill:focus-within {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--primary);
        }

        .sub-input {
          background: none;
          border: none;
          color: #fff;
          padding: 0.5rem 1.5rem;
          width: 100%;
          outline: none;
          font-size: 0.95rem;
        }

        .sub-input::placeholder { color: rgba(255, 255, 255, 0.3); }

        .sub-btn {
          background: var(--primary);
          color: #fff;
          padding: 0.8rem 1.8rem;
          border-radius: 15px;
          font-weight: 700;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .sub-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px var(--primary-glow);
        }

        .footer-main-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 6rem;
          margin-bottom: 5rem;
        }

        .footer-about-text {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.8;
          margin-bottom: 2rem;
          max-width: 450px;
        }

        .social-pills { display: flex; gap: 1rem; }

        .social-icon {
          width: 44px;
          height: 44px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: var(--primary);
          transform: translateY(-5px) rotate(8deg);
          color: #fff;
          border-color: var(--primary);
        }

        .footer-col h3 {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 2rem;
          color: #fff;
          letter-spacing: -0.5px;
        }

        .footer-col ul { list-style: none; }
        .footer-col li { margin-bottom: 1.2rem; color: rgba(255, 255, 255, 0.5); font-size: 1rem; display: flex; align-items: center; gap: 0.8rem; transition: all 0.3s ease; }
        .footer-col a { text-decoration: none; color: inherit; }
        .footer-col li:hover { color: var(--primary); transform: translateX(5px); }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.3);
        }

        .bottom-links { display: flex; gap: 2.5rem; }
        .bottom-links a { text-decoration: none; color: inherit; transition: all 0.3s ease; }
        .bottom-links a:hover { color: #fff; }

        @media (max-width: 1024px) {
          .footer-top-row { flex-direction: column; gap: 2.5rem; text-align: center; }
          .subscribe-pill { width: 100%; }
          .footer-main-grid { grid-template-columns: 1fr 1fr; gap: 4rem; }
        }

        @media (max-width: 768px) {
          .footer-main-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 1.5rem; text-align: center; }
          .bottom-links { justify-content: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
