
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Links from "../components/Links";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Index = () => {
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
    <div className="flex flex-col min-h-screen bg-background text-foreground relative overflow-hidden">
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
      
      {/* Vibrant Graphics Layer - appears underneath when "peeled back" */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-1 opacity-50" aria-hidden="true">
        {/* Main blob in center */}
        <div 
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle at center, rgba(175, 105, 241, 0.4) 0%, rgba(104, 55, 242, 0.2) 30%, rgba(73, 29, 235, 0.1) 60%, transparent 80%)',
            filter: 'blur(60px)',
            transform: 'translate(-50%, -50%) rotate(-15deg)',
          }}
        ></div>
        
        {/* Top right shape */}
        <div 
          className="absolute top-[5%] right-[10%] w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(84, 181, 247, 0.4) 0%, rgba(46, 116, 252, 0.2) 40%, rgba(32, 90, 207, 0.1) 70%, transparent 90%)',
            filter: 'blur(40px)',
            transform: 'rotate(25deg)',
          }}
        ></div>
        
        {/* Bottom left shape */}
        <div 
          className="absolute bottom-[15%] left-[5%] w-[300px] h-[300px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(237, 95, 229, 0.4) 0%, rgba(191, 38, 228, 0.2) 40%, rgba(141, 12, 168, 0.1) 70%, transparent 90%)',
            filter: 'blur(40px)',
            transform: 'rotate(-10deg)',
          }}
        ></div>
        
        {/* Middle left shape */}
        <div 
          className="absolute top-[30%] left-[15%] w-[200px] h-[200px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(245, 130, 32, 0.4) 0%, rgba(238, 88, 20, 0.2) 40%, rgba(210, 65, 12, 0.1) 70%, transparent 90%)',
            filter: 'blur(30px)',
            transform: 'rotate(15deg)',
          }}
        ></div>
        
        {/* Bottom right shape */}
        <div 
          className="absolute bottom-[25%] right-[15%] w-[250px] h-[250px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(98, 245, 169, 0.4) 0%, rgba(42, 217, 142, 0.2) 40%, rgba(16, 166, 106, 0.1) 70%, transparent 90%)',
            filter: 'blur(35px)',
            transform: 'rotate(-20deg)',
          }}
        ></div>
      </div>
      
      {/* Glowing energy pulse circles */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-2 opacity-80" aria-hidden="true">
        {/* Circle 1 - bottom left */}
        <div 
          className="absolute bottom-[10%] left-[15%] w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 209, 255, 0.15) 0%, rgba(0, 209, 255, 0.08) 40%, rgba(0, 209, 255, 0.03) 70%, transparent 100%)',
            opacity: '0.15',
            animation: 'pulse1 12s infinite ease-in-out',
          }}
        ></div>
        
        {/* Circle 2 - top right */}
        <div 
          className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(63, 0, 255, 0.15) 0%, rgba(63, 0, 255, 0.08) 40%, rgba(63, 0, 255, 0.03) 70%, transparent 100%)',
            opacity: '0.12',
            animation: 'pulse2 15s infinite ease-in-out',
          }}
        ></div>
        
        {/* Circle 3 - center */}
        <div 
          className="absolute top-[45%] left-[40%] w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(155, 135, 245, 0.15) 0%, rgba(155, 135, 245, 0.08) 40%, rgba(155, 135, 245, 0.03) 70%, transparent 100%)',
            opacity: '0.14',
            animation: 'pulse3 14s infinite ease-in-out',
          }}
        ></div>
        
        {/* Circle 4 - bottom right */}
        <div 
          className="absolute bottom-[25%] right-[25%] w-[450px] h-[450px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 209, 255, 0.15) 0%, rgba(63, 0, 255, 0.08) 40%, rgba(63, 0, 255, 0.03) 70%, transparent 100%)',
            opacity: '0.16',
            animation: 'pulse4 13s infinite ease-in-out',
          }}
        ></div>
      </div>
      
      {/* Diagonal light shaft/beam */}
      <div 
        className="fixed inset-0 w-full h-[200vh] pointer-events-none z-3" 
        aria-hidden="true"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 209, 255, 0.12) 0%, transparent 60%)',
          opacity: '0.15',
          mixBlendMode: 'screen',
          transform: `translateY(${beamPosition}%)`,
          transition: 'transform 0.1s linear'
        }}
      ></div>
      
      {/* Dark overlay to maintain 80% black matte background - lowered opacity */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-4 bg-black opacity-50"
        aria-hidden="true"
      ></div>
      
      {/* Fixed Background Pattern Layer */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-5 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle, #6666FF 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
        }}
        aria-hidden="true"
      ></div>
      
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Links />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
