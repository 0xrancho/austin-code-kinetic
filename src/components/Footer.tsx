
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-white/10 geometric-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-space-grotesk font-bold">Joel A. Austin</h3>
            <p className="text-white/60 text-sm">Father of 5 | AI Enablement | RevOps</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm flex items-center justify-center md:justify-end">
              © {currentYear} Joel A. Austin. All rights reserved.
            </p>
            <p className="text-white/60 text-sm mt-1 flex items-center justify-center md:justify-end">
              Made with <Heart className="h-3 w-3 mx-1 text-red-400" /> in San Francisco
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
