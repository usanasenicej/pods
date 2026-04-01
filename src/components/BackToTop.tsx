import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
          <ArrowUp size={20} />
          <style>{`
            .back-to-top {
              position: fixed;
              bottom: 3rem;
              right: 3rem;
              width: 56px;
              height: 56px;
              border-radius: 20px;
              background: var(--text-dark);
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              z-index: 1000;
              border: 1px solid rgba(255, 255, 255, 0.1);
              box-shadow: var(--shadow-xl);
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              animation: slide-in 0.4s forwards;
            }

            .back-to-top:hover {
              background: var(--primary);
              transform: translateY(-8px) scale(1.1);
              box-shadow: 0 15px 30px var(--primary-glow);
            }

            @keyframes slide-in {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }

            @media (max-width: 768px) {
              .back-to-top { bottom: 2rem; right: 2rem; width: 44px; height: 44px; }
            }
          `}</style>
        </button>
      )}
    </>
  );
};

export default BackToTop;
