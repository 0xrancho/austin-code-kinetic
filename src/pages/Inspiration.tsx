
import { Lightbulb, Users, BookOpen, PenTool } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Inspiration = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center font-space-grotesk">
              Inspiration
            </h1>
            
            <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="h-6 w-6 text-white/80" />
                <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk">Ideas That Shape Me</h2>
              </div>
              
              <ul className="space-y-3 text-white/80 text-lg">
                <li>Redemptive impact is built on systems, not slogans.</li>
                <li>Design like a monk, operate like a mercenary.</li>
                <li>Most change happens in the boring parts of the process.</li>
              </ul>
            </section>
            
            <Separator className="bg-white/10 my-12" />
            
            <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-white/80" />
                <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk">People I Follow</h2>
              </div>
              
              <ul className="space-y-3 text-white/80 text-lg">
                <li>Andy Crouch (Praxis)</li>
                <li>Brian Kelsey (Civic infrastructure + tech policy)</li>
                <li>Packy McCormick (Unorthodox ops/tech strategy)</li>
                <li>Rachel Botsman (Trust, systems, and society)</li>
              </ul>
            </section>
            
            <Separator className="bg-white/10 my-12" />
            
            <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-6 w-6 text-white/80" />
                <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk">Books & Essays</h2>
              </div>
              
              <ul className="space-y-3 text-white/80 text-lg">
                <li><em>The World Beyond Your Head</em> – Matthew B. Crawford</li>
                <li><em>Working Backwards</em> – Bryar & Carr</li>
                <li><em>The Sovereign Individual</em> – Davidson & Rees-Mogg</li>
                <li><em>The Beautiful Constraint</em> – Morgan & Barden</li>
              </ul>
            </section>
            
            <Separator className="bg-white/10 my-12" />
            
            <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-3 mb-6">
                <PenTool className="h-6 w-6 text-white/80" />
                <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk">What I'll Write About Soon</h2>
              </div>
              
              <ul className="space-y-3 text-white/80 text-lg">
                <li>Scaling RevOps inside redemptive family offices</li>
                <li>Stablecoins and civilizational leverage</li>
                <li>Why "Ops-first" is the new startup thesis</li>
                <li>Agentic business systems built with GPT + humans</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Inspiration;
