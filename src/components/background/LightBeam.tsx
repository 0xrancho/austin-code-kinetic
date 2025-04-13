
import { useEffect, useState } from "react";

const LightBeam = () => {
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
  );
};

export default LightBeam;
