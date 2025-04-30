
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainBackground from "../components/background/MainBackground";
import { ExternalLink, X } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1, 
    title: "Ag Companion", 
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", 
    description: "AI assistant for rural farmers in India", 
    details: "Deployed an SMS-first interface in 3 dialects; partnered with 200+ churches; scaled via Eco Labs.",
    link: "https://example.com/ag-companion",
    category: "AI Applications",
    techStack: ["OpenAI API", "Twilio", "Node.js", "PostgreSQL"]
  }, 
  {
    id: 2, 
    title: "ODNB CRM Tool", 
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", 
    description: "AI tool for recovering lost sales opportunities", 
    details: "Built for B2B SMBs; uses GPT to infer win-back strategies from cold CRM data.",
    link: "https://example.com/odnb",
    category: "AI Applications",
    techStack: ["OpenAI API", "Python", "PostgreSQL", "React"]
  }, 
  {
    id: 3, 
    title: "Digital Treasury", 
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475", 
    description: "Crypto-based financial rails for global nonprofits", 
    details: "Enabled stablecoin payroll, Coinbase custody, and tokenized program impact tracking.",
    link: "https://example.com/digital-treasury",
    category: "Financial Systems",
    techStack: ["Circle", "Gnosis Safe", "MetaMask Institutional", "Chainalysis"]
  }
];

const Portfolio = () => {
  const [selected, setSelected] = useState(null);
  const categories = ["All", ...Array.from(new Set(projects.map(item => item.category)))];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
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
            
            <div className="mb-10 flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                    activeCategory === category 
                      ? "bg-white text-black" 
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card 
                  key={project.id} 
                  className="cursor-pointer bg-black/90 border border-white/20 text-white overflow-hidden transition-transform hover:scale-105"
                  onClick={() => setSelected(project)}
                >
                  <div className="w-full aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                    <p className="text-white/70">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      {/* Project Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-black/90 border border-white/20 rounded-lg p-6 max-w-md w-full shadow-xl text-white relative">
            <button 
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-1 rounded-full bg-white/10 hover:bg-white/20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-4 w-full aspect-video overflow-hidden rounded-md">
              <img 
                src={selected.image} 
                alt={selected.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
            <p className="mb-4 text-white/70">{selected.details}</p>
            
            {selected.techStack && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-white/60 mb-2">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                  {selected.techStack.map((tech, index) => (
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
            
            <div className="flex space-x-4 mt-6">
              <Button 
                className="bg-white text-black hover:bg-white/90"
                asChild
              >
                <a href={selected.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border border-white/40 hover:bg-white/10"
                onClick={() => setSelected(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Portfolio;
