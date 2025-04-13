
import { useEffect, useState } from "react";

export const GradientOverlays = () => {
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
    </>
  );
};

export default GradientOverlays;
