
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
              I'm Joel Austin, a Sales Ops Engineer and AI-first builder. I've spent 15 years scaling systems that drive growth, from logistics and SaaS to international nonprofit and fintech. When data, process, and people are in sync, revenue scales, capacity grows, and momentum builds. I launched a Salesforce agency, Commit, to help companies move fast and build smarter. Even with some success implementing solutions across four continents and three languages, I knew we needed to pivot hard when 9 month sales cycles and $200K proposals were getting outbid by $10K chatbots with Copilot. Now, I deploy AI-first revenue tools that are lightweight, modular, and complementary to your existing stack—automating qualification, boosting success, and accelerating sales. I'm not here to consult. I'm here to build. Let's commit.
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
