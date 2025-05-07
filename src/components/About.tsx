
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
              <p className="text-white/70">My wife and I have five kids, ten chickens, and a dog in our little midtown bungalow. We attend SOMA Church but celebrate Easter in South Bend. Our family loves traveling, gardening, making old things like new, exploring Indy parks, going to the zoo and museums, celebrating life, and being good neighbors and friends. If you visit in the spring or summer, you're sure to leave with a dozen eggs.</p>
            </div>
            
            <div className="bg-black/80 border border-white/10 rounded-lg p-6 transition-transform hover:-translate-y-1 duration-300">
              <Code className="w-10 h-10 mb-4 text-white/70" />
              <h3 className="text-xl font-bold mb-2">AI Enablement</h3>
              <p className="text-white/70">LLMs have fundamentally changed the game for process-driven enablement. Stateless execution from generated inference can now handle complex analysis and workflows. Normalizing data to be useful is no longer constrained by having it all in one place. Data capture, schema building, declarative configuration, event triggers, and analysis can all be orchestrated with natural language. This not only opens new solution architectures—it's rapidly collapsing traditional Software Development Lifecycle.</p>
            </div>
            
            <div className="bg-black/80 border border-white/10 rounded-lg p-6 transition-transform hover:-translate-y-1 duration-300">
              <FileText className="w-10 h-10 mb-4 text-white/70" />
              <h3 className="text-xl font-bold mb-2">Sales Ops Engineer</h3>
              <p className="text-white/70">Sales Ops is the art of deploying technology and processes that create real, measurable leverage—not just for sales teams, but for every function that drives revenue. It's about finding hidden opportunities, clearing bottlenecks, automating friction, and designing feedback loops that compound momentum. I build tools that shorten sales cycles, simplify qualification, boost customer success, and make insight easy to act on. Whether it's customizing a CRM, building funnels, piping GPTs into workflows, or creating new data layers and programs—it all serves the same purpose: get results faster. Sales Ops isn't just forecasting and dashboards. It's architecture for growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
