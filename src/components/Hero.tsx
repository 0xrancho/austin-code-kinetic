
import { ArrowDownIcon, Calendar, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-10 relative" id="hero">
      <div className="w-full py-16 relative z-10">
        <div className="content-box w-full mx-auto p-12 md:p-16 text-center">
          <div className="flex justify-center mb-8">
            <Avatar className="w-32 h-32 border-4 border-white/20">
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
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-space-grotesk font-light text-white/80 mb-8">
            5x Father | Sales Ops Engineer | AI-First Builder
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 mt-10 mb-12">
            <Button 
              className="brand-button"
              asChild
            >
              <a 
                href="https://calendly.com/joelaustin/30min?back=1&month=2025-04" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Calendar className="h-5 w-5" />
                1:1 Call
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="brand-button bg-transparent border-2 border-white/40 hover:bg-white/10"
              asChild
            >
              <Link to="/portfolio">
                <ArrowDownIcon className="h-5 w-5" />
                View Projects
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center justify-center mb-2">
            <Quote className="h-4 w-4 text-white/50 mr-2" />
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto italic">
              I'm a dad of five raising chickens in midtown Indy. I build tech to help faith-driven founders grow, make AI music as @0xDisco, love taco trucks, and just want to play more golf.
            </p>
            <Quote className="h-4 w-4 text-white/50 ml-2 rotate-180" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex items-center justify-center w-10 h-10 rounded-full border border-black bg-white">
          <ArrowDownIcon className="h-5 w-5 text-black" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
