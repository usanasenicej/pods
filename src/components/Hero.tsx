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
          padding-top: 1rem;
          margin-bottom: 2rem;
        }

        .hero-box {
          position: relative;
          background: #f1f1f1;
          border-radius: 40px;
          height: 600px;
          overflow: hidden;
          width: 100%;
        }

        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          opacity: 0.9;
        }

        .hero-content {
          position: absolute;
          top: 45%;
          left: 4rem;
          transform: translateY(-50%);
          z-index: 10;
          max-width: 550px;
        }

        .hero-title {
          font-size: 4.2rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #222;
        }

        .toggle-switch {
          display: inline-block;
          width: 70px;
          height: 35px;
          background-color: var(--primary);
          border-radius: 999px;
          position: relative;
          box-shadow: 0 4px 10px rgba(248, 158, 27, 0.4);
          vertical-align: middle;
          margin-left: 10px;
          margin-bottom: 15px; /* Adjust alignment to title */
        }

        .toggle-switch::after {
          content: '';
          position: absolute;
          width: 27px;
          height: 27px;
          background-color: white;
          border-radius: 50%;
          top: 4px;
          right: 4px;
        }

        .hero-desc {
          font-size: 1.05rem;
          color: #444;
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 450px;
        }

        .explore-btn {
          font-size: 1rem;
          padding: 0.8rem 1.6rem;
        }

        /* Hotspots */
        .hotspots { position: absolute; inset: 0; z-index: 5; }

        .hotspot {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .hotspot-dot {
          width: 14px;
          height: 14px;
          background: white;
          border: 4px solid var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 0 6px rgba(248, 158, 27, 0.15);
        }

        .hotspot-label {
          color: #333;
          font-weight: 600;
          font-size: 0.85rem;
          background: rgba(255,255,255,0.85);
          padding: 0.4rem 0.8rem;
          border-radius: 999px;
          backdrop-filter: blur(4px);
        }

        /* Floating Card */
        .floating-card {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 1.2rem 1.5rem;
          border-radius: 20px;
          z-index: 10;
          width: 280px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .floating-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.2rem;
        }

        .floating-card-top p {
          font-weight: 600;
          font-size: 0.9rem;
          line-height: 1.3;
          color: #222;
        }

        .floating-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--primary);
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .avatars-row { display: flex; align-items: center; justify-content: space-between; }
        .avatars { display: flex; }
        .avatars img { width: 32px; height: 32px; border-radius: 50%; border: 2px solid white; margin-right: -10px; }
        .avatar-count { font-weight: 700; color: var(--text-gray); font-size: 0.9rem; }

        /* Cutout Effect at the bottom left */
        .hero-cutout {
          position: absolute;
          bottom: -1px;
          left: -1px;
          width: 500px;
          height: 80px; /* Reduced height from 120px to make gap smaller */
          background: #ffffff; /* Use the main wrapper bg exactly to create seamless cut effect */
          border-top-right-radius: 40px;
          z-index: 20;
          display: flex;
          align-items: center;
        }
        
        .hero-cutout::before {
          content: "";
          position: absolute;
          top: -40px;
          left: 0;
          width: 40px;
          height: 40px;
          background: transparent;
          border-bottom-left-radius: 40px;
          box-shadow: -20px 20px 0 20px #ffffff;
        }
        
        .hero-cutout::after {
          content: "";
          position: absolute;
          top: 0;
          right: -40px;
          width: 40px;
          height: 40px;
          background: transparent;
          border-bottom-left-radius: 40px;
          box-shadow: -20px 20px 0 20px #ffffff;
        }

        .hero-cutout-inner {
          padding-left: 3rem;
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
          padding-top: 15px; /* Alignment */
        }
        
        .hero-cutout-inner .tag {
          font-size: 0.8rem;
          padding: 0.4rem 1rem;
          border: 1px solid rgba(248,158,27,0.2);
        }

        @media (max-width: 1024px) {
          .hero-content { left: 2rem; }
          .hero-title { font-size: 3rem; }
          .hero-cutout, .floating-card { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
