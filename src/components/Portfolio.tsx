
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Integration Platform",
    category: "AI Enablement",
    description: "Enterprise solution for seamless AI integration across business functions.",
    image: "https://via.placeholder.com/600x400/1a1a1a/666666",
    link: "#"
  },
  {
    id: 2,
    title: "RevOps Dashboard",
    category: "RevOps",
    description: "Custom dashboard for tracking and optimizing revenue operations metrics.",
    image: "https://via.placeholder.com/600x400/1a1a1a/666666",
    link: "#"
  },
  {
    id: 3,
    title: "Predictive Analytics Tool",
    category: "AI Enablement",
    description: "Machine learning solution for sales forecasting and customer behavior analysis.",
    image: "https://via.placeholder.com/600x400/1a1a1a/666666",
    link: "#"
  },
  {
    id: 4,
    title: "Process Automation Suite",
    category: "RevOps",
    description: "End-to-end automation for critical business processes and workflows.",
    image: "https://via.placeholder.com/600x400/1a1a1a/666666",
    link: "#"
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'AI Enablement', 'RevOps'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 relative geometric-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 after:content-[''] after:block after:w-16 after:h-1 after:bg-white/20 after:mt-4">
            Portfolio
          </h2>
          
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeFilter === category
                    ? 'bg-white text-black'
                    : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <div className="aspect-video bg-black/20 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <span className="px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white/90 mb-2 inline-block">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-sm font-medium text-white/90 hover:text-white"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
