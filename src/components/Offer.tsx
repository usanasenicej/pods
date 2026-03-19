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
          background: #ffffff;
          border-radius: 40px;
          padding: 3.5rem 4rem; /* Reduced padding from 5rem 6rem */
          color: #222;
          overflow: hidden;
          position: relative;
          box-shadow: 0 10px 40px rgba(0,0,0,0.02); /* Very subtle shadow */
          border: 1px solid #f0f0f0;
        }

        .offer-row {
          display: flex;
          align-items: center;
          gap: 4rem; /* Tightened gap */
          position: relative;
          z-index: 2;
        }

        .offer-text-col { flex: 1.3; } /* Adjusted ratio out of 1.5 */
        .offer-visual-col { flex: 1; }

        .offer-title {
          font-size: 3.2rem; /* Scaled down slightly */
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .offer-desc {
          font-size: 1.05rem;
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        .offer-form {
          display: flex;
          gap: 0.8rem; /* Tighter internal space */
          background: #fdfdfd;
          padding: 0.5rem;
          border-radius: 999px;
          border: 1px solid #e0e0e0;
          width: fit-content;
          box-shadow: 0 5px 15px rgba(0,0,0,0.02);
        }

        .offer-input {
          background: none;
          border: none;
          color: #222;
          padding: 0.6rem 1.5rem; /* Tighter padding */
          font-size: 0.95rem;
          width: 300px; /* Reduced width */
          outline: none;
        }

        .offer-input::placeholder { color: #aaa; }

        .offer-btn {
          min-width: 140px;
          padding: 0.8rem 1.5rem;
          border-radius: 999px;
        }

        .offer-mockup {
          width: 250px; /* Smaller mockup */
          height: 400px; /* Smaller mockup */
          border-radius: 30px;
          overflow: hidden;
          border: 8px solid #222;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          transform: rotate(5deg) translateY(10px);
          background: #fff;
          margin-left: auto; /* Push to right edge */
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
