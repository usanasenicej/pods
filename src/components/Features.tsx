import React from 'react';

const Features: React.FC = () => {
  const featureList = [
    {
      title: "Smart Tuning",
      description: "Represents an innovative and intelligent approach to immersive sound, leveraging advanced ANC technology.",
      category: "#SmartTech",
      imgUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=300&auto=format&fit=crop",
      isDark: true
    },
    {
      title: "Save Time",
      description: "Renewable charging sources and quick charge capabilities are becoming increasingly accessible.",
      category: "#TimeSaver",
      imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop",
      isDark: false
    },
    {
      title: "Remote Control",
      description: "They now govern an array of devices and processes, from home automation to volume sliders.",
      category: "#Security",
      imgUrl: "https://images.unsplash.com/photo-1546435770-a3e426fa1548?q=80&w=300&auto=format&fit=crop", // Hand holding airpods case
      isDark: false
    }
  ];

  return (
    <section className="features section" id="features">
      <div className="container">
        
        <div className="features-header animate-fade-in">
          <div className="features-header-left">
            <span className="tag-pill tag-primary" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>#Our Features</span>
            <h2 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '-1px' }}>
              Unveiling Our <span style={{ color: '#d0d0d0' }}>Features</span>
            </h2>
            <p className="section-desc" style={{ maxWidth: '600px', fontSize: '1.05rem', color: 'var(--text-gray)' }}>
              Experience an elevated lifestyle with our app's intuitive features, designed to enhance your convenience and simplify daily tasks.
            </p>
          </div>
          <div className="features-header-right">
            <button className="nav-arrow outline-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="nav-arrow fill-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        <div className="features-grid">
          {featureList.map((f, i) => (
            <div key={i} className={`feature-card animate-fade-in ${f.isDark ? 'dark-card' : 'light-card'}`} style={{ animationDelay: `${i * 0.1}s` }}>
              
              <div className="feature-top">
                <span className={`feature-category-pill ${f.isDark ? 'dark-pill' : 'light-pill'}`}>{f.category}</span>
              </div>
              
              <div className="feature-body">
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-text">{f.description}</p>
              </div>
              
              <div className="feature-bottom">
                 <div className={`card-image-box ${f.isDark ? 'dark-img-wrapper' : ''}`}>
                    <img src={f.imgUrl} alt={f.title} className={f.isDark ? 'round-img' : 'flat-img'} />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features {
          padding: 5rem 0 3rem;
          background: #ffffff;
        }

        .features-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 4rem;
        }

        .tag-primary {
          background: var(--primary);
          color: white;
          padding: 0.4rem 1.2rem;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.85rem;
        }

        .features-header-right {
          display: flex;
          gap: 1rem;
          padding-bottom: 2rem;
        }

        .nav-arrow {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }

        .outline-arrow {
          background: transparent;
          border: 1px solid #e0e0e0;
          color: #999;
        }

        .outline-arrow:hover { border-color: #222; color: #222; }

        .fill-arrow {
          background: var(--primary);
          border: 1px solid var(--primary);
          color: white;
        }

        .fill-arrow:hover { filter: brightness(1.1); }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .feature-card {
          border-radius: 40px;
          padding: 3rem 2.5rem 0; /* No bottom padding so image touches bottom */
          height: 480px; 
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          transition: var(--transition);
          overflow: hidden;
          position: relative;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
        }

        .dark-card { background: #1a1a1a; color: white; border: none; }
        .light-card { background: #ffffff; border: 1px solid #f0f0f0; color: #222; }

        .feature-top { margin-bottom: 2.5rem; }

        .feature-category-pill {
          padding: 0.4rem 1.2rem;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .dark-pill { background: rgba(248, 158, 27, 1); color: #fff; }
        .light-pill { background: transparent; border: 1px solid #e0e0e0; color: #a0a0a0; font-weight: 600; }

        .feature-title { font-size: 1.8rem; font-weight: 800; margin-bottom: 1rem; }
        .dark-card .feature-title { color: #fff; }
        .light-card .feature-title { color: #222; }

        .feature-text { font-size: 1rem; line-height: 1.6; }
        .dark-card .feature-text { color: #999; }
        .light-card .feature-text { color: #555; }

        .feature-bottom {
          margin-top: auto;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          height: 160px;
        }

        .card-image-box {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }

        .dark-img-wrapper {
          justify-content: center;
          align-items: flex-end;
          padding-bottom: 0;
        }

        .round-img {
          width: 140px;
          height: 140px;
          border-radius: 50% 50% 0 0;
          object-fit: cover;
          margin-bottom: -10px; /* Peek out the bottom */
          border: 4px solid #333;
          border-bottom: none;
        }

        .flat-img {
          width: 80%;
          height: auto;
          max-height: 130px;
          object-fit: cover;
          border-radius: 12px 12px 0 0;
          box-shadow: 0 -5px 20px rgba(0,0,0,0.05);
        }

        @media (max-width: 1024px) {
          .features-header { flex-direction: column; align-items: flex-start; gap: 2rem; }
          .features-grid { grid-template-columns: 1fr; }
          .feature-card { height: auto; padding-bottom: 2rem; }
          .flat-img { display: none; }
          .round-img { display: none; }
          .feature-bottom { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Features;
