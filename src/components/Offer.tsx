import React from 'react';

const Offer: React.FC = () => {
  return (
    <section className="offer section" id="offer">
      <div className="container">
        <div className="offer-card animate-fade-in">
          <div className="offer-row">
            
            <div className="offer-text-col">
              <h2 className="offer-title">
                Let's Start Your <br/>
                Easier Life with <span className="text-primary">Our Apps</span>
              </h2>
              <p className="offer-desc">
                Download the Aura companion app to unlock the full potential of your EarPods. Personalize your EQ, update firmware, and manage connections with ease.
              </p>
              
              <div className="offer-form">
                <input type="email" placeholder="Enter your email address" className="offer-input" />
                <button className="btn btn-primary offer-btn">Get Started</button>
              </div>
            </div>

            <div className="offer-visual-col">
              <div className="offer-mockup">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop" 
                  alt="App Dashboard" 
                  className="offer-img"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .offer {
          padding: 3rem 0; /* Tight padding to eliminate empty space */
        }

        .offer-card {
          background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
          border-radius: 48px;
          padding: 4rem 5rem;
          color: var(--text-dark);
          overflow: hidden;
          position: relative;
          box-shadow: var(--shadow-xl);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .offer-card::before {
          content: "";
          position: absolute;
          top: -20%;
          right: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, var(--primary-glow) 0%, transparent 70%);
          z-index: 1;
        }

        .offer-row {
          display: flex;
          align-items: center;
          gap: 6rem;
          position: relative;
          z-index: 2;
        }

        .offer-text-col { flex: 1.5; }
        .offer-visual-col { flex: 1; display: flex; justify-content: flex-end; }

        .offer-title {
          font-size: 3.8rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 2rem;
          letter-spacing: -1.5px;
        }

        .offer-desc {
          font-size: 1.1rem;
          color: var(--text-gray);
          line-height: 1.8;
          margin-bottom: 3rem;
          max-width: 550px;
        }

        .offer-form {
          display: flex;
          gap: 0.5rem;
          background: #ffffff;
          padding: 0.6rem;
          border-radius: 24px;
          border: 1px solid rgba(15, 23, 42, 0.1);
          width: fit-content;
          box-shadow: var(--shadow-lg);
          transition: all 0.3s ease;
        }

        .offer-form:focus-within {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px var(--primary-glow);
          transform: translateY(-2px);
        }

        .offer-input {
          background: none;
          border: none;
          color: var(--text-dark);
          padding: 0 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          width: 320px;
          outline: none;
        }

        .offer-input::placeholder { color: var(--text-light-gray); font-weight: 400; }

        .offer-btn {
          min-width: 160px;
          padding: 1rem 2rem;
          border-radius: 18px;
        }

        .offer-mockup {
          width: 280px;
          height: 480px;
          border-radius: 40px;
          overflow: hidden;
          border: 12px solid #0f172a;
          box-shadow: var(--shadow-xl);
          transform: rotate(6deg) translateY(20px);
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .offer-card:hover .offer-mockup {
          transform: rotate(0deg) translateY(0px) scale(1.05);
        }

        .offer-img { width: 100%; height: 100%; object-fit: cover; }

        @media (max-width: 1024px) {
          .offer-card { padding: 3rem 2rem; }
          .offer-row { flex-direction: column; text-align: center; gap: 3rem; }
          .offer-form { width: 100%; flex-direction: column; background: none; border: none; padding: 0; box-shadow: none; }
          .offer-input { width: 100%; background: #fff; border: 1px solid #e0e0e0; border-radius: 999px; margin-bottom: 1rem; }
          .offer-btn { width: 100%; }
          .offer-visual-col { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Offer;
