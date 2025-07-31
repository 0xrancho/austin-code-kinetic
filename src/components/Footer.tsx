
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-black text-white relative overflow-hidden">
      {/* Footer specific brand element */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <path d="M0 100 L1200 100" stroke="white" strokeWidth="0.5" strokeDasharray="10 5" />
          <path d="M600 0 L600 200" stroke="white" strokeWidth="0.5" strokeDasharray="10 5" />
          
          {/* Brand elements from inspiration image */}
          <circle cx="300" cy="100" r="70" fill="black" />
          <circle cx="300" cy="100" r="69" stroke="white" strokeWidth="1" fill="none" />
          <path d="M300 30 L300 170" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
          <path d="M230 100 L370 100" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
          <path d="M250 50 L350 150" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
          <path d="M250 150 L350 50" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
          
          {/* Right colorful segmented circle */}
          <circle cx="900" cy="100" r="70" fill="black" />
          <circle cx="900" cy="100" r="69" stroke="white" strokeWidth="1" fill="none" />
          <path d="M900 30 A70 70 0 0 1 970 100 L900 100 Z" fill="#7928CA" opacity="0.6" />
          <path d="M970 100 A70 70 0 0 1 900 170 L900 100 Z" fill="#00D1FF" opacity="0.6" />
          <path d="M900 170 A70 70 0 0 1 830 100 L900 100 Z" fill="#FFC53D" opacity="0.6" />
          <path d="M830 100 A70 70 0 0 1 900 30 L900 100 Z" fill="#FF4C4C" opacity="0.6" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-space-grotesk font-bold">Joel A. Austin</h3>
            <p className="text-white/60 text-sm">5x Father | Sales Ops Engineer | AI-First Builder</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm flex items-center justify-center md:justify-end">
              © {currentYear} Joel A. Austin. All rights reserved.
            </p>
            <p className="text-white/60 text-sm mt-1 flex items-center justify-center md:justify-end">
              Made with <Heart className="h-3 w-3 mx-1 text-red-400" /> in Indianapolis
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
