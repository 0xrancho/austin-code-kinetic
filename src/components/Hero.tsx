
import { ArrowDownIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative geometric-bg overflow-hidden">
      <div className="container mx-auto px-4 pt-20 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Joel A. Austin
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-space-grotesk font-light text-white/80 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Father of 5 | AI Enablement | RevOps
          </h2>
          
          <div className="flex flex-wrap gap-4 mt-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a 
              href="#about" 
              className="px-6 py-3 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 transition-colors duration-300 text-white"
            >
              Learn More
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-md bg-white text-black hover:bg-white/90 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5">
          <ArrowDownIcon className="h-5 w-5 text-white/70" />
        </a>
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-white/2 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-white/2 blur-3xl"></div>
    </section>
  );
};

export default Hero;
