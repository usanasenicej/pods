import React from 'react';
import { Play } from 'lucide-react';

const Showcase: React.FC = () => {
  return (
    <section className="showcase section" id="product">
      <div className="container showcase-grid">
        
        <div className="showcase-content animate-fade-in">
          <h2 className="section-title">
            Your <span style={{ color: '#d0d0d0' }}>Smart EarPods</span>, <br/>
            Your Way
          </h2>
          <p className="section-desc">
            Elevate your lifestyle with our smart EarPods app. Effortlessly control volume, active noise cancellation, and more. Experience convenience, security, and energy efficiency.
          </p>
          <button className="btn btn-dark mt-4">Learn More About Us</button>
        </div>

        <div className="showcase-visual animate-fade-in delay-1">
          <div className="mockup-bg">
            
            <div className="phones-container">
              {/* Phone 1: Music Plaving */}
              <div className="phone-wrapper phone-1">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop" 
                  alt="Music Interface" 
                  className="mockup-img"
                />
              </div>
              
              {/* Phone 2: Movies/Video Playing (overlapping forward) */}
              <div className="phone-wrapper phone-2">
                <img 
                  src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=400&auto=format&fit=crop" 
                  alt="Movie Interface" 
                  className="mockup-img"
                />
              </div>
            </div>

            <div className="mockup-text-card">
              <h3 className="mockup-title">
                <span className="text-primary">N</span>EW PODS
              </h3>
              <p className="mockup-subtitle">Customizable sound profile, seamlessly manage your EarPods.</p>
              <div className="play-trigger">
                <div className="play-btn-small">
                  <Play size={10} fill="white" />
                </div>
                <span>Play Video</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .showcase {
          padding: 2rem 0 6rem;
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr; /* Give more space to mockup container */
          gap: 4rem;
          align-items: center;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          line-height: 1.1;
          color: #222;
        }

        .section-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-gray);
          max-width: 450px;
          margin-bottom: 2rem;
        }

        .mt-4 { margin-top: 1rem; }

        .mockup-bg {
          background: #333; /* Dark/grey box as per exact reference mockup */
          border-radius: 40px;
          padding: 3rem 4rem;
          display: flex;
          align-items: center;
          gap: 3rem;
          border: 1px solid rgba(0,0,0,0.05);
          position: relative;
        }

        .phones-container {
          position: relative;
          width: 250px;
          height: 380px;
          flex-shrink: 0;
        }

        .phone-wrapper {
          border-radius: 28px;
          overflow: hidden;
          border: 6px solid #111;
          background: #fff;
          box-shadow: -15px 30px 40px rgba(0,0,0,0.3);
          position: absolute;
        }

        .phone-1 {
          width: 170px;
          height: 340px;
          top: 0;
          left: 0;
          transform: rotate(-5deg);
          z-index: 1;
        }

        .phone-2 {
          width: 170px;
          height: 340px;
          bottom: 0;
          right: 0;
          transform: rotate(2deg);
          z-index: 2;
        }

        .mockup-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .mockup-text-card {
          flex: 1;
        }

        .mockup-title {
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 0.8rem;
          color: #fff;
        }

        .mockup-subtitle {
          color: #aaa;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .play-trigger {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
        }

        .play-btn-small {
          width: 32px;
          height: 32px;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .showcase-grid { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
          .section-desc { margin: 0 auto 2rem; }
          .mockup-bg { flex-direction: column; padding: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Showcase;
