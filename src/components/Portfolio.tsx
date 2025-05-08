import { Briefcase, Database, Clock, Award, BarChart3, Smartphone, Cloud, ChartBar, Users, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "ProofStack",
    description: "Outbound ai sales tool for high context social proof.",
    icon: <Database className="h-6 w-6" />,
    image: "/lovable-uploads/1828ad0b-1432-45a7-a040-bb64b1e749c1.png"
  },
  {
    id: 2,
    title: "Ag Companion",
    description: "Micro-SaaS ai powered SMS app for rural farmers and third-world businesses.",
    icon: <Smartphone className="h-6 w-6" />,
    image: "/lovable-uploads/744b215f-ef0b-4420-8779-a9c6cad3ca4b.png"
  },
  {
    id: 3,
    title: "ODNB",
    description: "Customer Success tool kit for mid-cycle sales, gap analysis, winbacks, retention, and referrals.",
    icon: <Briefcase className="h-6 w-6" />,
    image: "/lovable-uploads/1f846d54-4033-46ae-a5f6-1c87b3922dfe.png"
  },
  {
    id: 4,
    title: "Digital Treasury",
    description: "Knowledge and solution set for international payments, FX and treasury management on crypto rails.",
    icon: <Cloud className="h-6 w-6" />,
    image: "/lovable-uploads/f8730e4d-7ef4-4f49-8d89-5fcedb9032d2.png"
  },
  {
    id: 5,
    title: "TPS Commercial",
    description: "Custom qualification, conversion automation, and assessments for commercial real estate sales.",
    icon: <BarChart3 className="h-6 w-6" />,
    image: "/lovable-uploads/fc31dcea-b9ed-410c-9464-e51ad3b2a32f.png" // Updated image
  },
  {
    id: 6,
    title: "Wellness Impact Model",
    description: "A tactical program and assessment model to implement a social theory of change for nonprofits.",
    icon: <ChartBar className="h-6 w-6" />,
    image: "/lovable-uploads/98fa8280-158d-4348-b365-29bef98dffc7.png"
  },
  {
    id: 7,
    title: "Early Learning Enrollment",
    description: "A novel scoring, and match-index automation that consolidated enrollment across 16 schools.",
    icon: <Award className="h-6 w-6" />,
    image: "/lovable-uploads/d4b79823-b3cf-4bc3-b777-3e4c920fe027.png"
  },
  {
    id: 8,
    title: "Classroom Balancing",
    description: "Robust seat configuration model for dynamic classroom occupancy and teacher scheduling.",
    icon: <Users className="h-6 w-6" />,
    image: "/lovable-uploads/897a4e8b-bf80-4491-8df2-e066fe5ab0b6.png" // Updated image
  },
  {
    id: 9,
    title: "Call-Driver Analysis",
    description: "An optimized presales winform app to synthesis large volumes of support center call data.",
    icon: <Clock className="h-6 w-6" />,
    image: "/lovable-uploads/e0a0fe0a-f62c-4ea9-b8f8-ddfad810550d.png" // Updated image
  },
  {
    id: 10,
    title: "Luisbushpapers.com",
    description: "A long term project to digitize and curate, and enrich missiological data and legacy for the global Church.",
    icon: <FileText className="h-6 w-6" />,
    image: "/lovable-uploads/f177f04f-c577-4e30-9eef-814410cd159a.png" // Updated image
  },
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
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
