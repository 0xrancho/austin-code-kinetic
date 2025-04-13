
const BackgroundPattern = () => {
  return (
    <div 
      className="fixed inset-0 w-full h-full pointer-events-none z-5 opacity-[0.07]"
      style={{
        backgroundImage: `radial-gradient(circle, #333333 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        backgroundPosition: 'center center',
      }}
      aria-hidden="true"
    ></div>
  );
};

export default BackgroundPattern;
