import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainBackground from "../components/background/MainBackground";
import ChatInterface from "../components/GABI/ChatInterface";
import MobileHeader from "../components/GABI/MobileHeader";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Gabi = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const isMobile = useIsMobile();

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const enterFullScreen = () => {
    if (isMobile && !isFullScreen) {
      setIsFullScreen(true);
    }
  };

  // Handle escape key to exit full-screen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullScreen]);

  // Full-screen mobile layout
  if (isMobile && isFullScreen) {
    return (
      <div className="h-screen flex flex-col bg-black overflow-hidden">
        <MobileHeader 
          isFullScreen={isFullScreen} 
          onToggleFullScreen={toggleFullScreen} 
        />
        <div className="flex-1 pt-16 overflow-hidden">
          <ChatInterface 
            onInputFocus={enterFullScreen}
            isFullScreen={isFullScreen}
          />
        </div>
      </div>
    );
  }

  // Standard desktop/mobile layout
  return (
    <div className="h-screen flex flex-col relative">
      <MainBackground />
      <Navbar />
      <main className="flex-1 relative z-10 pt-6 sm:pt-12 md:pt-24 overflow-hidden">
        <div className="w-full h-full relative z-10 flex flex-col">
          <div className="content-box w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 h-full flex flex-col">
            <div className="text-center mb-4 sm:mb-6 md:mb-8 flex-shrink-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Chat with GABI
              </h1>
              <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
                My AI assistant is here to help you explore my work, understand my approach,
                and determine if we're a good fit for your project. Ask GABI anything!
              </p>
            </div>
            
            <div className="w-full max-w-none flex-1 flex flex-col min-h-0">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 p-4 sm:p-6 md:p-8 shadow-xl flex-1 flex flex-col min-h-0">
                <div className="relative flex-1 min-h-0">
                  <div className="h-full relative">
                    <ChatInterface 
                      onInputFocus={enterFullScreen}
                      isFullScreen={isFullScreen}
                    />
                    
                    {/* Mobile full-screen toggle button */}
                    {isMobile && (
                      <button
                        onClick={toggleFullScreen}
                        className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg backdrop-blur-sm transition-all duration-200"
                        aria-label="Toggle full screen"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gabi;