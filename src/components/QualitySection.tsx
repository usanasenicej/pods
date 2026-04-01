import React from 'react';
import { Play } from 'lucide-react';

const QualitySection: React.FC = () => {
  return (
    <section className="quality section" id="services">
      <div className="container">
        
        <div className="quality-header-grid animate-fade-in">
          <div className="quality-title-col">
            <h2 className="section-title">
              Our purpose to <br/>
              <span style={{color: '#d0d0d0'}}>Quality of Life</span>
            </h2>
          </div>
          
          <div className="quality-stats-col">
            <div className="stat-pill">
              <h3 className="stat-number">17</h3>
              <p className="stat-text">Years Of<br/>Experience</p>
            </div>
            <div className="stat-pill">
              <h3 className="stat-number">84</h3>
              <p className="stat-text">Partners In<br/>The World</p>
            </div>
            <div className="stat-pill">
              <h3 className="stat-number">720</h3>
              <p className="stat-text">Projects<br/>Done</p>
            </div>
          </div>
        </div>

        <div className="quality-content-split animate-fade-in delay-1">
          
          {/* Left Side: Staggered Images */}
          <div className="quality-visuals">
             
            <div className="quality-card top-img">
              <img 
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop" 
                alt="Programming Lifestyle" 
                className="quality-img"
                onError={(e) => { e.currentTarget.src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop"; }}
              />
              <div className="card-overlay">
                 <span>Studio</span>
                 <div className="card-dot"></div>
              </div>
            </div>

            <div className="quality-card bottom-img">
              <img 
                src="https://images.unsplash.com/photo-1481408365826-62024220377e?q=80&w=800&auto=format&fit=crop" 
                alt="Relaxed Modern Setup" 
                className="quality-img"
                onError={(e) => { e.currentTarget.src="https://images.unsplash.com/photo-1512446816042-444d641267d4?w=800&auto=format&fit=crop"; }}
              />
              <div className="card-overlay">
                 <span>Home Relaxing</span>
                 <div className="card-dot"></div>
              </div>
            </div>
          </div>
          
          {/* Right Side: Text & Video Button */}
          <div className="quality-text-box">
            <p className="quality-desc-text">
              Collaborate and experience our sound with us. Aura EarPods are built to suit all purposes in every aspect of your life, creating a better and more mindful life experience. Unfold a world of meaning and embrace the extraordinary with every note.
            </p>
            
            <button className="play-trigger">
              <div className="play-btn-outline">
                <Play size={14} fill="var(--primary)" color="var(--primary)"/>
              </div>
              <span className="play-text">Play Video</span>
            </button>
          </div>
          
        </div>

        {/* Testimonial Block */}
        <div className="testimonial-section">
          <div className="testimonial-card">
            <div className="quote-icon">“</div>
            <p className="testimonial-text">
              "One of my favorite features is the ability to create customized sound profiles. I've set up a 'Focus' routine that instantly blocks out all background noise. In the evening, the 'Relax' mode shifts my audio profile so I can enjoy music without straining my ears."
            </p>
            <div className="testimonial-author">
              <span className="author-name">Donald Richards</span>
              <span className="author-title">, Start Up CEO</span>
            </div>
          </div>
        </div>
        
      </div>

      <style>{`
        .quality {
          padding: 8rem 0;
          background: #fff;
        }

        .quality-header-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.8fr;
          gap: 6rem;
          margin-bottom: 6rem;
          align-items: center;
        }

        .section-title {
          font-size: 4.5rem;
          font-weight: 800;
          color: var(--text-dark);
          line-height: 1;
          letter-spacing: -2.5px;
        }

        .quality-stats-col {
          display: flex;
          justify-content: space-between;
          padding-bottom: 2rem;
          width: 100%;
          border-bottom: 1px solid rgba(15, 23, 42, 0.05);
        }

        .stat-pill {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .stat-number {
          font-size: 4rem;
          font-weight: 800;
          color: var(--text-dark);
          line-height: 1;
          letter-spacing: -2px;
        }

        .stat-text {
          font-size: 0.9rem;
          color: var(--text-light-gray);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 0.5rem;
        }

        .quality-content-split {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 6rem;
          align-items: center;
          margin-top: 4rem;
        }

        .quality-visuals {
          position: relative;
          height: 650px;
        }

        .quality-card {
          position: absolute;
          border-radius: 48px;
          overflow: hidden;
          background: #fff;
          box-shadow: var(--shadow-xl);
          border: 1px solid rgba(15, 23, 42, 0.03);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .top-img {
          width: 450px;
          height: 420px;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .bottom-img {
          width: 420px;
          height: 450px;
          top: 200px;
          left: 300px;
          z-index: 2;
        }

        .quality-card:hover { transform: translateY(-15px) rotate(1deg); z-index: 10; }

        .quality-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease; }
        .quality-card:hover .quality-img { transform: scale(1.1); }

        .card-overlay {
          position: absolute;
          bottom: 2rem;
          left: 2rem; 
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          padding: 0.8rem 1.6rem;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 1.2rem;
          font-weight: 800;
          font-size: 0.95rem;
          box-shadow: var(--shadow-lg);
          color: var(--text-dark);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .card-dot {
          width: 14px;
          height: 14px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 0 6px var(--primary-glow);
        }

        .quality-text-box {
          max-width: 500px;
        }

        .quality-desc-text {
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--text-gray);
          margin-bottom: 3.5rem;
        }

        .play-btn-outline {
          width: 64px;
          height: 64px;
          border-radius: 20px;
          background: var(--bg-light);
          border: 1px solid rgba(15, 23, 42, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .play-trigger:hover .play-btn-outline { 
          background: var(--primary); 
          transform: rotate(10deg);
          border-color: var(--primary);
        }
        .play-trigger:hover .play-btn-outline svg { fill: #fff; color: #fff; }

        .testimonial-card {
          background: var(--bg-light);
          border-radius: 56px;
          padding: 6rem;
          position: relative;
          box-shadow: var(--shadow-xl);
          margin-top: 6rem;
        }

        .quote-icon {
          position: absolute;
          top: 4rem;
          left: 5rem;
          font-size: 8rem;
          color: var(--primary-glow);
          opacity: 0.4;
        }

        .testimonial-text {
          font-size: 1.5rem;
          line-height: 1.8;
          color: var(--text-dark);
          font-weight: 600;
          position: relative;
          z-index: 3;
          margin-bottom: 4rem;
          letter-spacing: -0.5px;
        }

        .testimonial-author {
          font-size: 1.2rem;
        }

        @media (max-width: 1024px) {
          .quality-header-grid { grid-template-columns: 1fr; gap: 4rem; }
          .quality-content-split { grid-template-columns: 1fr; gap: 4rem; }
          .quality-visuals { height: 500px; display: flex; justify-content: center; }
          .top-img { width: 350px; height: 320px; }
          .bottom-img { width: 320px; height: 350px; top: 150px; left: 150px; }
          .testimonial-card { padding: 4rem 2rem; border-radius: 40px; }
        }
      `}</style>
    </section>
  );
};

export default QualitySection;
