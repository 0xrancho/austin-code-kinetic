
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainBackground from "../components/background/MainBackground";
import { Briefcase, Database, Clock, Award, BarChart3, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  category: string;
  images?: string[];
  techStack?: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Salesforce for Nonprofits",
    description: "From client intake to outcomes reporting—fast, lean builds that deliver value from day one.",
    longDescription: "Transformed nonprofit operations by implementing a custom Salesforce solution that streamlined client intake processes, automated reporting, and provided real-time impact metrics. The system reduced administrative overhead by 35% and improved grant reporting accuracy.",
    icon: <Database className="h-6 w-6" />,
    category: "CRM Implementation",
    techStack: ["Salesforce", "NPSP", "Formstack", "Tableau"],
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", 
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    ]
  },
  {
    id: 2,
    title: "Digital Treasury",
    description: "Helped global NGOs adopt stablecoins, improve FX transparency, and launch secure self-custody.",
    longDescription: "Developed a comprehensive digital treasury strategy for international NGOs, enabling them to use stablecoins for cross-border transfers, reducing FX losses by 8%, and implementing secure self-custody solutions that improved financial controls and transparency.",
    icon: <Clock className="h-6 w-6" />,
    category: "Financial Systems",
    techStack: ["Circle", "Gnosis Safe", "MetaMask Institutional", "Chainalysis"],
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475", 
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    ]
  },
  {
    id: 3,
    title: "ODNB.com",
    description: "A GPT-powered CRM tool that turns cold accounts into win-back opportunities.",
    longDescription: "Created an AI-powered customer relationship management tool that analyzes historical customer data and identifies high-potential win-back opportunities. The system uses GPT models to generate personalized outreach strategies, resulting in a 23% increase in successful account reactivations.",
    icon: <Briefcase className="h-6 w-6" />,
    category: "AI Applications",
    techStack: ["OpenAI API", "Python", "PostgreSQL", "React"],
    images: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", 
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    ]
  },
  {
    id: 4,
    title: "Tokenized Case Management",
    description: "Built an on-chain attestation platform for anti-trafficking impact using NFTs and verifiable data.",
    longDescription: "Pioneered a blockchain-based case management system for anti-trafficking organizations that uses tokenized attestations to securely track victim services while preserving privacy. The platform leverages NFTs as verifiable credentials, allowing for transparent impact reporting while maintaining strict confidentiality.",
    icon: <Award className="h-6 w-6" />,
    category: "Blockchain Solutions",
    techStack: ["Ethereum", "IPFS", "Ceramic", "Polygon"],
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475", 
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    ]
  },
  {
    id: 5,
    title: "SMB Ops Optimization",
    description: "Revamped strategy, sales ops, lead gen, and rev ops across logistics, service businesses, and IT firms.",
    longDescription: "Conducted comprehensive operations audits for small and medium businesses across multiple industries, identifying inefficiencies and implementing structured improvements to sales, marketing, and revenue operations. Projects typically achieved 15-30% efficiency gains and clear ROI within the first quarter.",
    icon: <BarChart3 className="h-6 w-6" />,
    category: "Business Operations",
    techStack: ["HubSpot", "Asana", "Notion", "Zapier"],
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", 
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    ]
  },
];

const Portfolio = () => {
  const categories = ["All", ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <MainBackground />
      
      {/* Content */}
      <Navbar />
      
      <main className="relative z-10 pt-24 pb-20">
        <div className="w-full relative z-10">
          <div className="content-box w-full mx-auto p-12 md:p-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h1>
            
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-3xl">
              A deeper look into my work helping organizations build efficient systems, 
              leverage emerging technologies, and scale their operations.
            </p>
            
            <Tabs defaultValue="All" className="w-full mb-12">
              <TabsList className="mb-8 bg-black/50 p-1 overflow-x-auto flex-wrap">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="data-[state=active]:bg-white/10"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {categories.map(category => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {portfolioItems
                      .filter(item => category === "All" || item.category === category)
                      .map((item) => (
                        <Card key={item.id} className="bg-black/90 border border-white/20 text-white overflow-hidden flex flex-col h-full">
                          {item.images && item.images.length > 0 && (
                            <div className="relative w-full aspect-video overflow-hidden">
                              <Carousel className="w-full">
                                <CarouselContent>
                                  {item.images.map((image, index) => (
                                    <CarouselItem key={index}>
                                      <div className="aspect-video w-full overflow-hidden">
                                        <img 
                                          src={image} 
                                          alt={`${item.title} screenshot ${index + 1}`} 
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                    </CarouselItem>
                                  ))}
                                </CarouselContent>
                                <CarouselPrevious className="left-2 bg-black/70 text-white border-white/20" />
                                <CarouselNext className="right-2 bg-black/70 text-white border-white/20" />
                              </Carousel>
                            </div>
                          )}
                          <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <div className="p-2 rounded-full bg-white/10">
                              {item.icon}
                            </div>
                            <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-white/80 mb-6">{item.longDescription}</p>
                            {item.techStack && (
                              <div className="mt-4">
                                <h4 className="text-sm font-semibold text-white/60 mb-2">Tech Stack:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {item.techStack.map((tech, index) => (
                                    <span 
                                      key={index}
                                      className="inline-block px-2 py-1 text-xs bg-white/10 rounded-md text-white/70"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </CardContent>
                          <CardFooter className="border-t border-white/10 pt-4">
                            <Button variant="outline" className="w-full bg-transparent border-white/20 hover:bg-white/10">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Project Details
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
