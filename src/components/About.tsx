
import { Code, FileText, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative geometric-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 after:content-[''] after:block after:w-16 after:h-1 after:bg-white/20 after:mt-4">
            About Me
          </h2>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/80 mb-6 leading-relaxed">
              I'm Joel A. Austin, an experienced professional specializing in AI Enablement and Revenue Operations. 
              With a methodical approach and strategic mindset, I help organizations leverage artificial intelligence 
              to streamline processes and drive growth.
            </p>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              As a father of five, I balance my professional life with family responsibilities, bringing the same 
              dedication and care to both worlds. My background combines technical expertise with business acumen,
              allowing me to bridge the gap between innovation and practical implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 transition-transform hover:transform hover:-translate-y-1 duration-300">
              <User className="w-10 h-10 mb-4 text-white/70" />
              <h3 className="text-xl font-bold mb-2">Personal</h3>
              <p className="text-white/70">Father of five with a passion for technology and innovation.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 transition-transform hover:transform hover:-translate-y-1 duration-300">
              <Code className="w-10 h-10 mb-4 text-white/70" />
              <h3 className="text-xl font-bold mb-2">AI Enablement</h3>
              <p className="text-white/70">Building solutions that leverage AI to solve real-world business challenges.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 transition-transform hover:transform hover:-translate-y-1 duration-300">
              <FileText className="w-10 h-10 mb-4 text-white/70" />
              <h3 className="text-xl font-bold mb-2">RevOps</h3>
              <p className="text-white/70">Optimizing revenue operations through strategic alignment and process improvement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
