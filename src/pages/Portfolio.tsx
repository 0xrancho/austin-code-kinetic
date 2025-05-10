
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainBackground from "../components/background/MainBackground";
import ProjectCard from "../components/portfolio/ProjectCard";
import ProjectModal from "../components/portfolio/ProjectModal";
import CategoryFilter from "../components/portfolio/CategoryFilter";
import { projects, type Project } from "../data/projects";

const Portfolio = () => {
  const [selected, setSelected] = useState<Project | null>(null);
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
              Tools, frameworks, and systems I've built to accelerate sales, automate operations, and drive strategic growth.
            </p>
            
            <CategoryFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  onClick={setSelected}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      {/* Project Detail Modal */}
      {selected && (
        <ProjectModal 
          project={selected} 
          onClose={() => setSelected(null)}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default Portfolio;
