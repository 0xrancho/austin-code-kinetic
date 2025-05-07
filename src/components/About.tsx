
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
              After 15 years scaling systems across logistics, SaaS, fintech, and international nonprofits, I've seen what happens when the right processes, people, and data align—revenue grows, capacity expands, and momentum compounds. I launched an agency called Commit to help companies move faster and build smarter, and after delivering Salesforce solutions across four continents, I realized something had shifted. Nine-month sales cycles and $200K proposals were getting outbid by $10K chatbots with Copilot—and rightly so.
              Now I deploy lightweight, modular, AI-first tools that automate qualification, accelerate success, and generate lift without bloated overhead. LLMs have collapsed the SDLC. AI enabled Sales Ops isn't just dashboards and pipelines anymore—it's growth architecture, and I'm here to build it. Are you in, anon?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
