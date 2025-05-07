
import { Calendar } from 'lucide-react';
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
              className="brand-button text-lg py-6 px-8"
              asChild
            >
              <a 
                href="https://calendly.com/joelaustin/30min?back=1&month=2025-04" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
