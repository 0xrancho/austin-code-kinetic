
import { ArrowDownIcon, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative geometric-bg overflow-hidden" id="hero">
      <div className="container mx-auto px-4 pt-20 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6 animate-fade-in">
            <Avatar className="w-36 h-36 border-4 border-white/20">
              <AvatarImage 
                src="/lovable-uploads/1d7e2d4a-ab75-4d48-89d1-b34a6c9e58b3.png" 
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
          <h3 className="text-lg md:text-xl lg:text-2xl font-space-grotesk font-medium text-white/90 mb-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Strategic Operator for Redemptive Ventures
          </h3>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            I design and implement high-leverage ops systems for mission-driven businesses, family offices, and nonprofits.
          </p>
          
          <div className="flex justify-center flex-wrap gap-4 mt-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button 
              className="gap-2 bg-white text-black hover:bg-white/90"
              size="lg"
              asChild
            >
              <a 
                href="https://calendly.com/joelaustin/30min?back=1&month=2025-04" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Calendar className="h-4 w-4" />
                Hire Me
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
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-white/2 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-white/2 blur-3xl"></div>
    </section>
  );
};

export default Hero;
