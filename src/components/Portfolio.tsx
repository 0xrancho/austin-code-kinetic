
import { Briefcase, Database, Smartphone, ChevronRight } from 'lucide-react';
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

// Get only the first three projects from our projects data
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: projects[0].title,
    description: projects[0].description,
    icon: <Database className="h-6 w-6" />,
    image: projects[0].image
  },
  {
    id: 2,
    title: projects[1].title,
    description: projects[1].description,
    icon: <Smartphone className="h-6 w-6" />,
    image: projects[1].image
  },
  {
    id: 3,
    title: projects[2].title,
    description: projects[2].description,
    icon: <Briefcase className="h-6 w-6" />,
    image: projects[2].image
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
