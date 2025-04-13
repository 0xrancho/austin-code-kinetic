import { ArrowDownIcon, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden" id="hero">
      {/* New graphic element - top left */}
      <div className="absolute top-[5%] left-[5%] w-[300px] h-[300px] opacity-60 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="120" stroke="white" strokeWidth="1" strokeOpacity="0.7" fill="none" />
          <circle cx="150" cy="150" r="80" stroke="white" strokeWidth="1" strokeOpacity="0.5" fill="none" />
          <circle cx="150" cy="150" r="40" stroke="white" strokeWidth="1" strokeOpacity="0.3" fill="none" />
          <line x1="30" y1="150" x2="270" y2="150" stroke="white" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="5 5" />
          <line x1="150" y1="30" x2="150" y2="270" stroke="white" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="5 5" />
          <path d="M150 30 A120 120 0 0 1 270 150 L150 150 Z" fill="url(#gradient1)" fillOpacity="0.3" />
          <defs>
            <linearGradient id="gradient1" x1="150" y1="30" x2="210" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#00D1FF" />
              <stop offset="1" stopColor="#3F00FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* New graphic element - bottom right */}
      <div className="absolute bottom-[5%] right-[5%] w-[350px] h-[350px] opacity-60 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="50" width="250" height="250" stroke="white" strokeWidth="1" strokeOpacity="0.6" fill="none" />
          <rect x="100" y="100" width="150" height="150" stroke="white" strokeWidth="1" strokeOpacity="0.4" fill="none" />
          <line x1="50" y1="50" x2="300" y2="300" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
          <line x1="300" y1="50" x2="50" y2="300" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
          <circle cx="175" cy="175" r="50" fill="url(#gradient2)" fillOpacity="0.4" />
          <defs>
            <linearGradient id="gradient2" x1="125" y1="175" x2="225" y2="175" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FF4C4C" />
              <stop offset="1" stopColor="#FFC53D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Grid overlay - made more visible */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}>
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6 animate-fade-in">
            <Avatar className="w-36 h-36 border-4 border-white/20">
              <AvatarImage 
                src="/lovable-uploads/fd873bb2-12cb-4f4e-a17f-8b77259ccd4f.png" 
                alt="Joel A. Austin" 
                className="object-cover"
              />
              <AvatarFallback>JA</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Joel A. Austin
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-space-grotesk font-light text-white/80 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Father of 5 | AI Enablement | RevOps
          </h2>
          
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            I design and implement high-leverage ops systems for mission-driven businesses, family offices, and nonprofits.
          </p>
          
          <div className="flex justify-center flex-wrap gap-4 mt-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button 
              className="gap-2 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_18px_rgba(63,0,255,0.6)]"
              size="lg"
              style={{
                background: 'linear-gradient(135deg, #00D1FF, #3F00FF)',
                borderRadius: '6px',
                boxShadow: '0 0 12px rgba(63, 0, 255, 0.4)'
              }}
              asChild
            >
              <a 
                href="https://calendly.com/joelaustin/30min?back=1&month=2025-04" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Calendar className="h-4 w-4" />
                1:1 Call
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="gap-2 border-white/20 bg-white/5 hover:bg-white/10 text-white"
              size="lg"
              asChild
            >
              <a href="#portfolio">
                <ArrowDownIcon className="h-4 w-4" />
                View Portfolio
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5">
          <ArrowDownIcon className="h-5 w-5 text-white/70" />
        </a>
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-white/2 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-white/2 blur-3xl"></div>
    </section>
  );
};

export default Hero;
