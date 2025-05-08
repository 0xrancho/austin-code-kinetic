
import React from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-black/90 border border-white/20 rounded-lg p-6 max-w-md w-full shadow-xl text-white relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full bg-white/10 hover:bg-white/20"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="mb-4 w-full aspect-video overflow-hidden rounded-md">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="mb-4 text-white/70">{project.details}</p>
        
        {project.techStack && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-white/60 mb-2">Tech Stack:</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
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
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </a>
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent border border-white/40 hover:bg-white/10"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
