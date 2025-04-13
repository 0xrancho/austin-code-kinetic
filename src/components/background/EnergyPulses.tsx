
const EnergyPulses = () => {
  return (
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
  );
};

export default EnergyPulses;
