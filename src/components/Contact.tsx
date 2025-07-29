
import { Calendar, Linkedin, Twitter, Music } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="w-full px-0">
        <div className="content-box w-full mx-auto p-12 md:p-16">
          <h2 className="section-title">
            Get In Touch
          </h2>
          
          <div className="max-w-xl mx-auto text-center">
            <p className="text-white/90 mb-8 text-lg">
              Ready to build something amazing? Schedule a call and let's explore how we can leverage AI to accelerate your revenue operations.
            </p>
            
            <Button 
              className="brand-button text-lg py-6 px-8 mb-8"
              asChild
            >
              <a 
                href="https://calendly.com/joelaustin/30min?month=2025-07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Schedule a Call
              </a>
            </Button>
            
            <div className="flex justify-center gap-4 mt-8">
              <Button 
                variant="outline" 
                className="bg-black/50 border-white/30 hover:bg-black/80 text-white"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/joelaustin/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="bg-black/50 border-white/30 hover:bg-black/80 text-white"
                asChild
              >
                <a 
                  href="https://x.com/carolousue" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Twitter className="h-5 w-5" />
                  Twitter
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="bg-black/50 border-white/30 hover:bg-black/80 text-white"
                asChild
              >
                <a 
                  href="https://www.riffusion.com/playlist/77c6d581-2587-4834-a99c-573749d1e04b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Music className="h-5 w-5" />
                  Riffusion
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
