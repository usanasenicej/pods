import React, { useState, useEffect } from 'react';

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.classList.contains('clickable') ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      className={`cursor-follower ${isHovering ? 'hovering' : ''}`}
      style={{ 
        transform: `translate3d(${position.x}px, ${position.y}px, 0)` 
      }}
    >
      <style>{`
        .cursor-follower {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          background: var(--primary);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: width 0.3s ease, height 0.3s ease, background 0.3s ease;
          margin-top: -10px;
          margin-left: -10px;
        }

        .cursor-follower.hovering {
          width: 60px;
          height: 60px;
          margin-top: -30px;
          margin-left: -30px;
          background: #fff;
          mix-blend-mode: overlay;
          border: 1px solid var(--primary);
        }

        @media (max-width: 1024px) {
          .cursor-follower { display: none; }
        }
      `}</style>
    </div>
  );
};

export default CursorFollower;
