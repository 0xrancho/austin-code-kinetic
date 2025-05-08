
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
    title: "ProofStack", 
    image: "/lovable-uploads/1828ad0b-1432-45a7-a040-bb64b1e749c1.png", 
    description: "Outbound ai sales tool for high context social proof", 
    details: "Matches cold prospects with past wins; generates personalized social proof to boost response rates.",
    link: "https://example.com/proofstack",
    category: "AI Applications",
    techStack: ["OpenAI API", "Typescript", "React", "PostgreSQL"]
  }, 
  {
    id: 2, 
    title: "Ag Companion", 
    image: "/lovable-uploads/744b215f-ef0b-4420-8779-a9c6cad3ca4b.png", 
    description: "Micro-SaaS ai powered SMS app for rural farmers", 
    details: "AI-powered SMS application for rural farmers and third-world businesses; deployed in multiple dialects.",
    link: "https://example.com/ag-companion",
    category: "AI Applications",
    techStack: ["OpenAI API", "Twilio", "Node.js", "PostgreSQL"]
  }, 
  {
    id: 3, 
    title: "ODNB", 
    image: "/lovable-uploads/1f846d54-4033-46ae-a5f6-1c87b3922dfe.png", 
    description: "Customer Success toolkit for mid-cycle sales", 
    details: "Comprehensive solution for gap analysis, winbacks, retention, and referrals in mid-cycle sales.",
    link: "https://example.com/odnb",
    category: "Sales Enablement",
    techStack: ["OpenAI API", "Python", "PostgreSQL", "React"]
  }, 
  {
    id: 4, 
    title: "Digital Treasury", 
    image: "/lovable-uploads/f8730e4d-7ef4-4f49-8d89-5fcedb9032d2.png", 
    description: "International payments on crypto rails", 
    details: "Knowledge and solution set for international payments, FX and treasury management on crypto rails.",
    link: "https://example.com/digital-treasury",
    category: "Financial Systems",
    techStack: ["Circle", "Gnosis Safe", "MetaMask Institutional", "Chainalysis"]
  },
  {
    id: 5, 
    title: "TPS Commercial", 
    image: "/lovable-uploads/4115db9f-4ec9-4fa4-93b9-b1557ec9cde2.png", 
    description: "Sales automation for commercial real estate", 
    details: "Custom qualification, conversion automation, and assessments for commercial real estate sales.",
    link: "https://example.com/tps-commercial",
    category: "Sales Enablement",
    techStack: ["Salesforce", "Apex", "JavaScript"]
  },
  {
    id: 6, 
    title: "Wellness Impact Model", 
    image: "/lovable-uploads/98fa8280-158d-4348-b365-29bef98dffc7.png", 
    description: "Social theory of change for nonprofits", 
    details: "A tactical program and assessment model to implement a social theory of change for nonprofits.",
    link: "https://example.com/wellness-impact",
    category: "Program Management",
    techStack: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    id: 7, 
    title: "Early Learning Enrollment", 
    image: "/lovable-uploads/d4b79823-b3cf-4bc3-b777-3e4c920fe027.png", 
    description: "Enrollment automation across 16 schools", 
    details: "A novel scoring and match-index automation that consolidated enrollment across 16 schools.",
    link: "https://example.com/early-learning",
    category: "Data Analytics",
    techStack: ["Python", "Pandas", "Tableau", "SQL"]
  },
  {
    id: 8, 
    title: "Classroom Balancing", 
    image: "/lovable-uploads/cba80512-07c7-46b5-b8ec-1dd511638ec0.png", 
    description: "Dynamic classroom occupancy modeling", 
    details: "Robust seat configuration model for dynamic classroom occupancy and teacher scheduling.",
    link: "https://example.com/classroom-balancing",
    category: "Data Analytics",
    techStack: ["Excel", "VBA", "Power BI"]
  },
  {
    id: 9, 
    title: "Call-Driver Analysis", 
    image: "/lovable-uploads/759278fe-f960-4fea-b0df-a1feb3cd5cab.png", 
    description: "Support center call data synthesis", 
    details: "An optimized presales winform app to synthesis large volumes of support center call data.",
    link: "https://example.com/call-driver",
    category: "Data Analytics",
    techStack: [".NET", "WinForms", "SQL Server"]
  },
  {
    id: 10, 
    title: "Luisbushpapers.com", 
    image: "/lovable-uploads/1828ad0b-1432-45a7-a040-bb64b1e749c1.png", 
    description: "Missiological data curation for the global Church", 
    details: "A long term project to digitize, curate, and enrich missiological data and legacy for the global Church.",
    link: "https://luisbushpapers.com",
    category: "Web Development",
    techStack: ["WordPress", "PHP", "JavaScript", "MySQL"]
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
            
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
