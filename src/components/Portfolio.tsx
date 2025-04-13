
import { useState } from 'react';
import { Briefcase, Database, Clock, Award, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Salesforce for Nonprofits",
    description: "From client intake to outcomes reporting—fast, lean builds that deliver value from day one.",
    icon: <Database className="h-6 w-6" />
  },
  {
    id: 2,
    title: "Digital Treasury",
    description: "Helped global NGOs adopt stablecoins, improve FX transparency, and launch secure self-custody.",
    icon: <Clock className="h-6 w-6" />
  },
  {
    id: 3,
    title: "ODNB.com",
    description: "A GPT-powered CRM tool that turns cold accounts into win-back opportunities.",
    icon: <Briefcase className="h-6 w-6" />
  },
  {
    id: 4,
    title: "Tokenized Case Management",
    description: "Built an on-chain attestation platform for anti-trafficking impact using NFTs and verifiable data.",
    icon: <Award className="h-6 w-6" />
  },
  {
    id: 5,
    title: "SMB Ops Optimization",
    description: "Revamped strategy, sales ops, lead gen, and rev ops across logistics, service businesses, and IT firms.",
    icon: <BarChart3 className="h-6 w-6" />
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 relative">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/lovable-uploads/6ef0b47c-1d72-4989-8733-db3a30eb0539.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white after:content-[''] after:block after:w-16 after:h-1 after:bg-white/20 after:mt-4">
            Selected Work
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl">
            A few ways I've helped orgs move faster, get leaner, and scale impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="bg-white/10 border-white/20 backdrop-blur-sm text-white hover:bg-white/15 transition-colors duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 rounded-full bg-white/10">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
