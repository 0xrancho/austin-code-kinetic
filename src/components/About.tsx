import { Code, FileText, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="w-full relative z-10">
        <div className="content-box w-full mx-auto p-12 md:p-16">
          <h2 className="section-title">
            About Joel
          </h2>
          
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <p className="text-white/90 mb-6 leading-relaxed">
              I'm a methodically impressionistic problem-solver—equal parts builder, fixer, and strategist. 
              I thrive in ambiguous environments where execution matters, helping redemptive businesses scale 
              with data, automation, and systems that actually work.
            </p>
            
            <p className="text-white/90 mb-6 leading-relaxed">
              I've led strategic initiatives for nonprofits, SMBs, and family offices—often stepping in as an 
              embedded lieutenant to drive ops, revops, or AI enablement projects. My work spans Salesforce, 
              digital treasury, tokenized case management, and growth systems built to last.
            </p>

            <p className="text-white/90 mb-6 leading-relaxed">
              My life goal? To scale redemptive effects with technology that serves people—not just profit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-black/80 border border-white/10 rounded-lg p-6 transition-transform hover:-translate-y-1 duration-300">
              <User className="w-10 h-10 mb-4 text-white/70" />
              <h3 className="text-xl font-bold mb-2">Personal</h3>
              <p className="text-white/70">Father of five with a passion for technology and innovation.</p>
            </div>
            
            <div className="bg-black/80 border border-white/10 rounded-lg p-6 transition-transform hover:-translate-y-1 duration-300">
              <Code className="w-10 h-10 mb-4 text-white/70" />
              <h3 className="text-xl font-bold mb-2">AI Enablement</h3>
              <p className="text-white/70">Building solutions that leverage AI to solve real-world business challenges.</p>
            </div>
            
            <div className="bg-black/80 border border-white/10 rounded-lg p-6 transition-transform hover:-translate-y-1 duration-300">
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
