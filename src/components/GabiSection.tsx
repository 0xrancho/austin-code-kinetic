import { MessageCircle, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GabiSection = () => {
  return (
    <section id="gabi" className="py-20 relative">
      <div className="w-full px-0">
        <div className="content-box w-full mx-auto p-12 md:p-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-5 w-5 text-pink-400" />
              <span className="text-pink-400 font-medium">AI Assistant</span>
            </div>
            
            <h2 className="section-title mb-6">
              Meet GABI
            </h2>
            
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Am I a good fit for your project? Chat with my AI assistant to find out! 
              GABI can help you explore capabilties and services, help determine if we should work together, and schedule a meeting for us. **I do not save your chat content.** 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/gabi" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Chat with GABI
                </Link>
              </Button>
              
              <p className="text-white/60 text-sm">
                Get instant answers • Available 24/7 • No commitment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GabiSection;

