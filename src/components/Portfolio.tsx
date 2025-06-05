
import { Briefcase, ChevronRight, Database, GraduationCap, Wallet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

// Find the ProofStack, Big Loud Shirt, Early Learning Enrollment, and Digital Treasury projects
const proofStackProject = projects.find(p => p.title === "ProofStack");
const bigLoudShirtProject = projects.find(p => p.title === "Big Loud Shirt");
const earlyLearningProject = projects.find(p => p.title === "Early Learning Enrollment");
const digitalTreasuryProject = projects.find(p => p.title === "Digital Treasury");

// Create portfolio items from these projects
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: proofStackProject?.title || "ProofStack",
    description: proofStackProject?.description || "AI-Powered Social Proof Engine for Outbound Sales",
    icon: <Database className="h-6 w-6" />,
    image: proofStackProject?.images?.[0]
  },
  {
    id: 2,
    title: bigLoudShirtProject?.title || "Big Loud Shirt",
    description: bigLoudShirtProject?.description || "Turning Customer Data into New Business",
    icon: <Briefcase className="h-6 w-6" />,
    image: bigLoudShirtProject?.images?.[0]
  },
  {
    id: 3,
    title: earlyLearningProject?.title || "Early Learning Enrollment",
    description: earlyLearningProject?.description || "Enrollment Optimization and Automation for school system",
    icon: <GraduationCap className="h-6 w-6" />,
    image: earlyLearningProject?.images?.[0]
  },
  {
    id: 4,
    title: digitalTreasuryProject?.title || "Digital Treasury",
    description: digitalTreasuryProject?.description || "International payments on crypto rails",
    icon: <Wallet className="h-6 w-6" />,
    image: digitalTreasuryProject?.images?.[0]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="w-full relative z-10">
        <div className="content-box w-full mx-auto p-12 md:p-16">
          <h2 className="section-title">
            Projects
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl mb-12">
            A few ways I've helped orgs move faster, get leaner, and scale impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="bg-black/90 border border-white/20 text-white">
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
          
          <div className="mt-10 flex justify-center">
            <Button 
              className="brand-button px-8 py-6 text-lg"
              asChild
            >
              <Link to="/portfolio" className="flex items-center gap-2">
                More Projects
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
