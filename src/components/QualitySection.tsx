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
          padding: 6rem 0;
          background: #fff;
        }

        .quality-header-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.8fr;
          gap: 4rem;
          margin-bottom: 5rem;
          align-items: center;
        }

        .section-title {
          font-size: 3.8rem;
          font-weight: 700;
          color: #222;
          line-height: 1.1;
        }

        .quality-stats-col {
          display: flex;
          justify-content: space-around;
          border-bottom: 2px solid #f9f9f9;
          padding-bottom: 1.5rem;
          width: 100%;
        }

        .stat-pill {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 800;
          color: #222;
          margin-bottom: 0px;
          line-height: 1;
        }

        .stat-text {
          font-size: 0.85rem;
          color: #999;
          font-weight: 600;
          text-transform: uppercase;
          line-height: 1.4;
          margin-top: 5px;
        }

        .quality-content-split {
          display: grid;
          grid-template-columns: 1.4fr 1fr; /* Image visual left, text right */
          gap: 5rem;
          align-items: center;
          margin-top: 2rem;
        }

        .quality-visuals {
          position: relative;
          height: 600px; /* Container height to house staggered images */
        }

        .quality-card {
          position: absolute;
          border-radius: 40px;
          overflow: hidden;
          background: #fdfdfd;
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          border: 1px solid #f0f0f0;
        }

        .top-img {
          width: 400px;
          height: 380px;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .bottom-img {
          width: 380px;
          height: 400px;
          top: 180px;
          left: 280px; /* Staggered to the right and down */
          z-index: 2;
        }

        .quality-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .quality-card:hover .quality-img { transform: scale(1.05); }

        .card-overlay {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem; 
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 0.7rem 1.4rem;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          color: #111;
        }

        .card-dot {
          width: 20px;
          height: 20px;
          background: var(--primary);
          border-radius: 50%;
          border: 3px solid #fff;
        }

        .quality-text-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          max-width: 450px;
        }

        .quality-desc-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #666;
          margin-bottom: 2.5rem;
        }

        .play-trigger {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          cursor: pointer;
          background: none;
          border: none;
        }

        .play-text { font-weight: 700; font-size: 1.1rem; color: #222; }

        .play-btn-outline {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .play-trigger:hover .play-btn-outline { background: var(--primary); }
        .play-trigger:hover .play-btn-outline svg { fill: #fff; color: #fff; }

        .testimonial-section {
          margin-top: 4rem;
        }

        .testimonial-card {
          background: #fff;
          border-radius: 40px;
          padding: 5rem 6rem;
          position: relative;
          box-shadow: 0 20px 60px rgba(0,0,0,0.04);
          border: 1px solid #fcfcfc;
          overflow: hidden;
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          top: -100px;
          left: -100px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(248, 158, 27, 0.1) 0%, rgba(255,255,255,0) 70%);
          z-index: 1;
        }

        .quote-icon {
          position: absolute;
          top: 3rem;
          left: 4.5rem;
          font-size: 6.5rem;
          line-height: 1;
          color: rgba(248, 158, 27, 0.25);
          font-family: Georgia, serif;
          font-weight: 900;
          z-index: 2;
        }

        .testimonial-text {
          font-size: 1.3rem;
          line-height: 1.9;
          color: #444;
          font-style: italic;
          position: relative;
          z-index: 3;
          padding-left: 2rem;
          margin-bottom: 3rem;
          max-width: 950px;
          font-weight: 500;
        }

        .testimonial-author {
          text-align: right;
          font-size: 1.1rem;
          position: relative;
          z-index: 3;
        }

        .author-name {
          color: #111;
          font-weight: 800;
        }

        .author-title {
          color: #888;
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .quality-header-grid { grid-template-columns: 1fr; gap: 2rem; }
          .quality-stats-col { justify-content: space-around; border: none; }
          .quality-content-split { grid-template-columns: 1fr; }
          .quality-visuals { height: 450px; margin: 0 auto; width: 100%; max-width: 600px; }
          .top-img { width: 300px; height: 280px; }
          .bottom-img { width: 300px; height: 280px; top: 150px; left: 150px; }
          .quality-text-box { margin: 0 auto; text-align: center; align-items: center; }
          .testimonial-card { padding: 4rem; }
        }

        @media (max-width: 768px) {
          .quality-visuals { height: 350px; }
          .top-img { width: 200px; height: 200px; }
          .bottom-img { width: 220px; height: 220px; top: 100px; left: 100px; }
          .testimonial-card { padding: 3rem 2rem; }
          .quote-icon { top: 1rem; left: 1rem; font-size: 4rem; }
          .testimonial-text { padding-left: 1rem; font-size: 1.1rem; }
        }
      `}</style>
    </section>
  );
};

export default QualitySection;
