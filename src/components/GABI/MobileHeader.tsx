import React from 'react';
import { ArrowLeft, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface MobileHeaderProps {
  isFullScreen: boolean;
  onToggleFullScreen: () => void;
  className?: string;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  isFullScreen,
  onToggleFullScreen,
  className
}) => {
  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10",
      "flex items-center justify-between px-4 py-3",
      "safe-area-inset-top",
      className
    )}>
      <div className="flex items-center gap-3">
        <Link to="/">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-lg font-semibold text-white">GABI</h1>
          <p className="text-xs text-white/60">AI Assistant</p>
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onToggleFullScreen}
        className="text-white hover:bg-white/10"
      >
        {isFullScreen ? (
          <Minimize2 className="w-4 h-4" />
        ) : (
          <Maximize2 className="w-4 h-4" />
        )}
      </Button>
    </div>
  );
};

export default MobileHeader;