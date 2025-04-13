
import { useEffect, useState } from "react";

export const BackgroundEffects = () => {
  const [beamPosition, setBeamPosition] = useState(0);
  
  // Very slow upward animation for the light beam
  useEffect(() => {
    const animateBeam = () => {
      setBeamPosition(prev => (prev > 100 ? -30 : prev + 0.03));
    };
    
    const animationFrame = requestAnimationFrame(function animate() {
      animateBeam();
      requestAnimationFrame(animate);
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      {/* Brand Elements Layer */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
        {/* Half circle and cone element - top left */}
        <div className="absolute top-[5%] left-[10%] w-[300px] h-[300px] opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="black" />
            <circle cx="150" cy="100" r="99" stroke="white" strokeWidth="2" fill="none" />
            <path d="M150 100 L200 350 L100 350 Z" fill="url(#rainbow-gradient)" />
            <circle cx="150" cy="350" r="20" fill="black" />
            <defs>
              <linearGradient id="rainbow-gradient" x1="150" y1="100" x2="150" y2="350" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#7928CA" />
                <stop offset="0.2" stopColor="#00D1FF" />
                <stop offset="0.4" stopColor="#00E1B3" />
                <stop offset="0.6" stopColor="#FFC53D" />
                <stop offset="0.8" stopColor="#FF4C4C" />
                <stop offset="1" stopColor="#FF0080" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Segmented circle - bottom right */}
        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="175" cy="175" r="150" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="175" cy="175" r="70" fill="black" />
            <path d="M175 25 A150 150 0 0 1 325 175 L175 175 Z" fill="#FFC53D" opacity="0.8" />
            <path d="M325 175 A150 150 0 0 1 175 325 L175 175 Z" fill="#FF4C4C" opacity="0.8" />
            <path d="M175 325 A150 150 0 0 1 25 175 L175 175 Z" fill="#7928CA" opacity="0.8" />
            <path d="M25 175 A150 150 0 0 1 175 25 L175 175 Z" fill="#00D1FF" opacity="0.8" />
          </svg>
        </div>
        
        {/* Overlapping circles - bottom left */}
        <div className="absolute bottom-[20%] left-[15%] w-[300px] h-[200px] opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" fill="black" />
            <circle cx="100" cy="100" r="98" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="200" cy="100" r="100" fill="none" stroke="black" strokeWidth="2" />
            <path d="M200 0 A100 100 0 0 0 100 100 A100 100 0 0 0 200 200 Z" fill="white" />
            <path d="M200 0 A100 100 0 0 0 100 100 A100 100 0 0 0 200 200 Z" stroke="black" strokeWidth="1" strokeDasharray="5 5" fill="none" />
          </svg>
        </div>
        
        {/* Funnel and grid - center right */}
        <div className="absolute top-[40%] right-[15%] w-[280px] h-[400px] opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 280 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="140" cy="100" r="70" fill="black" />
            <circle cx="140" cy="100" r="69" stroke="white" strokeWidth="1" fill="none" />
            <path d="M140 100 L200 200 L80 200 Z" fill="url(#rainbow-gradient2)" />
            <path d="M140 300 L200 200 L80 200 Z" fill="none" stroke="black" strokeWidth="1" />
            <path d="M140 300 L170 350 L110 350 Z" fill="none" stroke="black" strokeWidth="1" />
            <line x1="80" y1="200" x2="110" y2="350" stroke="black" strokeWidth="1" />
            <line x1="200" y1="200" x2="170" y2="350" stroke="black" strokeWidth="1" />
            <line x1="95" y1="250" x2="185" y2="250" stroke="black" strokeWidth="1" />
            <line x1="110" y1="300" x2="170" y2="300" stroke="black" strokeWidth="1" />
            <defs>
              <linearGradient id="rainbow-gradient2" x1="140" y1="100" x2="140" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#FF4C4C" />
                <stop offset="0.2" stopColor="#FFC53D" />
                <stop offset="0.4" stopColor="#00E1B3" />
                <stop offset="0.6" stopColor="#00D1FF" />
                <stop offset="0.8" stopColor="#7928CA" />
                <stop offset="1" stopColor="#FF0080" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default BackgroundEffects;
