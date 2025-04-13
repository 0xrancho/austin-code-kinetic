
import { useState } from 'react';
import { Mail, Smartphone, MapPin, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 relative geometric-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 after:content-[''] after:block after:w-16 after:h-1 after:bg-white/20 after:mt-4">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-white/70 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-white/70">hello@joelaaustin.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Smartphone className="h-5 w-5 mr-3 text-white/70 mt-1" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-white/70 mt-1" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-white/70">San Francisco, California</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 text-white resize-none"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
