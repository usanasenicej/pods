import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero animate-fade-in" id="about">
      <div className="container">
        <div className="hero-box">
          <img 
            src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2000&auto=format&fit=crop" 
            alt="White Smart EarPods" 
            className="hero-image"
          />
          
          <div className="hero-content">
            <h1 className="hero-title">
              Easier Life with <br/>
              Smart EarPods 
              <span className="toggle-switch"></span>
            </h1>
            
            <p className="hero-desc">
              Welcome to a world where your daily routine adapts to your needs effortlessly, making your life a breeze. Experience the future of sound. Experience the future of living.
            </p>
            
            <button className="btn btn-primary explore-btn">
              Explore More <ArrowRight size={18} />
            </button>
          </div>

          <div className="hotspots">
            <div className="hotspot" style={{ top: '25%', left: '48%' }}>
              <div className="hotspot-dot"></div>
              <span className="hotspot-label">Time Saver</span>
            </div>
            <div className="hotspot" style={{ top: '55%', left: '44%' }}>
              <div className="hotspot-dot"></div>
              <span className="hotspot-label" style={{ backgroundColor: 'transparent', padding: 0 }}>Energy Efficient</span>
            </div>
            <div className="hotspot" style={{ top: '45%', right: '12%' }}>
              <div className="hotspot-dot"></div>
              <span className="hotspot-label">Security Enhancer</span>
            </div>
          </div>

          <div className="floating-card">
            <div className="floating-card-top">
              <p>Use Our Services and<br/>Join Us To Save Energy</p>
              <button className="floating-btn"><ArrowRight size={16}/></button>
            </div>
            <div className="avatars-row">
              <div className="avatars">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User 1"/>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="User 2"/>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="User 3"/>
              </div>
              <span className="avatar-count">250k+</span>
            </div>
          </div>

          <div className="hero-cutout">
            <div className="hero-cutout-inner">
              <span className="tag">#Smart Tech</span>
              <span className="tag">#Time Saver</span>
              <span className="tag">#Remote Control</span>
              <span className="tag">#Security Enhancer</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding-top: 8rem;
          margin-bottom: 2rem;
        }

        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        @keyframes float-slow {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .hero-box {
          position: relative;
          background: #f8fafc;
          border-radius: 48px;
          height: 650px;
          overflow: hidden;
          width: 100%;
          border: 1px solid rgba(15, 23, 42, 0.05);
          box-shadow: var(--shadow-xl);
        }

        .hero-image {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 80%;
          height: 120%;
          object-fit: contain;
          z-index: 1;
          animation: floating 6s ease-in-out infinite;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.1));
        }

        .hero-content {
          position: absolute;
          top: 50%;
          left: 5rem;
          transform: translateY(-50%);
          z-index: 10;
          max-width: 600px;
        }

        .hero-title {
          font-size: 4.8rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 1.8rem;
          color: var(--text-dark);
          letter-spacing: -2px;
        }

        .toggle-switch {
          display: inline-block;
          width: 80px;
          height: 40px;
          background: linear-gradient(135deg, var(--primary) 0%, #fbbf24 100%);
          border-radius: 999px;
          position: relative;
          box-shadow: 0 8px 16px rgba(248, 158, 27, 0.3);
          vertical-align: middle;
          margin-left: 15px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .toggle-switch::after {
          content: '';
          position: absolute;
          width: 32px;
          height: 32px;
          background-color: white;
          border-radius: 50%;
          top: 4px;
          right: 4px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .hero-desc {
          font-size: 1.15rem;
          color: var(--text-gray);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 480px;
        }

        .explore-btn {
          font-size: 1.1rem;
          padding: 1rem 2rem;
          border-radius: 20px;
        }

        /* Hotspots */
        .hotspot {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hotspot:hover { transform: scale(1.1); }

        .hotspot-dot {
          width: 16px;
          height: 16px;
          background: white;
          border: 4px solid var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 0 8px rgba(248, 158, 27, 0.1);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(248, 158, 27, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(248, 158, 27, 0); }
          100% { box-shadow: 0 0 0 0 rgba(248, 158, 27, 0); }
        }

        .hotspot-label {
          color: var(--text-dark);
          font-weight: 700;
          font-size: 0.9rem;
          background: rgba(255,255,255,0.8);
          padding: 0.5rem 1rem;
          border-radius: 12px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.5);
          box-shadow: var(--shadow-md);
        }

        /* Floating Card */
        .floating-card {
          position: absolute;
          bottom: 3rem;
          right: 4rem;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          padding: 1.5rem;
          border-radius: 24px;
          z-index: 10;
          width: 300px;
          box-shadow: var(--shadow-xl);
          border: 1px solid rgba(255,255,255,0.5);
          animation: float-slow 4s ease-in-out infinite;
        }

        .floating-card-top p {
          font-weight: 700;
          font-size: 1rem;
          line-height: 1.4;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }

        .floating-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: var(--text-dark);
          color: white;
          transition: all 0.3s ease;
        }

        .floating-btn:hover { background: var(--primary); transform: rotate(-45deg); }

        .avatars img { width: 36px; height: 36px; border: 3px solid white; }
        
        /* Hero Cutout */
        .hero-cutout {
          position: absolute;
          bottom: -1px;
          left: -1px;
          width: 520px;
          height: 100px;
          background: var(--bg-white);
          border-top-right-radius: 48px;
          z-index: 20;
          display: flex;
          align-items: center;
          padding-left: 2rem;
        }
        
        .hero-cutout::before, .hero-cutout::after {
          box-shadow: -25px 25px 0 25px var(--bg-white);
          width: 50px;
          height: 50px;
        }

        .hero-cutout::before { top: -50px; border-bottom-left-radius: 50px; }
        .hero-cutout::after { right: -50px; border-bottom-left-radius: 50px; }

        .tag {
          font-size: 0.85rem;
          padding: 0.5rem 1.2rem;
          border-radius: 12px;
          background: var(--bg-light);
          color: var(--text-gray);
          font-weight: 600;
          border: 1px solid rgba(15, 23, 42, 0.05);
          transition: all 0.3s ease;
        }

        .tag:hover { background: var(--primary); color: white; border-color: var(--primary); }

        @media (max-width: 1024px) {
          .hero-content { left: 2rem; }
          .hero-title { font-size: 3.5rem; }
          .hero-image { width: 100%; right: -20%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
