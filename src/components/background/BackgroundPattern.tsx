
import { useEffect, useState } from "react";

const BackgroundPattern = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      {/* Base noise texture is already applied in the CSS on the body */}
      
      {/* Geometric grid overlay */}
      <div className="absolute inset-0 geometric-grid opacity-30"></div>
      
      {/* Brand elements */}
      <div 
        className="brand-element top-[10%] right-[5%] w-[300px] h-[300px] rotate-animation"
        style={{ transform: `rotate(${scrollPosition * 0.05}deg)` }}
      >
        <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="150" fill="none" stroke="black" strokeWidth="2" />
          <circle cx="150" cy="150" r="60" fill="black" />
          <path d="M150 30 A120 120 0 0 1 270 150 L150 150 Z" fill="#FFC53D" />
          <path d="M270 150 A120 120 0 0 1 150 270 L150 150 Z" fill="#FF4C4C" />
          <path d="M150 270 A120 120 0 0 1 30 150 L150 150 Z" fill="#7928CA" />
          <path d="M30 150 A120 120 0 0 1 150 30 L150 150 Z" fill="#00D1FF" />
        </svg>
      </div>
      
      <div className="brand-element bottom-[15%] left-[10%] w-[250px] h-[400px] float-animation">
        <svg width="100%" height="100%" viewBox="0 0 250 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="125" cy="100" r="80" fill="black" />
          <path d="M125 100 L200 280 L50 280 Z" fill="url(#funnel-gradient)" />
          <circle cx="125" cy="280" r="20" fill="black" />
          <path d="M125 280 L175 350 L75 350 Z" fill="none" stroke="black" strokeWidth="2" />
          <defs>
            <linearGradient id="funnel-gradient" x1="125" y1="100" x2="125" y2="280" gradientUnits="userSpaceOnUse">
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
      
      <div 
        className="brand-element top-[40%] left-[5%] w-[200px] h-[200px] pulse-animation"
        style={{ animationDelay: "2s" }}
      >
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" fill="black" />
          <circle cx="100" cy="100" r="98" stroke="white" strokeWidth="1" fill="none" />
          <rect x="50" y="50" width="100" height="100" fill="none" stroke="white" strokeWidth="1" />
          <line x1="50" y1="50" x2="150" y2="150" stroke="white" strokeWidth="1" />
          <line x1="150" y1="50" x2="50" y2="150" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      
      <div 
        className="brand-element bottom-[25%] right-[15%] w-[350px] h-[350px]"
        style={{ 
          transform: `translateY(${Math.sin(scrollPosition * 0.003) * 20}px)` 
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="175" cy="175" r="80" fill="black" />
          <circle cx="175" cy="175" r="79" stroke="white" strokeWidth="1" fill="none" />
          <path d="M175 175 L275 75" stroke="black" strokeWidth="2" />
          <path d="M175 175 L75 75" stroke="black" strokeWidth="2" />
          <path d="M175 175 L75 275" stroke="black" strokeWidth="2" />
          <path d="M175 175 L275 275" stroke="black" strokeWidth="2" />
          <rect x="75" y="75" width="200" height="200" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5 5" />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundPattern;
