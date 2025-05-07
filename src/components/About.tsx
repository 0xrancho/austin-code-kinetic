
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
              For software engineers, a commit records a milestone in code. For me, Commit represents something deeper: 
              Coordinated Mission Integration Technology—and the call to lean in and build something with purpose.
            </p>
            
            <p className="text-white/90 mb-6 leading-relaxed">
              I started building data solutions in 2009 at a logistics company where I was hired to make sales calls. 
              But I couldn't ignore the churn problem. So I dug into the data, built a basic integration in SSIS to 
              populate a spreadsheet that predicted who would leave. Within three months, our retention rate jumped 
              from 65% to over 90%. That small project grew into a service line that generated over $3 million in its 
              first year—and sparked a lifelong obsession: what hidden value can be unlocked when systems, data, and 
              stakeholders align?
            </p>

            <p className="text-white/90 mb-6 leading-relaxed">
              Today, I'm a Sales Ops Engineer who builds AI-first revenue and operations systems that scale smarter 
              and faster than enterprise software ever could. I'm not here to sell you a bloated implementation. 
              I'll help you skip it entirely with rapid prototyping, iterative testing, and fast deployment—delivering 
              directly against your sales or service outcomes.
            </p>
            
            <p className="text-white/90 mb-6 leading-relaxed">
              I'm not consulting. I'm building.
              If you want to move fast, scale smart, and grow—let's commit.
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
              <h3 className="text-xl font-bold mb-2">Sales Ops</h3>
              <p className="text-white/70">Optimizing revenue operations through strategic AI integration and process improvement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
